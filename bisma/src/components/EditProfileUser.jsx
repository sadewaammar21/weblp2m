import React, { useState } from "react";
import ModalEditUser from "./ModalEditUser";

const EditProfileUser = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("user")); // ambil user dari localStorage

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleUpdateUser = (updatedUser) => {
    localStorage.setItem("user", JSON.stringify(updatedUser));
    window.location.reload();
  };

  const getProdiName = (id) => {
    const prodiList = [
      { id: 1, name: "D3 - Sistem Informasi Akuntantsi" },
      { id: 2, name: "D3 - Sistem Informasi" },
      { id: 3, name: "D3 - Teknologi Informasi" },
      { id: 4, name: "S1 - Sistem Informasi" },
      { id: 5, name: "S1 - Informatika" },
    ];
    const result = prodiList.find((p) => p.id === id);
    return result ? result.name : "-";
  };

  return (
    <div>
      <div className="bg-white rounded-lg shadow-lg p-5">
        {/* HEADER */}
        <div className="bg-bluef-50 rounded-lg shadow-lg w-full p-2">
          <div className="flex justify-between">
            <div className="mx-5 my-5">
              <h1 className="font-poppins text-h5 text-violet-800">
                {user?.name ?? "-"}
              </h1>

              <h1 className="text-b1 my-3 text-violet-800">
                Program Studi: {getProdiName(user?.id_prodi)}
              </h1>
            </div>

            <div>
              <img
                src={process.env.PUBLIC_URL + "/assets/user_profil.png"}
                alt="logo"
              />
            </div>
          </div>
        </div>

        {/* DETAIL USER */}
        <div className="mx-5 my-5 grid grid-cols-2 gap-4">
          <div className="space-y-5">
            <p className="text-b1 text-neutral-400">
              NIDN
              <br />
              <span className="text-violet-800">{user?.nidn ?? "-"}</span>
            </p>

            <p className="text-b1 text-neutral-400">
              NIK
              <br />
              <span className="text-violet-800">{user?.nik ?? "-"}</span>
            </p>

            <p className="text-b1 text-neutral-400">
              Institusi
              <br />
              <span className="text-violet-800">
                {user?.institution ?? "-"}
              </span>
            </p>

            <p className="text-b1 text-neutral-400">
              Cluster
              <br />
              <span className="text-violet-800">{user?.cluster ?? "-"}</span>
            </p>

            <p className="text-b1 text-neutral-400">
              Education Level
              <br />
              <span className="text-violet-800">
                {user?.education_level ?? "-"}
              </span>
            </p>
          </div>

          <div className="space-y-5">
            <p className="text-b1 text-neutral-400">
              Tempat Lahir
              <br />
              <span className="text-violet-800">
                {user?.place_of_birth ?? "-"}
              </span>
            </p>

            <p className="text-b1 text-neutral-400">
              Tanggal Lahir
              <br />
              <span className="text-violet-800">
                {user?.date_of_birth ?? "-"}
              </span>
            </p>

            <p className="text-b1 text-neutral-400">
              No HP
              <br />
              <span className="text-violet-800">{user?.phone ?? "-"}</span>
            </p>

            <p className="text-b1 text-neutral-400">
              Email
              <br />
              <span className="text-violet-800">{user?.email ?? "-"}</span>
            </p>

            <p className="text-b1 text-neutral-400">
              Website
              <br />
              <span className="text-violet-800">{user?.website ?? "-"}</span>
            </p>
          </div>
        </div>

        <hr className="border-gray-300 my-2" />

        <div className="flex justify-end">
          <button
            onClick={openModal}
            className="bg-yellow-500 text-white py-2 px-4 rounded-md"
          >
            Sunting
          </button>
        </div>
      </div>

      <ModalEditUser
        isOpen={isOpen}
        onRequestClose={closeModal}
        user={user}
        onSave={handleUpdateUser}
      />
    </div>
  );
};

export default EditProfileUser;
