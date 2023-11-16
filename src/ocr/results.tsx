import { Icon } from '@iconify/react'
import { FC, useCallback, useEffect, useRef, useState } from 'react'

interface Props {
  data: any
  onReset: () => void
}

export const Results: FC<Props> = ({ data, onReset }) => {
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    if (showToast) {
      setTimeout(() => {
        setShowToast(false)
      }, 2000)
    }
  }, [showToast])

  const result = data.map((line: any) => line.text).join('')

  const handleCopyToClipboard = useCallback(() => {
    if (inputRef.current != null) {
      navigator.clipboard.writeText(inputRef.current.value)
      setShowToast(true)
    }
  }, [inputRef])

  return (
    <>
      <header className="inline-flex gap-4 card-title text-3xl">
        <Icon icon="tabler:circle-check" className="w-10 h-10 text-success" />
        <h2>Results:</h2>
      </header>
      <pre className="bg-base-100 w-full p-4 whitespace-pre-line h-96 overflow-hidden overflow-y-auto rounded-xl">
        {result}
      </pre>
      <textarea ref={inputRef} className="hidden">{result}</textarea>
      <section className="flex flex-row flex-wrap gap-4">
        <button className="btn btn-primary" onClick={handleCopyToClipboard}>
          <Icon icon="tabler:copy" />
          Copy Results
        </button>
        <button className="btn btn-secondary" onClick={onReset}>
          <Icon icon="tabler:rotate-2" />
          Reset
        </button>
      </section>
      {showToast && (
        <div className="toast toast-center">
          <div className="alert bg-secondary text-secondary-content w-fit inline-flex p-3">
            <Icon icon="tabler:clipboard-check" className="w-6 h-6" />
            <span>Copied to clipboard</span>
          </div>
        </div>
      )}
    </>
  )
}