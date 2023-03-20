import Image from 'next/image';
import router from 'next/router';

import CreateNewLinkButton from '@/public/images/svg/createnewlink.svg';

export const FrontPage = () => {
  function handleClick() {
    if (
      window.confirm(
        'The form will STOP accepting responses after you click OK.'
      )
    ) {
      router.push('/play');
    }
  }
  return (
    <>
      <div className="mt-4 text-center text-5xl font-bold text-white  ">
        TSHIRT WINNER PICKER
      </div>
      <div className="fixed bottom-0 left-0 mx-10 mb-10 h-24 w-24">
        <button onClick={handleClick}>
          <img
            src="https://www.svgrepo.com/download/260089/home-house.svg"
            alt="Plant icon"
            className="h-full w-full transition duration-300 hover:scale-110"
          ></img>
        </button>
      </div>
      <div className="fixed bottom-0 right-0 mx-10 mb-10 h-24 w-24">
        <button onClick={handleClick}>
          <img
            src="https://www.svgrepo.com/download/398090/play-button.svg"
            alt="Plant icon"
            className="h-full w-full transition duration-300 hover:scale-110"
          ></img>
        </button>
      </div>
      {/* "Bitly link" */}

      <div className="m-6 mx-20 grid grid-cols-3 justify-center gap-4 rounded-lg bg-yellowqr p-10">
        <div className="col-span-1 flex items-center justify-center ">
          {' '}
          <Image
            src={CreateNewLinkButton}
            alt="Description of Image"
            width={84}
            height={84}
            justify-center
          />
        </div>
        <div className="col-span-1 col-start-2 col-end-3 text-center">
          <p className="body-font flex h-full items-center justify-center text-center font-cherrybombone text-6xl text-black">
            bit.ly/linkRaffle
          </p>
        </div>
        <div className="col-span-1 flex items-center justify-center ">
          {' '}
          <Image
            src="https://www.svgrepo.com/download/422454/heart-love-romantic.svg"
            alt="Description of Image"
            width={84}
            height={84}
            justify-center
          />
        </div>
      </div>

      {/* QR Code Dynamic */}
      <div className="mt-12 flex items-center justify-center">
        <div className="flex w-full max-w-xl items-center justify-between">
          <div className="mx-auto flex items-center">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://example.com"
              alt="QR code"
            />
          </div>
        </div>
      </div>
      <div className="col-span-1 col-start-2 col-end-3 mt-20 text-center">
        <p className="body-font flex h-full items-center justify-center text-center font-cherrybombone text-6xl text-white">
          Scan Me! To get a chance to win a Quantum T-Shirt
        </p>
      </div>
    </>
  );
};
