import React from 'react'
import Image from 'next/image'
import { arbSwapHomeDictionary } from '@/localesContent'

interface ConfidentialityProps {
  readonly locale: string
}

const Confidentiality: React.FC<ConfidentialityProps> = ({
  locale
}): React.JSX.Element => {
  return (
    <div className="mr-16 mt-48">
      <div className="flex justify-center">
        <div>
          <Image
            src={'/img/comp.svg'}
            alt="Confidentiality"
            width={573}
            height={526}
          />
        </div>
        <div className="mt-36">
          <p className="text-5xl">
            {arbSwapHomeDictionary[locale]?.confidentiality}
          </p>
          <p className="mt-8 w-96">
            {arbSwapHomeDictionary[locale]?.confidentialityDesc}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Confidentiality
