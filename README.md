# ffmpeg-transcode

Video Transcoder, Node.js ve Express kullanarak videoları farklı çözünürlüklerde transcode etmek için basit bir arayüzdür.
Bu uygulama, video dosyalarınızı 1080p, 720p ve 480p formatlarında transcode etmek için FFmpeg kullanır.

## Özellikler

- Videoları 1080p, 720p ve 480p çözünürlüklere transcode eder.
- Paralel transcode işlemleri için Promise tabanlı yapısı.
- Yüklenen ve transcode edilen dosyalar için statik dosya sunucusu.

## Gereklilikler

Bu uygulamayı çalıştırmak için aşağıdakilere ihtiyacınız var:

- Node.js (https://nodejs.org/)
- npm (Node.js ile birlikte gelir)
- FFmpeg (https://ffmpeg.org/)

### Kurulum

1. Projeyi GitHub'dan klonlayın:

   ```sh
   git clone https://github.com/your-username/your-project-name.git
   cd your-project-name

2. Gerekli npm paketlerini kurun:

   ```sh
   npm install

3. Uygulamayı başlatın:

   ```sh
   node server.js

4. Video yüklemek için, terminal/command prompt üzerinden curl komutunu kullanabilirsiniz:

   ```sh
   curl -X POST -F "video=@/path/to/your/video.mp4" http://localhost:3001/upload

- Not: /path/to/your/video.mp4 kısmını yüklemek istediğiniz video dosyasının yoluna göre değiştirin.

- Başarılı bir yükleme sonrası, sunucunun transcode edilmiş video için oluşturduğu URL'i size döndürecektir.
