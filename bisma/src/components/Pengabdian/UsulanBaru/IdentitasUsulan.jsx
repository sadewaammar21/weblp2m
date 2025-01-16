import React, { useEffect, useState } from "react";
import TextfieldCmp from "../../TextfieldCmp";
import DropdownCmp from "../../DropdownCmp";
import TextAreaCmp from "../../TextAreaCmp";
import { FaPlus } from "react-icons/fa";
import ModalTambahDosen from "./ModalTambahDosen";
import ModalTambahMahasiswa from "./ModalTambahMahasiswa";
import { getServices } from "../../../Features/ServiceSlice";
import { getToken } from "../../../Features/AuthSlice";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;
const IdentitasUsulan = ({ data, setData }) => {
  // const navigate = useNavigate(); // Hook untuk navigasi

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDos, setIsOpenDos] = useState(false);
  const [isOpenMhs, setIsOpenMhs] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleRadioChange = (value) => {
    setSelectedOption(value);
    // if (selectedOption === "tematik") {
    //   setData({ ...data, focus_rirn_id: null });
    // } else if (selectedOption === "rirn") {
    //   setData({ ...data, focus_thematic_id: null });
    // }
    console.log(selectedOption);
  };

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

  const openModalMhs = () => {
    setIsOpenMhs(true);
  };

  const closeModalMhs = () => {
    setIsOpenMhs(false);
  };

  const handleInputChange = () => (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setData((prevData) => ({
      ...prevData,
      [inputName]: inputValue,
    }));
  };

  const handleDropdownChange = (option, fieldName) => {
    setData((prevData) => ({
      ...prevData,
      [fieldName]: option.value,
    }));
  };

  const mapToDropdown = (data, labelKey, valueKey) => {
    return data.map((item) => ({
      label: item[labelKey],
      value: item[valueKey],
    }));
  };

  //menambah anggota dan mahasiswa
  const handleMembersChange = (index, memberData) => {
    const updatedMembers = [...data.members];
    updatedMembers[index] = memberData;
    setData({ ...data, members: updatedMembers });
  };

  const handleAddStudents = (index, studentData) => {
    const updatedStudent = [...data.students];
    updatedStudent[index] = studentData;
    setData({ ...data, students: updatedStudent });
  };

  const [category, setCategory] = useState([]);
  const [focus, setFocus] = useState([]);
  const [tematik, setTematik] = useState([]);
  const [rirn, setRirn] = useState([]);
  const [scheme, setScheme] = useState([]);
  const [scope, setScope] = useState([]);
  const [year, setYear] = useState([
    { id: 1, value: 2025 },
    { id: 2, value: 2026 },
    { id: 3, value: 2027 },
    { id: 4, value: 2028 },
    { id: 5, value: 2029 },
  ]);
  const [duration, setDuration] = useState([
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
    { id: 4, value: 4 },
    { id: 5, value: 5 },
  ]);
  const [cluster1, setCluster1] = useState([]);
  const [cluster2, setCluster2] = useState([]);
  const [cluster3, setCluster3] = useState([]);

  //fetch data
  useEffect(() => {
    fetchCategory();
    fetchScheme();
    fetchScope();
    fetchTematik();
    fetchRirn();
    fetchCluster1();
    fetchCluster2(data.cluster_lv1);
    fetchCluster3(data.cluster_lv2);
  }, [data.cluster_lv1, data.cluster_lv2]);

  const fetchCategory = async () => {
    const response = await axios.get(
      `${apiUrl}/api/service-category`,
      getToken()
    );
    setCategory(response.data);
    console.log(response.data);
  };

  const fetchScheme = async () => {
    const response = await axios.get(
      `${apiUrl}/api/service-scheme`,
      getToken()
    );
    setScheme(response.data);
    console.log(response.data);
  };

  const fetchScope = async () => {
    const response = await axios.get(`${apiUrl}/api/service-scope`, getToken());
    setScope(response.data);
    console.log(response.data);
  };

  const fetchTematik = async () => {
    const response = await axios.get(
      `${apiUrl}/api/service-focus-temathic`,
      getToken()
    );
    setTematik(response.data);
    console.log(response.data);
  };

  const fetchRirn = async () => {
    const response = await axios.get(
      `${apiUrl}/api/service-focus-rirn`,
      getToken()
    );
    setRirn(response.data);
    console.log(response.data);
  };

  const fetchCluster1 = async () => {
    const response = await axios.get(
      `${apiUrl}/api/service-cluster1`,
      getToken()
    );
    setCluster1(response.data);
    console.log(response.data);
  };

  const fetchCluster2 = async ($cluster1) => {
    const response = await axios.get(
      `${apiUrl}/api/service-cluster2/${$cluster1}`,
      getToken()
    );
    setCluster2(response.data);
    console.log(response.data);
  };

  const fetchCluster3 = async ($cluster2) => {
    const response = await axios.get(
      `${apiUrl}/api/service-cluster3/${$cluster2}`,
      getToken()
    );
    setCluster3(response.data);
    console.log(response.data);
  };

  return (
    <div>
      <div>
        <h1 className="text-xl font-bold text-violet-800 mx-5 my-5">
          1.1 Identitas Pengabdian{" "}
        </h1>
        <div className="grid grid-cols-3 gap-4">
          <TextfieldCmp
            label="1. Judul*"
            value={data.title}
            name="title"
            onChange={handleInputChange()}
            placeholder="Judul usulan baru"
          />
        </div>
      </div>
      <div>
        <h1 className="text-xl font-bold text-violet-800 mx-5 my-5">
          1.2 Pemilihan Program Pengabdian{" "}
        </h1>
        <div className="grid grid-cols-2 gap-x-10  ">
          <DropdownCmp
            label="1. Kategori Program Pengabdian *"
            options={mapToDropdown(category, "name", "id")}
            value={mapToDropdown(category, "name", "id").find(
              (option) => option.value === data.category_id
            )}
            onChange={(option) =>
              handleDropdownChange(option.value, "category_id")
            }
          />
          <DropdownCmp
            label="6. Lama Kegiatan *"
            options={mapToDropdown(duration, "value", "id")}
            value={mapToDropdown(duration, "value", "id").find(
              (option) => option.value === data.duration
            )}
            onChange={(option) => handleDropdownChange(option, "duration")}
          />
          {/* <DropdownCmp
            label="5. Ruang Lingkup *"
            options={options}
            value={data.scope_id}
            onChange={(option) =>
              handleDropdownChange(option.value, "scope_id")
            }
          /> */}
          <div className="p-4">
            <h2 className=" text-md">2. Bidang Fokus Pengabdian *</h2>
            <div className="mt-4">
              <label className="flex flex-col space-y-2">
                <div className="flex flex-col space-y-2 ">
                  {" "}
                  {/* Stack items vertically */}
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="bidangFokus"
                      value="tematik"
                      // checked={selectedOption === "tematik"}
                      onChange={() => handleRadioChange("tematik")}
                      className="w-4 h-4"
                    />
                    <span>Bidang Fokus Tematik</span>
                  </div>
                </div>
              </label>
              <DropdownCmp
                options={mapToDropdown(tematik, "name", "id")}
                value={mapToDropdown(tematik, "name", "id").find(
                  (option) => option.value === data.tematik_id
                )}
                onChange={(option) =>
                  handleDropdownChange(option.value, "tematik_id")
                }
                disabled={selectedOption !== "tematik"}
              />
            </div>

            <div className="mt-4">
              <label className="flex flex-col space-y-2">
                <div className="flex flex-col space-y-2">
                  {" "}
                  {/* Stack items vertically */}
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="bidangFokus"
                      value="rirn"
                      // checked={selectedOption === "rirn"}
                      onChange={() => handleRadioChange("rirn")}
                      className="w-4 h-4"
                    />
                    <span>Bidang Fokus RIRN</span>
                  </div>
                </div>
              </label>
              <DropdownCmp
                options={mapToDropdown(rirn, "name", "id")}
                value={mapToDropdown(rirn, "name", "id").find(
                  (option) => option.value === data.rirn_id
                )}
                onChange={(option) =>
                  handleDropdownChange(option.value, "rirn_id")
                }
                placeholder="Pilih Bidang Fokus RIRN"
                className="mt-2"
                disabled={selectedOption !== "rirn"}
              />
            </div>
          </div>

          <DropdownCmp
            label="7. Rumpun Ilmu Level 1 *"
            options={mapToDropdown(cluster1, "name", "id")}
            value={mapToDropdown(cluster1, "name", "id").find(
              (option) => option.value === data.cluster_lv1
            )}
            onChange={(option) => handleDropdownChange(option, "cluster_lv1")}
          />
          <DropdownCmp
            label="3. Kelompok Skema *"
            options={mapToDropdown(scheme, "name", "id")}
            value={mapToDropdown(scheme, "name", "id").find(
              (option) => option.value === data.scheme_id
            )}
            onChange={(option) =>
              handleDropdownChange(option.value, "scheme_id")
            }
          />
          <DropdownCmp
            label="8. Rumpun Ilmu Level 2 *"
            options={mapToDropdown(cluster2, "name", "id")}
            value={mapToDropdown(cluster2, "name", "id").find(
              (option) => option.value === data.cluster_lv2
            )}
            onChange={(option) => handleDropdownChange(option, "cluster_lv2")}
          />
          <DropdownCmp
            label="4. Ruang Lingkup *"
            options={mapToDropdown(scope, "name", "id")}
            value={mapToDropdown(scope, "name", "id").find(
              (option) => option.value === data.scope_id
            )}
            onChange={(option) =>
              handleDropdownChange(option.value, "scope_id")
            }
          />
          <DropdownCmp
            label="9. Rumpun Ilmu Level 3 * "
            options={mapToDropdown(cluster3, "name", "id")}
            value={mapToDropdown(cluster3, "name", "id").find(
              (option) => option.value === data.cluster_lv3
            )}
            onChange={(option) => handleDropdownChange(option, "cluster_lv3")}
          />
          <DropdownCmp
            label="5 Tahun Pertama Usulan *"
            options={mapToDropdown(year, "value", "value")}
            value={mapToDropdown(year, "value", "value").find(
              (option) => option.value === data.year
            )}
            onChange={(option) => handleDropdownChange(option, "year")}
          />
        </div>
        <div>
          <h1 className="text-xl font-bold text-violet-800 mx-5 my-5">
            1.3 Identitas Ketua{" "}
          </h1>
          <div className="grid grid-cols-2 gap-x-10  ">
            <TextfieldCmp
              label="Nama Ketua *"
              value={data.leader_name}
              name={"leader_name"}
              onChange={handleInputChange()}
              placeholder="Ketua"
            />

            <TextAreaCmp
              label="Uraian Tugas Dalam Penelitian *"
              value={data.leader_task}
              name={"leader_task"}
              onChange={handleInputChange()}
              placeholder="Enter your description here..."
              rows={6}
            />
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-xl font-bold text-violet-800 mx-5 my-5">
          1.4 Identitas Pengusul - Anggota Peneliti Dosen{" "}
        </h1>
        <div>
          <button
            className="flex items-center px-4 py-2 mx-5 bg-bluef-500 text-white rounded-lg hover:bg-bluef-300 focus:outline-none"
            onClick={openModalDos}
          >
            <FaPlus className="mr-2" /> {/* Icon tambah */}
            Tambah Usulan
          </button>
        </div>
        <div className="relative overflow-x-auto  my-10">
          <table className="w-full text-sm text-center bg-neutral-20 text-gray-500 dark:text-gray-400 border border-gray-300 ">
            <thead className="border border-gray-300 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="border border-black">
                <th className="border border-black px-4 py-2">No</th>
                <th className="border border-black px-4 py-2">NIDN</th>
                <th className="border border-black px-4 py-2">Nama</th>
                <th className="border border-black px-4 py-2">Tugas</th>
                <th className="border border-black px-4 py-2">Status</th>
                <th className="border border-black px-4 py-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {data.members.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.id}</td>
                  <td>{item.pivot.comunity_service_roles}</td>
                  <td>{item.pivot.task}</td>
                  <td>{item.pivot.status}</td>
                  <td>action here</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <h1 className="text-xl font-bold text-violet-800 mx-5 my-5">
          1.5 Identitas Pengusul - Anggota Peneliti Mahasiswa{" "}
        </h1>
        <div>
          <button
            className="flex items-center px-4 py-2 mx-5 bg-bluef-500 text-white rounded-lg hover:bg-bluef-300 focus:outline-none"
            onClick={openModalMhs}
          >
            <FaPlus className="mr-2" /> {/* Icon tambah */}
            Tambah Usulan
          </button>
        </div>
        <div className="relative overflow-x-auto  my-10">
          <table className="w-full text-sm text-center bg-neutral-20 text-gray-500 dark:text-gray-400 border border-gray-300 ">
            <thead className="border border-gray-300 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="border border-black">
                <th className="border border-black px-4 py-2">No</th>
                <th className="border border-black px-4 py-2">NIM</th>
                <th className="border border-black px-4 py-2">Nama</th>
                <th className="border border-black px-4 py-2">Instansi</th>
                <th className="border border-black px-4 py-2">Tugas</th>
                <th className="border border-black px-4 py-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {data.students.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.nim}</td>
                  <td>{item.name}</td>
                  <td>{item.prodi}</td>
                  <td>{item.task}</td>
                  <td>action here</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ModalTambahDosen
        isOpen={isOpenDos} // Gunakan state boolean isModalOpenMitra
        onRequestClose={closeModalDos}
        index={data["members"].length}
        onSave={handleMembersChange}
        clusters1={cluster1}
        clusters2={cluster2}
        clusters3={cluster3}
        setData={setData}
      />
      <ModalTambahMahasiswa
        isOpen={isOpenMhs} // Gunakan state boolean isModalOpenMitra
        onRequestClose={closeModalMhs}
        index={data["students"].length}
        onSave={handleAddStudents}
      />
    </div>
  );
};

export default IdentitasUsulan;
