import React from 'react'
import Image from 'next/image';
type Props = {}

export default function ParticipantsCounter({CountParticipantsProps, ParticipantPropsPass}: Props) {
  return (
    <div>
        <div className="col-span-1 flex items-center justify-center mt-10 ">
        {' '}
        <Image
        src="https://www.svgrepo.com/show/434117/hugging-face.svg"
        alt="Description of Image"
        width={84}
        height={84}
        justify-center
        />
        <p
            className="body-font flex h-full items-center justify-center text-center font-cherrybombone text-6xl text-yellowqr"
          >
            = {CountParticipantsProps}  {ParticipantPropsPass}
          </p>
         
        </div>
    </div>
  )
}

