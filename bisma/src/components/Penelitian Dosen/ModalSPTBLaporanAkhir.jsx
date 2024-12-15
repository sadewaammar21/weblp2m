import React, { useState } from "react";
import Modal from "react-modal";
import TextfieldCmp from "../TextfieldCmp"; // Komponen TextField yang Anda buat

Modal.setAppElement("#root");

const ModalSPTBLaporanAkhir = ({ isOpen, onRequestClose }) => {
  const handleSave = () => {
    console.log("Data berhasil disimpan");
    onRequestClose(); // Tutup modal setelah menyimpan
  };

  const [inputs, setInputs] = useState({
    bahan: "",
    pengumpulanData: "",
    analisisData: "",
    sewaPeralatan: "",
    pelaporanLuaran: "",
    lainLain: "",
  });

  const handleInputChange = (key, value) => {
    setInputs({
      ...inputs,
      [key]: value,
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal Budget Form"
      className="bg-white rounded-lg shadow-lg p-6 w-[50%] mx-auto mt-auto max-h-[80vh] overflow-y-auto"
      overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <h2 className="text-xl font-bold mb-6 text-center">
        SURAT PERNYATAAN TANGGUNG JAWAB BELANJA
      </h2>
      <div className="mb-4 text-sm">
        <p>Nama : Yustina Retno Wahyu Utami</p>
        <p>Alamat : Griya Kelapa Gading No. 6 Blulukan Colomadu</p>
        <p>
          Judul : Pengembangan Aplikasi Gamifikasi Pembelajaran Bahasa Inggris
          Berbasis Digital Visual Literacy dan Keterampilan 5C untuk Siswa
          Sekolah Dasar
        </p>
        <p>Tahun Pelaksanaan : 2024</p>
        <p>Dana Disetujui : Rp 10.000.000</p>
      </div>

      <form>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 mb-2">
              Nomor Surat Keputusan
            </label>
            <TextfieldCmp className="w-full" placeholder="ISSN/EISSN" />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">
              Nomor Perjanjian Kontrak
            </label>
            <TextfieldCmp className="w-full" placeholder="Lembaga Pengindeks" />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Tempat / Tanggal</label>
            <TextfieldCmp className="w-full" placeholder="Tempat / Tanggal" />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">NIP / NIPK</label>
            <TextfieldCmp className="w-full" placeholder="NIP / NIPK" />
          </div>
        </div>

        <div className="p-4">
          <table className="table-auto border-collapse border border-black w-full text-sm">
            <thead>
              <tr>
                <th className="border border-black px-4 py-2">No</th>
                <th className="border border-black px-4 py-2">Uraian</th>
                <th className="border border-black px-4 py-2">RAB 80%</th>
                <th className="border border-black px-4 py-2">Realisasi</th>
              </tr>
            </thead>
            <tbody>
              {[
                { no: 1, key: "bahan", uraian: "Bahan" },
                { no: 2, key: "pengumpulanData", uraian: "Pengumpulan Data" },
                { no: 3, key: "analisisData", uraian: "Analisis Data" },
                { no: 4, key: "sewaPeralatan", uraian: "Sewa Peralatan" },
                {
                  no: 5,
                  key: "pelaporanLuaran",
                  uraian: "Pelaporan Luaran Wajib",
                },
                { no: 6, key: "lainLain", uraian: "Lain-lain" },
              ].map((item) => (
                <tr key={item.no}>
                  <td className="border border-black px-4 py-2 text-center">
                    {item.no}
                  </td>
                  <td className="border border-black px-4 py-2">
                    <div>{item.uraian}</div>
                    <div>
                      <input
                        type="text"
                        className="mt-2 border border-black rounded-md p-2 w-full"
                        placeholder={`Input ${item.uraian}`}
                        value={inputs[item.key]}
                        onChange={(e) =>
                          handleInputChange(item.key, e.target.value)
                        }
                      />
                    </div>
                  </td>
                  <td className="border border-black px-4 py-2"></td>
                  <td className="border border-black px-4 py-2"></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

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

export default ModalSPTBLaporanAkhir;
