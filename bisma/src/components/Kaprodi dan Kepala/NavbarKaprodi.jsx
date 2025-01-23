import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { getToken, LogOut, reset } from "../../Features/AuthSlice";
import axios from "axios";
import { useDispatch } from "react-redux";
import { MdLogout, MdErrorOutline } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NavbarKaprodi = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [dropdown, setDropdown] = useState(false);
  const [subDropdown, setSubDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const [username, setUsername] = useState("");
  const apiUrl = process.env.REACT_APP_API_URL;

  // Fungsi untuk membuka dropdown
  const handleDropdownEnter = () => {
    setDropdown(true);
  };

  // Fungsi untuk sub-dropdown
  const handleSubDropdownEnter = () => {
    setSubDropdown(true);
  };

  const handleSubDropdownLeave = () => {
    setSubDropdown(false);
  };

  // Menangani klik di luar dropdown untuk menutup dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdown(false);
        setSubDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  useEffect(() => {
    axios
      .get(`${apiUrl}/api/me`, getToken())
      .then((res) => {
        setUsername(res.data.user.name);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
    toast.success("Successfully logged out");
  };

  const showLogoutConfirmation = () => {
    toast(({ closeToast }) => (
      <div className="text-center">
        <MdErrorOutline className="text-red-500 text-4xl mx-auto mb-2" />
        <p className="font-semibold text-lg">
          Are you sure you want to logout?
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <button
            className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600"
            onClick={() => {
              logout();
              closeToast();
            }}
          >
            Yes
          </button>
          <button
            className="px-4 py-2 bg-gray-300 text-black font-semibold rounded hover:bg-gray-400"
            onClick={closeToast}
          >
            No
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="w-full p-1">
        <div className="relative flex items-center justify-between">
          {/* Perbaiki penempatan logo */}
          <img
            src={process.env.PUBLIC_URL + "/logo.svg"}
            alt="logo"
            className="py-2 w-40 h-auto z-10" // Menyesuaikan ukuran logo
          />

          <div className="flex items-center justify-end ml-auto p-2 space-x-6">
            {" "}
            {/* Menggunakan ml-auto agar tetap di kanan */}
            {/* Ikon Notifikasi */}
            <button className="cursor-pointer">
              <img
                src={process.env.PUBLIC_URL + "/assets/notification.svg"}
                alt="notification"
                className="w-5 h-5 text-neutral-950 hover:text-neutral-70"
              />
            </button>
            {/* Nama Pengguna */}
            <span className="text-lg font-sans text-gray-700 mx-2">
              {username}
            </span>
            {/* Ikon Pengguna */}
            <button className="cursor-pointer">
              <img
                src={process.env.PUBLIC_URL + "/assets/user.svg"}
                alt="user"
                className="w-5 h-5"
              />
            </button>
          </div>
        </div>
      </div>

      <div>
        <header className="sticky top-0 z-50 bg-violet-800 p-4">
          <nav className="">
            <div className="container mx-auto flex justify-between items-center">
              <ul className="flex justify-between items-center w-full">
                <li className="text-white hover:text-gray-300 cursor-pointer flex items-center">
                  <Link to="/dashboard" className="flex items-center">
                    <img
                      src={process.env.PUBLIC_URL + "/assets/dashboard.svg"}
                      alt="dashboard"
                      className="w-5 h-5 mr-2"
                    />
                    {/* Dashboard */}
                    <Link to="/dashboard">Dashboard</Link>
                  </Link>
                </li>

                {/* Dropdown di Penelitian */}

                {/* kaprodi */}

                <li className="text-white hover:text-gray-300 cursor-pointer flex items-center">
                  <img
                    src={process.env.PUBLIC_URL + "/assets/laporan.svg"}
                    alt="laporan"
                    className="w-5 h-5 mr-2"
                  />
                  Persetujuan Usulan
                </li>

                <li
                  className="text-white hover:text-gray-300 cursor-pointer flex items-center"
                  onClick={showLogoutConfirmation}
                >
                  <MdLogout className="w-5 h-5 mr-2" />
                  LogOut
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>

      <div className="flex-1 overflow-y-auto bg-neutral-30 p-8">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {children}
      </div>
    </div>
  );
};

export default NavbarKaprodi;
