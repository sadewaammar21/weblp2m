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

  const [outputIndexpr1, setOutputIndexpr1] = useState(0);
  const handleOutputDatapr1 = (index, outputData) => {
    const updatedOutput = Array.isArray(data.output_final_report1s)
      ? [...data.output_final_report1s]
      : [];
    updatedOutput[index] = outputData;
    setData({ ...data, output_final_report1s: updatedOutput });
    console.log(data);
  };

  const [outputIndexpr2, setOutputIndexpr2] = useState(0);
  const handleOutputDatapr2 = (index, outputData) => {
    const updatedOutput = Array.isArray(data.output_final_report2s)
      ? [...data.output_final_report2s]
      : [];
    updatedOutput[index] = outputData;
    setData({ ...data, output_final_report2s: updatedOutput });
    console.log(data);
  };

  const [outputIndexpr3, setOutputIndexpr3] = useState(0);
  const handleOutputDatapr3 = (index, outputData) => {
    const updatedOutput = Array.isArray(data.output_final_report3s)
      ? [...data.output_final_report3s]
      : [];
    updatedOutput[index] = outputData;
    setData({ ...data, output_final_report3s: updatedOutput });
    console.log(data);
  };

  const [outputIndexpr4, setOutputIndexpr4] = useState(0);
  const handleOutputDatapr4 = (index, outputData) => {
    const updatedOutput = Array.isArray(data.output_final_report4s)
      ? [...data.output_final_report4s]
      : [];
    updatedOutput[index] = outputData;
    setData({ ...data, output_final_report4s: updatedOutput });
    console.log(data);
  };

  const handleDropdownChange = (option) => {
    setSelectedOption(option);
  };

  const openModalRekognisi = (index) => {
    setIsOpenRekognisi(true);
    setOutputIndexpr1(index);
  };

  const closeModalRekognisi = () => {
    setIsOpenRekognisi(false);
    // handleOutputDatapr1();
  };

  const openModalVideo = (index) => {
    setIsOpenVideo(true);
    setOutputIndexpr3(index);
  };

  const openModalPoster = (index) => {
    setIsOpenPoster(true);
    setOutputIndexpr2(index);
  };

  const closeModalPoster = () => {
    setIsOpenPoster(false);
  };

  const closeModalVideo = () => {
    setIsOpenVideo(false);
  };
  const openModalArtikel = (index) => {
    setIsOpenArtikel(true);
    setOutputIndexpr4(index);
  };

  const closeModalArtikel = () => {
    setIsOpenArtikel(false);
  };
  // const openModalElektronik = (index) => {
  //   setIsOpenElektronik(true);
  //   setOutputIndex5(index);
  // };

  const closeModalElektronik = () => {
    setIsOpenElektronik(false);
  };
  const openModalKetrampilan = (index) => {
    setIsOpenRekKetrampilan(true);
    // setOutputIndex6(index);
  };

  const closeModalKetrampilan = () => {
    setIsOpenRekKetrampilan(false);
  };
  const openModalKemampuan = (index) => {
    setIsOpenKemampuan(true);
    // setOutputIndex7(index);
  };

  const closeModalKemampuan = () => {
    setIsOpenKemampuan(false);
  };
  const openModalPPT = (index) => {
    setIsOpenPPT(true);
    // setOutputIndex8(index);
  };

  const closeModalPPT = () => {
    setIsOpenPPT(false);
  };
  const openModalPdf = (index) => {
    setIsOpenPdfHasil(true);
    // setOutputIndex9(index);
  };

  const closeModalPDF = () => {
    setIsOpenPdfHasil(false);
  };
  const openModalLuaranTambahan = (index) => {
    setIsOpenTambahan(true);
    // setOutputIndex10(index);
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
        data={data.output_final_report1s} // Mengambil data berdasarkan index
        isOpen={isOpenRekognisi}
        index={outputIndexpr1}
        onRequestClose={closeModalRekognisi}
        onSave={handleOutputDatapr1}
      />
      <ModalPoster
        isOpen={isOpenPoster}
        onRequestClose={closeModalPoster}
        index={outputIndexpr2}
        onSave={handleOutputDatapr2}
        data={data.output_final_report2s}
      />
      <ModalVideo
        isOpen={isOpenVideo}
        index={outputIndexpr3}
        onSave={handleOutputDatapr3}
        onRequestClose={closeModalVideo}
        data={data.output_final_report3s}
      />
      <ModalLuaranWajibInternasional
        isOpen={isOpenArtikel}
        onRequestClose={closeModalArtikel}
        index={outputIndexpr4}
        onSave={handleOutputDatapr4}
        data={data.output_final_report4s}
      />
      <ModalLuaranElektronik
        isOpen={isOpenElektronik}
        onRequestClose={closeModalElektronik}
      />
      <ModalLuaranKetrampilan
        isOpen={isOpenKetrampilan}
        onRequestClose={closeModalKetrampilan}
      />
      <ModalLuaranKemampuan
        isOpen={isOpenKemampuan}
        onRequestClose={closeModalKemampuan}
      />
      <ModalLuaranPpt isOpen={isOpennPPT} onRequestClose={closeModalPPT} />
      <ModalLuaranPdf isOpen={isOpenPdfHasil} onRequestClose={closeModalPDF} />
      <ModalLuaranTambahan
        isOpen={isOpenLuaranTambahan}
        onRequestClose={closeModalLuaranTambahan}
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
                Judul
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
            {console.log(data?.output_final_report1s)}
            {(service?.output_partner || []).map((item, index) => (
              <tr key={index}>
                <td className="border border-black px-4 py-2 align-middle">
                  {1}
                </td>
                <td className="border border-black px-4 py-2 align-middle">
                  {service?.title}
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
            {console.log(data?.output_final_report2s)}
            {(service?.output_publication || []).map((item, index) => (
              <tr key={index}>
                <td className="border border-black px-4 py-2 align-middle">
                  {2}
                </td>
                <td className="border border-black px-4 py-2 align-middle">
                  {item.description}
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
            {console.log(data?.output_final_report3s)}
            {(service?.output_media || []).map((item, index) => (
              <tr key={index}>
                <td className="border border-black px-4 py-2 align-middle">
                  {3}
                </td>
                <td className="border border-black px-4 py-2 align-middle">
                  {item.description}
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
            {console.log(data?.output_final_report4s)}
            {(service?.output_video || []).map((item, index) => (
              <tr key={index}>
                <td className="border border-black px-4 py-2 align-middle">
                  {4}
                </td>
                <td className="border border-black px-4 py-2 align-middle">
                  {item.description}
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
          </tbody>
        </table>
      </div>
      {/* <div>
        <h1 className="text-lg font-bold font-sans text-violet-800">
          Presentasi Pelaksanaan Pengabdian kepada Masyarakat
        </h1>
      </div> */}
      {/* Tabel */}
      {/* <div className="relative overflow-x-auto my-10">
        <table className="w-full text-sm text-center bg-neutral-20 text-gray-500 border border-gray-300">
          <thead className="border border-gray-300 text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="border border-black px-4 py-2 align-middle">No</th>
              <th className="border border-black px-4 py-2 align-middle">
                Judul
              </th>
              <th className="border border-black px-4 py-2 align-middle">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black px-4 py-2 align-middle">1</td>
              <td className="border border-black px-4 py-2 break-words text-left">
                Presentasi Power Point
              </td>
              <td className="border border-black px-4 py-2 align-middle">
                <button
                  onClick={openModalPPT}
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
          </tbody>
        </table>
      </div>
      <div>
        <h1 className="text-lg font-bold font-sans text-violet-800">
          Rencana Hasil Pelaksanaan
        </h1>
      </div> */}
      {/* Tabel */}
      {/* <div className="relative overflow-x-auto my-10">
        <table className="w-full text-sm text-center bg-neutral-20 text-gray-500 border border-gray-300">
          <thead className="border border-gray-300 text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="border border-black px-4 py-2 align-middle">No</th>
              <th className="border border-black px-4 py-2 align-middle">
                Judul
              </th>
              <th className="border border-black px-4 py-2 align-middle">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black px-4 py-2 align-middle">1</td>
              <td className="border border-black px-4 py-2 break-words text-left">
                PDF Hasil Pelaksanaan
              </td>
              <td className="border border-black px-4 py-2 align-middle">
                <button
                  onClick={openModalPdf}
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
          </tbody>
        </table>
      </div>
      <div>
        <h1 className="text-lg font-bold font-sans text-violet-800">
          Luaran Tambahan
        </h1>
      </div> */}
      {/* Tabel */}
      {/* <div className="relative overflow-x-auto my-10">
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
            <tr>
              <td className="border border-black px-4 py-2 break-words text-left">
                Luaran Tambahan
              </td>
              <td className="border border-black px-4 py-2 align-middle">
                <button
                  onClick={openModalLuaranTambahan}
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
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default LaporanAkhirTab1;
