import React, { useState, useEffect, useRef } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { Link,useNavigate } from 'react-router-dom';
import { getToken,LogOut,reset } from '../Features/AuthSlice';
import axios from "axios";
import { useDispatch } from 'react-redux';
import { MdLogout, MdErrorOutline } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NavBar = ({ children }) => {

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
    
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  useEffect(() => {
    axios.get(`${apiUrl}/api/me`, getToken())
      .then(res => {
        setUsername(res.data.user.name);
      })
      .catch(err => {
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
    toast(
      ({ closeToast }) => (
        <div className="text-center">
          <MdErrorOutline className="text-red-500 text-4xl mx-auto mb-2" />
          <p className="font-semibold text-lg">Are you sure you want to logout?</p>
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
      ),
      // {
      //   position: "top-right",  // Required but will be overridden by CSS
      //   autoClose: 5000,  // Close after 5 seconds
      //   closeOnClick: false,
      //   draggable: false,
      //   className: "Toastify__toast-container--centered",  // Apply custom CSS class
      // }
    );
  };
  

  return (
    <div>
      <div className='w-full p-1'>
        <div className='relative flex items-center justify-between'>
          {/* Perbaiki penempatan logo */}
          <img 
            src={process.env.PUBLIC_URL + "/logo.svg"} 
            alt="logo" 
            className="py-2 w-40 h-auto z-10"  // Menyesuaikan ukuran logo
          />

          <div className="flex items-center justify-end ml-auto p-2 space-x-6"> {/* Menggunakan ml-auto agar tetap di kanan */}
            {/* Ikon Notifikasi */}
            <button className='cursor-pointer'>
              <img 
                src={process.env.PUBLIC_URL + "/assets/notification.svg"} 
                alt="notification" 
                className="w-5 h-5 text-neutral-950 hover:text-neutral-70"
              />
            </button>

            {/* Nama Pengguna */}
            <span className="text-lg font-sans text-gray-700 mx-2">{username}</span>

            {/* Ikon Pengguna */}
            <button className='cursor-pointer'>
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
        <nav className="bg-violet-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <ul className="flex justify-between items-center w-full">
              <li className="text-white hover:text-gray-300 cursor-pointer flex items-center">
                <img 
                  src={process.env.PUBLIC_URL + "/assets/dashboard.svg"} 
                  alt="dashboard" 
                  className="w-5 h-5 mr-2"
                />
                Dashboard
              </li>

              {/* Dropdown di Penelitian */}
              <li 
                className="text-white hover:text-gray-300 cursor-pointer relative flex items-center"
                onMouseEnter={handleDropdownEnter}
              >
                <img 
                  src={process.env.PUBLIC_URL + "/assets/penelitian.svg"} 
                  alt="penelitian" 
                  className="w-5 h-5 mr-2"
                />
                <div className="flex items-center">
                  Penelitian
                  <FaChevronDown className="ml-2" />
                </div>
                {dropdown && (
                  <ul 
                    className="absolute top-full mt-2 left-0 bg-white text-black shadow-md w-48 z-10"
                    ref={dropdownRef}
                  >
                    <li 
                      className="px-4 py-2  hover:bg-violet-800 relative"
                      onMouseEnter={handleSubDropdownEnter}
                      onMouseLeave={handleSubDropdownLeave}
                    >
                      <div className="flex items-center justify-between">
                        Penelitian Internal
                        <FaChevronRight className="w-4 h-4" />
                      </div>
                      {subDropdown && (
                        <ul className="absolute top-0 text-black left-full ml-1 w-48 bg-gray-50">
                          <li className="px-4 py-2 hover:bg-violet-800 flex items-center">
                            <Link to="/usulanbaru">Usulan Baru</Link>
                          </li>
                          <li className="px-4 py-2 hover:bg-violet-800 flex items-center">
                            <Link to="/perbaikanusulan">Perbaikan Usulan</Link>
                          </li>
                          <li className="px-4 py-2 hover:bg-violet-800 flex items-center">
                            <Link to="/laporankemajuan">Laporan Kemajuan</Link>
                          </li>
                          <li className="px-4 py-2 hover:bg-violet-800 flex items-center">
                            <Link to="/laporanakhir">Laporan Akhir</Link>
                          </li>
                          <li className="px-4 py-2 hover:bg-violet-800 flex items-center">
                            <Link to="/catatanakhir">Catatan Akhir</Link>
                          </li>
                          <li className="px-4 py-2 hover:bg-violet-800 flex items-center">
                            <Link to="/luaran">Luaran</Link>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li className="px-4 py-2 hover:bg-violet-800">
                      Penelitian Eksternal
                    </li>
                  </ul>
                )}
              </li>

              <li className="text-white hover:text-gray-300 cursor-pointer flex items-center">
                <img 
                  src={process.env.PUBLIC_URL + "/assets/kkyint.svg"} 
                  alt="kekayaan intelektual" 
                  className="w-5 h-5 mr-2"
                />
                Kekayaan Intelektual
              </li>
              <li className="text-white hover:text-gray-300 cursor-pointer flex items-center">
                <img 
                  src={process.env.PUBLIC_URL + "/assets/laporan.svg"} 
                  alt="laporan" 
                  className="w-5 h-5 mr-2"
                />
                Laporan
              </li>
              <li className="text-white hover:text-gray-300 cursor-pointer flex items-center">
                <img 
                  src={process.env.PUBLIC_URL + "/assets/pengabdian.svg"} 
                  alt="pengabdian" 
                  className="w-5 h-5 mr-2"
                />
                Pengabdian
              </li>
              <li className="text-white hover:text-gray-300 cursor-pointer flex items-center"
              onClick={showLogoutConfirmation}>
                <MdLogout className="w-5 h-5 mr-2" />
                LogOut
              </li>
            </ul>
          </div>
        </nav>
      </div>

      

      <div className='bg-neutral-30 p-8 shadow-md min-h-screen'>
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
}

export default NavBar;
