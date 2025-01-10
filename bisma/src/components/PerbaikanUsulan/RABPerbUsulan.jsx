import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import DropdownCmp from "../DropdownCmp";
import TextfieldCmp from "../TextfieldCmp";
import axios from "axios";
import { getToken } from "../../Features/AuthSlice";

const apiUrl = process.env.REACT_APP_API_URL;

const RABPerbUsulan = ({ research, setResearch }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [kelompok, setKelompok] = useState("");
  const [komponen, setKomponen] = useState("");
  const [item, setItem] = useState("");
  const [satuan, setSatuan] = useState("");
  const [volume, setVolume] = useState("");
  const [hargaSatuan, setHargaSatuan] = useState("");
  const [total, setTotal] = useState("");

  const handleDropdownChange = (option) => {
    setSelectedOption(option);
  };

  // const [selectedFile, setSelectedFile] = useState(null);

  // const handleFileChange = (event) => {
  //   setSelectedFile(event.target.files[0]);
  // };

  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];
  const kelompokOptions = ["Kelompok 1", "Kelompok 2", "Kelompok 3"];
  const komponenOptions = ["Komponen 1", "Komponen 2", "Komponen 3"];
  // const satuanOptions = ["Satuan 1", "Satuan 2", "Satuan 3"];

  const handleClick = () => {
    // navigate('#'); // Arahkan ke halaman 'usulan-baru-penelitian'
  };

  // const handleInputChange = (setter) =>(e)=>{
  //   setter(e.target.value);
  // }
  //data
  const [budgetComponent, setBudgetComponent] = useState([]);
  const [budgetGroup, setBudgetGroup] = useState([]);

  const fetchBudgetComponent = async () => {
    const response = await axios.get(
      `${apiUrl}/api/budget-component`,
      getToken()
    );
    setBudgetComponent(response.data);
  };
  const fetchBudgetGroup = async () => {
    const response = await axios.get(`${apiUrl}/api/budget-group`, getToken());
    setBudgetGroup(response.data);
  };
  useEffect(() => {
    fetchBudgetComponent();
    fetchBudgetGroup();
  }, []);

  const year = [
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
    { id: 4, value: 4 },
    { id: 5, value: 5 },
  ];

  const mapToDropdown = (data, labelKey, valueKey) => {
    return data.map((item) => ({
      label: item[labelKey],
      value: item[valueKey],
    }));
  };

  //tambah rab
  const handleBudgetChange = (index, name, value) => {
    const updatedBudget = [...research.budget_plan];
    updatedBudget[index][name] = value;
    setResearch({ ...research, budget_plan: updatedBudget });
    console.log(research.budget_plan);
  };

  const addBudgetField = () => {
    setResearch({
      ...research,
      budget_plan: [
        ...research.budget_plan,
        {
          year: 0,
          id_group_budget: 0,
          id_component_budget: 0,
          item: "",
          unit: "",
          volume: "",
          price_unit: "",
          total: "",
        },
      ],
    });
  };

  return (
    <div>
      <h1 className="text-xl font-bold text-violet-800 mx-5 my-5">
        Rencana Anggran Biaya{" "}
      </h1>
      <div className="px-10">
        <div className="p-4 bg-violet-100 w-full rounded-md ">
          <div className="flex">
            <img
              src={process.env.PUBLIC_URL + "/assets/information.svg"}
              alt="logo"
              className="w-6 h-6 mr-4 "
            />
            <h2 className="text-md font-bold text-violet-800"> Informasi</h2>
          </div>
          <div className="my-2 flex">
            <h2 className="text-sm font-medium text-violet-800 mr-1">
              {" "}
              Dana Direncanakan Tahun ke-1 Rp. 10.000.000,00 | Dana Disetujui
              Tahun ke-1 Rp. 10.000.000,00
            </h2>
            {/* <h2 className='text-md font-bold text-violet-800'> Rp. 10.000.000</h2> */}
          </div>
        </div>
      </div>
      <div className="my-5 flex items-start space-x-4">
        <div className="mt-7">
          <button
            className="flex items-center px-2 py-2 bg-bluef-500 text-white rounded-lg hover:bg-bluef-300 focus:outline-none"
            onClick={addBudgetField}
          >
            <FaPlus className="mr-2" /> {/* Icon tambah */}
            Tambah
          </button>
        </div>
        <div></div>
      </div>
      {research.budget_plan.map((item, index) => (
        <div className="grid grid-cols-8 gap-x-4">
          <DropdownCmp
            label="Tahun Ke"
            options={mapToDropdown(year, "value", "id")}
            value={mapToDropdown(year, "value", "id").find(
              (option) => option.value === item.year
            )}
            onChange={(option) =>
              handleBudgetChange(index, "year", option.value)
            }
            placeholder="Tahun Ke"
          />
          <DropdownCmp
            label="Kelompok RAB"
            options={mapToDropdown(budgetGroup, "name", "id")}
            value={mapToDropdown(budgetGroup, "name", "id").find(
              (option) => option.value === item.id_group_budget
            )}
            onChange={(option) =>
              handleBudgetChange(index, "id_group_budget", option.value)
            }
            // width="w-204"
          />
          <DropdownCmp
            label="Komponen"
            options={mapToDropdown(budgetComponent, "name", "id")}
            value={mapToDropdown(budgetComponent, "name", "id").find(
              (option) => option.value === item.id_component_budget
            )}
            onChange={(option) =>
              handleBudgetChange(index, "id_component_budget", option.value)
            }
            // width="w-40" // Custom width untuk dropdown
          />
          <TextfieldCmp
            label="Item"
            value={item.item}
            onChange={(e) => handleBudgetChange(index, "item", e.target.value)}
            width="w-64" // Custom width untuk text input
          />
          <TextfieldCmp
            label="Satuan"
            value={item.unit}
            onChange={(e) => handleBudgetChange(index, "unit", e.target.value)}
            width="w-20" // Custom width untuk text input
          />
          <TextfieldCmp
            label="Volume"
            value={item.volume}
            onChange={(e) =>
              handleBudgetChange(index, "volume", e.target.value)
            }
            width="w-20" // Custom width untuk text input
          />
          <TextfieldCmp
            label="Harga Satuan"
            value={item.price_unit}
            onChange={(e) =>
              handleBudgetChange(index, "price_unit", e.target.value)
            }
            width="w-full" // Lebar penuh untuk text input
          />
          <TextfieldCmp
            label="Total"
            value={item.total}
            onChange={(e) => handleBudgetChange(index, "total", e.target.value)}
            width="w-full" // Lebar penuh untuk text input
          />
        </div>
      ))}
      <div className="flex justify-between mx-5">
        <h1 className="text-ml font-bold text-bluef-500 mx-5 my-5">
          Total Anggaran
        </h1>
        <h1 className="text-ml font-bold  mx-5 my-5"> Rp.0</h1>
      </div>
    </div>
  );
};

export default RABPerbUsulan;
