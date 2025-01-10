import React from "react";
import Modal from "react-modal";
import DropdownCmp from "../../DropdownCmp";
import TextfieldCmp from "../../TextfieldCmp";

// Set root element untuk React Modal
Modal.setAppElement("#root");

const ModalVideo = ({ isOpen, onRequestClose, data, setData }) => {
  const handleDropdownChange = (field, value) => {
    setData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };
  const handleSave = () => {
    console.log("Data berhasil disimpan");
    onRequestClose(); // Tutup modal setelah menyimpan
  };
  const komponenRekognisi = [
    { label: "Tercapai", value: "Tercapai" },
    { label: "Tidak Tercapai", value: "Tidak_tercapai" },
  ];

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
      <form>
        <div className="mb-4">
          <DropdownCmp
            label={`Status Video Kegiatan`}
            options={komponenRekognisi}
            onChange={(option) => {
              handleDropdownChange("status_rekognisi", option.value);
            }}
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
