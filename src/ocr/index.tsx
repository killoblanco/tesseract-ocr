import { IconSparkles, IconCircleCheck } from '@tabler/icons-react'
import { FC } from 'react'
import { Empty } from './empty'
import { Loading } from './loading'
import { Preview } from './preview'
import { Results } from './results'

interface Props {
  onRecognize: () => Promise<void>
  image: File | null
  isLoading: boolean
  data: any | null
  onReset: () => void
}

export const OCR: FC<Props> = ({ onRecognize, image, isLoading, data, onReset }) => {
  let content = <Empty />

  if (image != null) content = <Preview image={image} onRecognize={onRecognize} />

  if (isLoading) content = <Loading />

  if (data != null) content = <Results data={data} onReset={onReset} />

  return (
    <div className="card-body p-4 md:p-8 justify-center items-center gap-3 md:gap-6">
      {content}
    </div>
  )
}