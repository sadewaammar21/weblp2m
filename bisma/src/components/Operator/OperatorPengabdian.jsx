import React, {useState} from 'react';
import ModalEditDPPengabdian from './ModalEditDPPengabdian';
import ModalEditDPPengabdianDosen from './ModalEditDPPengabdianDosen';

const OperatorPengabdian = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDos, setIsOpenDos] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModalDos = () => {
    setIsOpenDos(true);
  };

  const closeModalDos = () => {
    setIsOpenDos(false);
  };

  return (
<div className="p-5 mx-5">
      <div className="flex justify-between">
        <h2 className="text-purple-600 font-bold text-lg mb-4">
          PROFIL LEMBAGA PENGABDIAN
        </h2>
        <button onClick={openModal} className="bg-orange-500 text-white rounded-md px-4 py-2 hover:bg-orange-300">
          Edit
        </button>
      </div>
      <ModalEditDPPengabdian isOpen={isOpen} onRequestClose={closeModal}/>
      <ModalEditDPPengabdianDosen isOpen={isOpenDos} onRequestClose={closeModalDos}/>
      <div className="space-y-2">
  <div className="flex items-center gap-x-4">
    <p className=" w-1/3">Kode PT</p>
    <p className="text-center">:</p>
    <p className="w-2/3">063040</p>
  </div>

  <div className="flex items-center gap-x-4">
    <p className=" w-1/3">Nama PT</p>
    <p className="text-center">:</p>
    <p className="w-2/3">STMIK Sinar Nusantara</p>
  </div>

  <div className="flex items-center gap-x-4">
    <p className=" w-1/3">Klaster</p>
    <p className="text-center">:</p>
    <p className="w-2/3">Kelompok PT Madya</p>
  </div>

  <div className="flex items-center gap-x-4">
    <p className=" w-1/3">Nomor SK Pendirian Lembaga</p>
    <p className="text-center">:</p>
    <p className="w-2/3">Nomor 01 Tahun 2023</p>
  </div>

  <div className="flex items-center gap-x-4">
    <p className=" w-1/3">Nama Lembaga</p>
    <p className="text-center">:</p>
    <p className="w-2/3">Lembaga Penelitian dan Pengabdian Kepada Masyarakat</p>
  </div>

  <div className="flex items-center gap-x-4">
    <p className=" w-1/3">Alamat Lembaga</p>
    <p className="text-center">:</p>
    <p className="w-2/3">JL. KH. Samanhudi 84-86 Surakarta</p>
  </div>

  <div className="flex items-center gap-x-4">
    <p className=" w-1/3">No Telepon</p>
    <p className="text-center">:</p>
    <p className="w-2/3" >0271716500</p>
  </div>

  <div className="flex items-center gap-x-4">
    <p className=" w-1/3">Email</p>
    <p className="text-center">:</p>
    <p className="w-2/3" >lppm@sinus.ac.id</p>
  </div>

  <div className="flex items-center gap-x-4">
    <p className=" w-1/3">Website</p>
    <p className="text-center">:</p>
    <p className="w-2/3" >www.sinus.ac.id</p>
  </div>

  <div className="flex items-center gap-x-4">
    <p className=" w-1/3">Nama Jabatan Pimpinan</p>
    <p className="text-center">:</p>
    <p className="w-2/3" >Kepala</p>
  </div>

  
</div>

<div className="flex-grow border-t border-black my-10"></div>
<div className="flex justify-between">
        <h2 className="text-purple-600 font-bold text-lg mb-4">
          PROFIL PIMPINAN LEMBAGA PENGABDIAN
        </h2>
        <button onClick={openModalDos} className="bg-orange-500 text-white rounded-md px-4 py-2 hover:bg-orange-300">
          Edit
        </button>
      </div>
      <div className="space-y-2">
      <div className="flex items-center gap-x-4">
    <p className=" w-1/3">Nama Jabatan Pimpinan</p>
    <p className="text-center">:</p>
    <p className="w-2/3" >Kepala</p>
  </div>

  <div className="flex items-center gap-x-4">
    <p className=" w-1/3">NIDN Pimpinan</p>
    <p className="text-center">:</p>
    <p className="w-2/3">0023037801</p>
  </div>

  <div className="flex items-center gap-x-4">
    <p className=" w-1/3">Nama</p>
    <p className="text-center">:</p>
    <p className="w-2/3">YUSTINA RETNO UTAMI</p>
  </div>

  </div>
    </div>
  );
};

export default OperatorPengabdian