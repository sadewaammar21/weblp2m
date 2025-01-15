import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import DropdownCmp from "../DropdownCmp"; // Komponen Dropdown yang Anda buat
import TextfieldCmp from "../TextfieldCmp"; // Komponen TextField yang Anda buat

// Set root element untuk React Modal
Modal.setAppElement("#root"); 

const ModalEditLapKemajuanTab1 = ({ data, isOpen, onRequestClose, index, onSave }) => {

  const [outputData, setOutputData] = useState({});
  useEffect(()=>{
    if(data){
      setOutputData(data[index])
    }
  },[data, index])

  const statusArticle = [
    {value: 'submitted', label: 'Submitted'},
    {value: 'draft', label: 'Draft'},
    {value: 'accepted', label: 'Accepted'},
    {value: 'published', label: 'Published'},
  ];

  const statusAuthor = [
    {value: 'first-author', label: 'First-author'},
    {value: 'co-author', label: 'Co-author'},
    {value: 'author', label: 'Author'},
  ];

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

  const handleSave = () => {
    console.log("Data berhasil disimpan");
    onSave(index, outputData)
    setOutputData({});
    onRequestClose(); // Tutup modal setelah menyimpan
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal Form"
      className="bg-white rounded-lg shadow-lg p-6 w-[50%] mx-auto mt-auto max-h-[80vh] overflow-y-auto" // Added height limit and scrolling
      overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <h2 className="text-xl font-bold mb-4">
        Luaran Wajib Artikel di Jurnal Bereputasi Internasional
      </h2>
      <form>
        {/* Dropdown Status Artikel */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">
            Status Artikel di Jurnal Bereputasi Internasional
          </label>
          <DropdownCmp 
            options={statusArticle} 
            value={statusArticle.find((option) => option.value === outputData.status_article)}
            onChange={(option) => handleDropdownChange(option, 'status_article')}/>
        </div>

        {/* Dropdown Status Penulis */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Status Penulis</label>
          <DropdownCmp 
            options={statusAuthor} 
            value={statusAuthor.find((option) => option.value === outputData.status_writer)}
            onChange={(option) => handleDropdownChange(option, 'status_writer')} />
        </div>

        {/* Nama Jurnal */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Nama Jurnal</label>
          <TextfieldCmp 
            value={outputData.journal_name}
            name='journal_name'
            onChange={(e) => handleInputChange(e)}
            placeholder="Nama Jurnal" />
        </div>

        {/* ISSN/EISSN dan Lembaga Pengindeks */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 mb-2">ISSN/EISSN</label>
            <TextfieldCmp
              value={outputData.issn}
              name='issn'
              onChange={(e) => handleInputChange(e)}
              placeholder="ISSN/EISSN" />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">
              Lembaga Pengindeks
            </label>
            <TextfieldCmp
              value={outputData.indexing_agency}
              name='indexing_agency'
              onChange={(e) => handleInputChange(e)}
              placeholder="Lembaga Pengindeks" />
          </div>
        </div>

        {/* URL Jurnal */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">URL Jurnal</label>
          <TextfieldCmp
            value={outputData.journal_url}
            name='journal_url'
            onChange={(e) => handleInputChange(e)}
            placeholder="URL Jurnal" />
        </div>

        {/* Judul Artikel */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Judul Artikel</label>
          <TextfieldCmp
            value={outputData.title_article}
            name='title_article'
            onChange={(e) => handleInputChange(e)}
            placeholder="Judul Artikel" />
        </div>

        {/* File Upload */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Naskah Artikel</label>
          <input
            name='manuscript_article'
            onChange={(e) => handleFileChange(e)}
            type="file"
            className="block w-full text-sm text-gray-500 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Bukti Submit</label>
          <input
            name='proof_submit'
            onChange={(e) => handleFileChange(e)}
            type="file"
            className="block w-full text-sm text-gray-500 border border-gray-300 rounded-lg"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4">
          <button
            type="button"
            className="px-4 py-2 bg-red-500 text-white rounded-lg"
            onClick={onRequestClose}
          >
            Cancel
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            onClick={handleSave}
          >
            Simpan
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default ModalEditLapKemajuanTab1;
