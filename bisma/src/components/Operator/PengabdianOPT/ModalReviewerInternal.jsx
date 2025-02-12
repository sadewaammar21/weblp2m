import React, { useEffect, useState } from "react";
import DropdownCmp from "../../DropdownCmp";
import SearchInput from "../../SearchInput";
import TextfieldCmp from "../../TextfieldCmp";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaPlus,
  FaCcMastercard,
  FaTrash,
  FaEdit,
} from "react-icons/fa";
import * as XLSX from "xlsx"; // Library for Excel
import { saveAs } from "file-saver";
import Modal from "react-modal";
import axios from "axios";
import { getToken } from "../../../Features/AuthSlice";

const apiUrl = process.env.REACT_APP_API_URL;

Modal.setAppElement("#root");

const ModalReviewerInternal = ({ isOpen, onRequestClose, setData }) => {
  const navigate = useNavigate();
  const [reviewer, setReviewer] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [tasul, setTasul] = useState("");
  const [tapel, setTapel] = useState("");
  const [Tahapan, setTahapan] = useState("");
  const [nidn, setNidn] = useState("");

  const handleAddReviewer = (id) => {
    setData(id);
    onRequestClose();
  };

  const handleSearch = () => {
    console.log("Search for:", nidn);
    // Add search logic here
  };

  //   const handleInputChange = (setter) => (e) => {
  //     setter(e.target.value);
  //   };

  const fetchUsers = async () => {
    const response = await axios.get(`${apiUrl}/api/users/roles/2`, getToken());
    setReviewer(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="bg-white rounded-lg shadow-lg p-6 w-[50%] mx-auto mt-20 max-h-[80vh] overflow-y-auto" // Limit height and add scrolling
      overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="bg-white max-w-6xl mx-auto shadow-md rounded-md ">
        <div className="grid grid-cols-2 gap-4 mx-10">
          <div>
            <SearchInput
              label="NIDN"
              placeholder="select NIDN"
              value={nidn}
              onChange={(e) => setNidn(e.target.value)}
              onSearch={handleSearch}
              // color={bg - bluef - 500}
            />
          </div>
          <DropdownCmp
            label="Tahun Usulan"
            options={options}
            selectedOption={tasul}
            onChange={(value) => setTasul(value)}
            name="skema"
            placeholder="Pilih Tahun"
          />
        </div>
        {/* Tabel */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 border border-black">
            <thead className="text-xs text-center  text-gray-700 uppercase bg-gray-100">
              <tr>
                <th className="border px-4 py-2">No</th>
                <th className="border px-4 py-2">Reviewer</th>
                <th className="border px-4 py-2">Kompetensi</th>
                <th className="border px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {reviewer.map((item, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2 text-center">{index + 1}</td>
                  <td className="border px-4 py-2">
                    {item.name}
                    <br />
                    {item.institution}
                  </td>
                  <td className="border px-4 py-2 text-center">
                    Bidang Ilmu Komputer
                  </td>
                  <td className="items-center border px-4 py-2 text-center">
                    <button
                      onClick={() => handleAddReviewer(item.id)}
                      className="flex items-center text-center px-2 py-1 bg-bluef-500 text-white rounded-md hover:bg-cyan-600"
                    >
                      <FaEdit />
                      Tugaskan
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Modal>
  );
};

export default ModalReviewerInternal;