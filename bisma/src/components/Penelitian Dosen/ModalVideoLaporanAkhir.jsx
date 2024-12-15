import React from "react";
import Modal from "react-modal";

// Set root element untuk React Modal
Modal.setAppElement("#root");

const ModalVideoLaporanAkhir = ({ isOpen, onRequestClose }) => {
  const handleSave = () => {
    console.log("Data berhasil disimpan");
    onRequestClose(); // Tutup modal setelah menyimpan
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal Form"
      className="bg-white rounded-lg shadow-lg p-6 w-[50%] mx-auto mt-auto max-h-[80vh] overflow-y-auto" // Added height limit and scrolling
      overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <h2 className="text-xl font-bold mb-4">POSTER</h2>
      <form>
        <div className="bg-bluef-50 my-5 p-4 rounded-md shadow-sm flex items-center space-x-4">
          {/* Content */}
          <div className="text-bluef-500">
            <h1 className="text-md font-bold font-sans  my-1">Informasi</h1>
            <h2 className="text-md font-bold font-sans  ">
              Ketentuan isian video profil hasil penelitian
            </h2>
            <h2 className="text-md font-bold font-sans  mb-3">
              sebagai berikut :
            </h2>
            <div>
              <h2 className="text-md font-bold font-sans  mb-3 mx-5">
                1. Pada awal tayangan video harus memuat informasi-informasi
                sebagai berikut:
              </h2>
              <h3 className="text-md font-medium font-sans  my-1">
                a. Judul dan skema kegiatan penelitian;
              </h3>
              <h3 className="text-md font-medium font-sans  my-1">
                b. Nama ketua dan anggota disertai NIDN/NIDK;
              </h3>
              <h3 className="text-md font-medium font-sans  my-1">
                c. Nama perguruan tinggi;
              </h3>
              <h3 className="text-md font-medium font-sans  my-1">
                d. Nama mitra (jika ada);
              </h3>
              <h3 className="text-md font-medium font-sans  my-1">
                e. Tahun pelaksanaan
              </h3>
            </div>
            <div>
              <h2 className="text-md font-bold font-sans  mb-3 mx-5">
                2. Video durasi maksimal 5 menit dengan ketentuan sebagai
                berikut:
              </h2>
              <h3 className="text-md font-medium font-sans  my-1">
                a. mencamtumkan logo KEMENDIKBUDRISTEK (sebagai pemberi dana)
                dan logo perguruan tinggi;
              </h3>
              <h3 className="text-md font-medium font-sans  my-1">
                b. video menampilkan narasi latar belakang, tujuan, kebaruan
                penelitian, dan hasil penelitian;
              </h3>
              <h3 className="text-md font-medium font-sans  my-1">
                c. resolusi video minimal 720p dengan tipe video landscape
                (horizontal);
              </h3>
              <h3 className="text-md font-medium font-sans  my-1">
                d. video dibuat semenarik mungkin.
              </h3>
            </div>

            <h2 className="text-md font-bold font-sans  mb-3 mx-5">
              3.Video diunggah pada Google Drive/ Youtube, kemudian cantumkan
              tautan video didalam isian yang telah disediakan.
            </h2>
          </div>
        </div>

        {/* File Upload */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">
            Masukkan Link Video Hasil Penelitian
          </label>
          <input
            type="text"
            className="block w-full text-sm text-gray-500 border border-gray-300 rounded-md"
            placeholder="Tuliskan URL video"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4">
          <button
            type="button"
            className="px-4 py-2 bg-red-500 text-white rounded-lg"
            onClick={onRequestClose}
          >
            Cancel
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            onClick={handleSave}
          >
            Simpan
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default ModalVideoLaporanAkhir;
