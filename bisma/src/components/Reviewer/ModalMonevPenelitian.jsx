import React from "react";
import Modal from "react-modal";

// Set root element untuk React Modal
Modal.setAppElement("#root");

const ModalMonevPenelitian = ({ isOpen, onRequestClose, data, setData }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal Form"
      className="bg-white rounded-lg shadow-lg p-6 w-[50%] max-h-[80vh] overflow-y-auto" // Hilangkan margin jika ada
      overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <h2 className="text-xl font-bold mb-4 text-violet-800">
        Penilaian Monitoring dan Evaluasi Skema Riset Terapan
      </h2>
      <form className="my-5">
        <div>
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
                    className="border border-gray-300 px-4 py-2 text-center"
                    rowSpan="3"
                  >
                    Kemajuan ketercapaian luaran yang dijanjikan
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Kualitas dokumen luaran
                  </td>
                  <td className="border border-gray-300 px-4 py-2" rowSpan="3">
                    a. Telah tercapai/terlaksana (Skor = 80)
                    <br />
                    b. Berpotensi besar dapat tercapai (Skor = 60)
                    <br />
                    c. Berpotensi dapat tercapai (Skor = 45)
                    <br />
                    d. Kurang berpotensi dapat tercapai (Skor = 25)
                    <br />
                    e. Tidak Tercapai (Skor = 0)
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Kesesuaian isi dokumen dengan substansi penelitian
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Kesesuaian dengan periode pendanaan
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
                    className="border border-gray-300 px-4 py-2 text-center"
                    rowSpan="2"
                  >
                    Kesesuaian penelitian dengan usulan
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Kesesuaian pelaksanaan penelitian dengan usulan
                  </td>
                  <td className="border border-gray-300 px-4 py-2" rowSpan="2">
                    a. Penelitian sesuai usulan (Skor = 20)
                    <br />
                    b. Penelitian tidak sesuai usulan (Skor = 0)
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Penelitian dengan usulan
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-4 my-5">
          <button
            className="bg-white text-red-500 border border-red-500 px-4 py-2 rounded hover:bg-red-100"
            onClick={onRequestClose}
          >
            Cancel
          </button>
          <button
            className="bg-bluef-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={`#`} // Ganti dengan aksi yang sesuai
          >
            Simpan
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default ModalMonevPenelitian;
