import { FC } from 'react'
import { SelectLanguage } from './select-languages'

interface Props {
  onImgLoad: (event: React.ChangeEvent<HTMLInputElement>) => void
  onReset: () => void
  lang: string
  onLangChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export const UploadImage: FC<Props> = ({ onImgLoad, onReset, lang, onLangChange }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onReset();
    onImgLoad(event);
  }

  return (
    <div className="card w-full bg-base-300">
      <div className="card-body p-6">
        <section className="flex flex-col md:flex-row gap-4 items-end">
          <input
            onChange={handleInputChange}
            type="file"
            className="file-input file-input-bordered w-full file-input-primary"
            accept="image/*"
            multiple={false}
          />
          <SelectLanguage lang={lang} onLangChange={onLangChange} />
        </section>
      </div>
    </div>
  )
}