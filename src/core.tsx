import { UploadImage } from './file-upload';
import { Footer } from './footer';
import { useTesseractOCR } from './hook';
import { OCR } from './ocr';

const Core = () => {
  const ocr = useTesseractOCR()

  return (
    <section
      className="w-screen md:max-w-[1200px] mx-auto h-screen flex flex-col gap-4 md:gap-8 p-6 md:p-10 items-center"
    >
      <aside className="w-full">
        <UploadImage
          onImgLoad={ocr.loadImage}
          onReset={ocr.reset}
          lang={ocr.lang}
          onLangChange={ocr.changeLang}
        />
      </aside>
      <main className="grow card w-full bg-base-300 overflow-hidden overflow-y-auto">
        <OCR
          onRecognize={ocr.recognize}
          image={ocr.image}
          isLoading={ocr.isLoading}
          data={ocr.result}
          onReset={ocr.reset}
        />
      </main>
      <Footer />
    </section>
  )
}

export default Core