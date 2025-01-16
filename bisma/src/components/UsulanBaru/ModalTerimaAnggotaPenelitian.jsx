import React from "react";
import { updateMemberStatus } from "../../Features/ResearchSlice";
import Modal from "react-modal";

const ModalTerimaAnggotaPenelitian = ({
  research,
  userId,
  isOpen,
  onRequestClose,
}) => {
  const handelChangeMemberStatus = async (status) => {
    const response = await updateMemberStatus({researchId: research, userId: userId, status:status});
    console.log(response);
    onRequestClose();
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="bg-white rounded-lg shadow-lg p-6 w-[50%] mx-auto mt-20 max-h-[80vh] overflow-y-auto" // Added height limit and scrolling
      overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div>
        <h2 className="text-md font-medium text-violet-800 mr-1">
          {" "}
          Apakah anda menerima menjadi anggota penelitian?
        </h2>
        <div className="flex justify-start space-x-4 my-5">
          <button
            className="border border-reds-500 text-reds-500 px-2 py-1 text-sm rounded hover:bg-reds-100"
            onClick={() => handelChangeMemberStatus("accepted")} // Ganti dengan aksi yang sesuai
          >
            Diterima
          </button>
          <button
            className="border border-bluef-500 text-bluef-500 px-2 py-1 text-sm rounded hover:bg-bluef-100"
            onClick={() => handelChangeMemberStatus("denied")} // Ganti dengan aksi yang sesuai
          >
            Ditolak
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalTerimaAnggotaPenelitian;
