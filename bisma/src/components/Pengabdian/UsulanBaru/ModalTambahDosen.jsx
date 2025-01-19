import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import SearchInput from "../../SearchInput";
import TextfieldCmp from "../../TextfieldCmp";
import TextAreaCmp from "../../TextAreaCmp";
import { getToken } from "../../../Features/AuthSlice";
import axios from "axios";
import DropdownCmp from "../../DropdownCmp";

Modal.setAppElement("#root");
const apiUrl = process.env.REACT_APP_API_URL;

// Helper function for mapping dropdown options
const mapToDropdown = (data, labelKey, valueKey) => {
  return data.map((item) => ({
    label: item[labelKey],
    value: item[valueKey],
  }));
};

const ModalTambahDosen = ({
  isOpen,
  onRequestClose,
  index,
  onSave,
  clusters1,
}) => {
  const [nidn, setNidn] = useState("");
  const [memberData, setMemberData] = useState({
    id: 0,
    pivot: {
      name: "",
      comunity_service_roles: "",
      partner: "",
      task: "",
      status: "",
    },
  });
  const [cluster2, setCluster2] = useState([]); // Data untuk cluster level 2
  const [cluster3, setCluster3] = useState([]); // Data untuk cluster level 3
  const [data, setData] = useState({
    cluster_lv1: null,
    cluster_lv2: null,
    cluster_lv3: null,
  });

  // Fetch cluster2 berdasarkan cluster1
  const fetchCluster2 = async (cluster1Id) => {
    try {
      const response = await axios.get(
        `${apiUrl}/api/service-cluster2/${cluster1Id}`,
        getToken()
      );
      setCluster2(response.data);
      setData((prevData) => ({
        ...prevData,
        cluster_lv2: null, // Reset pilihan cluster2
        cluster_lv3: null, // Reset pilihan cluster3
      }));
      setCluster3([]); // Kosongkan cluster3
    } catch (error) {
      console.error("Error fetching cluster2:", error);
    }
  };

  // Fetch cluster3 berdasarkan cluster2
  const fetchCluster3 = async (cluster2Id) => {
    try {
      const response = await axios.get(
        `${apiUrl}/api/service-cluster3/${cluster2Id}`,
        getToken()
      );
      setCluster3(response.data);
      setData((prevData) => ({
        ...prevData,
        cluster_lv3: null, // Reset pilihan cluster3
      }));
    } catch (error) {
      console.error("Error fetching cluster3:", error);
    }
  };

  // Handle perubahan dropdown menggunakan fieldName
  const handleDropdownChange = (option, fieldName) => {
    setData((prevData) => ({
      ...prevData,
      [fieldName]: option.value,
    }));

    if (fieldName === "cluster_lv1") {
      fetchCluster2(option.value); // Fetch data cluster2
    } else if (fieldName === "cluster_lv2") {
      fetchCluster3(option.value); // Fetch data cluster3
    }
  };

  // Handle simpan data
  const handleSave = () => {
    const dataToSave = {
      ...memberData,
      cluster_lv1: data.cluster_lv1,
      cluster_lv2: data.cluster_lv2,
      cluster_lv3: data.cluster_lv3,
    };

    onSave(index, dataToSave);
    onRequestClose();
  };

  // Handle perubahan input teks
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("pivot.")) {
      const field = name.split(".")[1];
      setMemberData((prevState) => ({
        ...prevState,
        pivot: {
          ...prevState.pivot,
          [field]: value,
        },
      }));
    } else {
      setMemberData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="bg-white rounded-lg shadow-lg p-6 w-[50%] mx-auto mt-20 max-h-[80vh] overflow-y-auto"
      overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <h1 className="text-xl font-bold mx-2 my-4">Anggota Pengabdian - Form</h1>
      <div className="p-4">
        <SearchInput
          label="NIDN"
          placeholder="Masukkan NIDN"
          value={nidn}
          onChange={(e) => setNidn(e.target.value)}
          onSearch={() => console.log("Search for:", nidn)}
          color="bg-blue-800"
        />
      </div>

      <TextfieldCmp
        label="Id"
        value={memberData.id}
        name="id"
        onChange={handleInputChange}
        placeholder="Anggota Pengusul"
      />

      <TextfieldCmp
        label="Nama"
        value={memberData.name}
        name="pivot.name"
        onChange={handleInputChange}
        placeholder="Anggota Pengusul"
      />

      <div className="p-4">
        <TextfieldCmp
          label="Peran"
          value={memberData.research_role}
          name="research_role"
          onChange={handleInputChange}
          placeholder="Anggota Pengusul"
        />

        <TextAreaCmp
          label="Tugas Dalam Pengabdian"
          value={memberData.task}
          name="task"
          onChange={handleInputChange}
          placeholder="Deskripsi tugas"
        />
        <TextfieldCmp
          label="Perusahaan"
          value={memberData.comunity_service_roles}
          name="partner"
          onChange={handleInputChange}
          placeholder="Nama PT"
        />
      </div>

      <div className="p-4">
        <DropdownCmp
          label="Rumpun Ilmu Level 1"
          options={mapToDropdown(clusters1, "name", "id")}
          value={mapToDropdown(clusters1, "name", "id").find(
            (item) => item.value === data.cluster_lv1
          )}
          onChange={(option) => handleDropdownChange(option, "cluster_lv1")}
          placeholder="Pilih Rumpun Ilmu Level 1"
        />

        <DropdownCmp
          label="Rumpun Ilmu Level 2"
          options={mapToDropdown(cluster2, "name", "id")}
          value={mapToDropdown(cluster2, "name", "id").find(
            (item) => item.value === data.cluster_lv2
          )}
          onChange={(option) => handleDropdownChange(option, "cluster_lv2")}
          placeholder="Pilih Rumpun Ilmu Level 2"
          isDisabled={!data.cluster_lv1}
        />

        <DropdownCmp
          label="Rumpun Ilmu Level 3"
          options={mapToDropdown(cluster3, "name", "id")}
          value={mapToDropdown(cluster3, "name", "id").find(
            (item) => item.value === data.cluster_lv3
          )}
          onChange={(option) => handleDropdownChange(option, "cluster_lv3")}
          placeholder="Pilih Rumpun Ilmu Level 3"
          isDisabled={!data.cluster_lv2}
        />
        <TextfieldCmp
          label="Status"
          value={memberData.status}
          name="pivot.status"
          onChange={handleInputChange}
          placeholder="Anggota Pengusul"
        />
      </div>

      <div className="flex justify-end space-x-4">
        <button
          className="bg-white text-red-500 border border-red-500 px-4 py-2 rounded hover:bg-red-100"
          onClick={onRequestClose}
        >
          Tutup
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleSave}
        >
          Selesai
        </button>
      </div>
    </Modal>
  );
};

export default ModalTambahDosen;
