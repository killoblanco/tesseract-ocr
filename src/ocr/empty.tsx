import { Icon } from '@iconify/react'

export const Empty = () => (
  <>
    <h1 className="inline-flex items-center gap-4 text-3xl font-bold">
      <Icon icon="tabler:brand-netbeans" className="w-10 h-10" />
      Tesseract.js Demo
    </h1>
    <section className="typo typo-slate dark:typo-invert">
      <p>
        This project executes the Tesseract.js OCR engine on your browser. You
        can upload an image to be processed by the OCR engine. The OCR engine
        will recognize the text in the image and return the result.
      </p>
      <section className="alert  bg-accent text-accent-content w-fit">
        <Icon icon="tabler:brand-netbeans" className="w-8 h-8 md:w-10 md:h-10" />
        <span>
          The OCR engine is running on your browser, so your images are not sent
          to any server.
        </span>
      </section>
    </section>
    <section className="flex flex-col md:flex-row items-center gap-4">
      <a
        className="btn btn-outline"
        href="https://github.com/killoblanco/tesseract-ocr"
        target="_github"
      >
        <Icon icon="tabler:brand-github" className="w-6 h-6" />
        View on GitHub
      </a>
      <a
        className="btn btn-outline"
        href="https://github.com/naptha/tesseract.js"
        target="_github"
      >
        <Icon icon="tabler:brand-netbeans" className="w-6 h-6" />
        Tesseract.js
      </a>
    </section>
  </>
)