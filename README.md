# ffmpeg-transcode

```markdown
# Video Transcoder

Video Transcoder, Node.js ve Express kullanarak videoları farklı çözünürlüklerde transcode etmek için basit bir arayüzdür. Bu uygulama, video dosyalarınızı 1080p, 720p ve 480p formatlarında transcode etmek için FFmpeg kullanır.

## Özellikler

- Videoları 1080p, 720p ve 480p çözünürlüklere transcode eder.
- Paralel transcode işlemleri için Promise tabanlı yapısı.
- Yüklenen ve transcode edilen dosyalar için statik dosya sunucusu.

## Gereklilikler

Bu uygulamayı çalıştırmak için aşağıdakilere ihtiyacınız var:

- Node.js (https://nodejs.org/)
- npm (Node.js ile birlikte gelir)
- FFmpeg (https://ffmpeg.org/)

## Kurulum

Proje dizininde aşağıdaki adımları takip edin:

1. Gerekli modülleri yükleyin:

   ```bash
   npm install
   ```

2. Uygulamayı başlatın:

   ```bash
   npm start
   ```

   veya geliştirme modunda:

   ```bash
   npm run dev
   ```

## Kullanım

1. Tarayıcınızda `http://localhost:3001` adresine gidin (veya uygulamayı hangi portta başlattıysanız o portu kullanın).

2. Video dosyasını seçin ve yükle butonuna tıklayın.

3. Transcode işlemi tamamlandığında, sunucu yüklenen her video için bir JSON yanıtı dönecektir. Bu yanıt, transcode edilen videoların URL'lerini içerecektir.

## API Endpoint'leri

- `POST /upload`: Bu endpoint, videonuzu alır ve transcode işlemini başlatır.

