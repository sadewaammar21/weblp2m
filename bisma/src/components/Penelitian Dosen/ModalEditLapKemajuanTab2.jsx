import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import TextfieldCmp from "../TextfieldCmp"; // Komponen TextField yang Anda buat

Modal.setAppElement("#root");

const ModalEditLapKemajuanTab2 = ({ research, data, isOpen, onRequestClose, onSave }) => {
  const [items, setItems] = useState({});
  useEffect(()=>{
    setItems({
      no_sk: data.no_sk,
      no_contract: data.no_contract,
      place_date: data.place_date,
      nip: data.nip,
      description_1: data.description_1,
      description_2: data.description_2,
      description_3: data.description_3,
      description_4: data.description_4,
      description_5: data.description_5,
      description_6: data.description_6,
      realization_1: data.realization_1,
      realization_2: data.realization_2,
      realization_3: data.realization_3,
      realization_4: data.realization_4,
      realization_5: data.realization_5,
      realization_6: data.realization_6,
    })
  },[])

  const handleSave = () => {
    onSave(items);
    setItems({});
    onRequestClose();
  };

  const handleInputChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setItems((prevData) => ({
      ...prevData,
      [inputName]: inputValue,
    }));
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
            <TextfieldCmp 
              value={items.no_sk}
              name={'no_sk'}
              onChange={(e) => handleInputChange(e)}
              placeholder='No Surat Keputusan' />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">
              Nomor Perjanjian Kontrak
            </label>
            <TextfieldCmp 
              value={items.no_contract}
              name={'no_contract'}
              onChange={(e) => handleInputChange(e)}
              placeholder='No Perjanjian Kontrak' />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Tempat / Tanggal</label>
            <TextfieldCmp 
              value={items.place_date}
              name={'place_date'}
              onChange={(e) => handleInputChange(e)}
              placeholder='Tempat / Tanggal' />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">NIP / NIPK</label>
            <TextfieldCmp 
              value={items.nip}
              name={'nip'}
              onChange={(e) => handleInputChange(e)}
              placeholder='NIP / NIPK' />
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
                { no: 1, descriptionName: "description_1", descriptionValue: items.description_1, uraian: "Bahan", realizationName: "realization_1", realizationValue: items.realization_1 },
                { no: 2, descriptionName: "description_2", descriptionValue: items.description_2, uraian: "Pengumpulan Data", realizationName: "realization_2", realizationValue: items.realization_2 },
                { no: 3, descriptionName: "description_3", descriptionValue: items.description_3, uraian: "Analisis Data", realizationName: "realization_3", realizationValue: items.realization_3 },
                { no: 4, descriptionName: "description_4", descriptionValue: items.description_4, uraian: "Sewa Peralatan", realizationName: "realization_4", realizationValue: items.realization_4 },
                { no: 5, descriptionName: "description_5", descriptionValue: items.description_5, uraian: "Pelaporan Luaran Wajib", realizationName: "realization_5", realizationValue: items.realization_5 },
                { no: 6, descriptionName: "description_6", descriptionValue: items.description_6, uraian: "Lain-lain", realizationName: "realization_6", realizationValue: items.realization_6 },
              ].map((item) => (
                <tr key={item.no}>
                  <td className="border border-black px-4 py-2 text-center">
                    {item.no}
                  </td>
                  <td className="border border-black px-4 py-2">
                    <div>{item.uraian}</div>
                    <div>
                      <TextfieldCmp 
                        value={item.descriptionValue}
                        name={item.descriptionName}
                        onChange={(e) => handleInputChange(e)}
                        placeholder={item.uraian} />
                    </div>
                  </td>
                  <td className="border border-black px-4 py-2"></td>
                  <td className="border border-black px-4 py-2">
                    <TextfieldCmp 
                        value={item.realizationValue}
                        name={item.realizationName}
                        onChange={(e) => handleInputChange(e)}
                        placeholder='0' />
                  </td>
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

export default ModalEditLapKemajuanTab2;
