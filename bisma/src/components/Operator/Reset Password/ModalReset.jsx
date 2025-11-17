import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import { getToken } from "../../../Features/AuthSlice";

const apiUrl = process.env.REACT_APP_API_URL;

Modal.setAppElement("#root");

const ModalReset = ({ isOpen, onRequestClose, userId, refresh }) => {
  const [newPassword, setNewPassword] = useState("");
  const [isDone, setIsDone] = useState(false);

  // Generate password random
  const generatePassword = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789";
    return Array.from(
      { length: 10 },
      () => chars[Math.floor(Math.random() * chars.length)]
    ).join("");
  };

  const handleReset = async () => {
    try {
      const passwordRandom = generatePassword();
      setNewPassword(passwordRandom);

      await axios.post(
        `${apiUrl}/api/users/reset-password/${userId}`,
        { password: passwordRandom }, // body
        getToken() // header token
      );

      setIsDone(true);
      refresh(); // refresh tabel user
    } catch (error) {
      console.log(error);
      setNewPassword("Gagal mereset password!");
      setIsDone(true);
    }
  };

  const handleClose = () => {
    setNewPassword("");
    setIsDone(false);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      className="bg-white rounded-lg shadow-lg p-6 w-96 mx-auto"
      overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      {/* =================== SEBELUM RESET =================== */}
      {!isDone && (
        <>
          <h2 className="text-lg font-semibold text-center mb-5">
            Yakin ingin mereset password user ini?
          </h2>

          <div className="flex justify-center space-x-4 mt-5">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={handleReset}
            >
              Ya, Reset
            </button>

            <button
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
              onClick={handleClose}
            >
              Tidak
            </button>
          </div>
        </>
      )}

      {/* =================== SETELAH RESET =================== */}
      {isDone && (
        <div className="text-center">
          <h2 className="text-lg font-semibold text-green-600">
            Reset Berhasil!
          </h2>

          <p className="mt-3 text-gray-700">Password Baru:</p>

          <div className="mt-3 bg-gray-100 border rounded-md py-3 px-4 text-xl font-bold text-blue-700">
            {newPassword}
          </div>

          <button
            className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleClose}
          >
            Tutup
          </button>
        </div>
      )}
    </Modal>
  );
};

export default ModalReset;
