import React, { cloneElement, isValidElement, useState } from "react";

const Modal = ({ title, titleButton, content }) => {
  const [open, setOpen] = useState(false);
    const childrenWithClose =
    isValidElement(content) ? cloneElement(content, { onClose: ()=>{setOpen(false)} }) : content;

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {titleButton}
      </button>

      {open && (
        <div
          className="fixed  inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          <div
            className="
              bg-white rounded-md shadow-xl 
              w-10/12 lg:w-5/12 
              max-h-[90vh] overflow-y-auto 
              p-6
            "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl text-center w-full font-semibold">{title}</h2>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-gray-800 transition"
              >
                ✕
              </button>
            </div>
            <div className="mb-6  w-full">
                {childrenWithClose}
            </div> 
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
