import { FC } from 'react'
import { SUPPORTED_LANGUAGES } from './constants'

interface Props {
  lang: string
  onLangChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export const SelectLanguage: FC<Props> = ({ lang, onLangChange }) => {
  const options = Object.entries(SUPPORTED_LANGUAGES)
    .sort((a, b) => a[1].localeCompare(b[1]))
    .map(([value, label]) => ({ value, label }))

  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">🌎 Select Language</span>
      </label>
      <select
        className="select select-primary w-full max-w-xs"
        value={lang}
        onChange={onLangChange}
      >
        {options.map(({ value, label }) => (
          <option key={window.crypto.randomUUID()} value={value}>{label}</option>
        ))}
      </select>
    </div>
  )
}