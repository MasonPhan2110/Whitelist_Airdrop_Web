import React, { useContext } from 'react';


import ReactPortal from '../Portal/Portal';

type Props = {
  open: boolean | undefined;
  onClose: () => void;
};

const ModalMint = ({ open, onClose }: Props) => {
  const { modalType } = stateMint;
  const handleParentClick = (event: any) => {
    event.preventDefault();
    onClose();
  };

  const handleChildClick = (event: any) => {
    event.stopPropagation();
  };

  const render = () => {
    switch (modalType) {
      case 'loading':
        return (
          <div>
            <img className="spinning" src="/assets/images/loading.png" alt="" />
          </div>
        );
      case 'success':
        return (
          <div className="modal " onClick={handleChildClick}>
            <div className="min-h-[342px]">
              <img src={stateMint.imageURL || ''} alt="" />
            </div>
            {/* <button className="mt-8 rounded-[10px] bg-[#13aa52] px-4 py-2 font-bold text-white">
              View on Opensea
            </button> */}
          </div>
        );
      default:
        return <></>;
    }
  };

  if (!open) {
    return null;
  }

  return (
    <ReactPortal>
      <div className="modal-overlay" onClick={handleParentClick}>
        {render()}
      </div>
    </ReactPortal>
  );
};

export default ModalMint;
