import React, { useState } from "react";
import Modal from "react-modal";
// import SearchInput from "../SearchInput";
import TextfieldCmp from "../../TextfieldCmp";
import TextAreaCmp from "../../TextAreaCmp";
import DropdownCmp from "../../DropdownCmp";

Modal.setAppElement("#root");

const ModalDokMitra = ({
  isOpen,
  onRequestClose,
  index,
  onSave,
  partnerGroup,
  partnerType,
}) => {
  const [documentData, setDocumentData] = useState({
    name: "",
    email: "",
    province: "",
    leader_name: "",
    institution: "",
    country_code: "",
    group_id: "",
    partner_type_id: "",
    funding_contribution: "",
    document: null,
  });

  const [data, setData] = useState({
    cluster_lv1: null,
    cluster_lv2: null,
    cluster_lv3: null,
  });

  const mapToDropdown = (data, labelKey, valueKey) => {
    return data.map((item) => ({
      label: item[labelKey],
      value: item[valueKey],
    }));
  };

  const handleDropdownChange = (option, fieldName) => {
    setDocumentData((prevData) => ({
      ...prevData,
      [fieldName]: option.value,
    }));
  };

  // const handleInputChange = (e) => {
  //   const inputName = e.target.name;
  //   const inputValue = e.target.value;

  //   setDocumentData((prevData) => ({
  //     ...prevData,
  //     [inputName]: inputValue,
  //   }));
  // };
  const handleInputChange = (e) => {
    const inputName = e.target.name;
    let inputValue = e.target.value;

    // Hanya ubah nilai jika inputName adalah "funding_contribution"
    if (inputName === "funding_contribution") {
      // Parse input menjadi angka setelah menghapus format "Rp."
      inputValue = parseFormattedNumber(inputValue);
    }

    setDocumentData((prevData) => ({
      ...prevData,
      [inputName]: inputValue,
    }));
  };

  const handleFileChange = (event) => {
    setDocumentData((prevData) => ({
      ...prevData,
      document: event.target.files[0],
    }));
  };

  const handleSave = () => {
    if (
      !documentData.name ||
      !documentData.partner_type_id ||
      !documentData.group_id
    ) {
      alert("Harap lengkapi semua data sebelum menyimpan.");
      return;
    }
    onSave(index, documentData);
    onRequestClose();
    console.log(documentData);
  };

  const formatNumber = (num) => {
    if (num === null || num === undefined || num === "") return "";
    const parsed = parseFloat(num);
    return isNaN(parsed)
      ? ""
      : `Rp. ${parsed.toLocaleString("id-ID", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 2,
        })}`;
  };

  // Parse input string "Rp 10.000,00" → 10000.00
  const parseFormattedNumber = (str) => {
    if (!str) return "";
    const cleaned = str
      .replace(/[^0-9,]/g, "")
      .replace(/\./g, "")
      .replace(",", "."); // hapus Rp dan spasi
    const parsed = parseFloat(cleaned);
    return isNaN(parsed) ? "" : parsed;
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="bg-white rounded-lg shadow-lg p-6 w-[50%] mx-auto mt-20 max-h-[80vh] overflow-y-auto" // Added height limit and scrolling
      overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <h1 className="text-xl font-bold my-5">
        Mitra Pelaksana Pengabdian - Form
      </h1>

      <div>
        <div className="grid grid-cols-2 gap-x-10  ">
          <TextfieldCmp
            label="Nama Mitra"
            value={documentData.name}
            name="name"
            onChange={handleInputChange}
            placeholder="Masukkan Nama Mitra"
          />
          <DropdownCmp
            label="Jenis Mitra "
            options={mapToDropdown(partnerType, "name", "id")}
            value={mapToDropdown(partnerType, "name", "id").find(
              (item) => item.value === documentData.partner_type_id
            )}
            onChange={(option) =>
              handleDropdownChange(option, "partner_type_id")
            }
            placeholder="Pilih Jenis Mitra"
          />

          <TextfieldCmp
            label="Provinsi"
            value={documentData.province}
            name="province"
            onChange={handleInputChange}
            placeholder="Provinsi"
          />
          <TextfieldCmp
            label="Kota"
            value={documentData.institution}
            name="institution"
            onChange={handleInputChange}
            placeholder="Nama Instansi"
          />
          <TextfieldCmp
            label="Pimpinan Mitra"
            value={documentData.leader_name}
            name="leader_name"
            onChange={handleInputChange}
            placeholder="Nama Instansi"
          />
          <TextfieldCmp
            label="Alamat Surel"
            value={documentData.email}
            name="email"
            onChange={handleInputChange}
            placeholder="Alamat Surel"
          />
          <DropdownCmp
            label="Kelompok Mitra"
            options={mapToDropdown(partnerGroup, "name", "id")}
            value={mapToDropdown(partnerGroup, "name", "id").find(
              (item) => item.value === documentData.group_id
            )}
            onChange={(option) => handleDropdownChange(option, "group_id")}
            placeholder="Pilih Kelompok"
          />
        </div>
        <div>
          <h1 className="text-xl font-bold my-5">Kontribusi Pendanaan</h1>
          <TextfieldCmp
            label="Tahun"
            value={formatNumber(documentData.funding_contribution)}
            name="funding_contribution"
            onChange={handleInputChange}
            placeholder="Rp. 1.000"
          />
        </div>
        {/* Label dan Link untuk Unduh Template */}
        <div className="flex justify-between items-center mb-2">
          <label className="font-medium text-gray-700">
            Unggah Surat Pernyataan Kesediaan Kerjasama Mitra
          </label>
        </div>

        {/* Input untuk upload file */}
        <input
          type="file"
          onChange={handleFileChange}
          className="border border-gray-300 rounded-lg p-2 w-full cursor-pointer"
          id="file-upload"
        />
      </div>

      <div className="flex justify-end space-x-4 mt-5">
        <button
          className="bg-white text-red-500 border border-red-500 px-4 py-2 rounded hover:bg-red-100"
          onClick={onRequestClose}
        >
          Tutup
        </button>
        <button
          className="bg-bluef-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleSave} // Replace with the desired action
        >
          Selesai
        </button>
      </div>
    </Modal>
  );
};

export default ModalDokMitra;
