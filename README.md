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

## Geliştirme

- Uygulamayı geliştirmek için, kodları `src` klasöründe bulabilirsiniz.
- FFmpeg opsiyonlarını değiştirmek veya yeni özellikler eklemek için ilgili kod bölümlerini düzenleyin.

## Katkıda Bulunma

Projeye katkıda bulunmak isterseniz, lütfen aşağıdaki adımları takip edin:

1. Projeyi forklayın.
2. Yeni bir özellik veya düzeltme için bir branch oluşturun (`git checkout -b feature/your_feature`).
3. Değişikliklerinizi commit edin (`git commit -am 'Add some feature'`).
4. Branch'i push edin (`git push origin feature/your_feature`).
5. Yeni bir Pull Request oluşturun.

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır - daha fazla bilgi için [LICENSE](LICENSE) dosyasına bakın.
```

Bu dosyayı projenizin ana dizinine `README.md` adıyla kaydedebilirsiniz. Projeye eşlik edecek bir `LICENSE` dosyası da eklemeniz gerekebilir. Genellikle, açık kaynak projeleri için MIT lisansı yaygın olarak kullanılır. Bu lisansın tam metnini internet üzerinden kolayca bulabilir ve projenize ekleyebilirsiniz.
