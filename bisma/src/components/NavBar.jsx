import React, { useState, useEffect, useRef } from 'react';
// import { FaUserCircle } from 'react-icons/fa';
// import { AiOutlineBell } from 'react-icons/ai';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { getToken } from '../Features/AuthSlice';
import axios from "axios";

const NavBar = ({children}) => {
    const [dropdown, setDropdown] = useState(false);
    const [subDropdown, setSubDropdown] = useState(false);
    const dropdownRef = useRef(null);
    const [username, setUsername] = useState("");
    // const [role, setRole] = useState("");

    const apiUrl = process.env.REACT_APP_API_URL;

    // Fungsi untuk membuka dropdown
    const handleDropdownEnter = () => {
        setDropdown(true);
    };

    // Fungsi untuk menutup dropdown
    // const handleDropdownLeave = () => {
    //     setDropdown(false);
    //     setSubDropdown(false);
    // };

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
    
        axios.get(`${apiUrl}/api/me`, getToken() ).then(res => {
          setUsername(res.data.user.name);
        //   setRole(res.data.role.name);
          console.log(res.data.user);
        }).catch(err => {
          console.log(err);
        });
      }, []);

    return (
        <div>
            <div className='w-full p-2'>
                <div className='flex items-center justify-between'>
                <img 
                        src={process.env.PUBLIC_URL + "/logo.svg"} 
                        alt="logo" 
                        // width={150} 
                        className="absolute py-5" 
                        />
                    <button>

                    </button>
                    <div>
                    
                    </div>
                    <div className="flex items-center justify-end p-2 ">
                        <div className="flex items-center space-x-6">
                            <button className='cursor-pointer'>
                        <img 
                                src={process.env.PUBLIC_URL + "/assets/notification.svg"} 
                                alt="logo" 
                                className="w-5 h-5 mr-2 text-neutral-950 hover:text-neutral-70"  // Menyesuaikan ukuran ikon dan memberi jarak (margin) dengan teks
                            />
                            </button>
                        </div>
                        <div className="flex items-center space-x-6">
                            <span className="text-lg font-sans text-gray-700 mx-2">{username}</span>
                        </div>
                        <div className="flex items-center space-x-6">
                            <button className='cursor-pointer'>
                        <img 
                                src={process.env.PUBLIC_URL + "/assets/user.svg"} 
                                alt="logo" 
                                className="w-5 h-5 mr-2"  // Menyesuaikan ukuran ikon dan memberi jarak (margin) dengan teks
                            />
                            </button>
                        </div>
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
                                alt="logo" 
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
                                alt="logo" 
                                className="w-5 h-5 mr-2"  
                            />
                                <div className="flex items-center">
                                    Penelitian
                                    <FaChevronDown className="ml-2" />
                                </div>
                                {dropdown && (
                                    <ul 
                                        className="absolute top-full mt-2 left-0 bg-white text-black shadow-md w-48 z-10"
                                        ref={dropdownRef} // Attach ref to detect click outside
                                        onMouseEnter={handleDropdownEnter} // Tetap terbuka jika berada di dalam dropdown
                                    >
                                        <li 
                                            className="px-4 py-2  hover:bg-gray-100 relative"
                                            onMouseEnter={handleSubDropdownEnter}
                                            onMouseLeave={handleSubDropdownLeave}
                                        >
                                            <div className="flex items-center justify-between">
                                                Penelitian Internal
                                                <FaChevronRight className="w-4 h-4" />
                                            </div>
                                            {subDropdown && (
                                                <ul className="absolute top-0 text-black left-full ml-1 w-48 bg-gray-50">
                                                    <li className="px-4 py-2 hover:bg-gray-200 flex items-center">
                                                    <Link to="/usulanbaru">Usulan Baru</Link>
                                                    </li>
                                                    <li className="px-4 py-2 hover:bg-gray-200 flex items-center">
                                                    <Link to="/perbaikanusulan">Perbaikan usulan</Link>
                                                    </li>
                                                    <li className="px-4 py-2 hover:bg-gray-200 flex items-center">
                                                    <Link to="/laporankemajuan">Laporan Kemajuan</Link>
                                                    </li>
                                                    <li className="px-4 py-2 hover:bg-gray-200 flex items-center">
                                                    <Link to="/laporanakhir">Laporan Akhir</Link>
                                                    </li>
                                                    <li className="px-4 py-2 hover:bg-gray-200 flex items-center">
                                                    <Link to="/catatanakhir">Catatan Akhir</Link>
                                                    </li>
                                                    <li className="px-4 py-2 hover:bg-gray-200 flex items-center">
                                                    <Link to="/luaran">Luaran</Link>
                                                    </li>
                                                </ul>
                                            )}
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-100">
                                            Penelitian Eksternal
                                        </li>
                                    </ul>
                                )}
                            </li>
                            
                            <li className="text-white hover:text-gray-300 cursor-pointer flex items-center">
                            <img 
                                src={process.env.PUBLIC_URL + "/assets/kkyint.svg"} 
                                alt="logo" 
                                className="w-5 h-5 mr-2" 
                            />
                                Kekayaan Intelektual
                                </li>
                            <li className="text-white hover:text-gray-300 cursor-pointer flex items-center">
                            <img 
                                src={process.env.PUBLIC_URL + "/assets/laporan.svg"} 
                                alt="logo" 
                                className="w-5 h-5 mr-2"  
                            />
                                Laporan
                                </li>
                            <li className="text-white hover:text-gray-300 cursor-pointer flex items-center">
                            <img 
                                src={process.env.PUBLIC_URL + "/assets/pengabdian.svg"} 
                                alt="logo" 
                                className="w-5 h-5 mr-2"
                            />
                                Pengabdian
                                </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className='bg-neutral-30 p-8 shadow-md min-h-screen'>
                {children}
            </div>
        </div>
    );
}

export default NavBar;
