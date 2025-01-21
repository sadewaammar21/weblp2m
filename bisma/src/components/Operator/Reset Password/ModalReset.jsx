import React, { useState } from "react";
import Modal from "react-modal";
import SearchInput from "../../SearchInput";
import TextfieldCmp from "../../TextfieldCmp";
import TextAreaCmp from "../../TextAreaCmp";

Modal.setAppElement("#root");

const ModalReset = ({ isOpen, onRequestClose, index, onSave }) => {
  const handleReset = () => {
    // onSave(index, studentData);
    onRequestClose();
    // console.log(studentData);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="bg-white rounded-lg shadow-lg p-6  mx-auto my-auto overflow-y-auto" // Added height limit and scrolling
      overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="flex justify-center space-x-4 mt-5">
        <button
          className="bg-bluef-500 text-white px-4 py-2 rounded hover:bg-bluef-100"
          onClick={handleReset}
        >
          Ya
        </button>
        <button
          className="bg-bluef-500 text-white px-4 py-2 rounded hover:bg-bluef-100"
          onClick={onRequestClose} // Replace with the desired action
        >
          Tidak
        </button>
      </div>
    </Modal>
  );
};

export default ModalReset;
