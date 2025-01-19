import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import PopUpDokumenPendukung from "./UsulanBaru/PopUpDokumenPendukung";

const DokumenPendukung = ({ data, setData }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddDocument = (index, documentData) => {
    const updatedDoc = [...data.supportingDocument];
    updatedDoc[index] = documentData;
    setData({ ...data, supportingDocument: updatedDoc });
  };

  const handleClick = () => {
    navigate("/usulan-baru-penelitian"); // Arahkan ke halaman 'usulan-baru-penelitian'
  };
  return (
    <div>
      <h1 className="text-xl font-bold text-violet-800 mx-5 my-5">
        4.1 Dokumen Pendukung (Jika Ada)
      </h1>
      <div>
        <button
          className="flex items-center px-4 py-2 mx-5 bg-bluef-500 text-white rounded-lg hover:bg-bluef-300 focus:outline-none"
          onClick={openModal}
        >
          <FaPlus className="mr-2" /> {/* Icon tambah */}
          Tambah Usulan
        </button>
      </div>
      <PopUpDokumenPendukung
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        index={data["supportingDocument"].length}
        onSave={handleAddDocument}
      />
      <div className="relative overflow-x-auto  my-10">
        <table className="w-full text-sm text-center bg-neutral-20 text-gray-500 dark:text-gray-400 border border-gray-300 ">
          <thead className="border border-gray-300 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="border border-black">
              <th className="border border-black px-4 py-2">No</th>
              <th className="border border-black px-4 py-2">Mitra</th>
              <th className="border border-black px-4 py-2">Email</th>
              <th className="border border-black px-4 py-2">Institusi</th>
              <th className="border border-black px-4 py-2">
                Kontribusi Pendanaan
              </th>
              <th className="border border-black px-4 py-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.supportingDocument.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.partner_name}</td>
                <td>{item.email}</td>
                <td>{item.institution}</td>
                <td>
                  Tahun 1: {item.funding_contribution1} <br /> Tahun 2:{" "}
                  {item.funding_contribution2}
                </td>
                <td>some action</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DokumenPendukung;
