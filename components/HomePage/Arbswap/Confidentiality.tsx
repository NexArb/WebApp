import React from 'react'
import Image from 'next/image'

const Confidentiality = (): React.JSX.Element => {
  return (
    <div className="mt-8 lg:mt-48 lg:mr-16 flex flex-col lg:flex-row justify-center items-center">
      <div className="lg:mr-8">
        <Image
          src="/img/comp.svg"
          alt="Confidentiality"
          width={573}
          height={526}
        />
      </div>
      <div className="mt-8 lg:mt-0 lg:ml-8 text-center lg:text-left">
        <p className="text-3xl lg:text-5xl">Confidentiality</p>
        <p className="mt-4 lg:mt-8 max-w-xs lg:max-w-none">
          We do not store personal data on our servers and never transfer it to third parties.
        </p>
      </div>
    </div>

  )
}

export default Confidentiality
