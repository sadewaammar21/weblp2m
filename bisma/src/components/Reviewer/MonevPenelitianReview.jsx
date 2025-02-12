import React, { useState, useEffect } from "react";
import TextAreaCmp from "../TextAreaCmp";
import ModalMonevPenelitian from "./ModalMonevPenelitian";
import { FaChevronRight } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import {
  addMonevResearch,
  getResearchDetail,
} from "../../Features/ResearchSlice";
import TextfieldCmp from "../TextfieldCmp";

const MonevPenelitianReview = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({});
  const [reviewData, setReviewData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const id = location.state.id;
  console.log(id);
  const user = JSON.parse(localStorage.getItem("user"));
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await getResearchDetail(id);
      setData(response.data);
      console.log(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
    setReviewData({ ...reviewData, ["research_id"]: id });
    // return () => console.log(data);
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleInputChange = () => (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setReviewData((prevData) => ({
      ...prevData,
      [inputName]: inputValue,
    }));
  };

  const navigate = useNavigate(); // Hook untuk navigasi

  const handleSave = async () => {
    console.log(reviewData);
    const response = await addMonevResearch(reviewData);
    console.log(response.message);
    navigate(-1);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
      <h1 className="text-xl font-bold text-violet-800 mx-5 my-5">
        MONITORING DAN EVALUASI PENELITIAN
      </h1>
      <div className="container mx-auto">
        <div className="bg-gray-50 shadow-sm rounded-sm p-5 mx-2">
          <div className="flex space-x-10">
            <div className="p-4 bg-violet-100 w-full rounded-md">
              <div className="flex">
                <img
                  src={process.env.PUBLIC_URL + "/assets/information.svg"}
                  alt="logo"
                  className="w-6 h-6 mr-4"
                />
                <h2 className="text-md font-bold text-violet-800">Informasi</h2>
              </div>
              <div className="my-2 flex">
                <h2 className="text-sm font-sans text-violet-800 mr-1">
                  Usulan penelitian anda telah
                </h2>
                <h2 className="text-sm font-sans font-bold text-violet-800 mr-1">
                  disetujui oleh kaprodi
                </h2>
              </div>
            </div>
            <button className="cursor-pointer">
              <img
                src={process.env.PUBLIC_URL + "/assets/icon_pdf_brks.svg"}
                alt="user"
                className="w-15 h-15"
              />
            </button>
          </div>
          <div className="flex justify-between my-5">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200 shadow-md rounded-lg boder border-black border-l-2 border-r-2 border-t-2 border-b-2 ">
                <tbody>
                  <tr className=" boder border-black border-b-2">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-sans">
                      Judul
                    </td>
                    <td className="px-6 py-4 whitespace-normal break-words text-sm font-bold text-right">
                      {data?.title}
                    </td>
                  </tr>

                  <tr className="boder border-black border-b-2">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-sans ">
                      Kelompok Skema
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">
                      {data.scheme.name}
                    </td>
                  </tr>
                  <tr className=" boder border-black border-b-2">
                    <td className="px-6 py-4 text-sm font-sans ">
                      Ruang Lingkup
                    </td>
                    <td className="px-6 py-4 text-sm font-bold whitespace-normal break-words text-right">
                      {data.scope.name}
                    </td>
                  </tr>

                  <tr className=" boder border-black border-b-2">
                    <td className="px-6 py-4 text-sm font-sans ">
                      Bidang Fokus
                    </td>
                    <td className="px-6 py-4 text-sm font-bold whitespace-normal break-words text-right">
                      {data.research_focus.name}
                    </td>
                  </tr>
                  <tr className=" boder border-black border-b-2">
                    <td className="px-6 py-4 text-sm font-sans ">
                      Tahun Usulan{" "}
                    </td>
                    <td className="px-6 py-4 text-sm font-bold whitespace-normal break-words text-right">
                      {data?.year}
                    </td>
                  </tr>
                  <tr className=" boder border-black border-b-2">
                    <td className="px-6 py-4 text-sm font-sans ">
                      Tahun Pelaksanaan
                    </td>
                    <td className="px-6 py-4 text-sm font-bold whitespace-normal break-words text-right">
                      {data?.year}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="max-w-4xl mx-10 bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200 shadow-md rounded-lg boder border-black border-l-2 border-r-2 border-t-2 border-b-2 ">
                <tbody>
                  <tr className=" boder border-black border-b-2">
                    <td className="px-6 py-4 text-sm font-sans ">
                      Lama Kegiatan
                    </td>
                    <td className="px-6 py-4 text-sm font-bold whitespace-normal break-words text-right">
                      {data?.duration} Tahun
                    </td>
                  </tr>
                  <tr className=" boder border-black border-b-2">
                    <td className="px-6 py-4 text-sm font-sans ">
                      Tema Penelitan
                    </td>
                    <td className="px-6 py-4 text-sm font-bold whitespace-normal break-words text-right">
                      {data?.research_theme.name}
                    </td>
                  </tr>
                  <tr className=" boder border-black border-b-2">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-sans">
                      Topik Penelitian
                    </td>
                    <td className="px-6 py-4 whitespace-normal break-words text-sm font-bold text-right">
                      {data?.research_topic.name}
                    </td>
                  </tr>
                  <tr className="boder border-black border-b-2">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-sans">
                      Rumpun Ilmu Level 3
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">
                      {data?.science_cluster3.name}
                    </td>
                  </tr>

                  <tr className="bg-gray-50 boder border-black border-b-2">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-sans">
                      Target TKT
                    </td>
                    <td className="px-6 py-4 whitespace-normal break-words text-sm font-bold text-right max-w-md">
                      {data?.tkt_final}
                    </td>
                  </tr>

                  <tr className="boder border-black border-b-2">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-sans ">
                      Profil Sinta Ketua Pengusul
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">
                      {user.sinta_id ?? 0}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Main Table */}
          <div>
            <h1 className="text-xl font-bold text-violet-800 mx-5 my-5">
              Penilaian Monitoring dan Evaluasi Skema Riset Terapan
            </h1>
            <div
              className="relative bg-white shadow-md rounded-lg p-5 overflow-auto"
              style={{ maxHeight: "auto", overflow: "visible" }}
            >
              <table className="w-full text-sm text-gray-500 border border-black">
                <thead className="bg-gray-50 text-xs text-gray-700 uppercase">
                  <tr>
                    <th className="border border-black px-4 py-2">No</th>
                    <th className="border border-black px-4 py-2 text-left">
                      Komponen Penilaian
                    </th>
                    <th className="border border-black px-4 py-2 text-center">
                      Komentar Review
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      label:
                        "Kemajuan ketercapaian luaran wajib yang dijanjikan",
                      name: "comment1",
                      value: reviewData.comment1,
                    },
                    {
                      label: "Kesesuaian penelitian dengan usulan",
                      name: "comment2",
                      value: reviewData.comment2,
                    },
                    {
                      label: "Potensi keberlanjutan hasil penelitian",
                      name: "comment3",
                      value: reviewData.comment3,
                    },
                    {
                      label: "Level TKT saat ini (monev)",
                      name: "comment4",
                      value: reviewData.comment4,
                    },
                    {
                      label: "Persentase serapan anggaran belanja",
                      name: "comment5",
                      value: reviewData.comment5,
                    },
                    {
                      label: "Realisasi keterlibatan/kontribusi mitra",
                      name: "comment6",
                      value: reviewData.comment6,
                    },
                  ].map((komponen, index) => (
                    <tr key={index}>
                      <td className="border border-black px-4 py-2 text-center">
                        {index + 1}
                      </td>
                      <td className="border border-black px-4 py-2 text-left">
                        {komponen.label}
                      </td>
                      <td className="border border-black px-4 py-2">
                        <textarea
                          className="w-full border rounded p-2"
                          name={komponen.name}
                          value={komponen.value}
                          onChange={handleInputChange()}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="my-5">
              <div className="p-4 bg-reds-100 w-full rounded-md">
                <div className="flex">
                  <img
                    src={process.env.PUBLIC_URL + "/assets/information.svg"}
                    alt="logo"
                    className="w-6 h-6 mr-4"
                    style={{ filter: "invert(0%) brightness(0%) saturate(0%)" }}
                  />
                  <h2 className="text-md font-semibold text-neutral-800 mr-1">
                    Informasi Mengenai Penilaian Monitoring dan Evaluasi
                    Penelitian
                  </h2>
                </div>
                <div className="my-2">
                  <span
                    className="text-bluef-500 cursor-pointer hover:underline"
                    onClick={openModal}
                  >
                    Klik Disini
                  </span>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-center">
                      No
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-center">
                      Komponen Penilaian
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-center">
                      Item
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-center">
                      Nilai
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      className="border border-gray-300 px-4 py-2 text-center"
                      rowSpan="3"
                    >
                      1
                    </td>
                    <td
                      className="border border-gray-300 px-4 py-2 text-left"
                      rowSpan="3"
                    >
                      Kemajuan ketercapaian luaran yang dijanjikan
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Kualitas dokumen luaran
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <TextfieldCmp
                        value={reviewData.score1}
                        name="score1"
                        onChange={handleInputChange()}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Kesesuaian isi dokumen dengan substansi penelitian
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <TextfieldCmp
                        value={reviewData.score2}
                        name="score2"
                        onChange={handleInputChange()}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Kesesuaian dengan periode pendanaan
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <TextfieldCmp
                        value={reviewData.score3}
                        name="score3"
                        onChange={handleInputChange()}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="border border-gray-300 px-4 py-2 text-center"
                      rowSpan="2"
                    >
                      2
                    </td>
                    <td
                      className="border border-gray-300 px-4 py-2 text-left"
                      rowSpan="2"
                    >
                      Kesesuaian penelitian dengan usulan
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Kesesuaian pelaksanaan penelitian dengan usulan
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <TextfieldCmp
                        value={reviewData.score4}
                        name="score4"
                        onChange={handleInputChange()}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Penelitian dengan usulan
                    </td>
                    <td
                      className="border border-gray-300 px-4 py-2"
                      rowSpan={`3`}
                    >
                      <TextfieldCmp
                        value={reviewData.score5}
                        name="score5"
                        onChange={handleInputChange()}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h1 className="text-xl font-bold text-violet-800 mx-5 my-5">
              Catatan Review
            </h1>
            <div>
              <TextAreaCmp
                name="reviewer_note"
                value={reviewData.reviewer_note}
                rows={10}
                placeholder={`fill`}
                onChange={handleInputChange()}
              />
            </div>
            <div className="flex justify-between my-10">
              <button
                className=" bg-white text-red-500 border border-red-500 px-4 py-2 rounded hover:bg-red-100"
                // onClick={onRequestClose}
              >
                Cancel
              </button>
              <button
                className="flex items-center bg-bluef-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleSave} // Ganti dengan aksi yang sesuai
              >
                Simpan
                <FaChevronRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <ModalMonevPenelitian isOpen={isOpen} onRequestClose={closeModal} />
    </div>
  );
};

export default MonevPenelitianReview;
