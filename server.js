const express = require('express');
const multer = require('multer');
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const path = require('path');
const app = express();

// Klasörlerin oluşturulmasını sağlama
const uploadDir = path.join(__dirname, 'uploads');
const outputDir = path.join(__dirname, 'output');

// Uploads ve Output klasörleri yoksa oluştur
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Statik dosya sunucusu olarak output klasörünü ayarla
app.use('/output', express.static(outputDir));

// Multer yapılandırması
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Dosya yükleme endpoint'i
app.post('/upload', upload.single('video'), (req, res) => {
  const videoPath = req.file.path;
  const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);

  // Profil ayarlarını tanımla
  const profiles = [
    { resolution: '1920x1080', bitrate: '5000k', output: `1080p-${uniqueSuffix}.mp4` },
    { resolution: '1280x720', bitrate: '3000k', output: `720p-${uniqueSuffix}.mp4` },
    { resolution: '854x480', bitrate: '1000k', output: `480p-${uniqueSuffix}.mp4` }
  ];

  let transcodePromises = profiles.map(profile => {
    return new Promise((resolve, reject) => {
      const outputFilePath = path.join(outputDir, profile.output);

      ffmpeg(videoPath)
        .size(profile.resolution)
        .videoBitrate(profile.bitrate)
        .outputOptions([
          '-preset veryfast',
          '-crf 28',
          `-maxrate ${profile.bitrate}`,
          '-bufsize 2000K'
        ])
        .output(outputFilePath)
        .on('end', function () {
          console.log(`${profile.output} transcode işlemi tamamlandı.`);
          resolve({ message: `${profile.output} transcode işlemi başarıyla tamamlandı.`, url: `http://108.143.201.72:${PORT}/output/${profile.output}` });
        })
        .on('error', function (err) {
          console.log(`${profile.output} transcode işlemi sırasında bir hata oluştu: ` + err.message);
          reject(new Error(`${profile.output} transcode işlemi sırasında bir hata oluştu.`));
        })
        .run();
    });
  });

  Promise.all(transcodePromises)
    .then(results => {
      res.send(results);
    })
    .catch(error => {
      res.status(500).send('Bazı videolar transcode edilirken bir hata oluştu.');
    });
});

// Sunucuyu 0.0.0.0 adresinde çalıştırma
const PORT = process.env.PORT || 3001;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log(`Sunucu ${HOST}:${PORT} adresinde çalışıyor...`);
});
