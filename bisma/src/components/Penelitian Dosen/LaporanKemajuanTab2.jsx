import React, { useState } from "react";
import ModalEditLapKemajuanTab2 from "./ModalEditLapKemajuanTab2";

const LaporanKemajuanTab2 = ({ research, data, setData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
    console.log(data)
  };

  const handelSptbData = (sptbItems) => {
    setData({...data, ...sptbItems});
    console.log(data);
  }

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <div>
        <div className="bg-bluef-50 my-5 p-4 rounded-md shadow-sm flex items-center space-x-4">
          {/* Icon */}
          <div className="text-blue-600">
            <img
              src="/assets/icon_filesubs.svg"
              alt="Action Icon"
              className="py-2 w-10 h-auto z-10"
            />
          </div>

          {/* Content */}
          <div>
            <div className="flex justify-end mx-1">
              <span className="bg-black text-white text-xs font-medium py-1 px-2 rounded">
                Belum Unggah
              </span>
              <span className="bg-bluef-500 text-white text-xs font-medium py-1 px-2 rounded mx-1">
                Tgl.Update:12 September 2024
              </span>
            </div>
            <p className="text-md font-semibold font-sans text-black my-1">
              Penelitian | Tahun Pelaksanaan 2024
            </p>
            <h2 className="text-lg font-bold text-gray-800">
              {research.title}
            </h2>

            <div className="flex mx-1 my-2">
              <span className="bg-cyan-500 text-white text-xs font-medium py-1 px-2 rounded">
                Penelitian Fundamental–Reguler
              </span>
              <span className="bg-oranges-500 text-white text-xs font-medium py-1 px-2 rounded mx-1">
                Tahun Pelaksanaan 2024
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="p-4 bg-violet-100 w-full rounded-md ">
          <div className="flex">
            <img
              src={process.env.PUBLIC_URL + "/assets/information.svg"}
              alt="logo"
              className="w-6 h-6 mr-4 "
            />
            <h2 className="text-md font-bold text-violet-800">
              {" "}
              Informasi Panduan Mengunggah SPTB
            </h2>
          </div>
          <div className="my-2 flex">
            <h2 className="text-sm font-medium text-violet-800 mr-1">
              {" "}
              Silahkan isi form SPTB terlebih dahulu
            </h2>
            {/* <h2 className='text-md font-bold text-violet-800'> Rp. 10.000.000</h2> */}
          </div>
        </div>
      </div>
      <ModalEditLapKemajuanTab2 research={research} data={data} isOpen={isOpen} onRequestClose={closeModal} onSave={handelSptbData}/>
      <div className="my-5">
        {/* Label dan Link untuk Unduh Template */}
        <label className="text-lg font-bold font-sans text-gray-800 ">
          Unggah File SPTB
        </label>
        <div>
          {/* Input file */}
          <input
            type="file"
            name="sptb"
            onChange={(e) => handleFileChange(e)}
            className="border border-gray-300 rounded-lg p-2 w-1/2 my-5"
            id="file-upload"
          />
        </div>
      </div>
      <div className="flex justify-end">
        <button
          onClick={openModal}
          className="flex items-center bg-bluef-500 text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-bluef-200 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Form SPTB
        </button>
      </div>
    </div>
  );
};

export default LaporanKemajuanTab2;
