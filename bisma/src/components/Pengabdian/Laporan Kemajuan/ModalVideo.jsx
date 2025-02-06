import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import DropdownCmp from "../../DropdownCmp";
import TextfieldCmp from "../../TextfieldCmp";

// Set root element untuk React Modal
Modal.setAppElement("#root");

const ModalVideo = ({
  isOpen,
  onRequestClose,
  data,
  setData,
  index,
  onSave,
}) => {
  const [outputData, setOutputData] = useState({});
  useEffect(() => {
    if (data && index >= 0) {
      setOutputData(data[index]); // Update data modal berdasarkan index
    }
  }, [data, index]);

  const handleDropdownChange = (option, fieldName) => {
    setOutputData((prevData) => ({
      ...prevData,
      [fieldName]: option.value,
    }));
  };

  const StatusVideo = [
    { label: "Tercapai", value: "Tercapai" },
    { label: "Tidak Tercapai", value: "Tidak Tercapai" },
  ];

  const handleInputChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setOutputData((prevData) => ({
      ...prevData,
      [inputName]: inputValue,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log("Data berhasil disimpan");
    onSave(index, outputData);
    setOutputData({});
    onRequestClose(); // Close modal after save
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal Form"
      className="bg-white rounded-lg shadow-lg p-6 w-[50%] mx-auto mt-auto max-h-[80vh] overflow-y-auto" // Added height limit and scrolling
      overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <h2 className="text-xl font-bold mb-4">
        LUARAN WAJIB VIDEO PROFIL HASIL PROGRAM PENGABDIAN
      </h2>
      <form onSubmit={handleSave}>
        <div className="mb-4">
          <DropdownCmp
            label={`Status Video Kegiatan`}
            options={StatusVideo}
            value={StatusVideo.find(
              (option) => option.value === outputData.status
            )}
            onChange={(option) => handleDropdownChange(option, "status")}
            placeholder={`Pilih Status Video Kegiatan`}
          />
        </div>
        <div className="bg-bluef-50 my-5 p-4 rounded-md shadow-sm flex items-center space-x-4">
          {/* Content */}
          <div className="text-bluef-500">
            <h1 className="text-md font-bold font-sans  my-1">Informasi</h1>
            <h2 className="text-md font-bold font-sans  mb-3">
              Ketentuan isian video profil hasil program pengabdian sebagai
              berikut :
            </h2>

            <h2 className="text-md font-bold font-sans  my-1">
              1. Judul Penelitian
            </h2>
            <h3 className="text-md font-medium font-sans  my-1 mx-5 ">
              a. judul dan skema kegiatan penelitian;
              <br />
              b. nama ketua dan anggota disertai NIDN/NIDK;
              <br />
              c. nama perguruan tinggi;
              <br />
              d. tahun pelaksanaan..
            </h3>
            <h2 className="text-md font-bold font-sans  my-1">
              2. Video durasi maksimal 5 menit dengan ketentuan sebagai berikut:
            </h2>
            <h3 className="text-md font-medium font-sans  my-1 mx-5 ">
              a. mencamtumkan logo KEMENDIKBUDRISTEK (sebagai pemberi dana) dan
              logo perguruan tinggi;
              <br />
              b. video menampilkan narasi latar belakang, tujuan, kebaruan
              penelitian, dan hasil penelitian;
              <br />
              c. resolusi video minimal 720p dengan tipe video landscape
              (horizontal);
              <br />
              d. video dibuat semenarik mungkin.
            </h3>
            <h2 className="text-md font-bold font-sans  my-1">
              3. Video diunggah pada Google Drive/ Youtube, kemudian cantumkan
              tautan video didalam isian yang telah disediakan.
            </h2>
          </div>
        </div>

        {/* File Upload */}
        <div className="mb-4">
          <TextfieldCmp
            label={`Masukkan Link Video Hasil Pengabdian`}
            value={outputData.url_video}
            name="url_video"
            onChange={(e) => handleInputChange(e)}
            className="block w-full text-sm text-gray-500 border border-gray-300 rounded-lg"
            placeholder="Tuliskan Url Video"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-4">
          <button
            className="bg-white text-red-500 border border-red-500 px-4 py-2 rounded hover:bg-red-100"
            onClick={onRequestClose}
          >
            Cancel
          </button>
          <button
            className="bg-bluef-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleSave} // Ganti dengan aksi yang sesuai
          >
            Simpan
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default ModalVideo;
