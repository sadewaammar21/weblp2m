import React from "react";
import Modal from "react-modal";

// Set root element untuk React Modal
Modal.setAppElement("#root");

const ModalMonevPengabdian = ({ isOpen, onRequestClose, data, setData }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="bg-white rounded-lg shadow-lg p-6 w-[50%] mx-auto mt-20 max-h-[80vh] overflow-y-auto"
      overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <img
        src={
          process.env.PUBLIC_URL +
          "/assets/Pop up Penilaian Monev Pengabdian.png"
        }
        alt="penelitian"
        className="mb-4"
      />

      {/* Buttons */}
      <div className="flex justify-end space-x-4 my-5">
        <button
          className="bg-white text-red-500 border border-red-500 px-4 py-2 rounded hover:bg-red-100"
          onClick={onRequestClose}
        >
          Cancel
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => {
            console.log("Data saved");
          }}
        >
          Simpan
        </button>
      </div>
    </Modal>
  );
};

export default ModalMonevPengabdian;
