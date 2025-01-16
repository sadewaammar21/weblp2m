import React, { useEffect, useState } from "react";
import TextfieldCmp from "../TextfieldCmp";
import DropdownCmp from "../DropdownCmp";
import TextAreaCmp from "../TextAreaCmp";
import { FaPlus } from "react-icons/fa";
// import { useNavigate } from 'react-router-dom';
import PopupTKT from "./PopupTKT";
import PopUpDosen from "./PopUpDosen";
import PopUpMhs from "./PopUpMhs";
import axios from "axios";
import { id } from "date-fns/locale";
import { getToken } from "../../Features/AuthSlice";

const apiUrl = process.env.REACT_APP_API_URL;

const IdentitasUsulan = ({ data, setData }) => {
  // const navigate = useNavigate(); // Hook untuk navigasi
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDos, setIsOpenDos] = useState(false);
  const [isOpenMhs, setIsOpenMhs] = useState(false);

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

  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];

  //research components
  const [scheme, setScheme] = useState([]);
  const [scope, setScope] = useState([]);
  const [category, setCategory] = useState([]);
  const [focus, setFocus] = useState([]);
  const [theme, setTheme] = useState([]);
  const [topic, setTopic] = useState([]);
  const [cluster1, setCluster1] = useState([]);
  const [cluster2, setCluster2] = useState([]);
  const [cluster3, setCluster3] = useState([]);
  const [priority, setPriority] = useState([]);
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

  const fetchScheme = async (target) => {
    const response = await axios.get(
      `${apiUrl}/api/research-scheme/${target}`,
      getToken()
    );
    setScheme(response.data);
  };
  const fetchScope = async () => {
    const response = await axios.get(`${apiUrl}/api/scope`, getToken());
    setScope(response.data);
  };
  const fetchCategory = async () => {
    const response = await axios.get(`${apiUrl}/api/category`, getToken());
    setCategory(response.data);
  };
  const fetchFocus = async () => {
    const response = await axios.get(
      `${apiUrl}/api/research-focus`,
      getToken()
    );
    setFocus(response.data);
  };
  const fetchTheme = async (focus) => {
    const response = await axios.get(
      `${apiUrl}/api/research-theme/${focus}`,
      getToken()
    );
    setTheme(response.data);
  };
  const fetchTopic = async (theme) => {
    const response = await axios.get(
      `${apiUrl}/api/research-topic/${theme}`,
      getToken()
    );
    setTopic(response.data);
  };
  const fetchCluster1 = async () => {
    const response = await axios.get(`${apiUrl}/api/cluster1`, getToken());
    setCluster1(response.data);
  };
  const fetchCluster2 = async ($cluster1) => {
    const response = await axios.get(
      `${apiUrl}/api/cluster2/${$cluster1}`,
      getToken()
    );
    setCluster2(response.data);
  };
  const fetchCluster3 = async ($cluster2) => {
    const response = await axios.get(
      `${apiUrl}/api/cluster3/${$cluster2}`,
      getToken()
    );
    setCluster3(response.data);
  };
  const fetchPriority = async () => {
    const response = await axios.get(
      `${apiUrl}/api/research-priority`,
      getToken()
    );
    setPriority(response.data);
  };

  useEffect(() => {
    fetchScheme(data.tkt_final);
    fetchScope();
    fetchCategory();
    fetchFocus();
    fetchTheme(data.focus_id);
    fetchTopic(data.theme_id);
    fetchCluster1();
    fetchCluster2(data.cluster_lv1);
    fetchCluster3(data.cluster_lv2);
    fetchPriority();
  }, [
    data.tkt_final,
    data.focus_id,
    data.theme_id,
    data.cluster_lv1,
    data.cluster_lv2,
  ]);

  const mapToDropdown = (data, labelKey, valueKey) => {
    return data.map((item) => ({
      label: item[labelKey],
      value: item[valueKey],
    }));
  };

  useEffect(() => {
    console.log(scope, category, focus);
  });

  return (
    <div>
      <div>
        <h1 className="text-xl font-bold text-violet-800 mx-5 my-5">
          1.1 Identitas Usulan Penelitian{" "}
        </h1>
        <div className="grid grid-cols-3 gap-4">
          <TextfieldCmp
            label="1. Judul*"
            value={data.title}
            name="title"
            onChange={handleInputChange()}
            placeholder="Judul usulan baru"
          />
          <div className="relative">
            <div className="relative w-full ">
              {" "}
              {/* Set width as needed (e.g., w-1/2 for half page) */}
              <TextfieldCmp
                label="2. TKT Saat ini*"
                value={data.tkt_current}
                name={"tkt_current"}
                onChange={handleInputChange()}
                placeholder="TKT"
              />
              {/* Button placed outside the TextfieldCmp */}
              <button
                className="absolute right-1 top-8 bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-300 focus:outline-none"
                onClick={openModal}
              >
                ukur
              </button>
            </div>
            <PopupTKT isOpen={isOpen} onRequestClose={closeModal} />
            <PopUpDosen
              isOpen={isOpenDos}
              onRequestClose={closeModalDos}
              index={data["members"].length}
              onSave={handleMembersChange}
            />
            <PopUpMhs
              isOpen={isOpenMhs}
              onRequestClose={closeModalMhs}
              index={data["students"].length}
              onSave={handleAddStudents}
            />
          </div>
          <TextfieldCmp
            label="3. Target Akir TKT*"
            value={data.tkt_final}
            name="tkt_final"
            onChange={handleInputChange()}
            placeholder="Judul usulan baru"
          />
        </div>
      </div>
      <div>
        <h1 className="text-xl font-bold text-violet-800 mx-5 my-5">
          1.2 Pemilihan Program Penelitian{" "}
        </h1>
        <div className="grid grid-cols-2 gap-x-10  ">
          <DropdownCmp
            label="4. Kelompok Skema *"
            options={mapToDropdown(scheme, "name", "id")}
            value={mapToDropdown(scheme, "name", "id").find(
              (option) => option.value === data.scheme_id
            )}
            onChange={(option) => handleDropdownChange(option, "scheme_id")}
          />
          <DropdownCmp
            label="10. Rumpun Ilmu Level 1 *"
            options={mapToDropdown(cluster1, "name", "id")}
            value={mapToDropdown(cluster1, "name", "id").find(
              (option) => option.value === data.cluster_lv1
            )}
            onChange={(option) => handleDropdownChange(option, "cluster_lv1")}
          />
          <DropdownCmp
            label="5. Ruang Lingkup *"
            options={mapToDropdown(scope, "name", "id")}
            value={mapToDropdown(scope, "name", "id").find(
              (option) => option.value === data.scope_id
            )}
            onChange={(option) => handleDropdownChange(option, "scope_id")}
          />
          <DropdownCmp
            label="11. Rumpun Ilmu Level 2 *"
            options={mapToDropdown(cluster2, "name", "id")}
            value={mapToDropdown(cluster2, "name", "id").find(
              (option) => option.value === data.cluster_lv2
            )}
            onChange={(option) => handleDropdownChange(option, "cluster_lv2")}
          />
          <DropdownCmp
            label="6. Kategori SBK *"
            options={mapToDropdown(category, "name", "id")}
            value={mapToDropdown(category, "name", "id").find(
              (option) => option.value === data.category_id
            )}
            onChange={(option) => handleDropdownChange(option, "category_id")}
          />
          <DropdownCmp
            label="12. Rumpun Ilmu Level 3 *"
            options={mapToDropdown(cluster3, "name", "id")}
            value={mapToDropdown(cluster3, "name", "id").find(
              (option) => option.value === data.cluster_lv3
            )}
            onChange={(option) => handleDropdownChange(option, "cluster_lv3")}
          />
          <DropdownCmp
            label="7. Bidang Fokus Penelitian *"
            options={mapToDropdown(focus, "name", "id")}
            value={mapToDropdown(focus, "name", "id").find(
              (option) => option.value === data.focus_id
            )}
            onChange={(option) => handleDropdownChange(option, "focus_id")}
          />
          <DropdownCmp
            label="13. Prioritas Riset "
            options={mapToDropdown(priority, "name", "id")}
            value={mapToDropdown(priority, "name", "id").find(
              (option) => option.value === data.priority_id
            )}
            onChange={(option) => handleDropdownChange(option, "priority_id")}
          />
          <DropdownCmp
            label="8. Tema Penelitian *"
            options={mapToDropdown(theme, "name", "id")}
            value={mapToDropdown(theme, "name", "id").find(
              (option) => option.value === data.theme_id
            )}
            onChange={(option) => handleDropdownChange(option, "theme_id")}
          />
          <DropdownCmp
            label="14. Tahun Pertama Usulan *"
            options={mapToDropdown(year, "value", "value")}
            value={mapToDropdown(year, "value", "value").find(
              (option) => option.value === data.year
            )}
            onChange={(option) => handleDropdownChange(option, "year")}
          />
          <DropdownCmp
            label="9. Topik Penelitian *"
            options={mapToDropdown(topic, "name", "id")}
            value={mapToDropdown(topic, "name", "id").find(
              (option) => option.value === data.topic_id
            )}
            onChange={(option) => handleDropdownChange(option, "topic_id")}
          />
          <DropdownCmp
            label="15. Lama Kegiatan *"
            options={mapToDropdown(duration, "value", "id")}
            value={mapToDropdown(duration, "value", "id").find(
              (option) => option.value === data.duration
            )}
            onChange={(option) => handleDropdownChange(option, "duration")}
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
                  <td>{item.pivot.research_roles}</td>
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
    </div>
  );
};

export default IdentitasUsulan;
