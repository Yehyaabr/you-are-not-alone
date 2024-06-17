import React, { Children } from "react";

const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;
  const handleClose = (e) => {
    if (e.target.id === "Wrapper") onClose();
  };
  return (
    <div
      className="fixed inset-0 bg-black
     bg-opacity-25 backdrop-blur-sm 
     flex justify-center items-center"
      // onClick={() => onClose()}
    >
      <div className="w-[600px] flex flex-col">
        <button
          className="text-white text-xl place-self-end"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className=" ">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
