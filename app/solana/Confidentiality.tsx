import React from 'react'
import Image from 'next/image'

const Confidentiality = (): React.JSX.Element => {
  return (
    <div className="mt-48 mr-16">
        <div className="flex justify-center">
            <div>
              <Image
                src={'/img/comp.svg'}
                alt='Confidentiality'
                width={573}
                height={526}
              />
            </div>
            <div className="mt-36">
              <p className="text-5xl">Confidentiality</p>
              <p className="mt-8 w-96">We do not store personal data on our servers and never transfer it to third parties.</p>
            </div>
        </div>
    </div>
  )
}

export default Confidentiality
