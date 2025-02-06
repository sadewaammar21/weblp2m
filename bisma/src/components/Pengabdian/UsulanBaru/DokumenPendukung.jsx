import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ModalFilePendukung from "./ModalFilePendukung";
import axios from "axios";
import { getToken } from "../../../Features/AuthSlice";
import ModalDokMitra from "./ModalDokPendukung";
// import PopUpDokumenPendukung from "./UsulanBaru/PopUpDokumenPendukung";

const apiUrl = process.env.REACT_APP_API_URL;

const DokumenPendukung = ({ data, setData }) => {
  const navigate = useNavigate();
  const [isModalOpenMitra, setIsModalOpenMitra] = useState(false);
  const [isModalOpenFP, setIsModalOpenFP] = useState(false);
  const [partnerGroup, setPartnerGroup] = useState([]);
  const [partnerType, setPartnerType] = useState([]);
  const [supportingFileType, setSupportingFileType] = useState([]);

  const openModalMitra = () => {
    setIsModalOpenMitra(true);
  };

  const closeModalMitra = () => {
    setIsModalOpenMitra(false);
  };

  const openModalFP = () => {
    setIsModalOpenFP(true);
  };

  const closeModalFP = () => {
    setIsModalOpenFP(false);
  };

  const handleAddPartner = (index, Partner) => {
    const updatedPartner = [...data.partner];
    updatedPartner[index] = Partner;
    setData({ ...data, partner: updatedPartner });
  };

  const handleAddFile = (index, supportingFile) => {
    const updatedSupportingFile = [...data.supporting_file];
    updatedSupportingFile[index] = supportingFile;
    setData({ ...data, supporting_file: updatedSupportingFile });
  };

  const fetchPartnerGroup = async () => {
    const response = await axios.get(`${apiUrl}/api/partner-group`, getToken());
    setPartnerGroup(response.data);
    console.log(response.data);
  };

  const fetchPartnerType = async () => {
    const response = await axios.get(`${apiUrl}/api/partner-type`, getToken());
    setPartnerType(response.data);
    console.log(response.data);
  };

  const fetchPartnerTypeFile = async () => {
    const response = await axios.get(
      `${apiUrl}/api/supporting-file`,
      getToken()
    );
    setSupportingFileType(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    fetchPartnerGroup();
    fetchPartnerType();
    fetchPartnerTypeFile();
  }, []);

  const handleClick = () => {
    navigate("/usulan-baru-penelitian"); // Arahkan ke halaman 'usulan-baru-penelitian'
  };
  return (
    <div>
      <h1 className="text-xl font-bold text-violet-800 mx-5 my-5">4.1 Mitra</h1>
      <div>
        <button
          className="flex items-center px-4 py-2 mx-5 bg-bluef-500 text-white rounded-lg hover:bg-bluef-300 focus:outline-none"
          onClick={openModalMitra}
        >
          <FaPlus className="mr-2" /> {/* Icon tambah */}
          Dookumen Pendukung
        </button>
      </div>
      {/* <PopUpDokumenPendukung
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        index={data["supportingDocument"].length}
        onSave={handleAddDocument}
      /> */}
      <div className="relative overflow-x-auto  my-10">
        <table className="w-full text-sm text-center bg-neutral-20 text-gray-500 dark:text-gray-400 border border-gray-300 ">
          <thead className="border border-gray-300 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="border border-black">
              <th className="border border-black px-4 py-2">No</th>
              <th className="border border-black px-4 py-2">Mitra</th>
              <th className="border border-black px-4 py-2">Email</th>
              <th className="border border-black px-4 py-2">Jenis Mitra</th>
              <th className="border border-black px-4 py-2">
                Kontribusi Pendanaan
              </th>
              <th className="border border-black px-4 py-2">Aksi</th>
            </tr>
          </thead>
          <tbody className="border border-black text-center text-xs text-black uppercase bg-gray-50">
            {data.partner.map((item, index) => (
              <tr key={index}>
                <td className="border border-black px-4 py-2">{index + 1}</td>
                <td className="border border-black px-4 py-2">{item.name}</td>
                <td className="border border-black px-4 py-2">{item.email}</td>
                <td className="border border-black px-4 py-2">
                  {partnerType.find((type) => type.id === item.partner_type_id)
                    ?.name || "Unknown"}
                </td>
                <td className="border border-black px-4 py-2">
                  Tahun 1: {item.funding_contribution}
                </td>
                <td className="border border-black px-4 py-2">some action</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h1 className="text-xl font-bold text-violet-800 mx-5 my-5">
        4.2 File Pendukung
      </h1>
      <div>
        <button
          className="flex items-center px-4 py-2 mx-5 bg-bluef-500 text-white rounded-lg hover:bg-bluef-300 focus:outline-none"
          onClick={openModalFP}
        >
          <FaPlus className="mr-2" /> {/* Icon tambah */}
          Tambah Usulan
        </button>
      </div>
      {/* <PopUpDokumenPendukung
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        index={data["supportingDocument"].length}
        onSave={handleAddDocument}
      /> */}
      <div className="relative overflow-x-auto  my-10">
        <table className="w-full text-sm text-center bg-neutral-20 text-gray-500 dark:text-gray-400 border border-gray-300 ">
          <thead className="border border-gray-300 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="border border-black">
              <th className="border border-black px-4 py-2">No</th>
              <th className="border border-black px-4 py-2">File</th>
              <th className="border border-black px-4 py-2">Jenis</th>
              <th className="border border-black px-4 py-2">Aksi</th>
            </tr>
          </thead>
          <tbody className="border border-black text-center text-xs text-black uppercase bg-gray-50">
            {data.supporting_file.map((item, index) => (
              <tr key={index}>
                <td className="border border-black px-4 py-2">{index + 1}</td>
                <td className="border border-black px-4 py-2">
                  {item.document?.name || "Unknown File"}
                </td>{" "}
                {/* Display file name */}
                <td className="border border-black px-4 py-2">
                  {supportingFileType.find(
                    (fileType) => fileType.id === item.type_id
                  )?.name || "Unknown"}
                </td>
                <td className="border border-black px-4 py-2">some action</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ModalDokMitra
        isOpen={isModalOpenMitra} // Gunakan state boolean isModalOpenMitra
        onRequestClose={closeModalMitra}
        partnerGroup={partnerGroup}
        partnerType={partnerType}
        index={data["partner"].length}
        onSave={handleAddPartner}
      />
      <ModalFilePendukung
        isOpen={isModalOpenFP} // Gunakan state boolean isModalOpenFP
        onRequestClose={closeModalFP}
        index={data["supporting_file"].length}
        onSave={handleAddFile}
        supportingFile={supportingFileType}
      />
    </div>
  );
};

export default DokumenPendukung;
