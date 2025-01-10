import React, { useEffect, useState } from "react";
import TextfieldCmp from "../../TextfieldCmp";
import DropdownCmp from "../../DropdownCmp";
import TextAreaCmp from "../../TextAreaCmp";
import { FaPlus } from "react-icons/fa";
import ModalTambahDosen from "./ModalTambahDosen";
import ModalTambahMahasiswa from "./ModalTambahMahasiswa";

const IdentitasUsulan = ({ data, setData }) => {
  // const navigate = useNavigate(); // Hook untuk navigasi
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDos, setIsOpenDos] = useState(false);
  const [isOpenMhs, setIsOpenMhs] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleRadioChange = (value) => {
    setSelectedOption(value);
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
      [fieldName]: option,
    }));
    console.log("clicked" + option);
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

  useEffect(() => {
    console.log(data);
  }, []);

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
            options={options}
            value={data.scheme_id}
            onChange={(option) =>
              handleDropdownChange(option.value, "scheme_id")
            }
          />
          <DropdownCmp
            label="6. Lama Kegiatan *"
            options={options}
            value={data.cluster_lv1}
            onChange={(option) =>
              handleDropdownChange(option.value, "cluster_lv1")
            }
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
                <div className="flex flex-col space-y-2">
                  {" "}
                  {/* Stack items vertically */}
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="bidangFokus"
                      value="tematik"
                      checked={selectedOption === "tematik"}
                      onChange={() => handleRadioChange("tematik")}
                      className="w-4 h-4"
                    />
                    <span>Bidang Fokus Tematik</span>
                  </div>
                  <DropdownCmp
                    options={[
                      { value: "tema1", label: "Tema 1" },
                      { value: "tema2", label: "Tema 2" },
                    ]}
                    disabled={selectedOption !== "tematik"}
                    placeholder="Pilih Bidang Fokus Tematik"
                    className="mt-2"
                  />
                </div>
              </label>
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
                      checked={selectedOption === "rirn"}
                      onChange={() => handleRadioChange("rirn")}
                      className="w-4 h-4"
                    />
                    <span>Bidang Fokus RIRN</span>
                  </div>
                  <DropdownCmp
                    options={[
                      { value: "rirn1", label: "RIRN 1" },
                      { value: "rirn2", label: "RIRN 2" },
                    ]}
                    disabled={selectedOption !== "rirn"}
                    placeholder="Pilih Bidang Fokus RIRN"
                    className="mt-2"
                  />
                </div>
              </label>
            </div>
          </div>

          <DropdownCmp
            label="7. Rumpun Ilmu Level 1 *"
            options={options}
            value={data.cluster_lv2}
            onChange={(option) =>
              handleDropdownChange(option.value, "cluster_lv2")
            }
          />
          <DropdownCmp
            label="3. Kelompok Skema *"
            options={options}
            value={data.category_id}
            onChange={(option) =>
              handleDropdownChange(option.value, "category_id")
            }
          />
          <DropdownCmp
            label="8. Rumpun Ilmu Level 2 *"
            options={options}
            value={data.cluster_lv3}
            onChange={(option) =>
              handleDropdownChange(option.value, "cluster_lv3")
            }
          />
          <DropdownCmp
            label="4. Ruang Lingkup *"
            options={options}
            value={data.focus_id}
            onChange={(option) =>
              handleDropdownChange(option.value, "focus_id")
            }
          />
          <DropdownCmp
            label="9. Rumpun Ilmu Level 3 * "
            options={options}
            value={data.priority_id}
            onChange={(option) =>
              handleDropdownChange(option.value, "priority_id")
            }
          />
          <DropdownCmp
            label="5 Tahun Pertama Usulan *"
            options={options}
            value={data.year}
            onChange={(option) => handleDropdownChange(option.value, "year")}
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
                  <td>{item.research_role}</td>
                  <td>{item.task}</td>
                  <td>{item.status}</td>
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
      />
      <ModalTambahMahasiswa
        isOpen={isOpenMhs} // Gunakan state boolean isModalOpenMitra
        onRequestClose={closeModalMhs}
      />
    </div>
  );
};

export default IdentitasUsulan;
