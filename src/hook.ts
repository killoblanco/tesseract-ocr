import { useCallback, useState } from 'react'
import { createWorker } from 'tesseract.js'

export const useTesseractOCR = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [image, setImage] = useState<File | null>(null)
  const [lang, setLang] = useState('eng')

  const recognize = useCallback(async () => {
    try {
      setIsLoading(true)
      const worker = await createWorker('spa')
      const res = await worker.recognize(image)
      await worker.terminate()
      setResult(res.data.lines)
      console.log(res)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }, [image])

  const loadImage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0])
    }
  }, [])

  const changeLang = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setLang(e.target.value)
  }, [])

  const reset = useCallback(() => {
    setImage(null)
    setResult(null)
  }, [])

  return { isLoading, result, image, lang, recognize, loadImage, reset, changeLang }
}