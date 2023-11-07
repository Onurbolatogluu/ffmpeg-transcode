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


