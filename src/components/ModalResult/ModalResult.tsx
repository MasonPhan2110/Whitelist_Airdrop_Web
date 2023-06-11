import React, { useContext } from 'react';

import { ClaimContext } from '@/hooks/Context/ClaimContext';
import ReactPortal from '../Portal/Portal';


type Props = {
  open: boolean | undefined;
  onClose: () => void;
};

const ModalResult = ({ open, onClose }: Props) => {
  const { stateClaim } = useContext(ClaimContext);
  const { modalType } = stateClaim;
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
      case 'succeed':
        return (
          <div className="modal " onClick={handleChildClick} style={{backgroundColor:'rgb(0,0,50)', padding: 50}}>
            <div className="min-h-[300px]">
              <img style={{height:300, width:300, display:'revert'}} src={stateClaim.imageURL || ''} alt="" />
            </div>
            <p className="mt-8 font-extrabold text-white lg:text-4xl">
              SUCCEED!
            </p>
          </div>
        );
        case 'fail':
          return(
            <div className="modal " onClick={handleChildClick} style={{backgroundColor:'rgb(0,0,50)', padding: 50}}>
              <div className="min-h-[342px]">
                <img style={{height:300, width:300, display:'revert'}}src={stateClaim.imageURL || ''} alt="" />
              </div>
              <p className="mt-8 font-extrabold text-white lg:text-4xl">
              FAILED!
              </p>
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

export default ModalResult;