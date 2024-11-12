import React, { useState } from "react";
import Modal from "react-modal";
import { updateStatus } from "../Features/ResearchSlice";

Modal.setAppElement("#root");

const PopUpPersetujuan = ({
  isOpen,
  onRequestClose,
  researchId,
  isAccepted
}) => {
  const [note, setNote] = useState("");

  const handleSubmit = async () => {
    const newStatus = isAccepted ? 2 : 3;//here
        try {
            const response = await updateStatus({ researchId, newStatus, note });
            console.log('Response:', response);
            alert('Status updated successfully!');
            onRequestClose();
        } catch (error) {
            console.error('Error updating status:', error);
            alert('Failed to update status.');
        }
    };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="bg-white rounded-lg shadow-lg p-6 w-[50%] mx-auto mt-20 max-h-[80vh] overflow-y-auto" // Limit height and add scrolling
      overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="flex justify-between items-center border-b pb-2 mb-4">
        <h2 className="text-lg font-bold">{ isAccepted ? "Setujui Usulan" : "Tolak Usulan"}</h2>
        <button onClick={onRequestClose} className="text-xl font-bold">
          &times;
        </button>
      </div>

      {/* Body */}
      <div>
        <label htmlFor="comment" className="block text-sm font-semibold mb-2">
          Komentar
        </label>
        <textarea
          id="comment"
          rows="4"
          placeholder="Berikan Komentar"
          className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        ></textarea>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-end mt-4 space-x-2">
        <button
          onClick={onRequestClose}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900"
        >
          Submit
        </button>
      </div>
    </Modal>
  );
};

export default PopUpPersetujuan;
