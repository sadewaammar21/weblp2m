import React, { useState } from "react";
import Modal from "react-modal";
import { setResearchApprovalFunds, updateStatus } from "../../Features/ResearchSlice";
import TextfieldCmp from "../TextfieldCmp";

Modal.setAppElement("#root");

const ModalLaporanBelumDitinjau = ({
  data,
  isOpen,
  onRequestClose,
}) => {
  const [note, setNote] = useState("");
  const [funds, setFunds] = useState(0);

  const totalBudget = data.budgetPlan.reduce((sum, item) => sum + item.total, 0);

  const handleSubmit = async () => {
    try {
      const response = await updateStatus({ researchId: data.id, newStatus: 6, note: note});
      console.log("Response:", response);
      const setFunds = setResearchApprovalFunds({researchId: data.id, approval_funds: funds})
      console.log(setFunds);
      setNote('');
      onRequestClose();
    } catch (error) {
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
        <h2 className="text-lg font-bold">Setujui Usulan</h2>
        <button onClick={onRequestClose} className="text-xl font-bold">
          &times;
        </button>
      </div>

      {/* Information Section */}
      <div className="p-4 bg-violet-100 w-full rounded-md mb-4">
        <div className="flex">
          <img
            src={process.env.PUBLIC_URL + "/assets/information.svg"}
            alt="logo"
            className="w-6 h-6 mr-4"
          />
          <h2 className="text-md font-bold text-violet-800">Informasi</h2>
        </div>
        <div className="flex my-2">
          <h2 className="text-sm font-medium text-violet-800 mr-1">
            {" "}
            Dana Direncanakan Tahun ke-1
          </h2>
          <h2 className="text-sm font-bold text-violet-800 mr-1">
            {" "}
            Rp. {totalBudget}
          </h2>
        </div>
      </div>
      <h2 className="text-lg font-bold my-5">Persetujuan Dana</h2>
      <label htmlFor="comment" className="block text-sm font-semibold mb-2">
        Masukkan dana yang disetujui oleh kepala LPPM
      </label>
      <TextfieldCmp
        // label={`Masukkan dana yang disetujui oleh kepala LPPM`}
        onChange={(e) => setFunds(e.target.value)}
        className="w-full"
        placeholder="Rp. 10.000.000,00"
      />

      {/* Comment Section */}
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

export default ModalLaporanBelumDitinjau;
