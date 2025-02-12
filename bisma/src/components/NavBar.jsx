import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { getToken, LogOut, reset } from "../Features/AuthSlice";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { MdLogout, MdErrorOutline } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NavBar = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isSuccess, message } = useSelector((state) => state.auth);

  const [dropdown, setDropdown] = useState(null);
  const [subDropdown, setSubDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const [username, setUsername] = useState("");
  const apiUrl = process.env.REACT_APP_API_URL;
  const [subDropdownMonitoringPenelitian, setSubDropdownMonitoringPenelitian] =
    useState(false);
  const [subDropdownMonitoringPengabdian, setSubDropdownMonitoringPengabdian] =
    useState(false);
  const [roles, setRoles] = useState({});
  const [currentRoles, setCurrentRoles] = useState(0);

  const handleSubDropdownEnters = (type) => {
    if (type === "penelitian") {
      setSubDropdownMonitoringPenelitian(true);
    } else if (type === "pengabdian") {
      setSubDropdownMonitoringPengabdian(true);
    }
  };

  const handleSubDropdownLeaves = (type) => {
    if (type === "penelitian") {
      setSubDropdownMonitoringPenelitian(false);
    } else if (type === "pengabdian") {
      setSubDropdownMonitoringPengabdian(false);
    }
  };
  // Fungsi untuk membuka dropdown
  const handleDropdownEnter = (dropdownId) => {
    setDropdown(dropdownId);
  };
  const handleDropdownLeave = () => {
    setDropdown(false);
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
        setDropdown();
        setSubDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const user = localStorage.getItem("user");
  const parseUser = JSON.parse(user);
  // useEffect(() => {
  //   console.log(parseUser);
  //   setUsername(parseUser.name);
  //   setRoles(parseUser.roles);
  //   console.log(roles);
  //   setCurrentRoles(localStorage.getItem("currentRole"));
  // }, []);

  useEffect(() => {
    if (!parseUser) {
      navigate("/"); // Redirect jika pengguna tidak ada
      return;
    }

    setUsername(parseUser.name);
    setRoles(parseUser.roles);

    // Tentukan currentRole jika belum ada
    const savedRole = localStorage.getItem("currentRole");
    if (!savedRole && parseUser.roles.length === 1) {
      const singleRole = parseUser.roles[0].id;
      setCurrentRoles(singleRole);
      localStorage.setItem("currentRole", singleRole);
    } else if (savedRole) {
      setCurrentRoles(savedRole);
    }
  }, []);

  // const logout = () => {
  //   dispatch(LogOut());
  //   dispatch(reset());
  //   navigate("/");
  //   toast.success("Successfully logged out");
  // };

  const logout = async () => {
    try {
      const response = await dispatch(LogOut()).unwrap(); // Ambil response dari logout
      dispatch(reset());

      localStorage.setItem("logoutMessage", response.message); // Simpan pesan dari server
      navigate("/");
    } catch (error) {
      toast.error("Logout failed", { position: "top-right" });
    }
  };

  //menu dropdown hover dashboard untuk beralih role
  // const roles =[
  //   {id:1, label: "Dashboard Dosen"},
  //   {id:2, label: "Dashboard Reviewer"},
  //   {id:3, label: "Dashboard Operator"},
  //   {id:4, label: "Dashboard Kaprodi"},
  //   {id:5, label: "Dashboard Kepala LPPM"},
  // ]

  // const handleRoleChange = (id) => {
  //   localStorage.setItem("currentRole", id);
  //   window.location.reload();
  //   navigate("/dashboard");
  // };
  // const handleRoleChange = (id) => {
  //   if (id === currentRoles) return; // Jika role sudah dipilih, abaikan

  //   localStorage.setItem("currentRole", id);
  //   setCurrentRoles(id); // Perbarui state
  //   window.location.reload();
  // };

  const handleRoleChanges = (id) => {
    const roleMapping = {
      Dosen: "/dashboard",
      Operator: "/dashboard-operator",
      Reviewer: "/dashboard-reviewer",
      "Kepala LPPM": "/dashboard-kepala-lppm",
      Kaprodi: "/dashboard-kaprodi",
    };

    // Cari role berdasarkan id
    const selectedRole = parseUser.roles.find((role) => role.id === id);

    console.log("Selected Role:", selectedRole); // Debugging
    // Cari role berdasarkan id
    // const selectedRole = parseUser.roles.find((role) => role.id === id);

    //   if (selectedRole) {
    //     const targetPath = roleMapping[selectedRole.name] || "/dashboard"; // Default ke "/dashboard" jika role tidak ditemukan
    //     localStorage.setItem("currentRole", id);
    //     navigate(targetPath);
    //     window.location.reload();
    //   }
    // };

    if (selectedRole) {
      const targetPath = roleMapping[selectedRole.name] || "/dashboard";

      console.log("Navigating to:", targetPath); // Debugging

      localStorage.setItem("currentRole", id);
      navigate(targetPath);
      window.location.reload();
    }
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
            className="px-2 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600"
            onClick={() => {
              logout();
              closeToast();
            }}
          >
            Yes
          </button>
          <button
            className="px-2 py-2 bg-gray-300 text-black font-semibold rounded hover:bg-gray-400"
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

      <div className="mx-2">
        <header className="sticky top-0 z-50 bg-violet-800 p-4">
          <nav className="">
            <div className="container mx-auto flex justify-between items-center">
              <ul className="flex justify-between items-center w-full">
                {/* dashboard */}
                <li
                  className="text-white hover:text-gray-300 cursor-pointer flex items-center"
                  onMouseEnter={() => handleDropdownEnter(1)}
                  onClick={() => navigate("/dashboard")}
                >
                  <img
                    src={process.env.PUBLIC_URL + "/assets/dashboard.svg"}
                    alt="dashboard"
                    className="w-5 h-5 mr-2"
                  />
                  <div className="flex items-center">Dashboard</div>
                  {dropdown === 1 && (
                    <ul
                      className="absolute top-full mt-2 left-0 bg-white text-violet-800 shadow-md w-48 z-10"
                      ref={dropdownRef}
                    >
                      {parseUser.roles.map((item, index) => (
                        <li
                          key={index}
                          className="px-2 py-2 text-violet-800  hover:bg-violet-800 hover:text-white relative"
                          onClick={() => handleRoleChanges(item.id)}
                        >
                          Dashboard {item.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                {/* Dropdown di Penelitian */}
                <li
                  className={`text-white hover:text-gray-300 cursor-pointer relative flex items-center ${currentRoles == 1 ? "show" : "hidden"}`}
                  onMouseEnter={() => handleDropdownEnter(2)}
                >
                  <img
                    src={process.env.PUBLIC_URL + "/assets/penelitian.svg"}
                    alt="penelitian"
                    className="w-5 h-5 mr-2"
                  />
                  <div className="flex items-center">
                    Penelitian
                    <FaChevronDown className="ml-5" />
                  </div>
                  {dropdown === 2 && (
                    <ul
                      className="absolute top-full mt-2 left-0 bg-white text-black shadow-md w-48 z-10"
                      ref={dropdownRef}
                    >
                      <li
                        className="px-2 py-2 text-violet-800   hover:bg-violet-800 hover:text-white relative"
                        onMouseEnter={handleSubDropdownEnter}
                        onMouseLeave={handleSubDropdownLeave}
                      >
                        <div className="flex items-center justify-between">
                          Penelitian Internal
                          <FaChevronRight className=" w-4 h-4" />
                        </div>
                        {subDropdown && (
                          <ul className="absolute top-0 text-black left-full ml-1 w-48 bg-gray-50">
                            <li className="px-2 py-2 text-violet-800   hover:bg-violet-800 hover:text-white flex items-center">
                              <Link to="/penelitian/usulan">Usulan Baru</Link>
                            </li>
                            <li className="px-2 py-2 text-violet-800   hover:bg-violet-800 hover:text-white flex items-center">
                              <Link to="/penelitian/perbaikan">
                                Perbaikan Usulan
                              </Link>
                            </li>
                            <li className="px-2 py-2 text-violet-800   hover:bg-violet-800 hover:text-white flex items-center">
                              <Link to="/penelitian/laporan-kemajuan">
                                Laporan Kemajuan
                              </Link>
                            </li>
                            <li className="px-2 py-2 text-violet-800   hover:bg-violet-800 hover:text-white flex items-center">
                              <Link to="/penelitian/laporan-akhir">
                                Laporan Akhir
                              </Link>
                            </li>
                            <li className="px-2 py-2 text-violet-800   hover:bg-violet-800 hover:text-white flex items-center">
                              <Link to="/penelitian/catatan-harian">
                                Catatan Harian
                              </Link>
                            </li>
                          </ul>
                        )}
                      </li>
                      <li className="px-2 py-2 text-violet-800   hover:bg-violet-800 hover:text-white">
                        Penelitian Eksternal
                      </li>
                    </ul>
                  )}
                </li>

                {/* Dropdown di Pengabdian */}
                <li
                  className={`text-white hover:text-gray-300 cursor-pointer relative flex items-center ${currentRoles == 1 ? "show" : "hidden"}`}
                  onMouseEnter={() => handleDropdownEnter(3)}
                >
                  <img
                    src={process.env.PUBLIC_URL + "/assets/pengabdian.svg"}
                    alt="pengabdian"
                    className="w-5 h-5 mr-2"
                  />
                  <div className="flex items-center">
                    Pengabdian
                    <FaChevronDown className="ml-2" />
                  </div>
                  {dropdown === 3 && (
                    <ul
                      className="absolute top-full mt-2 left-0 bg-white text-black shadow-md w-48 z-10"
                      ref={dropdownRef}
                    >
                      <li
                        className="px-2 py-2  text-violet-800   hover:bg-violet-800 hover:text-white relative"
                        onMouseEnter={handleSubDropdownEnter}
                        onMouseLeave={handleSubDropdownLeave}
                      >
                        <div className="flex items-center justify-between">
                          Penelitian Internal
                          <FaChevronRight className="w-4 h-4" />
                        </div>
                        {subDropdown && (
                          <ul className="absolute top-0 text-black left-full ml-1 w-48 bg-gray-50">
                            <li className="px-2 py-2 text-violet-800   hover:bg-violet-800 hover:text-white flex items-center">
                              <Link to="/pengabdian/usulan">Usulan Baru</Link>
                            </li>
                            <li className="px-2 py-2 text-violet-800   hover:bg-violet-800 hover:text-white flex items-center">
                              <Link to="/pengabdian/perbaikan">
                                Perbaikan Usulan
                              </Link>
                            </li>
                            <li className="px-2 py-2 text-violet-800   hover:bg-violet-800 hover:text-white flex items-center">
                              <Link to="/pengabdian/laporan-kemajuan">
                                Laporan Kemajuan
                              </Link>
                            </li>
                            <li className="px-2 py-2 text-violet-800   hover:bg-violet-800 hover:text-white flex items-center">
                              <Link to="/pengabdian/laporan-akhir">
                                Laporan Akhir
                              </Link>
                            </li>
                            <li className="px-2 py-2 text-violet-800   hover:bg-violet-800 hover:text-white flex items-center">
                              <Link to="/pengabdian/catatan-harian">
                                Catatan Harian
                              </Link>
                            </li>
                          </ul>
                        )}
                      </li>
                      <li className="px-2 py-2 text-violet-800   hover:bg-violet-800 hover:text-white">
                        Penelitian Eksternal
                      </li>
                    </ul>
                  )}
                </li>

                {/* kekayaan intelektual */}

                {/* penilaian proposal */}
                <li
                  className={`text-white hover:text-gray-300 cursor-pointer relative flex items-center ${currentRoles == 2 ? "show" : "hidden"}`}
                  onMouseEnter={() => handleDropdownEnter(4)}
                  // onMouseLeave={handleDropdownLeave}
                  // ref={dropdownRef}
                >
                  <img
                    src={process.env.PUBLIC_URL + "/assets/laporan.svg"}
                    alt="laporan"
                    className="w-5 h-5 mr-2"
                  />
                  <div className="flex items-center justify-between">
                    Penilaian Proposal
                    <FaChevronDown className="mx-2 w-4 h-4" />
                  </div>
                  {dropdown === 4 && (
                    <ul
                      className="absolute top-full mt-2 left-0 bg-white text-black shadow-md w-48 z-10"
                      ref={dropdownRef}
                    >
                      <li className="px-2 py-2 text-violet-800   hover:bg-violet-800 hover:text-white">
                        <Link to="/review-penilaian-proposal">Penelitian</Link>
                      </li>
                      <li className="px-2 py-2 text-violet-800   hover:bg-violet-800 hover:text-white">
                        <Link to="/review/penilaian-proposal-pengabdian">
                          Pengabdian
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                {/* monev */}
                <li
                  className={`text-white hover:text-gray-300 cursor-pointer relative flex items-center ${currentRoles == 2 ? "show" : "hidden"}`}
                  onMouseEnter={() => handleDropdownEnter(5)}
                  // onMouseLeave={handleDropdownLeave}
                  ref={dropdownRef}
                >
                  <img
                    src={process.env.PUBLIC_URL + "/assets/kkyint.svg"}
                    alt="kekayaan intelektual"
                    className="w-5 h-5 mr-2"
                  />
                  <div className="flex items-center justify-between">
                    Monev
                    <FaChevronDown className="mx-2 w-4 h-4" />
                  </div>
                  {dropdown === 5 && (
                    <ul
                      className="absolute top-full mt-2 left-0 bg-white text-black shadow-md w-48 z-10"
                      ref={dropdownRef}
                    >
                      <li className="px-2 py-2 text-violet-800   hover:bg-violet-800 hover:text-white">
                        <Link to="/list-monev-penelitian">Penelitian</Link>
                      </li>
                      <li className="px-2 py-2 text-violet-800   hover:bg-violet-800 hover:text-white">
                        <Link to="/pengabdian/monev">Pengabdian</Link>
                      </li>
                    </ul>
                  )}
                </li>

                {/* Monitoring */}
                <li
                  className={`text-white hover:text-gray-300 cursor-pointer relative flex items-center ${currentRoles == 3 ? "show" : "hidden"}`}
                  onMouseEnter={() => handleDropdownEnter(6)}
                  // onMouseLeave={handleDropdownLeave}
                  ref={dropdownRef}
                >
                  <div className="flex items-center">
                    Monitoring
                    <FaChevronDown className="ml-2" />
                  </div>
                  {dropdown === 6 && (
                    <ul
                      className="absolute top-full mt-2 left-0 bg-white text-black shadow-md w-48"
                      ref={dropdownRef}
                    >
                      {/* Penelitian */}
                      <li
                        className="px-2 py-2 text-violet-800   hover:bg-violet-800 hover:text-white relative"
                        onMouseEnter={() =>
                          handleSubDropdownEnters("penelitian")
                        }
                        onMouseLeave={() =>
                          handleSubDropdownLeaves("penelitian")
                        }
                      >
                        <div className="flex items-center justify-between">
                          Penelitian
                          <FaChevronRight className="w-4 h-4" />
                        </div>
                        {subDropdownMonitoringPenelitian && (
                          <ul
                            className="absolute top-0 left-full ml-1 w-48 bg-gray-50"
                            ref={dropdownRef}
                          >
                            <li className="px-2 py-2 text-violet-800   hover:bg-violet-800 hover:text-white">
                              <Link to="/monitoring-usulan-reguler">
                                Monitoring Usulan
                              </Link>
                            </li>
                            <li className="px-2 py-2 text-violet-800   hover:bg-violet-800 hover:text-white">
                              <Link to="/monitoring-perbaikan-usulan-penelitian">
                                Perbaikan Usulan
                              </Link>
                            </li>
                            {/* <li className="px-2 py-2 text-violet-800   hover:bg-violet-800 hover:text-white">
                              <Link to="/monitoring-usulan-reguler-hasil-review">
                                Hasil Review
                              </Link>
                            </li> */}
                            <li className="px-2 py-2 text-violet-800   hover:bg-violet-800 hover:text-white">
                              <Link to="/monitoring/penelitian/periode-kegiatan">
                                Periode Kegiatan
                              </Link>
                            </li>
                          </ul>
                        )}
                      </li>

                      {/* Pengabdian */}
                      <li
                        className="px-2 py-2 text-violet-800   hover:bg-violet-800 hover:text-white relative"
                        onMouseEnter={() =>
                          handleSubDropdownEnters("pengabdian")
                        }
                        onMouseLeave={() =>
                          handleSubDropdownLeaves("pengabdian")
                        }
                      >
                        <div className="flex items-center justify-between">
                          Pengabdian
                          <FaChevronRight className="w-4 h-4" />
                        </div>
                        {subDropdownMonitoringPengabdian && (
                          <ul
                            className="absolute top-0 left-full ml-1 w-48 bg-gray-50"
                            ref={dropdownRef}
                          >
                            <li className="px-2 py-2 text-violet-800   hover:bg-violet-800 hover:text-white">
                              <Link to="/monitoring/pengabdian/usulan-reguler">
                                Monitoring Usulan
                              </Link>
                            </li>
                            <li className="px-2 py-2 text-violet-800   hover:bg-violet-800 hover:text-white">
                              <Link to="/monitoring/pengabdian/perbaikan-usulan">
                                Perbaikan Usulan
                              </Link>
                            </li>
                            {/* <li className="px-2 py-2 text-violet-800   hover:bg-violet-800 hover:text-white">
                              <Link to="/monitoring/pengabdian/hasil-review">
                                Hasil Review
                              </Link>
                            </li> */}
                            <li className="px-2 py-2 text-violet-800   hover:bg-violet-800 hover:text-white">
                              <Link to="/monitoring/pengabdian/periode-kegiatan">
                                <div className="flex items-center justify-between">
                                  Periode Kegiatan
                                </div>
                              </Link>
                            </li>
                          </ul>
                        )}
                      </li>
                    </ul>
                  )}
                </li>

                {/* Dropdown di Data Pendukung */}
                <li
                  className={`text-white hover:text-gray-300 cursor-pointer relative ${currentRoles == 3 ? "show" : "hidden"}`}
                  onMouseEnter={() => handleDropdownEnter(7)}
                  // onMouseLeave={handleDropdownLeave}
                >
                  <div className="flex items-center">
                    <img
                      src={process.env.PUBLIC_URL + "/assets/kkyint.svg"}
                      alt="kekayaan intelektual"
                      className="w-5 h-5 mr-2"
                    />
                    Data Pendukung
                    <FaChevronDown className="ml-2" />
                  </div>
                  {dropdown === 7 && (
                    <ul
                      className="absolute top-full mt-2 left-0 bg-white text-black shadow-md w-48 z-10"
                      ref={dropdownRef}
                    >
                      <li className="px-2 py-2 text-violet-800   hover:bg-violet-800 hover:text-white">
                        <Link to="/monitoring/data-pendukung/edit-profil-lembaga">
                          Edit Profil Lembaga
                        </Link>
                      </li>
                      <li className="px-2 py-2 text-violet-800   hover:bg-violet-800 hover:text-white">
                        <Link to="/monitoring/data-pendukung/profil-user-list">
                          Edit Profil User
                        </Link>
                      </li>
                      <li className="px-2 py-2 text-violet-800   hover:bg-violet-800 hover:text-white">
                        <Link to="/monitoring/data-pendukung/reset-password-user">
                          Reset Password User
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                {/* pengelolaan reviewer */}
                {/* <li
                  className={`text-white hover:text-gray-300 cursor-pointer relative flex items-center ${currentRoles == 3 ? "show" : "hidden"}`}
                >
                  <Link to="/monitoring-pengelola-review">
                    <div className="flex items-center">
                      <img
                        src={process.env.PUBLIC_URL + "/assets/laporan.svg"}
                        alt="laporan"
                        className="w-5 h-5 mr-2"
                      />
                      Pengelola Review
                    </div>
                  </Link>
                </li> */}

                <li
                  className={`text-white hover:text-gray-300 cursor-pointer relative ${currentRoles == 3 ? "show" : "hidden"}`}
                  onMouseEnter={() => handleDropdownEnter(8)}
                  // onMouseLeave={handleDropdownLeave}
                >
                  <div className="flex items-center">
                    <img
                      src={process.env.PUBLIC_URL + "/assets/laporan.svg"}
                      alt="laporan"
                      className="w-5 h-5 mr-2"
                    />
                    Pengelola Review
                  </div>
                  {dropdown === 8 && (
                    <ul
                      className="absolute top-full mt-2 left-0 bg-white text-black shadow-md w-48 z-10"
                      ref={dropdownRef}
                    >
                      <li className="px-2 py-2 text-violet-800   hover:bg-violet-800 hover:text-white">
                        <Link to="/monitoring-pengelola-review">
                          Penelitian
                        </Link>
                      </li>
                      <li className="px-2 py-2 text-violet-800   hover:bg-violet-800 hover:text-white">
                        <Link to="/monitoring/pengabdian/pengelola-review">
                          Pengabdian
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                {/* Operator */}

                {/* persetujuan usulan Kepala LPPM*/}
                <li
                  className={`text-white hover:text-gray-300 cursor-pointer relative ${currentRoles == 5 ? "show" : "hidden"}`}
                  onMouseEnter={() => handleDropdownEnter(9)}
                  // onMouseLeave={handleDropdownLeave}
                >
                  <div className="flex items-center">
                    <img
                      src={process.env.PUBLIC_URL + "/assets/kkyint.svg"}
                      alt="kekayaan intelektual"
                      className="w-5 h-5 mr-2"
                    />
                    Persetujuan Usulan
                    <FaChevronDown className="ml-2" />
                  </div>
                  {dropdown === 9 && (
                    <ul
                      className="absolute top-full mt-2 left-0 bg-white text-black shadow-md w-48 z-10"
                      ref={dropdownRef}
                    >
                      <li
                        className=" px-2 py-2 text-violet-800   hover:bg-violet-800 hover:text-white"
                        onClick={() =>
                          navigate("/kaprodi/penelitian/usulan-belum-ditinjau")
                        }
                      >
                        <Link to="/kaprodi/penelitian/usulan-belum-ditinjau">
                          Penelitian
                        </Link>
                      </li>
                      <li
                        className="px-2 py-2 text-violet-800   hover:bg-violet-800 hover:text-white"
                        onClick={() =>
                          navigate("/kaprodi/pengabdian/usulan-belum-ditinjau")
                        }
                      >
                        <Link>Pengabdian</Link>
                      </li>
                    </ul>
                  )}
                </li>
                {/* persetujuan usulan Kepala LPPM*/}

                {/* kaprodi */}
                <li
                  className={`text-white hover:text-gray-300 cursor-pointer relative ${currentRoles == 4 ? "show" : "hidden"}`}
                  onMouseEnter={() => handleDropdownEnter(10)}
                  // onMouseLeave={handleDropdownLeave}
                >
                  <div className="flex items-center">
                    <img
                      src={process.env.PUBLIC_URL + "/assets/kkyint.svg"}
                      alt="kekayaan intelektual"
                      className="w-5 h-5 mr-2"
                    />
                    Persetujuan Usulan
                    <FaChevronDown className="ml-2" />
                  </div>
                  {dropdown === 10 && (
                    <ul
                      className="absolute top-full mt-2 left-0 bg-white text-black shadow-md w-48 z-10"
                      ref={dropdownRef}
                    >
                      <li
                        className="px-2 py-2 text-violet-800   hover:bg-violet-800 hover:text-white"
                        onClick={() =>
                          navigate("/kaprodi/penelitian/usulan-belum-ditinjau")
                        }
                      >
                        <Link to="/kaprodi/penelitian/usulan-belum-ditinjau">
                          Penelitian
                        </Link>
                      </li>
                      <li
                        className="px-2 py-2 text-violet-800   hover:bg-violet-800 hover:text-white"
                        onClick={() =>
                          navigate("/kaprodi/pengabdian/usulan-belum-ditinjau")
                        }
                      >
                        <Link>Pengabdian</Link>
                      </li>
                    </ul>
                  )}
                </li>
                {/* kaprodi */}

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

export default NavBar;
