import React, { useEffect, useState } from "react";

const PerbaikanSuratKesanggupan = ({service, setService}) => {
  const [selectedFile, setSelectedFile] = useState(null);
     useEffect(()=> {
       setSelectedFile(service.letter_of_intent)
     })

  const handleFileChange = (event) => {
    setService((prevData) => ({
      ...prevData,
      letter_of_intent: event.target.files[0],
    }));
  };
  return (
    <div>
      <h1 className="text-xl font-bold text-violet-800 mx-5 my-5">
        Surat Kesanggupan{" "}
      </h1>
      <div className="px-10">
        <div className="p-4 bg-violet-100 w-full rounded-md ">
          <div className="flex">
            <img
              src={process.env.PUBLIC_URL + "/assets/information.svg"}
              alt="logo"
              className="w-6 h-6 mr-4 "
            />
            <h2 className="text-md font-bold text-violet-800"> Deskripsi</h2>
          </div>
          <div className="my-2 flex">
            <h2 className="text-sm font-medium text-violet-800 mr-1">
              {" "}
              Dokumen Surat Kesanggupan Pengabdian Masyarakat
            </h2>
            {/* <h2 className='text-md font-bold text-violet-800'> Rp. 10.000.000</h2> */}
          </div>
        </div>
      </div>
      <div className='my-10 mx-5'>
        {/* Label dan Link untuk Unduh Template */}
        <div className="flex space-x-2 mb-2">
        <label className="font-medium text-gray-700">
            Unggah Substansi Laporan *
        </label>
        <a
        href={process.env.PUBLIC_URL + "/assets/Isian Substansi Proposal - LPPM SINUS.docx"}
        className="text-blue-600 hover:underline flex items-center"
        >
        <img
        src={process.env.PUBLIC_URL + "/assets/download.svg"}
        alt="logo"
        className="w-5 h-5 mr-2"
        />
        Unduh Template
        </a>
        </div>

        {/* Label untuk Download Isian Substansi */}
        <div className="flex justify-between items-center">
        <label className="font-medium text-bluef-400">
            Download Isian Substansi Revisi Proposal Penelitian
        </label>
        {/* Tombol Unggah Ulang */}
        </div>

        <input
            type="file"
            onChange={handleFileChange}
            className="border border-gray-300 rounded-lg p-2 w-full cursor-pointer"
            id="file-upload"
          />

          {/* Menampilkan nama file yang dipilih */}
          {selectedFile && (
            <p className="mt-2 text-gray-600">
              File yang dipilih: {selectedFile.name}
            </p>
          )}

        {/* Menampilkan nama file yang dipilih */}
        {selectedFile && (
            <p className="mt-2 text-gray-600">
        File yang dipilih: {selectedFile.name}
        </p>
        )}
        </div>
        </div>
  );
};

export default PerbaikanSuratKesanggupan;
