import React, { useState } from "react";
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

const LaporanKemajuanTab1 = ({service, data, setData}) => {
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

  const tableRows = [
    {
      no: 1,
      title: "Rekognisi mahasiswa menjadi bagian MBKM minimal 6 (enam) SKS ",
      target: "Tercapai",
      saatini: "Tercapai",
      actionIcon: "/assets/act_edit.svg",
      onEdit: () => {
        console.log(
          "Editing row with title:",
          "Artikel di Jurnal Bereputasi-Buplikasi_Jurnal"
        );
        openModalRekognisi();
      },
    },
    {
      no: 2,
      title: "Poster",
      actionIcon: "/assets/act_edit.svg",
      target: "Tercapai",
      saatini: "Tercapai",
      onEdit: () => {
        console.log("Editing row with title:", "Laporan Akhir Penelitian");
        openModalPoster();
      },
    },
    {
      no: 3,
      title: "Video kegiatan",
      actionIcon: "/assets/act_edit.svg",
      target: "Tercapai",
      saatini: "Tercapai",
      onEdit: () => {
        console.log("Editing row with title:", "Laporan Akhir Penelitian");
        openModalVideo();
      },
    },
    {
      no: 4,
      title: "Artikel ilmiah pada jurnal terindeks SINTA",
      actionIcon: "/assets/act_edit.svg",
      target: "Published",
      saatini: "Published",
      onEdit: () => {
        console.log("Editing row with title:", "Laporan Akhir Penelitian");
        openModalArtikel();
      },
    },
    {
      no: 5,
      title: "Elektronik",
      actionIcon: "/assets/act_edit.svg",
      target: "Terbit",
      saatini: "Terbit",
      onEdit: () => {
        console.log("Editing row with title:", "Laporan Akhir Penelitian");
        openModalElektronik();
      },
    },
    {
      no: 6,
      title: "Peningkatan Keterampilan",
      actionIcon: "/assets/act_edit.svg",
      target: "Tercapai",
      saatini: "Tercapai",
      onEdit: () => {
        console.log("Editing row with title:", "Laporan Akhir Penelitian");
        openModalKetrampilan();
      },
    },
    {
      no: 7,
      title: "Peningkatan Kemampuan Manajemen",
      actionIcon: "/assets/act_edit.svg",
      target: "Tercapai",
      saatini: "Tercapai",
      onEdit: () => {
        console.log("Editing row with title:", "Laporan Akhir Penelitian");
        openModalKemampuan();
      },
    },
  ];

  const handleDropdownChange = (option) => {
    setSelectedOption(option);
  };

  const openModalRekognisi = () => {
    setIsOpenRekognisi(true);
  };

  const closeModalRekognisi = () => {
    setIsOpenRekognisi(false);
  };

  const openModalPoster = () => {
    setIsOpenPoster(true);
  };

  const closeModalPoster = () => {
    setIsOpenPoster(false);
  };

  const openModalVideo = () => {
    setIsOpenVideo(true);
  };

  const closeModalVideo = () => {
    setIsOpenVideo(false);
  };
  const openModalArtikel = () => {
    setIsOpenArtikel(true);
  };

  const closeModalArtikel = () => {
    setIsOpenArtikel(false);
  };
  const openModalElektronik = () => {
    setIsOpenElektronik(true);
  };

  const closeModalElektronik = () => {
    setIsOpenElektronik(false);
  };
  const openModalKetrampilan = () => {
    setIsOpenRekKetrampilan(true);
  };

  const closeModalKetrampilan = () => {
    setIsOpenRekKetrampilan(false);
  };
  const openModalKemampuan = () => {
    setIsOpenKemampuan(true);
  };

  const closeModalKemampuan = () => {
    setIsOpenKemampuan(false);
  };
  const openModalPPT = () => {
    setIsOpenPPT(true);
  };

  const closeModalPPT = () => {
    setIsOpenPPT(false);
  };
  const openModalPdf = () => {
    setIsOpenPdfHasil(true);
  };

  const closeModalPDF = () => {
    setIsOpenPdfHasil(false);
  };
  const openModalLuaranTambahan = () => {
    setIsOpenTambahan(true);
  };

  const closeModalLuaranTambahan = () => {
    setIsOpenTambahan(false);
  };

  //1
  const [outputIndex1, setOutputIndex1] = useState(0);
  const handleOutputData1 = (index, outputData1) => {
    const updatedOutput1 = Array.isArray(data.output_progress_report1s)
      ? [...data.output_progress_report1s]
      : [];
    updatedOutput1[index] = outputData1;
    setData({ ...data, output_progress_report1s: updatedOutput1 });
    console.log(data);
  };

  //2
  const [outputIndex2, setOutputIndex2] = useState(0);
  const handleOutputData2 = (index, outputData2) => {
    const updatedOutput2 = Array.isArray(data.output_progress_report2s)
      ? [...data.output_progress_report2s]
      : [];
    updatedOutput2[index] = outputData2;
    setData({ ...data, output_progress_report1s: updatedOutput2 });
    console.log(data);
  };

  //3
  const [outputIndex3, setOutputIndex3] = useState(0);
  const handleOutputData3 = (index, outputData3) => {
    const updatedOutput3 = Array.isArray(data.output_progress_report3s)
      ? [...data.output_progress_report3s]
      : [];
    updatedOutput3[index] = outputData3;
    setData({ ...data, output_progress_report3s: updatedOutput3 });
    console.log(data);
  };

  //4
  const [outputIndex4, setOutputIndex4] = useState(0);
  const handleOutputData4 = (index, outputData4) => {
    const updatedOutput4 = Array.isArray(data.output_progress_report4s)
      ? [...data.output_progress_report4s]
      : [];
    updatedOutput4[index] = outputData4;
    setData({ ...data, output_progress_report4s: updatedOutput4 });
    console.log(data);
  };

  //5
  const [outputIndex5, setOutputIndex5] = useState(0);
  const handleOutputData5 = (index, outputData5) => {
    const updatedOutput5 = Array.isArray(data.output_progress_report5s)
      ? [...data.output_progress_report5s]
      : [];
    updatedOutput5[index] = outputData5;
    setData({ ...data, output_progress_report5s: updatedOutput5 });
    console.log(data);
  };

  //6
  const [outputIndex6, setOutputIndex6] = useState(0);
  const handleOutputData6 = (index, outputData6) => {
    const updatedOutput6 = Array.isArray(data.output_progress_report6s)
      ? [...data.output_progress_report6s]
      : [];
    updatedOutput6[index] = outputData6;
    setData({ ...data, output_progress_report6s: updatedOutput6 });
    console.log(data);
  };

  //7
  const [outputIndex7, setOutputIndex7] = useState(0);
  const handleOutputData7 = (index, outputData7) => {
    const updatedOutput7 = Array.isArray(data.output_progress_report7s)
      ? [...data.output_progress_report7s]
      : [];
    updatedOutput7[index] = outputData7;
    setData({ ...data, output_progress_report7s: updatedOutput7 });
    console.log(data);
  };

  //8
  const [outputIndex8, setOutputIndex8] = useState(0);
  const handleOutputData8 = (index, outputData8) => {
    const updatedOutput8 = Array.isArray(data.output_progress_report8s)
      ? [...data.output_progress_report8s]
      : [];
    updatedOutput8[index] = outputData8;
    setData({ ...data, output_progress_report8s: updatedOutput8 });
    console.log(data);
  };

  //9
  const [outputIndex9, setOutputIndex9] = useState(0);
  const handleOutputData9 = (index, outputData9) => {
    const updatedOutput9 = Array.isArray(data.output_progress_report9s)
      ? [...data.output_progress_report9s]
      : [];
    updatedOutput9[index] = outputData9;
    setData({ ...data, output_progress_report9s: updatedOutput9 });
    console.log(data);
  };

  //10
  const [outputIndex10, setOutputIndex10] = useState(0);
  const handleOutputData10 = (index, outputData10) => {
    const updatedOutput10 = Array.isArray(data.output_progress_report10s)
      ? [...data.output_progress_report10s]
      : [];
    updatedOutput10[index] = outputData10;
    setData({ ...data, output_progress_report10s: updatedOutput10 });
    console.log(data);
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
  return (
    <div>
      <ModalRekognisi
        data={data.outputData1}
        isOpen={isOpenRekognisi}
        onRequestClose={closeModalRekognisi}
        index={outputIndex1}
        onSave={handleOutputData1}
      />
      <ModalPoster
        isOpen={isOpenPoster}
        onRequestClose={closeModalPoster}
        index={outputIndex2}
        onSave={handleOutputData2}
      />
      <ModalVideo
        isOpen={isOpenVideo}
        index={outputIndex3}
        onSave={handleOutputData3}
        onRequestClose={closeModalVideo}
      />
      <ModalLuaranWajibInternasional
        isOpen={isOpenArtikel}
        onRequestClose={closeModalArtikel}
        index={outputIndex4}
        onSave={handleOutputData4}
      />
      <ModalLuaranElektronik
        isOpen={isOpenElektronik}
        onRequestClose={closeModalElektronik}
        index={outputIndex5}
        onSave={handleOutputData5}
      />
      <ModalLuaranKetrampilan
        isOpen={isOpenKetrampilan}
        onRequestClose={closeModalKetrampilan}
        index={outputIndex6}
        onSave={handleOutputData6}
      />
      <ModalLuaranKemampuan
        isOpen={isOpenKemampuan}
        onRequestClose={closeModalKemampuan}
        index={outputIndex7}
        onSave={handleOutputData7}
      />
      <ModalLuaranPpt
        isOpen={isOpennPPT}
        onRequestClose={closeModalPPT}
        index={outputIndex8}
        onSave={handleOutputData8}
      />
      <ModalLuaranPdf
        isOpen={isOpenPdfHasil}
        onRequestClose={closeModalPDF}
        index={outputIndex9}
        onSave={handleOutputData4}
      />
      <ModalLuaranTambahan
        isOpen={isOpenLuaranTambahan}
        onRequestClose={closeModalLuaranTambahan}
        index={outputIndex10}
        onSave={handleOutputData1}
      />

      <div>
        {/* <ModalEditLapKemajuanTab1 isOpen={isOpen} onRequestClose={closeModal} /> */}
        <label className="text-lg font-bold font-sans text-gray-800">
          Ringkasan
        </label>
        {/* <h2 className="text-md font-sans text-gray-800 my-5">
        Tuliskan secara ringkas latar belakang penlitian, tujuan dan tahapan
          metode, luaran yang ditargetkan, dan hasil yang diperoleh sesuai
          dengan tahun pelaksanaan
        </h2> */}
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
                Status Target
              </th>
              <th className="border border-black px-4 py-2 align-middle">
                Status Status Saat ini
              </th>
              <th className="border border-black px-4 py-2 align-middle">
                Judul
              </th>
              <th className="border border-black px-4 py-2 align-middle">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="text-black">
            {tableRows.map((row, index) => (
              <tr key={index}>
                <td className="border border-black px-4 py-2 align-middle">
                  {row.no}
                </td>
                <td className="border border-black px-4 py-2 break-words text-left">
                  {row.title}
                </td>
                <td className="border border-black px-4 py-2 break-words text-left">
                  {row.target}
                </td>
                <td className="border border-black px-4 py-2 break-words text-left">
                  {row.saatini}
                </td>
                <td className="border border-black px-4 py-2 align-middle">
                  <button
                    onClick={row.onEdit}
                    className=" items-center px-2 py-1 rounded-md hover:text-cyan-500"
                  >
                    <img
                      src={process.env.PUBLIC_URL + row.actionIcon}
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
      </div>
      {/* Tabel */}
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
          {(service?.output || []).map((item, index) => (
            <tr key={index}>
              <td className="border border-black px-4 py-2 break-words text-left">
              {item.description}
              </td>
              <td className="border border-black px-4 py-2 align-middle">
                <button
                  onClick={()=>openModalLuaranTambahan(index)}
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

export default LaporanKemajuanTab1;
