import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import DropdownCmp from "../../DropdownCmp";
import TextfieldCmp from "../../TextfieldCmp";

const RAB = ({ navigate, data, setData }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [kelompok, setKelompok] = useState("");
  const [komponen, setKomponen] = useState("");
  const [item, setItem] = useState("");
  const [satuan, setSatuan] = useState("");
  const [volume, setVolume] = useState("");
  const [hargaSatuan, setHargaSatuan] = useState("");
  const [total, setTotal] = useState("");

  const handleDropdownChange = (field, value) => {
    setData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];
  //   const kelompokOptions = ["Kelompok 1", "Kelompok 2", "Kelompok 3"];
  //   const komponenOptions = ["Komponen 1", "Komponen 2", "Komponen 3"];
  // const satuanOptions = ["Satuan 1", "Satuan 2", "Satuan 3"];

  const kelompokRABOptions = [
    { label: "Honorarium (Pelaksanaan Pengabdian)", value: "honorarium" },
    { label: "Biaya Pelatihan", value: "biaya_pelatihan" },
    { label: "Perjalanan", value: "perjalanan" },
    { label: "Biaya Lainnya", value: "biaya_lainnya" },
  ];

  const komponenOptions = [
    { label: "Biaya Konsumsi", value: "biaya_konsumsi" },
    { label: "Uang Saku", value: "uang_saku" },
    { label: "Biaya Paket Ruangan dan Konsumsi", value: "biaya_paket" },
  ];

  const handleClick = () => {
    navigate("#"); // Arahkan ke halaman 'usulan-baru-penelitian'
  };

  //tambah rab
  const handleBudgetChange = (index, name, value) => {
    const updatedBudget = [...data.budgetPlan];
    updatedBudget[index][name] = value;
    setData({ ...data, budgetPlan: updatedBudget });
    console.log(data.budgetPlan);
  };

  const addBudgetField = () => {
    setData({
      ...data,
      budgetPlan: [
        ...data.budgetPlan,
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
        3.1 Rencana Anggran Biaya{" "}
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
              Maksimal Usulan Dana Pertahun
            </h2>
            <h2 className="text-md font-bold text-violet-800">
              {" "}
              Rp. 10.000.000
            </h2>
          </div>
        </div>
      </div>
      <div className="mx-10 my-5 flex items-start space-x-4">
        <div className="mt-7">
          <button
            className="flex items-center px-2 py-2 bg-bluef-500 text-white rounded-lg hover:bg-bluef-300 focus:outline-none"
            onClick={addBudgetField}
          >
            <FaPlus className="mr-2" /> {/* Icon tambah */}
            Tambah
          </button>
        </div>
        <div>
          <DropdownCmp
            label="Tahun Ke"
            options={options}
            value={item.year}
            onChange={``}
            placeholder="1"
          />
        </div>
      </div>
      <div className="mx-10">
        {data.budgetPlan.map((item, index) => (
          <div className="grid grid-cols-8 gap-x-4">
            <DropdownCmp
              label="Kelompok RAB"
              options={kelompokRABOptions}
              onChange={(option) =>
                handleDropdownChange("kelompokRAB", option.value)
              }
              placeholder="Pilih Kelompok RAB"
            />
            <DropdownCmp
              label="Komponen"
              options={komponenOptions}
              onChange={(option) =>
                handleDropdownChange("komponen", option.value)
              }
              placeholder="Pilih Komponen"
            />
            <TextfieldCmp
              label="Item"
              value={item.item}
              onChange={(e) =>
                handleBudgetChange(index, "item", e.target.value)
              }
              // width="w-64" // Custom width untuk text input
            />
            <TextfieldCmp
              label="Satuan"
              value={item.unit}
              onChange={(e) =>
                handleBudgetChange(index, "unit", e.target.value)
              }
              // width="w-20" // Custom width untuk text input
            />
            <TextfieldCmp
              label="Volume"
              value={item.volume}
              onChange={(e) =>
                handleBudgetChange(index, "volume", e.target.value)
              }
              // width="w-20" // Custom width untuk text input
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
              onChange={(e) =>
                handleBudgetChange(index, "total", e.target.value)
              }
              width="w-full" // Lebar penuh untuk text input
            />
            <label className="text-sm font-medium  mr-1"> Aksi</label>
          </div>
        ))}
        <div className="flex justify-between mx-5">
          <h1 className="text-ml font-bold text-bluef-500 mx-5 my-5">
            Total Anggaran
          </h1>
          <h1 className="text-ml font-bold  mx-5 my-5"> Rp.0</h1>
        </div>
      </div>
    </div>
  );
};

export default RAB;
