import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaPen, FaPlus } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import PopUpTambahCatatanHarian from "./PopUpTambahCatatanHarian";
import {
  deleteLogbook,
  getLogbooks,
  getResearchDetail,
} from "../../../Features/ResearchSlice";
import PopUpEditCatatanHarian from "./PopUpEditCatatanHarian";

const ViewCatatanHarian = () => {
  const { id } = useParams();
  const [research, setResearch] = useState({});
  const [logbook, setLogbook] = useState([]);
  const [isOpenTambah, setIsOpenTambah] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [logbookId, setLogbookId] = useState(0);

  const openModalTambah = () => {
    setIsOpenTambah(true);
  };

  const closeModalTambah = () => {
    setIsOpenTambah(false);
    fetchLogbooks();
  };

  const openModalEdit = (id) => {
    setIsOpenEdit(true);
    setLogbookId(id);
  };

  const closeModalEdit = () => {
    setIsOpenEdit(false);
  };

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/pengabdian/catatan-harian");
  };

  const fetchResearch = async () => {
    try {
      const response = await getResearchDetail(id);
      setResearch(response.data);
      console.log(research);
    } catch (error) {
      throw error;
    }
  };
  const user = JSON.parse(localStorage.getItem("user"));
  const fetchLogbooks = async () => {
    try {
      const response = await getLogbooks({
        user_id: user.id,
        id: id,
        pageSize: 10,
        currentPage: 1,
      });
      setLogbook(response.data);
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    fetchResearch();
    fetchLogbooks();
  }, [id]);

  const handleDelete = (id) => {
    deleteLogbook(id);
    fetchLogbooks();
  };

  return (
    <div className="mx-10 my-10">
      <div className="bg-blue-50 my-5 p-4 rounded-md shadow-sm flex items-center space-x-4">
        {/* Icon */}

        {/* Content */}
        <div>
          <h2 className="text-lg font-bold text-gray-800">{research.title}</h2>
          <p className="text-sm text-gray-600 mt-1">
            Penelitian Fundamental - Reguler Penelitian Kompetitif Nasional -
            Reguler | Thn Usulan 2024 | Thn. Pelaksanaan 2024
          </p>
          <div>
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

      <div>
        <div className="container ">
          <div className="bg-gray-50 shadow-sm rounded-md p-5 mx-5 my-5">
            <div className="flex justify-between items-center w-full">
              <div>
                <button
                  onClick={handleBack}
                  className="flex items-center px-4 py-2 rounded-md border border-bluef-500 text-bluef-500 bg-white hover:bg-bluef-500 hover:text-white"
                >
                  <FaArrowLeft className="mr-2" /> {/* Ikon panah kiri */}
                  Kembali
                </button>
              </div>
              <div>
                <h1>Pilih Bulan</h1>
                <div className="flex">
                  <button className="bg-bluef-500 px-1 text-white hover:bg-bluef-300 focus:outline-none">
                    <FaPen className="items-center" size={15} />
                  </button>
                  <input
                    type="text"
                    className="text-sm w-full border border-black"
                    value=""
                    onChange={``}
                    placeholder="2024"
                  />
                </div>
              </div>
            </div>
            <div className="mt-7">
              <button
                className="flex items-center px-2 py-2 bg-bluef-500 text-white rounded-lg hover:bg-bluef-300 focus:outline-none"
                onClick={openModalTambah}
              >
                <FaPlus className="mr-2" /> {/* Icon tambah */}
                Tambah
              </button>
            </div>
            {/* Tabel */}
            <div className="relative overflow-x-auto my-10">
              <table className="w-full text-sm text-center bg-neutral-20 text-gray-500 border border-gray-300">
                <thead className="border border-gray-300 text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th className="border border-black px-4 py-2 align-middle">
                      No
                    </th>
                    <th className="border border-black px-4 py-2 align-middle">
                      Tanggal
                    </th>
                    <th className="border border-black px-4 py-2 align-middle">
                      Kegiatan
                    </th>
                    <th className="border border-black px-4 py-2 align-middle">
                      Persentase
                    </th>
                    <th className="border border-black px-4 py-2 align-middle">
                      Total Berkas
                    </th>
                    <th className="border border-black px-4 py-2 align-middle">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {logbook.map((item, index) => (
                    <tr key={index}>
                      <td className="border border-black px-4 py-2 align-middle">
                        {index + 1}
                      </td>
                      <td className="border border-black px-4 py-2 align-middle">
                        {item.date_activity}
                      </td>
                      <td className="border border-black px-4 py-2 align-middle">
                        {item.activity_description}
                      </td>
                      <td className="border border-black px-4 py-2 align-middle">
                        {item.percentage}
                      </td>
                      <td className="border border-black px-4 py-2 align-middle"></td>
                      <td className="border border-black px-4 py-2 align-middle">
                        <div className="flex justify-center items-center space-x">
                          <button
                            onClick={() => openModalEdit(item.id)}
                            className="flex items-center px-2 py-1 rounded-md"
                          >
                            <img
                              src={
                                process.env.PUBLIC_URL + "/assets/act_edit.svg"
                              }
                              alt="edit"
                              className="w-7 h-7"
                            />
                          </button>
                          <button
                            className="flex items-center px-2 py-1 rounded-md"
                            onClick={() => handleDelete(item.id)}
                          >
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/act_remove.svg"
                              }
                              alt="remove"
                              className="w-7 h-7"
                            />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="border border-black px-4 py-2 align-middle">
                      <div className="flex justify-center items-center space-x">
                        <button
                          onClick={openModalEdit}
                          className="flex items-center px-2 py-1 rounded-md"
                        >
                          <img
                            src={
                              process.env.PUBLIC_URL + "/assets/act_edit.svg"
                            }
                            alt="edit"
                            className="w-7 h-7"
                          />
                        </button>
                        <button
                          className="flex items-center px-2 py-1 rounded-md"
                          onClick={handleDelete}
                        >
                          <img
                            src={
                              process.env.PUBLIC_URL + "/assets/act_remove.svg"
                            }
                            alt="remove"
                            className="w-7 h-7"
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <PopUpTambahCatatanHarian
              isOpen={isOpenTambah}
              onRequestClose={closeModalTambah}
              id={id}
            />
            <PopUpEditCatatanHarian
              isOpen={isOpenEdit}
              onRequestClose={closeModalEdit}
              logbookId={logbookId}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCatatanHarian;
