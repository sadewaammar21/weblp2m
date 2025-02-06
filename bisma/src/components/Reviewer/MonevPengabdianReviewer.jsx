import React, { useState, useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ModalMonevPengabdian from "./ModalMonevPengabdian";
import TextAreaCmp from "../TextAreaCmp";
import { FaChevronRight } from "react-icons/fa";
import { addMonevService, getServiceDetail } from "../../Features/ServiceSlice";

const MonevPengabdianReviewer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [reviewData, setReviewData] = useState({});
  const [data, setData] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const id = location.state.id;
  console.log(id)
  const user = JSON.parse(localStorage.getItem("user"));
  const fetchData = async() =>{
      try {
        setLoading(true);
        const response = await getServiceDetail(id);
        setData(response);
        console.log(data);
      } catch (error) {
        setError(true)
      }finally{
        setLoading(false)
      }
    }
  useEffect(() => {
    fetchData();
    setReviewData({...reviewData, ['comunity_service_id']: id})
    return () => console.log(data);
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // const handleResponseChange = (row, value) => {
  //   setReviewData((prev) => ({
  //     ...prev,
  //     [row]: prev[row] === value ? undefined : value, // Toggle logic
  //   }));
  // };

  const handleResponseChange = async (id, value) => {
    setReviewData({ ...reviewData, [id]: value });
    console.log(reviewData);
  };

  const handleInputChange = () => (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setReviewData((prevData) => ({
      ...prevData,
      [inputName]: inputValue,
    }));
  };


  const handleSave = async () => {
     console.log(reviewData)
         const response = await addMonevService(reviewData);
         console.log(response.message);
         navigate(-1);
  };

  // const handleResponseChange = async () => {
  //    console.log(reviewData)
  //       const response = await addMonevService(reviewData);
  //       console.log(response.message);
  //       navigate(-1);
  // };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
      <h1 className="text-xl font-bold text-violet-800 mx-5 my-5">
        MONITORING DAN EVALUASI PENGABDIAN
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
                      {data?.scheme.name}
                    </td>
                  </tr>
                  <tr className=" boder border-black border-b-2">
                    <td className="px-6 py-4 text-sm font-sans ">
                      Ruang Lingkup
                    </td>
                    <td className="px-6 py-4 text-sm font-bold whitespace-normal break-words text-right">
                      {data?.scope.name}
                    </td>
                  </tr>

                  <tr className=" boder border-black border-b-2">
                    <td className="px-6 py-4 text-sm font-sans ">
                      Bidang Fokus
                    </td>
                    <td className="px-6 py-4 text-sm font-bold whitespace-normal break-words text-right">
                    {data?.focus_thematic?.name || data?.focus_rirn?.name}
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
                      Rumpun Ilmu Level 1
                    </td>
                    <td className="px-6 py-4 text-sm font-bold whitespace-normal break-words text-right">
                      {data?.cluster_lv1.name}
                    </td>
                  </tr>
                  <tr className=" boder border-black border-b-2">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-sans">
                    Rumpun Ilmu Level 2
                    </td>
                    <td className="px-6 py-4 whitespace-normal break-words text-sm font-bold text-right">
                      {data?.cluster_lv2.name}
                    </td>
                  </tr>
                  <tr className="boder border-black border-b-2">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-sans">
                      Rumpun Ilmu Level 3
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">
                      {data?.cluster_lv3.name}
                    </td>
                  </tr>

                  <tr className="bg-gray-50 boder border-black border-b-2">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-sans">
                      Kategori
                    </td>
                    <td className="px-6 py-4 whitespace-normal break-words text-sm font-bold text-right max-w-md">
                    {data?.category.name}
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
          <h1 className="text-xl font-bold text-violet-800 mx-5 my-5">
            Penilaian Monitoring dan Evaluasi Skema Riset Terapan
          </h1>
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
          <ModalMonevPengabdian isOpen={isOpen} closeModal={closeModal} />
          {/* main table */}
          <h2 className="text-md font-sans font-bold text-black mr-1">
            Kehadiran dan Pelaksanaan ((A+B+C+D+E)/10)
          </h2>
          <div className="overflow-x-auto my-5">
          <table className="table-auto w-full border-collapse border border-black">
            <thead>
              <tr>
                <th
                  className="border border-black p-2 border-b-0 border-r-2"
                  rowSpan={2}
                >
                  No
                </th>
                <th className="border border-black p-2 border-b-0" rowSpan={2}>
                  Komponen
                </th>
                <th className="border border-black p-2 border-b-0" rowSpan={2} colSpan={2}>
                  Opsi Komponen
                </th>
                <th className="border border-black p-2" colSpan={4}>
                  Nilai
                </th>
              </tr>
              <tr>
                <th className="border border-black p-2">1</th>
                <th className="border border-black p-2">2</th>
                <th className="border border-black p-2">3</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  id: "presence_1",
                  grade: "A",
                  text: " Kemampuan presentasi  dan penguasaan materi  usulan",
                },
                {
                  id: "presence_2",
                  grade: "B",
                  text: " Kehadiran Pelaksana",
                },
                {
                  id: "presence_3",
                  grade: "C",
                  text: " Kesiapan dan  Kelengkapan Pelaksana",
                },
                {
                  id: "presence_4",
                  grade: "D",
                  text: " Ketepatan waktu",
                },
                {
                  id: "presence_5",
                  grade: "E",
                  text: " Kesesuaian substansi  usulan dengan materi  presentasi",
                },
              ].map((item, index) => (
                <tr key={item.id} className="text-center">
                  {index === 0 && (
                    <td
                      rowSpan={5}
                      className="border border-black p-2 text-center"
                    >
                      1
                    </td>
                  )}
                  {index === 0 && (
                    <td
                      rowSpan={5}
                      className="border border-black p-2 text-left"
                    >
                      Kehadiran Pelaksanaan
                    </td>
                  )}
                  <td className="border border-black p-2 text-center">
                    {item.grade}
                  </td>
                  <td className="border border-black p-2 text-left">
                    {item.text}
                  </td>
                  <td className="border border-black px-4 py-2 text-center">
                    <input
                      type="checkbox"
                      value={0}
                      checked={reviewData[item.id] === 0}
                      onChange={() => handleResponseChange(item.id, 0)}
                      className="w-6 h-6 accent-blue-500"
                    />
                  </td>
                  <td className="border border-black px-4 py-2 text-center">
                    <input
                      type="checkbox"
                      value={50}
                      checked={reviewData[item.id] === 50}
                      onChange={() => handleResponseChange(item.id, 50)}
                      className="w-6 h-6 accent-blue-500"
                    />
                  </td>
                  <td className="border border-black px-4 py-2 text-center">
                    <input
                      type="checkbox"
                      value={100}
                      checked={reviewData[item.id] === 100}
                      onChange={() => handleResponseChange(item.id, 100)}
                      className="w-6 h-6 accent-blue-500"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          <h2 className="text-md font-sans font-bold text-black mr-1">
            Artikel publikasi berita pada media massa (cetak/elektronik)
            ((A)/10)
          </h2>
          <div className="overflow-x-auto my-10">
          <table className="table-auto w-full border-collapse border border-black">
            <thead>
              <tr>
                <th
                  className="border border-black p-2 border-b-0 border-r-2"
                  rowSpan={2}
                >
                  No
                </th>
                <th className="border border-black p-2 border-b-0" rowSpan={2}>
                  Komponen
                </th>
                <th className="border border-black p-2 border-b-0" rowSpan={2} colSpan={2}>
                  Opsi Komponen
                </th>
                <th className="border border-black p-2" colSpan={5}>
                  Nilai
                </th>
              </tr>
              <tr>
                <th className="border border-black p-2">1</th>
                <th className="border border-black p-2">2</th>
                <th className="border border-black p-2">3</th>
                <th className="border border-black p-2">4</th>
                <th className="border border-black p-2">5</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  id: "article_publication",
                  grade: "A",
                  text: " Artikel publikasi berita pada media massa (cetak/elektronik)",
                },
              ].map((item, index) => (
                <tr key={item.id} className="text-center">
                  {index === 0 && (
                    <td
                      rowSpan={5}
                      className="border border-black p-2 text-center"
                    >
                      1
                    </td>
                  )}
                  {index === 0 && (
                    <td
                      rowSpan={5}
                      className="border border-black p-2 text-left"
                    >
                      Artikel publikasi berita pada media massa
                    </td>
                  )}
                  <td className="border border-black p-2 text-center">
                    {item.grade}
                  </td>
                  <td className="border border-black p-2 text-left">
                    {item.text}
                  </td>
                  <td className="border border-black px-4 py-2 text-center">
                    <input
                      type="checkbox"
                      value={0}
                      checked={reviewData[item.id] === 0}
                      onChange={() => handleResponseChange(item.id, 0)}
                      className="w-6 h-6 accent-blue-500"
                    />
                  </td>
                  <td className="border border-black px-4 py-2 text-center">
                    <input
                      type="checkbox"
                      value={10}
                      checked={reviewData[item.id] === 10}
                      onChange={() => handleResponseChange(item.id, 10)}
                      className="w-6 h-6 accent-blue-500"
                    />
                  </td>
                  <td className="border border-black px-4 py-2 text-center">
                    <input
                      type="checkbox"
                      value={20}
                      checked={reviewData[item.id] === 20}
                      onChange={() => handleResponseChange(item.id, 20)}
                      className="w-6 h-6 accent-blue-500"
                    />
                  </td>
                  <td className="border border-black px-4 py-2 text-center">
                    <input
                      type="checkbox"
                      value={70}
                      checked={reviewData[item.id] === 70}
                      onChange={() => handleResponseChange(item.id, 70)}
                      className="w-6 h-6 accent-blue-500"
                    />
                  </td>
                  <td className="border border-black px-4 py-2 text-center">
                    <input
                      type="checkbox"
                      value={100}
                      checked={reviewData[item.id] === 100}
                      onChange={() => handleResponseChange(item.id, 100)}
                      className="w-6 h-6 accent-blue-500"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          <h2 className="text-md font-sans font-bold text-black mr-1">
            Publikasi pada Jurnal nasional terakreditasi SINTA 1-6 ((A)/10)
          </h2>
          <div className="overflow-x-auto my-10">
          <table className="table-auto w-full border-collapse border border-black">
            <thead>
              <tr>
                <th
                  className="border border-black p-2 border-b-0 border-r-2"
                  rowSpan={2}
                >
                  No
                </th>
                <th className="border border-black p-2 border-b-0" rowSpan={2}>
                  Komponen
                </th>
                <th className="border border-black p-2 border-b-0" rowSpan={2} colSpan={2}>
                  Opsi Komponen
                </th>
                <th className="border border-black p-2" colSpan={5}>
                  Nilai
                </th>
              </tr>
              <tr>
                <th className="border border-black p-2">1</th>
                <th className="border border-black p-2">2</th>
                <th className="border border-black p-2">3</th>
                <th className="border border-black p-2">4</th>
                <th className="border border-black p-2">5</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  id: "publication_journal",
                  grade: "A",
                  text: " Publikasi pada Jurnal  nasional terakreditasi  SINTA 1-6",
                },
              ].map((item, index) => (
                <tr key={item.id} className="text-center">
                  {index === 0 && (
                    <td
                      rowSpan={5}
                      className="border border-black p-2 text-center"
                    >
                      1
                    </td>
                  )}
                  {index === 0 && (
                    <td
                      rowSpan={5}
                      className="border border-black p-2 text-left"
                    >
                      Publikasi pada Jurnal nasional terakreditasi SINTA 1-6
                    </td>
                  )}
                  <td className="border border-black p-2 text-center">
                    {item.grade}
                  </td>
                  <td className="border border-black p-2 text-left">
                    {item.text}
                  </td>
                  <td className="border border-black px-4 py-2 text-center">
                    <input
                      type="checkbox"
                      value={0}
                      checked={reviewData[item.id] === 0}
                      onChange={() => handleResponseChange(item.id, 0)}
                      className="w-6 h-6 accent-blue-500"
                    />
                  </td>
                  <td className="border border-black px-4 py-2 text-center">
                    <input
                      type="checkbox"
                      value={10}
                      checked={reviewData[item.id] === 10}
                      onChange={() => handleResponseChange(item.id, 10)}
                      className="w-6 h-6 accent-blue-500"
                    />
                  </td>
                  <td className="border border-black px-4 py-2 text-center">
                    <input
                      type="checkbox"
                      value={20}
                      checked={reviewData[item.id] === 20}
                      onChange={() => handleResponseChange(item.id, 20)}
                      className="w-6 h-6 accent-blue-500"
                    />
                  </td>
                  <td className="border border-black px-4 py-2 text-center">
                    <input
                      type="checkbox"
                      value={70}
                      checked={reviewData[item.id] === 70}
                      onChange={() => handleResponseChange(item.id, 70)}
                      className="w-6 h-6 accent-blue-500"
                    />
                  </td>
                  <td className="border border-black px-4 py-2 text-center">
                    <input
                      type="checkbox"
                      value={100}
                      checked={reviewData[item.id] === 100}
                      onChange={() => handleResponseChange(item.id, 100)}
                      className="w-6 h-6 accent-blue-500"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          <h2 className="text-md font-sans font-bold text-black mr-1">
            Rekognisi SKS minimal 6 SKS ((A+B)/10)
          </h2>
          <div className="overflow-x-auto my-10">
          <table className="table-auto w-full border-collapse border border-black">
            <thead>
              <tr>
                <th
                  className="border border-black p-2 border-b-0 border-r-2"
                  rowSpan={2}
                >
                  No
                </th>
                <th className="border border-black p-2 border-b-0" rowSpan={2}>
                  Komponen
                </th>
                <th className="border border-black p-2 border-b-0" rowSpan={2} colSpan={2}>
                  Opsi Komponen
                </th>
                <th className="border border-black p-2" colSpan={4}>
                  Nilai
                </th>
              </tr>
              <tr>
                <th className="border border-black p-2">1</th>
                <th className="border border-black p-2">2</th>
                <th className="border border-black p-2">3</th>
                <th className="border border-black p-2">4</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  id: "recognition_sks_1",
                  grade: "A",
                  text: " Publikasi pada Jurnal  nasional terakreditasi  SINTA 1-6",
                },
                {
                  id: "recognition_sks_2",
                  grade: "B",
                  text: " Publikasi pada Jurnal  nasional terakreditasi  SINTA 1-6",
                },
              ].map((item, index) => (
                <tr key={item.id} className="text-center">
                  {index === 0 && (
                    <td
                      rowSpan={5}
                      className="border border-black p-2 text-center"
                    >
                      1
                    </td>
                  )}
                  {index === 0 && (
                    <td
                      rowSpan={5}
                      className="border border-black p-2 text-left"
                    >
                      Rekognisi SKS minimal 6 SKS
                    </td>
                  )}
                  <td className="border border-black p-2 text-center">
                    {item.grade}
                  </td>
                  <td className="border border-black p-2 text-left">
                    {item.text}
                  </td>
                  <td className="border border-black px-4 py-2 text-center">
                    <input
                      type="checkbox"
                      value={0}
                      checked={reviewData[item.id] === 0}
                      onChange={() => handleResponseChange(item.id, 0)}
                      className="w-6 h-6 accent-blue-500"
                    />
                  </td>
                  <td className="border border-black px-4 py-2 text-center">
                    <input
                      type="checkbox"
                      value={5}
                      checked={reviewData[item.id] === 5}
                      onChange={() => handleResponseChange(item.id, 5)}
                      className="w-6 h-6 accent-blue-500"
                    />
                  </td>
                  <td className="border border-black px-4 py-2 text-center">
                    <input
                      type="checkbox"
                      value={25}
                      checked={reviewData[item.id] === 25}
                      onChange={() => handleResponseChange(item.id, 25)}
                      className="w-6 h-6 accent-blue-500"
                    />
                  </td>
                  <td className="border border-black px-4 py-2 text-center">
                    <input
                      type="checkbox"
                      value={50}
                      checked={reviewData[item.id] === 50}
                      onChange={() => handleResponseChange(item.id, 50)}
                      className="w-6 h-6 accent-blue-500"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          <h2 className="text-md font-sans font-bold text-black mr-1">
            Karya Audio Visual (Video) ((A+B+C+D+E+F+G+I)/8)
          </h2>
          <div className="overflow-x-auto my-5">
          <table className="table-auto w-full border-collapse border border-black">
            <thead>
              <tr>
                <th
                  className="border border-black p-2 border-b-0 border-r-2"
                  rowSpan={2}
                >
                  No
                </th>
                <th className="border border-black p-2 border-b-0" rowSpan={2}>
                  Komponen
                </th>
                <th className="border border-black p-2 border-b-0" rowSpan={2} colSpan={2}>
                  Opsi Komponen
                </th>
                <th className="border border-black p-2" colSpan={3}>
                  Nilai
                </th>
              </tr>
              <tr>
                <th className="border border-black p-2">1</th>
                <th className="border border-black p-2">2</th>
                <th className="border border-black p-2">3</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  id: "video_1",
                  grade: "A",
                  text: " Channel Penayangan  YouTube",
                },
                {
                  id: "video_2",
                  grade: "B",
                  text: " Kualitas video",
                },
                {
                  id: "video_3",
                  grade: "C",
                  text: " Bentuk Video",
                },
                {
                  id: "video_4",
                  grade: "D",
                  text: " Voice Over dan Running  Text/Text Tittle/Subtitle",
                },
                {
                  id: "video_5",
                  grade: "E",
                  text: " Penyebutan Program  dan Sumber dana",
                },
                {
                  id: "video_6",
                  grade: "F",
                  text: " PCerita dan  Penggambaran",
                },
                {
                  id: "video_7",
                  grade: "G",
                  text: " Daya Tarik, Transisi dan  Stabilisasi",
                },
                {
                  id: "video_8",
                  grade: "H",
                  text: " Jumlah viewers video",
                },
              ].map((item, index) => (
                <tr key={item.id} className="text-center">
                  {index === 0 && (
                    <td
                      rowSpan={8}
                      className="border border-black p-2 text-center"
                    >
                      1
                    </td>
                  )}
                  {index === 0 && (
                    <td
                      rowSpan={8}
                      className="border border-black p-2 text-left"
                    >
                      Karya Audio Visual (Video)
                    </td>
                  )}
                  <td className="border border-black p-2 text-center">
                    {item.grade}
                  </td>
                  <td className="border border-black p-2 text-left">
                    {item.text}
                  </td>
                  <td className="border border-black px-4 py-2 text-center">
                    <input
                      type="checkbox"
                      value={0}
                      checked={reviewData[item.id] === 0}
                      onChange={() => handleResponseChange(item.id, 0)}
                      className="w-6 h-6 accent-blue-500"
                    />
                  </td>
                  <td className="border border-black px-4 py-2 text-center">
                    <input
                      type="checkbox"
                      value={10}
                      checked={reviewData[item.id] === 10}
                      onChange={() => handleResponseChange(item.id, 10)}
                      className="w-6 h-6 accent-blue-500"
                    />
                  </td>
                  <td className="border border-black px-4 py-2 text-center">
                    <input
                      type="checkbox"
                      value={20}
                      checked={reviewData[item.id] === 20}
                      onChange={() => handleResponseChange(item.id, 20)}
                      className="w-6 h-6 accent-blue-500"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          <h2 className="text-md font-sans font-bold text-black mr-1">
            Karya Visual (Poster) ((A+B+C)/10)
          </h2>
          <div className="overflow-x-auto my-5">
          <table className="table-auto w-full border-collapse border border-black">
            <thead>
              <tr>
                <th
                  className="border border-black p-2 border-b-0 border-r-2"
                  rowSpan={2}
                >
                  No
                </th>
                <th className="border border-black p-2 border-b-0" rowSpan={2}>
                  Komponen
                </th>
                <th className="border border-black p-2 border-b-0" rowSpan={2} colSpan={2}>
                  Opsi Komponen
                </th>
                <th className="border border-black p-2" colSpan={3}>
                  Nilai
                </th>
              </tr>
              <tr>
                <th className="border border-black p-2">1</th>
                <th className="border border-black p-2">2</th>
                <th className="border border-black p-2">3</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  id: "poster_1",
                  grade: "A",
                  text: " Format Poster: 'Ukuran 160cm*60 cm', 'Portrait (vertikal)', 'Menyebutkan sumber  pendanaan dan logo  Kemdikbud ristek'",
                },
                {
                  id: "poster_2",
                  grade: "B",
                  text: " Isi/Substansi Poster",
                },
                {
                  id: "poster_3",
                  grade: "C",
                  text: " Daya Tarik, Warna dan  Layout",
                },
              ].map((item, index) => (
                <tr key={item.id} className="text-center">
                  {index === 0 && (
                    <td
                      rowSpan={5}
                      className="border border-black p-2 text-center"
                    >
                      1
                    </td>
                  )}
                  {index === 0 && (
                    <td
                      rowSpan={5}
                      className="border border-black p-2 text-left"
                    >
                      Karya Audio Visual (Poster)
                    </td>
                  )}
                  <td className="border border-black p-2 text-center">
                    {item.grade}
                  </td>
                  <td className="border border-black p-2 text-left">
                    {item.text}
                  </td>
                  <td className="border border-black px-4 py-2 text-center">
                    <input
                      type="checkbox"
                      value={0}
                      checked={reviewData[item.id] === 0}
                      onChange={() => handleResponseChange(item.id, 0)}
                      className="w-6 h-6 accent-blue-500"
                    />
                  </td>
                  <td className="border border-black px-4 py-2 text-center">
                    <input
                      type="checkbox"
                      value={20}
                      checked={reviewData[item.id] === 20}
                      onChange={() => handleResponseChange(item.id, 20)}
                      className="w-6 h-6 accent-blue-500"
                    />
                  </td>
                  <td className="border border-black px-4 py-2 text-center">
                    <input
                      type="checkbox"
                      value={40}
                      checked={reviewData[item.id] === 40}
                      onChange={() => handleResponseChange(item.id, 40)}
                      className="w-6 h-6 accent-blue-500"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          <h2 className="text-md font-sans font-bold text-black mr-1">
            Penggunaan Anggaran 70% ((A+B+C)/10)
          </h2>
          <div className="overflow-x-auto my-5">
          <table className="table-auto w-full border-collapse border border-black">
            <thead>
              <tr>
                <th
                  className="border border-black p-2 border-b-0 border-r-2"
                  rowSpan={2}
                >
                  No
                </th>
                <th className="border border-black p-2 border-b-0" rowSpan={2}>
                  Komponen
                </th>
                <th className="border border-black p-2 border-b-0" rowSpan={2} colSpan={2}>
                  Opsi Komponen
                </th>
                <th className="border border-black p-2" colSpan={3}>
                  Nilai
                </th>
              </tr>
              <tr>
                <th className="border border-black p-2">1</th>
                <th className="border border-black p-2">2</th>
                <th className="border border-black p-2">3</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  id: "budget_usage_1",
                  grade: "A",
                  text: " Dokumen Laporan  Penggunaan Anggaran",
                },
                {
                  id: "budget_usage_2",
                  grade: "B",
                  text: " Penggunaan Anggaran  70% dengan SBM",
                },
                {
                  id: "budget_usage_3",
                  grade: "C",
                  text: " Penggunaan Anggaran  70% dengan Panduan  dan Komponennya",
                },
              ].map((item, index) => (
                <tr key={item.id} className="text-center">
                  {index === 0 && (
                    <td
                      rowSpan={5}
                      className="border border-black p-2 text-center"
                    >
                      1
                    </td>
                  )}
                  {index === 0 && (
                    <td
                      rowSpan={5}
                      className="border border-black p-2 text-left"
                    >
                      Penggunaan Anggaran 70%
                    </td>
                  )}
                  <td className="border border-black p-2 text-center">
                    {item.grade}
                  </td>
                  <td className="border border-black p-2 text-left">
                    {item.text}
                  </td>
                  <td className="border border-black px-4 py-2 text-center">
                    <input
                      type="checkbox"
                      value={0}
                      checked={reviewData[item.id] === 0}
                      onChange={() => handleResponseChange(item.id, 0)}
                      className="w-6 h-6 accent-blue-500"
                    />
                  </td>
                  <td className="border border-black px-4 py-2 text-center">
                    <input
                      type="checkbox"
                      value={6}
                      checked={reviewData[item.id] === 6}
                      onChange={() => handleResponseChange(item.id, 6)}
                      className="w-6 h-6 accent-blue-500"
                    />
                  </td>
                  <td className="border border-black px-4 py-2 text-center">
                    <input
                      type="checkbox"
                      value={40}
                      checked={reviewData[item.id] === 40}
                      onChange={() => handleResponseChange(item.id, 40)}
                      className="w-6 h-6 accent-blue-500"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          <h2 className="text-md font-sans font-bold text-black mr-1">
            PEMBERDAYAAN DAN KEBERDAYAAN ((A+B+C+D+E)/10)
          </h2>
          <div className="overflow-x-auto my-5">
          <table className="table-auto w-full border-collapse border border-black">
            <thead>
              <tr>
                <th
                  className="border border-black p-2 border-b-0 border-r-2"
                  rowSpan={2}
                >
                  No
                </th>
                <th className="border border-black p-2 border-b-0" rowSpan={2}>
                  Komponen
                </th>
                <th className="border border-black p-2 border-b-0" rowSpan={2} colSpan={2}>
                  Opsi Komponen
                </th>
                <th className="border border-black p-2" colSpan={3}>
                  Nilai
                </th>
              </tr>
              <tr>
                <th className="border border-black p-2">1</th>
                <th className="border border-black p-2">2</th>
                <th className="border border-black p-2">3</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  id: "empowerment_1",
                  grade: "A",
                  text: " Peningkatan level  keberdayaan mitra 1",
                },
                {
                  id: "empowerment_2",
                  grade: "B",
                  text: " Persen peningkatan level  keberdayaan mitra 1",
                },
                {
                  id: "empowerment_3",
                  grade: "C",
                  text: " Penerapan teknologi dan  inovasi",
                },
                {
                  id: "empowerment_4",
                  grade: "D",
                  text: " Kehadiran seluruh  anggota tim pelaksana  dan mahasiswa ke lokasi  mitra sasaran",
                },
                {
                  id: "empowerment_5",
                  grade: "E",
                  text: " Partisipasi dan peran  seluruh anggota tim  pelaksasa dan  mahasiswa",
                },
              ].map((item, index) => (
                <tr key={item.id} className="text-center">
                  {index === 0 && (
                    <td
                      rowSpan={5}
                      className="border border-black p-2 text-center"
                    >
                      1
                    </td>
                  )}
                  {index === 0 && (
                    <td
                      rowSpan={5}
                      className="border border-black p-2 text-left"
                    >
                      PEMBERDAYAAN DAN KEBERDAYAAN
                    </td>
                  )}
                  <td className="border border-black p-2 text-center">
                    {item.grade}
                  </td>
                  <td className="border border-black p-2 text-left">
                    {item.text}
                  </td>
                  <td className="border border-black px-4 py-2 text-center">
                    <input
                      type="checkbox"
                      value={0}
                      checked={reviewData[item.id] === 0}
                      onChange={() => handleResponseChange(item.id, 0)}
                      className="w-6 h-6 accent-blue-500"
                    />
                  </td>
                  <td className="border border-black px-4 py-2 text-center">
                    <input
                      type="checkbox"
                      value={50}
                      checked={reviewData[item.id] === 50}
                      onChange={() => handleResponseChange(item.id, 50)}
                      className="w-6 h-6 accent-blue-500"
                    />
                  </td>
                  <td className="border border-black px-4 py-2 text-center">
                    <input
                      type="checkbox"
                      value={100}
                      checked={reviewData[item.id] === 100}
                      onChange={() => handleResponseChange(item.id, 100)}
                      className="w-6 h-6 accent-blue-500"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          <h2 className="text-xl font-bold text-violet-800 mb-4">
            Catatan Reviewer
          </h2>
          <TextAreaCmp
            name="reviewer_note"
            value={reviewData.reviewer_note}
            onChange={handleInputChange()}
            placeholder="Fill"
            rows={10}
          />
          <div className="container mx-auto">
          <div className="bg-gray-50 shadow-sm rounded-sm p-5">
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
      </div>
    </div>
  );
};

export default MonevPengabdianReviewer;
