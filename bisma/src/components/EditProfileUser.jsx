import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalEditUser from "./ModalEditUser";

const EditProfileUser = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className=" bg-white rounded-lg shadow-lg p-5">
        {/* <h1 className="text-xl font-bold text-violet-800 mb-4">Profil Anda</h1> */}
        <div className="bg-bluef-50 rounded-lg shadow-lg w-full p-2">
          <div className="flex justify-between">
            <div className="mx-5 my-5">
              <h1 className=" font-poppins text-h5 text-violet-800 ">
                Yustina Retno Wahyu Utami
              </h1>
              <h1 className="text-b1 my-3 text-violet-800 ">
                Program Studi: {"INFORMATIKA"}
              </h1>
            </div>
            <div>
              <img
                src={process.env.PUBLIC_URL + "/assets/user_profil.png"}
                alt="logo"
                className=""
              />
            </div>
          </div>
        </div>
        <div className=" mx-5 my-5 grid grid-cols-2 gap-4">
          {/* Kiri - Informasi Profil */}
          <div className="space-y-2">
            <div className="space-y-5">
              <p className=" text-b1 text-neutral-400 mb-5">
                NIDN/NIDK:
                <br />
                <span className="text-violet-800 text-b2 ">0020337801</span>
              </p>
              <p className=" text-b1 text-neutral-400 mb-5">
                Klaster: <br />
                <span className="text-violet-800 text-b2 ">
                  Kelompok PT Madya
                </span>
              </p>
              <p className=" text-b1 text-neutral-400 mb-5">
                Institusi: <br />
                <span className="text-violet-800 text-b2 ">
                  STMIK Sinar Nusantara
                </span>
              </p>
              <p className=" text-b1 text-neutral-400 mb-5">
                Program Studi: <br />
                <span className="text-violet-800 text-b2 ">Informatika</span>
              </p>
              <p className=" text-b1 text-neutral-400 mb-5">
                Jenjang Pendidikan:
                <br />
                <span className="text-violet-800 text-b2 ">S2</span>
              </p>
              <p className=" text-b1 text-neutral-400 mb-5">
                Jabatan Akademik:
                <br />
                <span className="text-violet-800 text-b2 ">Lektor</span>
              </p>
            </div>
          </div>
          {/* Kanan - Kontak dan Informasi Tambahan */}
          <div className="space-y-2">
            <div className="space-y-5">
              <p className=" text-b1 text-neutral-400 mb-5">
                Tempat Tanggal Lahir: <br />
                <span className="text-violet-800 text-b2 ">
                  Semarang, 23 Maret 1978
                </span>
              </p>
              <p className=" text-b1 text-neutral-400 mb-5">
                No KTP:
                <br />
                <span className="text-violet-800 text-b2 ">33223111111</span>
              </p>
              <p className=" text-b1 text-neutral-400 mb-5">
                No Telepon:
                <br />
                <span className="text-violet-800 text-b2 ">0271-9993333</span>
              </p>
              <p className=" text-b1 text-neutral-400 mb-5">
                No HP:
                <br />
                <span className="text-violet-800 text-b2 ">08223332222</span>
              </p>
              <p className=" text-b1 text-neutral-400 mb-5">
                Alamat Surel: <br />
                <span className="text-violet-800 text-b2 ">
                  yust.retno@gmail.com
                </span>
              </p>
              <p className=" text-b1 text-neutral-400 mb-5">
                Alamat: <br />
                <span className="text-violet-800 text-b2 ">
                  Griya Kelapa Gading No. 6 Blulukan Colomadu
                </span>
              </p>
            </div>
          </div>
        </div>
        <hr className="border-gray-300 my-2" />
        <div className="flex justify-end" onClick={openModal}>
          <button className="bg-yellow-500 text-white py-2 px-4 rounded-md">
            Sunting
          </button>
        </div>
      </div>
      <ModalEditUser isOpen={isOpen} onRequestClose={closeModal} />
    </div>
  );
};

export default EditProfileUser;
