import React, { useEffect,useState } from "react";
import DropdownCmp from "../../DropdownCmp";
import TextAreaCmp from "../../TextAreaCmp";
import { getReviewByService } from '../../../Features/ServiceSlice';
// import axios from 'axios'
// import { getToken } from '../../Features/AuthSlice'

const PerbaikanSubstansi = ({ service, setService }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [review,setReview] = useState([]);
  
  const fetchReview = async(id) => {
    const response = await getReviewByService(id);
    console.log(response);
    setReview(response);
  } 
  
  // const fetchSubstance = async() =>{
  //   const response = await axios.get(`${apiUrl}/api/substance`, getToken());
  //   setSubstance(response.data);
  // }
  useEffect(()=> {
    setSelectedFile(service.substance_document)
    fetchReview(service.id)
    // fetchSubstance()
  },[service.id])

  // const handleDropdownChange = (option, fieldName) => {
  //   setResearch((prevData) => ({
  //     ...prevData,
  //     [fieldName]: option.value,
  //   }));
  //   console.log("clicked" + option);
  // };
  
  // const mapToDropdown = (data, labelKey, valueKey) => {
  //   return data.map((item) => ({
  //     label: item[labelKey],
  //     value: item[valueKey]
  //   }))
  // }

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setService((prevData) => ({
      ...prevData,
      substance: event.target.files[0],
    }));
  };

  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];

  const handleClick = () => {
    // navigate("#"); // Arahkan ke halaman 'usulan-baru-penelitian'
  };

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
  };
  return (
    <div>
      <h1 className="text-xl font-bold text-violet-800 mx-5 my-5">
        {" "}
        Substansi Usulan
      </h1>
      <div className="grid grid-cols-2 gap-x-10  ">
        {/* <DropdownCmp
          label="Kelompok Makro Riset *"
          options={options}
          selectedOption={selectedOption}
          onChange={(e) => handleDropdownChange(e.target.value)} // Corrected here
          placeholder="Kelompok Riset teknologi tinggi"
        /> */}

<div>
        {/* Label dan Link untuk Unduh Template */}
        <div className="flex justify-between items-center mb-2">
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

        {/* Input untuk upload file */}
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
        </div>
        </div>
      <div>
      <h1 className='text-xl font-bold text-violet-800 mx-5 my-5'> Catatan Reviewer</h1>
        <div>
        <table className="w-full text-sm text-center text-gray-500 border border-gray-300">
              <thead className="bg-gray-50 text-xs text-gray-700 uppercase">
                <tr>
                  <th className="border px-4 py-2">No</th>
                  <th className="border px-4 py-2">Reviewer</th>
                  <th className="border px-4 py-2">Catatan</th>
                </tr>
              </thead>
              <tbody>
                {review.map((item, index) => (
                  <tr key={index}>
                      <td>{index+1}</td>
                      <td>{item.reviewer?.name}</td>
                      <td>{item.notes}</td>
                  </tr>
                ))}
            </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

export default PerbaikanSubstansi;
