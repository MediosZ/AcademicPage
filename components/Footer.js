
import { personalInfo } from '@/data/website.config';

export default function Footer() {
  return (
    <footer>
      <div className="mt-6 flex flex-col items-center">
        <div className="mono-type mb-2 flex space-x-2  text-sm text-neutral-500 dark:text-neutral-400 text-pretty">
          <p>{personalInfo.alias}</p>
          <p>{` © `}</p>
          <p>{`${new Date().getFullYear()}`}</p>
        </div>
        <div className="mono-type mb-8 text-sm text-neutral-500 dark:text-neutral-400 text-pretty">
          <p>Mediocrity begins when faith in excellence fades.</p>
        </div>
      </div>
    </footer>
  )
}

