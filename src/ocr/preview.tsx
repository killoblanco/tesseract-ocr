import { Icon } from '@iconify/react'
import { FC } from 'react'

interface Props {
  onRecognize: () => Promise<void>
  image: File
}
export const Preview: FC<Props> = ({ image, onRecognize }) => (
  <>
    <figure className="flex flex-col gap-1 md:gap-3">
      <img
        className="rounded-lg w-full max-w-sm"
        src={URL.createObjectURL(image)}
        alt={image.name}
      />
      <figcaption>{image.name}</figcaption>
    </figure>
    <button className="btn btn-primary  self-center" onClick={onRecognize}>
      Process image
      <Icon icon="tabler:sparkles" className="w-6 h-6" />
    </button>
  </>
)