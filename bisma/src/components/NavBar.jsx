import React, { useState, useEffect, useRef } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineBell } from 'react-icons/ai';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavBar = ({children}) => {
    const [dropdown, setDropdown] = useState(false);
    const [subDropdown, setSubDropdown] = useState(false);
    const dropdownRef = useRef(null);

    // Fungsi untuk membuka dropdown
    const handleDropdownEnter = () => {
        setDropdown(true);
    };

    // Fungsi untuk menutup dropdown
    const handleDropdownLeave = () => {
        setDropdown(false);
        setSubDropdown(false);
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

    return (
        <div>
            <div className='w-full h-[10%] p-4'>
                <div className='flex items-center justify-between'>
                    <div className='w-[223px] h-[53px] bg-neutral-80'/>
                    <div className="flex items-center justify-end p-2 ">
                        <div className="flex items-center space-x-6">
                            <AiOutlineBell className="text-2xl text-gray-600" />
                        </div>
                        <div className="flex items-center space-x-6">
                            <span className="text-lg font-medium text-gray-700 mx-2">Nama Pengguna</span>
                        </div>
                        <div className="flex items-center space-x-6">
                            <FaUserCircle className="text-2xl text-gray-600" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <nav className="bg-violet-800 p-4">
                    <div className="container mx-auto flex justify-between items-center">
                        <ul className="flex justify-between items-center w-full">
                            <li className="text-white hover:text-gray-300 cursor-pointer">Dashboard</li>
                            
                            {/* Dropdown di Penelitian */}
                            <li 
                                className="relative text-white hover:text-gray-300 cursor-pointer"
                                onMouseEnter={handleDropdownEnter}
                            >
                                <div className="flex items-center">
                                    Penelitian
                                    <FaChevronDown className="ml-2" />
                                </div>
                                {dropdown && (
                                    <ul 
                                        className="absolute left-0 text-black mt-2 w-48 \ z-10"
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
                            
                            <li className="text-white hover:text-gray-300 cursor-pointer">Kekayaan Intelektual</li>
                            <li className="text-white hover:text-gray-300 cursor-pointer">Laporan</li>
                            <li className="text-white hover:text-gray-300 cursor-pointer">Pengabdian</li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="w-full">
                {children}
            </div>
        </div>
    );
}

export default NavBar;
