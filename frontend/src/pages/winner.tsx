import Image from 'next/image';
import router from 'next/router';
import React from 'react';

import Confetti from '@/helpers/Confetti';
import ResultQiskit from '@/public/images/png/fileImage.png';

type Props = {};

export default function winner({}: Props) {
  function handleHomeClick() {
    router.push('/play');
  }

  return (
    <>
      <Confetti />
      <div className="fixed bottom-0 left-0 mx-10 mb-16 h-24 w-24">
        <button onClick={handleHomeClick}>
          <img
            src="https://www.svgrepo.com/download/398090/play-button.svg"
            alt="Home icon"
            className="h-full w-full transition duration-300 hover:scale-110"
          ></img>
        </button>
      </div>
      <div className="my-20 flex flex-col items-center justify-center">
        <p className="body-font flex h-full items-center justify-center text-center font-cherrybombone text-6xl text-black underline hover:scale-110">
          The winner is: Asher Manangan
        </p>
        <Image
          alt="ImageResultQiskit"
          width={800}
          height={800}
          src={ResultQiskit}
        />
      </div>
    </>
  );
}
