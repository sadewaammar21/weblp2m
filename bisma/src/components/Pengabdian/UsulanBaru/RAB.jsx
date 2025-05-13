import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import DropdownCmp from "../../DropdownCmp";
import TextfieldCmp from "../../TextfieldCmp";
import axios from "axios";
import { getToken } from "../../../Features/AuthSlice";

const apiUrl = process.env.REACT_APP_API_URL;

const RAB = ({ navigate, data, setData }) => {
  const [budgetComponent, setBudgetComponent] = useState([]);
  const [budgetGroup, setBudgetGroup] = useState([]);
  const [totalBudget, setTotalBudget] = useState(0); // State untuk total anggaran

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

  // const handleBudgetChange = (index, name, value) => {
  //   const updatedBudgetPlan = [...data.budget_plan_service];
  //   updatedBudgetPlan[index][name] = value;

  //   // Hitung total otomatis untuk item
  //   if (name === "volume" || name === "price_unit") {
  //     const volume = parseFloat(updatedBudgetPlan[index].volume) || 0;
  //     const priceUnit = parseFloat(updatedBudgetPlan[index].price_unit) || 0;
  //     updatedBudgetPlan[index].total = volume * priceUnit;
  //   }

  //   setData({ ...data, budgetPlanService: updatedBudgetPlan });
  // };

  const handleBudgetChange = (index, name, value) => {
    const updatedBudgetPlan = [...data.budget_plan_service];
    updatedBudgetPlan[index][name] = value;

    // Hitung total otomatis untuk item
    if (name === "volume" || name === "price_unit") {
      const volume = parseFloat(updatedBudgetPlan[index].volume) || 0;
      const priceUnit = parseFloat(updatedBudgetPlan[index].price_unit) || 0;
      updatedBudgetPlan[index].total = volume * priceUnit;
    }

    setData({ ...data, budget_plan_service: updatedBudgetPlan });
  };

  const addBudgetField = () => {
    setData({
      ...data,
      budget_plan_service: [
        ...data.budget_plan_service,
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
  const handleDropdownChange = (option, fieldName) => {
    setData((prevData) => ({
      ...prevData,
      [fieldName]: option.value,
    }));
    console.log("clicked" + option);
  };
  // Hitung total anggaran keseluruhan
  useEffect(() => {
    const calculateTotal = () => {
      const total = data.budget_plan_service.reduce((acc, curr) => {
        const volume = parseFloat(curr.volume) || 0;
        const priceUnit = parseFloat(curr.price_unit) || 0;
        return acc + volume * priceUnit;
      }, 0);
      setTotalBudget(total);
    };

    calculateTotal();
  }, [data.budget_plan_service]);

  // const formatNumber = (num) => {
  //   return num ? parseFloat(num).toLocaleString() : "";
  // };
  const formatNumber = (num) => {
    if (num === null || num === undefined || num === "") return "";
    const parsed = parseFloat(num);
    return isNaN(parsed)
      ? ""
      : `Rp. ${parsed.toLocaleString("id-ID", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 2,
        })}`;
  };

  // Parse input string "Rp 10.000,00" → 10000.00
  const parseFormattedNumber = (str) => {
    if (!str) return "";
    const cleaned = str
      .replace(/[^0-9,]/g, "")
      .replace(/\./g, "")
      .replace(",", "."); // hapus Rp dan spasi
    const parsed = parseFloat(cleaned);
    return isNaN(parsed) ? "" : parsed;
  };

  return (
    <div>
      <h1 className="text-xl font-bold text-violet-800 mx-5 my-5">
        3.1 Rencana Anggaran Biaya{" "}
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
              Maksimal Usulan Dana Pertahun
            </h2>
            <h2 className="text-md font-bold text-violet-800">
              Rp. 10.000.000
            </h2>
          </div>
        </div>
      </div>
      <div className="my-5 flex items-start space-x-4">
        <div className="mt-7">
          <button
            className="flex items-center px-2 py-2 bg-bluef-500 text-white rounded-lg hover:bg-bluef-300 focus:outline-none"
            onClick={addBudgetField}
          >
            <FaPlus className="mr-2" /> Tambah
          </button>
        </div>
        {/* <DropdownCmp
          label="Tahun Ke"
          options={mapToDropdown(year, "value", "value")}
          value={mapToDropdown(year, "value", "value").find(
            (option) => option.value === it.year
          )}
          onChange={(option) => handleDropdownChange(option, "year")}
          placeholder="1"
          width="w-32"
        /> */}
      </div>
      {data.budget_plan_service.map((item, index) => (
        <div key={index} className="grid grid-cols-8 gap-x-4">
          <DropdownCmp
            label="Tahun Ke"
            options={mapToDropdown(year, "value", "value")}
            value={mapToDropdown(year, "value", "value").find(
              (option) => option.value === item.year
            )}
            onChange={(option) =>
              handleBudgetChange(index, "year", option.value)
            }
            placeholder="1"
            width="w-32"
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
          />
          <TextfieldCmp
            label="Item"
            value={item.item}
            onChange={(e) => handleBudgetChange(index, "item", e.target.value)}
          />
          <TextfieldCmp
            label="Satuan"
            value={item.unit}
            onChange={(e) => handleBudgetChange(index, "unit", e.target.value)}
            placeholder={0}
          />
          <TextfieldCmp
            label="Volume"
            value={item.volume}
            onChange={(e) =>
              handleBudgetChange(index, "volume", e.target.value)
            }
          />
          <TextfieldCmp
            label="Harga Satuan"
            value={formatNumber(item.price_unit)}
            onChange={(e) =>
              handleBudgetChange(
                index,
                "price_unit",
                parseFormattedNumber(e.target.value)
              )
            }
          />
          <TextfieldCmp
            label="Total"
            value={formatNumber(item.total)}
            readOnly // Hanya bisa dibaca
          />
        </div>
      ))}
      <div className="flex justify-between mx-5">
        <h1 className="text-ml font-bold text-bluef-500 mx-5 my-5">
          Total Anggaran
        </h1>
        <h1 className="text-ml font-bold mx-5 my-5">
          {formatNumber(totalBudget)}
        </h1>
      </div>
    </div>
  );
};

export default RAB;
