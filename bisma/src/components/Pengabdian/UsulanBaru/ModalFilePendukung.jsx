import React, { useState } from "react";
import Modal from "react-modal";
// import SearchInput from "../SearchInput";
import TextfieldCmp from "../../TextfieldCmp";
import TextAreaCmp from "../../TextAreaCmp";
import DropdownCmp from "../../DropdownCmp";

Modal.setAppElement("#root");

const ModalFilePendukung = ({
  isOpen,
  onRequestClose,
  index,
  onSave,
  supportingFile,
}) => {
  const [documentData, setDocumentData] = useState({
    type_id: "",
    document: [],
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

  const handleInputChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

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
    onSave(index, documentData);
    onRequestClose();
    console.log(documentData);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="bg-white rounded-lg shadow-lg p-6 w-[50%] mx-auto mt-20 max-h-[80vh] overflow-y-auto"
      overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <h1 className="text-xl font-bold my-5">
        Mitra Pelaksana Pengabdian - Form
      </h1>

      <div>
        {/* Dropdown untuk jenis file */}
        <DropdownCmp
          label="Jenis"
          options={mapToDropdown(supportingFile, "name", "id")}
          value={mapToDropdown(supportingFile, "name", "id").find(
            (item) => item.value === documentData.type_id
          )}
          onChange={(option) => handleDropdownChange(option, "type_id")}
          placeholder="Pilih jenis file"
        />

        <div className="flex justify-between items-center my-2">
          <label className="font-sans">
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
          onClick={handleSave}
        >
          Selesai
        </button>
      </div>
    </Modal>
  );
};

export default ModalFilePendukung;
