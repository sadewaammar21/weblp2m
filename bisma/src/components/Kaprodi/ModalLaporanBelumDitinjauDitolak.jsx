import React, { useState } from "react";
import Modal from "react-modal";
import { updateStatus } from "../../Features/ResearchSlice";
import TextfieldCmp from "../TextfieldCmp";
import { toast } from "react-toastify";

Modal.setAppElement("#root");

const ModalLaporanBelumDitinjauDitolak = ({ data, isOpen, onRequestClose }) => {
  const [note, setNote] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await updateStatus({
        researchId: data.id,
        newStatus: 8,
        note: note,
      });
      console.log("Response:", response);
      alert("Status updated successfully!");
      if (response) {
        toast.success(response);
      } else {
        toast.success("Catatan harian berhasil ditambahkan!");
      }
      onRequestClose();
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Terjadi kesalahan!";

      toast.error(errorMessage);
      console.error("Error updating status:", error);
      alert("Failed to update status.");
    }
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="bg-white rounded-lg shadow-lg p-6 w-[50%] mx-auto mt-20 max-h-[80vh] overflow-y-auto"
      overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-2 mb-4">
        <h2 className="text-lg font-bold">DitolaK Usulan</h2>
        <button onClick={onRequestClose} className="text-xl font-bold">
          &times;
        </button>
      </div>

      {/* Information Section */}

      <h2 className="text-lg font-bold my-5">Ditolak Usulan</h2>

      <div className="mb-4">
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

export default ModalLaporanBelumDitinjauDitolak;
