import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import DropdownCmp from "../../DropdownCmp";
import TextAreaCmp from "../../TextAreaCmp";
import TextfieldCmp from "../../TextfieldCmp";

// Set root element untuk React Modal
Modal.setAppElement("#root");

const ModalLuaranTambahan = ({
  isOpen,
  onRequestClose,
  data,
  setData,
  index,
  onSave,
}) => {
  const [outputData, setOutputData] = useState({});

  const handleDropdownChange = (option, fieldName) => {
    setOutputData((prevData) => ({
      ...prevData,
      [fieldName]: option.value,
    }));
  };

  const handleInputChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setOutputData((prevData) => ({
      ...prevData,
      [inputName]: inputValue,
    }));
  };

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    setOutputData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  useEffect(() => {
    if (data && index >= 0) {
      setOutputData(data[index]); // Update data modal berdasarkan index
    }
  }, [data, index]);

  const handleSave = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log("Data berhasil disimpan");
    onSave(index, outputData);
    setOutputData({});
    onRequestClose(); // Close modal after save
  };
  const statusTambahan = [
    { label: "HKI", value: "hak-cipta" },
    { label: "Buku ber-ISBN", value: "buku_ber-ISBN" },
    { label: "Publikasi Internasional", value: "publikasi_internasional" },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal Form"
      className="bg-white rounded-lg shadow-lg p-6 w-[50%] max-h-[80vh] overflow-y-auto" // Hilangkan margin jika ada
      overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <h2 className="text-xl font-bold mb-4">
        Luaran Wajib Peningkatan Keterampilan
      </h2>
      <form onSubmit={handleSave}>
        <div className="mb-4">
          <DropdownCmp
            label={`Status Artikel di Jurnal Bereputasi Internasional`}
            options={statusTambahan}
            value={statusTambahan.find(
              (option) => option.value === outputData.type
            )}
            onChange={(option) => handleDropdownChange(option, "type")}
            placeholder={`Pilih Status Peningkatan Keterampilan`}
          />
        </div>
        <div>
          <label htmlFor="comment" className="block text-sm font-semibold mb-2">
            Komentar
          </label>
          <TextAreaCmp
            value={outputData.description}
            name="description"
            onChange={(e) => handleInputChange(e)}
            placeholder={`uraian peningkatan level secara kuantitatif dan bukti yang diklaim`}
            rows={4}
          />
          <div className="mb-4">
            <TextfieldCmp
              value={outputData.url}
              name="url"
              onChange={(e) => handleInputChange(e)}
              label={`URL`}
              className="block w-full text-sm text-gray-500 border border-gray-300 rounded-lg"
              placeholder="URL"
            />
          </div>
        </div>
        {/* File Upload */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Poster</label>
          <input
            name="document"
            onChange={(e) => handleFileChange(e)}
            type="file"
            className="block w-full text-sm text-gray-500 border border-gray-300 rounded-lg"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-4">
          <button
            className="bg-white text-red-500 border border-red-500 px-4 py-2 rounded hover:bg-red-100"
            onClick={onRequestClose}
          >
            Cancel
          </button>
          <button
            className="bg-bluef-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleSave} // Ganti dengan aksi yang sesuai
          >
            Simpan
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default ModalLuaranTambahan;
