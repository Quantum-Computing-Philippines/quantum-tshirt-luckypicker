import router from 'next/router';
import { useState } from 'react';
import { RandomGraphView } from '@/helpers/RandomGraphView';
import { Table } from '@/helpers/Table';

export const SecondPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [ShowModalTshirt, setShowModalTshirt] = useState(false);
  const [InLineSizeProps, setInLineSizeProps] = useState(null);
  const handleSizeClick = (size) => {
    switch (size) {
      case 'S':
        setShowModal(true);
        setInLineSizeProps('Small')
        break;
      case 'M':
        // handle M click
        setShowModal(true);
        setInLineSizeProps('Medium')
        break;
      case 'L':
        // handle L click
        setShowModal(true);
        setInLineSizeProps('Large')
        break;
      case 'XL':
        // handle XL click
        setShowModal(true);
        setInLineSizeProps('XL')
        break;
      default:
        break;
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleTshirtClick = () => {
    setShowModalTshirt(true);
  };

  function handleHomeClick() {
    // if (window.confirm("Do you want to return to home menu?")) {
    //   router.push("/");
    // }
    router.push('/');
  }

  function handleRefreshClick() {
    if (window.confirm('Do you want to refresh this screen?')) {
      router.reload();
    }
  }

  return (
    <>
      <div className="mt-4 text-center text-5xl font-bold text-white  ">
        TSHIRT SIZES
      </div>
      {/* "Menus" */}
      <>
        <div className="fixed bottom-0 left-0 mx-10 mb-16 h-24 w-24">
          <button onClick={handleHomeClick}>
            <img
              src="https://www.svgrepo.com/download/260089/home-house.svg"
              alt="Home icon"
              className="h-full w-full transition duration-300 hover:scale-110"
            ></img>
          </button>
        </div>

        <div className="fixed bottom-64 left-0 mx-10 h-24 w-24">
          <button onClick={handleRefreshClick}>
            <img
              src="https://www.svgrepo.com/show/244156/refresh.svg"
              alt="Home icon"
              className="h-full w-full transition duration-300 hover:scale-110"
            ></img>
          </button>
        </div>
      </>
      <div className="m-6 mx-20 grid grid-cols-4 justify-center justify-items-center gap-4 rounded-lg bg-yellowqr p-10">
        <div className="col-span-1">
          <p
            className="body-font flex h-full items-center justify-center text-center font-cherrybombone text-6xl text-indigo-600  hover:scale-110 hover:text-green-600 hover:underline"
            onClick={() => handleSizeClick('S')}
          >
            S
          </p>
        </div>
        <div className="col-span-1">
          <p
            onClick={() => handleSizeClick('M')}
            className="body-font flex h-full items-center justify-center text-center font-cherrybombone text-6xl text-indigo-600 hover:scale-110 hover:text-green-600 hover:underline "
          >
            M
          </p>
        </div>
        <div className="col-span-1">
          <p
            onClick={() => handleSizeClick('L')}
            className="body-font flex h-full items-center justify-center text-center font-cherrybombone text-6xl text-indigo-600 hover:scale-110 hover:text-green-600 hover:underline"
          >
            L
          </p>
        </div>
        <div className="col-span-1">
          <p
            onClick={() => handleSizeClick('XL')}
            className="body-font flex h-full items-center justify-center text-center font-cherrybombone text-6xl text-indigo-600 hover:scale-110 hover:text-green-600 hover:underline"
          >
            XL
          </p>
        </div>
      </div>
      {/* The modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-0"></div>
          <div
            className="flex flex-row items-center rounded-lg bg-green-500 p-10 shadow-lg"
            style={{ zIndex: 9999 }}
          >
            <p className="mb-4 text-2xl text-white">
              Show the list for participants for <span className='underline'>{InLineSizeProps}</span> category?
            </p>

            <button
              className="mx-10 rounded bg-white px-4 py-2 text-gray-900"
              onClick={() => {
                handleModalClose();
                handleTshirtClick();
              }}
            >
              Yes
            </button>

            <button
              className="mx-10 rounded bg-white px-4 py-2 text-gray-900"
              onClick={handleModalClose}
            >
              No
            </button>
          </div>
        </div>
      )}
      {/* Participants List */}
       

      {ShowModalTshirt && (
        <>
          <div className="flex justify-center ">
            <div className="w-1/2 px-4">
              {/* Content for the left column */}
              <Table PassPropSize={InLineSizeProps}/>
             
            </div>
            <div className="flex w-1/2 flex-col items-center justify-center  px-4">
              {/* Content for the right column */}
             
              <p>The contents of InLineSizeProps before passing to RandomGraphView: {InLineSizeProps}</p>
              <RandomGraphView PassPropSize={InLineSizeProps} />
            </div>
          </div>
        </>
      )}
    </>
  );
};
