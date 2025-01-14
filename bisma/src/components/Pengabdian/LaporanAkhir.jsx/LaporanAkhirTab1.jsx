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

const LaporanAkhirTab1 = (setData) => {
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

  const handleFileChange = (event) => {
    setData((prevData) => ({
      ...prevData,
      substance: event.target.files[0],
    }));
  };
  return (
    <div>
      <ModalRekognisi
        isOpen={isOpenRekognisi}
        onRequestClose={closeModalRekognisi}
      />
      <ModalPoster isOpen={isOpenPoster} onRequestClose={closeModalPoster} />
      <ModalVideo isOpen={isOpenVideo} onRequestClose={closeModalVideo} />
      <ModalLuaranWajibInternasional
        isOpen={isOpenArtikel}
        onRequestClose={closeModalArtikel}
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
        <TextAreaCmp placeholder={`Ringksan Penelitian`} rows={4} />
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
              onChange={handleFileChange}
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
      </div>
    </div>
  );
};

export default LaporanAkhirTab1;
