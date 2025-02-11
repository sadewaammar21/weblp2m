import React, { useEffect, useState } from "react";
import TextAreaCmp from "../../TextAreaCmp";
import TextfieldCmp from "../../TextfieldCmp";
import { FaDownload } from "react-icons/fa";
import ModalRekognisi from "./ModalRekognisi";
import ModalPoster from "./ModalPoster";
import ModalVideo from "./ModalVideo";
import ModalLuaranWajibInternasional from "./ModalLuaranWajibInternasional";
import ModalLuaranElektronik from "./ModalLuaranElektronik";
import ModalLuaranKetrampilan from "./ModalLuaranKetrampilan";
import ModalLuaranKemampuan from "./ModalLuaranKemampuan";
import ModalLuaranPpt from "./ModalLuaranPpt";
import ModalLuaranPdf from "./ModalLuaranPdf";
import ModalLuaranTambahan from "./ModalLuaranTambahan";
// import ModalEditLapKemajuanTab1 from "./ModalEditLapKemajuanTab1";

const LaporanAkhirTab1 = ({ service, data, setData }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isOpenRekognisi, setIsOpenRekognisi] = useState(false);
  const [isOpenPoster, setIsOpenPoster] = useState(false);
  const [isOpenVideo, setIsOpenVideo] = useState(false);
  const [isOpenArtikel, setIsOpenArtikel] = useState(false);
  const [isOpenElektronik, setIsOpenElektronik] = useState(false);
  const [isOpenKetrampilan, setIsOpenRekKetrampilan] = useState(false);
  const [isOpenKemampuan, setIsOpenKemampuan] = useState(false);
  const [isOpennPPT, setIsOpenPPT] = useState(false);
  const [isOpenPdfHasil, setIsOpenPdfHasil] = useState(false);
  const [isOpenLuaranTambahan, setIsOpenTambahan] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const [outputs1, setOutputs1] = useState(0);
  const handleOutputDatapr1 = (index, outputData) => {
    const updatedOutput = Array.isArray(data.outputs1)
      ? [...data.outputs1]
      : [];
    updatedOutput[index] = outputData;
    setData({ ...data, outputs1: updatedOutput });
    console.log(data);
  };

  const [outputs2, setOutputs2] = useState(0);
  const handleOutputDatapr2 = (index, outputData) => {
    const updatedOutput = Array.isArray(data.outputs2)
      ? [...data.outputs2]
      : [];
    updatedOutput[index] = outputData;
    setData({ ...data, outputs2: updatedOutput });
    console.log(data);
  };

  const [outputs3, setOutputs3] = useState(0);
  const handleOutputDatapr3 = (index, outputData) => {
    const updatedOutput = Array.isArray(data.outputs3)
      ? [...data.outputs3]
      : [];
    updatedOutput[index] = outputData;
    setData({ ...data, outputs3: updatedOutput });
    console.log(data);
  };

  const [outputs4, setOutputs4] = useState(0);
  const handleOutputDatapr4 = (index, outputData) => {
    const updatedOutput = Array.isArray(data.outputs4)
      ? [...data.outputs4]
      : [];
    updatedOutput[index] = outputData;
    setData({ ...data, outputs4: updatedOutput });
    console.log(data);
  };

  const [outputs5, setOutputs5] = useState(0);
  const handleOutputDatapr5 = (index, outputData) => {
    const updatedOutput = Array.isArray(data.outputs5)
      ? [...data.outputs5]
      : [];
    updatedOutput[index] = outputData;
    setData({ ...data, outputs5: updatedOutput });
    console.log(data);
  };

  const [outputs6, setOutputs6] = useState(0);
  const handleOutputDatapr6 = (index, outputData) => {
    const updatedOutput = Array.isArray(data.outputs6)
      ? [...data.outputs6]
      : [];
    updatedOutput[index] = outputData;
    setData({ ...data, outputs6: updatedOutput });
    console.log(data);
  };

  const [outputs7, setOutputs7] = useState(0);
  const handleOutputDatapr7 = (index, outputData) => {
    const updatedOutput = Array.isArray(data.outputs7)
      ? [...data.outputs7]
      : [];
    updatedOutput[index] = outputData;
    setData({ ...data, outputs7: updatedOutput });
    console.log(data);
  };

  const [outputs8, setOutputs8] = useState(0);
  const handleOutputDatapr8 = (index, outputData) => {
    const updatedOutput = Array.isArray(data.outputs8)
      ? [...data.outputs8]
      : [];
    updatedOutput[index] = outputData;
    setData({ ...data, outputs8: updatedOutput });
    console.log(data);
  };

  const [outputs9, setOutputs9] = useState(0);
  const handleOutputDatapr9 = (index, outputData) => {
    const updatedOutput = Array.isArray(data.outputs9)
      ? [...data.outputs9]
      : [];
    updatedOutput[index] = outputData;
    setData({ ...data, outputs9: updatedOutput });
    console.log(data);
  };

  const [outputs10, setOutputs10] = useState(0);
  const handleOutputDatapr10 = (index, outputData) => {
    const updatedOutput = Array.isArray(data.outputs10)
      ? [...data.outputs10]
      : [];
    updatedOutput[index] = outputData;
    setData({ ...data, outputs10: updatedOutput });
    console.log(data);
  };

  const handleDropdownChange = (option) => {
    setSelectedOption(option);
  };

  const openModalRekognisi = (index) => {
    setIsOpenRekognisi(true);
    setOutputs1(index);
  };

  const openModalPoster = (index) => {
    setIsOpenPoster(true);
    setOutputs2(index);
  };

  const openModalVideo = (index) => {
    setIsOpenVideo(true);
    setOutputs3(index);
  };

  const openModalArtikel = (index) => {
    setIsOpenArtikel(true);
    setOutputs4(index);
  };

  const openModalElektronik = (index) => {
    setIsOpenElektronik(true);
    setOutputs5(index);
  };

  const openModalKetrampilan = (index) => {
    setIsOpenRekKetrampilan(true);
    setOutputs6(index);
    // setOutputIndex6(index);
  };

  const openModalKemampuan = (index) => {
    setIsOpenKemampuan(true);
    setOutputs7(index);
  };

  const openModalPPT = (index) => {
    setIsOpenPPT(true);
    setOutputs8(index);
  };

  const closeModalRekognisi = () => {
    setIsOpenRekognisi(false);
    // handleOutputDatapr1();
  };

  const openModalPdf = (index) => {
    setIsOpenPdfHasil(true);
    setOutputs9(index);
  };

  const openModalLuaranTambahan = (index) => {
    setIsOpenTambahan(true);
    setOutputs10(index);
  };

  const closeModalPoster = () => {
    setIsOpenPoster(false);
  };

  const closeModalVideo = () => {
    setIsOpenVideo(false);
  };

  const closeModalArtikel = () => {
    setIsOpenArtikel(false);
  };

  const closeModalElektronik = () => {
    setIsOpenElektronik(false);
  };

  const closeModalKetrampilan = () => {
    setIsOpenRekKetrampilan(false);
  };

  const closeModalKemampuan = () => {
    setIsOpenKemampuan(false);
  };

  const closeModalPPT = () => {
    setIsOpenPPT(false);
  };

  const closeModalPDF = () => {
    setIsOpenPdfHasil(false);
  };

  const closeModalLuaranTambahan = () => {
    setIsOpenTambahan(false);
  };

  const handleInputChange = () => (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setData((prevData) => ({
      ...prevData,
      [inputName]: inputValue,
    }));
  };

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
    console.log(data);
  };

  useEffect(() => {
    console.log("Report data:", data); // Debugging the report data
  }, [data]);

  return (
    <div>
      <ModalRekognisi
        data={data.outputs1} // Mengambil data berdasarkan index
        isOpen={isOpenRekognisi}
        index={outputs1}
        onRequestClose={closeModalRekognisi}
        onSave={handleOutputDatapr1}
      />
      <ModalPoster
        isOpen={isOpenPoster}
        onRequestClose={closeModalPoster}
        index={outputs2}
        onSave={handleOutputDatapr2}
        data={data.outputs2}
      />
      <ModalVideo
        isOpen={isOpenVideo}
        index={outputs3}
        onSave={handleOutputDatapr3}
        onRequestClose={closeModalVideo}
        data={data.outputs3}
      />
      <ModalLuaranWajibInternasional
        isOpen={isOpenArtikel}
        onRequestClose={closeModalArtikel}
        index={outputs4}
        onSave={handleOutputDatapr4}
        data={data.outputs4}
      />
      <ModalLuaranElektronik
        isOpen={isOpenElektronik}
        onRequestClose={closeModalElektronik}
        index={outputs5}
        onSave={handleOutputDatapr5}
        data={data.outputs5}
      />
      <ModalLuaranKetrampilan
        isOpen={isOpenKetrampilan}
        onRequestClose={closeModalKetrampilan}
        index={outputs6}
        onSave={handleOutputDatapr6}
        data={data.outputs6}
      />
      <ModalLuaranKemampuan
        isOpen={isOpenKemampuan}
        onRequestClose={closeModalKemampuan}
        index={outputs7}
        onSave={handleOutputDatapr7}
        data={data.outputs7}
      />
      <ModalLuaranPpt
        isOpen={isOpennPPT}
        onRequestClose={closeModalPPT}
        index={outputs8}
        onSave={handleOutputDatapr8}
        data={data.outputs8}
      />
      <ModalLuaranPdf
        isOpen={isOpenPdfHasil}
        onRequestClose={closeModalPDF}
        index={outputs9}
        onSave={handleOutputDatapr9}
        data={data.outputs9}
      />
      <ModalLuaranTambahan
        isOpen={isOpenLuaranTambahan}
        onRequestClose={closeModalLuaranTambahan}
        index={outputs10}
        onSave={handleOutputDatapr10}
        data={data.outputs10}
      />

      <div>
        {/* <ModalEditLapKemajuanTab1 isOpen={isOpen} onRequestClose={closeModal} /> */}
        <label className="text-lg font-bold font-sans text-gray-800">
          Ringkasan
        </label>
        <h2 className="text-md font-sans text-gray-800 my-5">
          Tuliskan secara ringkas latar belakang penlitian, tujuan dan tahapan
          metode, luaran yang ditargetkan, dan hasil yang diperoleh sesuai
          dengan tahun pelaksanaan
        </h2>
        <TextAreaCmp
          value={data.summary}
          name="summary"
          onChange={handleInputChange()}
          placeholder={`Ringksan Penelitian`}
          rows={4}
        />
      </div>
      <div>
        <label className="text-lg font-bold font-sans text-gray-800">
          Keyword
        </label>
        <h2 className="text-md font-sans text-gray-800 my-5">
          Maksimal 5 kata kunci. Gunakan tanda baca titik koma(;) sebagai
          perintah
        </h2>
        <TextfieldCmp
          value={data.keyword}
          name="keyword"
          onChange={handleInputChange()}
          placeholder={`Keyword1;keyword2;keyword3`}
          height="h-10"
        />
      </div>

      <div>
        <label className="text-lg font-bold font-sans text-gray-800">
          Substansi Laporan
        </label>
        <h2 className="text-md font-sans text-gray-800 my-5">
          Unggah dokumen substansi laporan kemajuan dalam format PDF sesuai
          dengan template yang disediakan, dan klik simpan perubahan
        </h2>
        <div>
          {/* Label dan Link untuk Unduh Template */}
          <div className="flex items-center space-x-4">
            {/* Input file */}
            <input
              type="file"
              name="substance"
              onChange={(e) => handleFileChange(e)}
              className="border border-gray-300 rounded-lg p-2 w-1/2"
              id="file-upload"
            />

            {/* Tombol Unduh Template */}
            <a
              href={
                process.env.PUBLIC_URL +
                "/assets/Isian Substansi Proposal - LPPM SINUS.docx"
              }
              className="flex items-center bg-bluef-500 text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-bluef-200 focus:outline-none focus:ring focus:ring-blue-300"
            >
              <FaDownload className="w-3 h-3 mr-2 text-white" />
              Unduh Template
            </a>
          </div>
        </div>
      </div>
      <div>
        <label className="text-lg font-bold font-sans text-gray-800 mx-5">
          Realisasi Keterlibatan/Kontribusi Mitra
        </label>

        <div>
          {/* Label dan Link untuk Unduh Template */}
          <div>
            {/* Input file */}
            <input
              type="file"
              name="partner_contribution"
              onChange={handleFileChange}
              className="border border-gray-300 rounded-lg p-2 w-1/2"
              id="file-upload"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button className="flex items-center bg-bluef-500 text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-bluef-200 focus:outline-none focus:ring focus:ring-blue-300">
          Simpan Perubahan
        </button>
      </div>
      <div>
        <h1 className="text-lg font-bold font-sans text-violet-800">
          Luaran Wajib
        </h1>
      </div>
      {/* Tabel */}
      <div className="relative overflow-x-auto my-10">
        <table className="w-full text-sm text-center bg-neutral-20 text-gray-500 border border-gray-300">
          <thead className="border border-gray-300 text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="border border-black px-4 py-2 align-middle">No</th>
              <th className="border border-black px-4 py-2 align-middle">
                Jenis Luaran
              </th>
              <th className="border border-black px-4 py-2 align-middle">
                Status Status Saat ini
              </th>
              <th className="border border-black px-4 py-2 align-middle">
                Status Target
              </th>
              <th className="border border-black px-4 py-2 align-middle">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="text-black">
            {console.log(data?.outputs1)}
            {(data?.outputs1 || []).map((item, index) => (
              <tr key={index}>
                <td className="border border-black px-4 py-2 align-middle">
                  {1}
                </td>
                <td className="border border-black px-4 py-2 text-left">
                  Rekognisi mahasiswa menjadi bagian MBKM minimal 6 (enam) SKS
                </td>
                <td className="border border-black px-4 py-2 align-middle">
                  Tercapai
                </td>
                <td className="border border-black px-4 py-2 align-middle">
                  {item.status}
                </td>
                <td className="border border-black px-4 py-2 align-middle">
                  <button
                    onClick={() => openModalRekognisi(index)}
                    className=" items-center px-2 py-1 rounded-md hover:text-cyan-500"
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/assets/act_edit.svg"}
                      alt="Aksi"
                      className="w-7 h-7 mr-2"
                    />
                  </button>
                </td>
              </tr>
            ))}
            {console.log(data?.outputs2)}
            {(data?.outputs2 || []).map((item, index) => (
              <tr key={index}>
                <td className="border border-black px-4 py-2 align-middle">
                  {2}
                </td>
                <td className="border border-black px-4 py-2 text-left">
                  Poster
                </td>
                <td className="border border-black px-4 py-2 align-middle">
                  Tercapai
                </td>
                <td className="border border-black px-4 py-2 align-middle">
                  {item.status}
                </td>
                <td className="border border-black px-4 py-2 align-middle">
                  <button
                    onClick={() => openModalPoster(index)}
                    className=" items-center px-2 py-1 rounded-md hover:text-cyan-500"
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/assets/act_edit.svg"}
                      alt="Aksi"
                      className="w-7 h-7 mr-2"
                    />
                  </button>
                </td>
              </tr>
            ))}
            {console.log(data?.outputs3)}
            {(data?.outputs3 || []).map((item, index) => (
              <tr key={index}>
                <td className="border border-black px-4 py-2 align-middle">
                  {3}
                </td>
                <td className="border border-black px-4 py-2 text-left">
                  Video kegiatan
                </td>
                <td className="border border-black px-4 py-2 align-middle">
                  Tercapai
                </td>
                <td className="border border-black px-4 py-2 align-middle">
                  {item.status}
                </td>
                <td className="border border-black px-4 py-2 align-middle">
                  <button
                    onClick={() => openModalVideo(index)}
                    className=" items-center px-2 py-1 rounded-md hover:text-cyan-500"
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/assets/act_edit.svg"}
                      alt="Aksi"
                      className="w-7 h-7 mr-2"
                    />
                  </button>
                </td>
              </tr>
            ))}
            {console.log(data?.outputs4)}
            {(data?.outputs4 || []).map((item, index) => (
              <tr key={index}>
                <td className="border border-black px-4 py-2 align-middle">
                  {4}
                </td>
                <td className="border border-black px-4 py-2 text-left">
                  Artikel ilmiah pada jurnal terindeks SINTA
                </td>
                <td className="border border-black px-4 py-2 align-middle">
                  Tercapai
                </td>
                <td className="border border-black px-4 py-2 align-middle">
                  {item.status_article}
                </td>
                <td className="border border-black px-4 py-2 align-middle">
                  <button
                    onClick={() => openModalArtikel(index)}
                    className=" items-center px-2 py-1 rounded-md hover:text-cyan-500"
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/assets/act_edit.svg"}
                      alt="Aksi"
                      className="w-7 h-7 mr-2"
                    />
                  </button>
                </td>
              </tr>
            ))}
            {console.log(data?.outputs5)}
            {(data?.outputs5 || []).map((item, index) => (
              <tr key={index}>
                <td className="border border-black px-4 py-2 align-middle">
                  {5}
                </td>
                <td className="border border-black px-4 py-2 text-left">
                  Elektronik
                </td>
                <td className="border border-black px-4 py-2 align-middle">
                  Tercapai
                </td>
                <td className="border border-black px-4 py-2 align-middle">
                  {item.status_article}
                </td>
                <td className="border border-black px-4 py-2 align-middle">
                  <button
                    onClick={() => openModalElektronik(index)}
                    className=" items-center px-2 py-1 rounded-md hover:text-cyan-500"
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/assets/act_edit.svg"}
                      alt="Aksi"
                      className="w-7 h-7 mr-2"
                    />
                  </button>
                </td>
              </tr>
            ))}
            {console.log(data?.outputs6)}
            {(data?.outputs6 || []).map((item, index) => (
              <tr key={index}>
                <td className="border border-black px-4 py-2 align-middle">
                  {6}
                </td>
                <td className="border border-black px-4 py-2 text-left">
                  Peningkatan Keterampilan
                </td>
                <td className="border border-black px-4 py-2 align-middle">
                  Tercapai
                </td>
                <td className="border border-black px-4 py-2 align-middle">
                  {item.status_article}
                </td>
                <td className="border border-black px-4 py-2 align-middle">
                  <button
                    onClick={() => openModalKetrampilan(index)}
                    className=" items-center px-2 py-1 rounded-md hover:text-cyan-500"
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/assets/act_edit.svg"}
                      alt="Aksi"
                      className="w-7 h-7 mr-2"
                    />
                  </button>
                </td>
              </tr>
            ))}
            {console.log(data?.outputs7)}
            {(data?.outputs7 || []).map((item, index) => (
              <tr key={index}>
                <td className="border border-black px-4 py-2 align-middle">
                  {7}
                </td>
                <td className="border border-black px-4 py-2 text-left">
                  Peningkatan Kemampuan Manajemen
                </td>
                <td className="border border-black px-4 py-2 align-middle">
                  Tercapai
                </td>
                <td className="border border-black px-4 py-2 align-middle">
                  {item.status_article}
                </td>
                <td className="border border-black px-4 py-2 align-middle">
                  <button
                    onClick={() => openModalKemampuan(index)}
                    className=" items-center px-2 py-1 rounded-md hover:text-cyan-500"
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/assets/act_edit.svg"}
                      alt="Aksi"
                      className="w-7 h-7 mr-2"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h1 className="text-lg font-bold font-sans text-violet-800">
          Presentasi Pelaksanaan Pengabdian kepada Masyarakat
        </h1>
      </div>
      {/* Tabel Pelaksanaan*/}
      <div className="relative overflow-x-auto my-10">
        <table className="w-full text-sm text-center bg-neutral-20 text-gray-500 border border-gray-300">
          <thead className="border border-gray-300 text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="border border-black px-4 py-2 align-middle">No</th>
              <th className="border border-black px-4 py-2 align-middle">
                Jenis Presentasi
              </th>
              <th className="border border-black px-4 py-2 align-middle">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {console.log(data?.outputs8)}
            {(data?.outputs8 || []).map((item, index) => (
              <tr>
                <td className="border border-black px-4 py-2 align-middle">
                  1
                </td>
                <td className="border border-black px-4 py-2 break-words text-left">
                  Presentasi Power Point
                </td>
                <td className="border border-black px-4 py-2 align-middle">
                  <button
                    // onClick={openModalPPT}
                    onClick={() => openModalPPT(index)}
                    className=" items-center px-2 py-1 rounded-md hover:text-cyan-500"
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/assets/act_edit.svg"}
                      alt="penelitian"
                      className="w-7 h-7 mr-2"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h1 className="text-lg font-bold font-sans text-violet-800">
          Rencana Hasil Pelaksanaan
        </h1>
      </div>
      {/* Tabel Pelakasanaan*/}
      <div className="relative overflow-x-auto my-10">
        <table className="w-full text-sm text-center bg-neutral-20 text-gray-500 border border-gray-300">
          <thead className="border border-gray-300 text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="border border-black px-4 py-2 align-middle">No</th>
              <th className="border border-black px-4 py-2 align-middle">
                Jenis Hasil Pelakasanaan
              </th>
              <th className="border border-black px-4 py-2 align-middle">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {console.log(data?.outputs9)}
            {(data?.outputs9 || []).map((item, index) => (
              <tr>
                <td className="border border-black px-4 py-2 align-middle">
                  1
                </td>
                <td className="border border-black px-4 py-2 break-words text-left">
                  PDF Hasil Pelaksanaan
                </td>
                <td className="border border-black px-4 py-2 align-middle">
                  <button
                    onClick={() => openModalPdf(index)}
                    className=" items-center px-2 py-1 rounded-md hover:text-cyan-500"
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/assets/act_edit.svg"}
                      alt="penelitian"
                      className="w-7 h-7 mr-2"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h1 className="text-lg font-bold font-sans text-violet-800">
          Luaran Tambahan
        </h1>
      </div>
      {/* Tabel Tambahan*/}
      <div className="relative overflow-x-auto my-10">
        <table className="w-full text-sm text-center bg-neutral-20 text-gray-500 border border-gray-300">
          <thead className="border border-gray-300 text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="border border-black px-4 py-2 align-middle">
                Luaran Tambahan
              </th>
              <th className="border border-black px-4 py-2 align-middle">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {console.log(data?.outputs10)}
            {(data?.outputs10 || []).map((item, index) => (
              <tr>
                <td className="border border-black px-4 py-2 break-words text-left">
                  Luaran Tambahan
                </td>
                <td className="border border-black px-4 py-2 align-middle">
                  <button
                    onClick={() => openModalLuaranTambahan(index)}
                    className=" items-center px-2 py-1 rounded-md hover:text-cyan-500"
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/assets/act_edit.svg"}
                      alt="penelitian"
                      className="w-7 h-7 mr-2"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LaporanAkhirTab1;
