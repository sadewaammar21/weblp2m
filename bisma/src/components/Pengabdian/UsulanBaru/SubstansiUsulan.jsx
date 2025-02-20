import React, { useState } from "react";
import DropdownCmp from "../../DropdownCmp";
import TextAreaCmp from "../../TextAreaCmp";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import { getToken } from "../../../Features/AuthSlice";
import { useEffect } from "react";

const apiUrl = process.env.REACT_APP_API_URL;
const SubtansiUsulan = ({ navigate, data, setData }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [UTDP, setUTDP] = useState("");

  // const handleDropdownChange = (option, fieldName) => {
  //   setData((prevData) => ({
  //     ...prevData,
  //     [fieldName]: option,
  //   }));
  //   console.log("clicked" + option);
  // };

  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setData((prevData) => ({
      ...prevData,
      substance_document: event.target.files[0],
    }));
  };

  const handleDropdownChange = (option, fieldName) => {
    setData((prevData) => ({
      ...prevData,
      [fieldName]: option.value,
    }));
    console.log("clicked" + option);
  };

  const mapToDropdown = (data, labelKey, valueKey) => {
    return data.map((item) => ({
      label: item[labelKey],
      value: item[valueKey],
    }));
  };

  //tambah output
  // const handleOutputChange = (index, name, value) => {

  //   const updatedOutputPartner = [...data.output];
  //   updatedOutputPartner[index][name] = value;
  //   setData({ ...data, outputPartner: updatedOutputPartner });
  //   console.log(data.outputPartner);

  //   const updatedoutput_publication = [...data.output];
  //   updatedOutputPublication[index][name] = value;
  //   setData({ ...data, output: updatedOutputPublication });
  //   console.log(data.outputPartner);

  //   const updatedOutputMedia = [...data.output];
  //   updatedOutputMedia[index][name] = value;
  //   setData({ ...data, output: updatedOutputMedia });
  //   console.log(data.outputPartner);

  //   const updatedOutputVideo = [...data.output];
  //   updatedOutputMedia[index][name] = value;
  //   setData({ ...data, output: updatedOutputVideo });
  //   console.log(data.outputPartner);
  // };
  const handleOutputChangePatner = (name, value) => {
    const updatedOutputPartner = [...data.output_partner];
    updatedOutputPartner[0][name] = value;
    setData({ ...data, output_partner: updatedOutputPartner });
    console.log(updatedOutputPartner);
  };

  const handleOutputChangePublication = (name, value) => {
    const updatedOutputPublication = [...data.output_publication];
    updatedOutputPublication[0][name] = value;
    setData({ ...data, output_publication: updatedOutputPublication });
    console.log(updatedOutputPublication);
  };

  const handleOutputChangeMedia = (name, value) => {
    const updatedOutputMedia = [...data.output_media];
    updatedOutputMedia[0][name] = value;

    setData({
      ...data,
      outputMedia: updatedOutputMedia,
    });
    console.log(updatedOutputMedia);
  };
  const handleOutputChangeVideo = (name, value) => {
    const updatedOutputVideo = [...data.output_video];
    updatedOutputVideo[0][name] = value;

    setData({
      ...data,
      outputVideo: updatedOutputVideo,
    });
    console.log(updatedOutputVideo);
  };

  const status = [
    { value: "submitted", label: "Submitted" },
    { value: "draft", label: "Draft" },
  ];

  const addOutputField = () => {
    setData({
      ...data,
      outputSubstansi: [
        ...data.output_partner,
        {
          year: "",
          id_category_output: "",
          id_type_output: "",
          status: "",
          description: "",
        },
      ],
      outputPublication: [
        ...data.output_publication,
        {
          id_category_output: "",
          id_type_output: "",
          status: "",
          description: "",
        },
      ],
      outputMedia: [
        ...data.output_media,
        {
          id_category_output: "",
          id_type_output: "",
          status: "",
          description: "",
        },
      ],
      outputVideo: [
        ...data.output_media,
        {
          id_category_output: "",
          id_type_output: "",
          status: "",
          description: "",
        },
      ],
    });
  };

  const handleClick = () => {
    navigate("#"); // Arahkan ke halaman 'usulan-baru-penelitian'
  };

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const [outputPatnerCtg, setOutputPartnerCtg] = useState([]);
  const [outputPublicationCtg, setOutputPublicationCtg] = useState([]);
  const [outputMediaCtg, setOutputMediaCtg] = useState([]);
  const [outputVideoCtg, setOutputVideoCtg] = useState([]);
  const [outputPatnerType, setOutputPartnerType] = useState([]);
  const [outputPublicationType, setOutputPublicationType] = useState([]);
  const [outputMediaType, setOutputMediaType] = useState([]);
  const [outputVideoType, setOutputVideoType] = useState([]);
  const statusPartnerOutput = [{ value: "Tercapai", label: "Tercapai" }];
  const statusPublicationOutput = [{ value: "Published", label: "Published" }];
  const statusMediaOutput = [
    { value: "Online/bisa diakses", label: "Online/bisa diakses" },
  ];
  const statusVideoOutput = [{ value: "Published", label: "Published" }];

  // const [status, setStatus] = useState([]);
  const year = [
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
    { id: 4, value: 4 },
    { id: 5, value: 5 },
  ];
  // const status = [
  //   {value: 'submitted', label:'Submitted'},
  //   {value: 'draft', label:'Draft'}
  // ]

  const fetchCtgPatner = async () => {
    // try {
    //   const response = await axios.get(
    //     `${apiUrl}/api/partner-output-category`,
    //     getToken()
    //   );
    //   setOutputPartnerCtg(response.data);
    // } catch (error) {
    //   setOutputPartnerCtg(error.message);
    // }
    try {
      const response = await axios.get(
        `${apiUrl}/api/partner-output-category`,
        getToken()
      );
      const data = Array.isArray(response.data) ? response.data : [];
      setOutputPartnerCtg(data);
    } catch (error) {
      console.error("Error fetching :", error);
      setOutputPartnerCtg([]);
    }
  };
  const fetchCtgType = async () => {
    try {
      const response = await axios.get(
        `${apiUrl}/api/partner-output-type`,
        getToken()
      );
      const data = Array.isArray(response.data) ? response.data : [];
      setOutputPartnerType(data);
    } catch (error) {
      console.error("Error fetching :", error);
      setOutputPartnerType([]);
    }
    // const response = await axios.get(
    //   `${apiUrl}/api/partner-output-type`,
    //   getToken()
    // );
    // setOutputPartnerType(response.data);
  };
  const fetchPublic = async () => {
    try {
      const response = await axios.get(
        `${apiUrl}/api/publication-output-category`,
        getToken()
      );
      const data = Array.isArray(response.data) ? response.data : [];
      setOutputPublicationCtg(data);
    } catch (error) {
      console.error("Error fetching :", error);
      setOutputPublicationCtg([]);
    }
    // const response = await axios.get(
    //   `${apiUrl}/api/publication-output-category`,
    //   getToken()
    // );
    // setOutputPublicationCtg(response.data);
  };

  const fetchPublicType = async (id_category_output) => {
    try {
      const response = await axios.get(
        `${apiUrl}/api/publication-output-type/${id_category_output}`,
        getToken()
      );
      const data = Array.isArray(response.data) ? response.data : [];
      setOutputPublicationType(data);
    } catch (error) {
      console.error("Error fetching:", error);
      setOutputPublicationType([]);
    }
    // try {
    //   const response = await axios.get(
    //     `${apiUrl}/api/publication-output-type/${id_category_output}`,
    //     getToken()
    //   );
    //   setOutputPublicationType(response.data);
    //   console.log(response);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const fetchMedia = async () => {
    try {
      const response = await axios.get(
        `${apiUrl}/api/media-output-category`,
        getToken()
      );
      const data = Array.isArray(response.data) ? response.data : [];
      setOutputMediaCtg(data);
    } catch (error) {
      console.error("Error fetching :", error);
      setOutputMediaCtg([]);
    }
    // const response = await axios.get(
    //   `${apiUrl}/api/media-output-category`,
    //   getToken()
    // );
    // setOutputMediaCtg(response.data);
  };

  const fetchMediaType = async (id_category_output) => {
    try {
      const response = await axios.get(
        `${apiUrl}/api/media-output-type/${id_category_output}`,
        getToken()
      );
      const data = Array.isArray(response.data) ? response.data : [];
      setOutputMediaType(data);
    } catch (error) {
      console.error("Error fetching:", error);
      setOutputMediaType([]);
    }
    // try {
    //   const response = await axios.get(
    //     `${apiUrl}/api/media-output-type/${id_category_output}`,
    //     getToken()
    //   );
    //   setOutputMediaType(response.data);
    //   console.log("Updated Output Media Type:", response.data);
    // } catch (error) {
    //   console.log(error);
    // }
  };
  const fetchVideo = async () => {
    try {
      const response = await axios.get(
        `${apiUrl}/api/video-output-category`,
        getToken()
      );
      const data = Array.isArray(response.data) ? response.data : [];
      setOutputVideoCtg(data);
    } catch (error) {
      console.error("Error fetching :", error);
      setOutputVideoCtg([]);
    }
    // const response = await axios.get(
    //   `${apiUrl}/api/video-output-category`,
    //   getToken()
    // );
    // setOutputVideoCtg(response.data);
  };
  const fetchVideoType = async () => {
    try {
      const response = await axios.get(
        `${apiUrl}/api/video-output-type`,
        getToken()
      );
      const data = Array.isArray(response.data) ? response.data : [];
      setOutputVideoType(data);
    } catch (error) {
      console.error("Error fetching :", error);
      setOutputVideoType([]);
    }
    // const response = await axios.get(
    //   `${apiUrl}/api/video-output-type`,
    //   getToken()
    // );
    // setOutputVideoType(response.data);
  };

  useEffect(() => {
    // // Fetch data only if category_id is defined
    // if (data.category_id) {
    //   fetchPublicType({ category: data.category_id });
    //   fetchMediaType({ category: data.category_id });
    // }

    // // Other fetch functions that don't depend on data.category_id
    fetchPublicType(data.output_publication[0].id_category_output);
    fetchCtgPatner();
    fetchCtgType();
    fetchMedia();
    fetchMediaType(data.output_media[0].id_category_output);
    fetchPublic();
    fetchVideo();
    fetchVideoType();
  }, [data.output_media, data.output_publication]);

  return (
    <div>
      <h1 className="text-xl font-bold text-violet-800 mx-5 my-5">
        2.1 Substansi Usulan
      </h1>
      <div className="grid grid-cols-2 gap-x-10  ">
        <div>
          {/* Label dan Link untuk Unduh Template */}
          <div className="flex justify-between items-center mb-2">
            <label className="font-medium text-gray-700">
              Unggah Substansi Laporan *
            </label>
            <a
              href={
                process.env.PUBLIC_URL +
                "/assets/Isian Substansi Proposal - LPPM SINUS-v2.pdf"
              }
              className="text-blue-600 hover:underline flex items-center"
            >
              <img
                src={process.env.PUBLIC_URL + "/assets/download.svg"}
                alt="logo"
                className="w-5 h-5 mr-2"
              />
              Unduh Template
            </a>
          </div>

          {/* Input untuk upload file */}
          <input
            type="file"
            onChange={handleFileChange}
            className="border border-gray-300 rounded-lg p-2 w-full cursor-pointer"
            id="file-upload"
          />
        </div>
      </div>
      <div className="my-5">
        <DropdownCmp
          label="Tahun Ke"
          options={year}
          value={year.find(
            (option) => option.value === data.output_partner[0].year
          )}
          onChange={(option) => handleOutputChangePatner("year", option.value)}
          placeholder="1"
          width="w-32"
        />
        {/* options={statusPartnerOutput} // Gunakan array `statuses` yang sudah didefinisikan
            value={statusPartnerOutput.find((option) => option.value === data.status)} // Cocokkan nilai yang dipilih
            onChange={(option) => handleOutputChangePatner(option, "status")} // Tangani perubahan
            placeholder="Pilih Status" */}
      </div>

      <div className="mx-10 my-3">
        <label className="font-bold text-md text-gray-700">
          Kategori Luaran Peningkatan Pemberdayaan Mitra
        </label>
        <div className="grid grid-cols-4 gap-x-10 mt-2">
          <DropdownCmp
            label="Kategori Luaran *"
            options={mapToDropdown(outputPatnerCtg, "name", "id")}
            value={mapToDropdown(outputPatnerCtg, "name", "id").find(
              (option) =>
                option.value === data.output_partner[0].id_category_output
            )}
            onChange={(option) =>
              handleOutputChangePatner("id_category_output", option.value)
            }
            placeholder="Pilih Kategori Luaran"
          />
          <DropdownCmp
            label="Jenis Luaran *"
            options={mapToDropdown(outputPatnerType, "name", "id")}
            value={mapToDropdown(outputPatnerType, "name", "id").find(
              (option) => option.value === data.output_partner[0].id_type_output
            )}
            onChange={(option) =>
              handleOutputChangePatner("id_type_output", option.value)
            }
            placeholder="Pilih Luaran"
          />

          <DropdownCmp
            label="Status *"
            options={statusPartnerOutput} // Gunakan array `statuses` yang sudah didefinisikan
            value={statusPartnerOutput.find(
              (option) => option.value === data.output_partner[0].status
            )} // Cocokkan nilai yang dipilih
            onChange={(option) =>
              handleOutputChangePatner("status", option.value)
            } // Tangani perubahan
            placeholder="Pilih Status"
          />

          <TextAreaCmp
            label="Keterangan Optional"
            value={data.output_partner[0].description}
            onChange={(e) =>
              handleOutputChangePatner("description", e.target.value)
            }
            placeholder="url dan nama jurnal, penerbit, url paten"
            rows={2}
          />
        </div>
      </div>

      <div className=" mx-10 my-2">
        <label className=" font-bold text-md text-gray-700 ">
          Kategori Luaran Publikasi
        </label>
        <div className="grid grid-cols-4 gap-x-10 -5 mt-2">
          <DropdownCmp
            label="Kategori Luaran *"
            options={mapToDropdown(outputPublicationCtg, "name", "id")}
            value={mapToDropdown(outputPublicationCtg, "name", "id").find(
              (option) =>
                option.value === data.output_publication[0].id_category_output
            )}
            onChange={(option) =>
              handleOutputChangePublication("id_category_output", option.value)
            }
            placeholder="Pilih Kategori Luaran"
          />
          <DropdownCmp
            label="Jenis Luaran *"
            options={mapToDropdown(outputPublicationType, "name", "id")}
            value={mapToDropdown(outputPublicationType, "name", "id").find(
              (option) =>
                option.value === data.output_publication[0].id_type_output
            )}
            onChange={(option) =>
              handleOutputChangePublication("id_type_output", option.value)
            }
            placeholder="Pilih Luaran"
          />
          <DropdownCmp
            label="Status *"
            options={statusPublicationOutput} // Gunakan array `statuses` yang sudah didefinisikan
            value={statusPublicationOutput.find(
              (option) => option.value === data.output_publication[0].status
            )} // Cocokkan nilai yang dipilih
            onChange={(option) =>
              handleOutputChangePublication("status", option.value)
            } // Tangani perubahan
            placeholder="Pilih Status"
          />
          <TextAreaCmp
            label="Keterangan Optional"
            value={data.output_publication[0].description}
            onChange={(e) =>
              handleOutputChangePublication("description", e.target.value)
            }
            placeholder="url dan nama jurnal, penerbit, url paten"
            rows={2}
          />
        </div>
      </div>

      <div className="my-3 mx-10">
        <label className=" font-bold text-md text-gray-700 ">
          Kategori Luaran Publikasi Media
        </label>
        <div className="grid grid-cols-4 gap-x-10 -5 mt-2">
          <DropdownCmp
            label="Kategori Luaran *"
            options={mapToDropdown(outputMediaCtg, "name", "id")}
            value={mapToDropdown(outputMediaCtg, "name", "id").find(
              (option) =>
                option.value === data.output_media[0].id_category_output
            )}
            onChange={(option) =>
              handleOutputChangeMedia("id_category_output", option.value)
            }
            placeholder="Pilih Kategori Luaran"
          />
          <DropdownCmp
            label="Jenis Luaran *"
            options={mapToDropdown(outputMediaType, "name", "id")}
            value={mapToDropdown(outputMediaType, "name", "id").find(
              (option) => option.value === data.output_media[0].id_type_output
            )}
            onChange={(option) =>
              handleOutputChangeMedia("id_type_output", option.value)
            }
            placeholder="Pilih Luaran"
          />
          <DropdownCmp
            label="Status *"
            options={statusMediaOutput} // Gunakan array `statuses` yang sudah didefinisikan
            value={statusMediaOutput.find(
              (option) => option.value === data.output_media[0].status
            )} // Cocokkan nilai yang dipilih
            onChange={(option) =>
              handleOutputChangeMedia("status", option.value)
            } // Tangani perubahan
            placeholder="Pilih Status"
          />
          <TextAreaCmp
            label="Keterangan Optional"
            value={data.output_media[0].description}
            onChange={(e) =>
              handleOutputChangeMedia("description", e.target.value)
            }
            placeholder="url dan nama jurnal, penerbit, url paten"
            rows={2}
          />
        </div>
      </div>

      <div className="my-3 mx-10">
        <label className=" font-bold text-md text-gray-700 ">
          Kategori Luaran Publikasi Video
        </label>
        <div className="grid grid-cols-4 gap-x-10 -5 mt-2">
          <DropdownCmp
            label="Kategori Luaran *"
            options={mapToDropdown(outputVideoCtg, "name", "id")}
            value={mapToDropdown(outputVideoCtg, "name", "id").find(
              (option) =>
                option.value === data.output_video[0].id_category_output
            )}
            onChange={(option) =>
              handleOutputChangeVideo("id_category_output", option.value)
            }
            placeholder="Pilih Kategori Luaran"
          />
          <DropdownCmp
            label="Jenis Luaran *"
            options={mapToDropdown(outputVideoType, "name", "id")}
            value={mapToDropdown(outputVideoType, "name", "id").find(
              (option) => option.value === data.output_video[0].id_type_output
            )}
            onChange={(option) =>
              handleOutputChangeVideo("id_type_output", option.value)
            }
            placeholder="Pilih Luaran"
          />
          <DropdownCmp
            label="Status *"
            options={statusVideoOutput} // Gunakan array `statuses` yang sudah didefinisikan
            value={statusVideoOutput.find(
              (option) => option.value === data.output_video[0].status
            )} // Cocokkan nilai yang dipilih
            onChange={(option) =>
              handleOutputChangeVideo("status", option.value)
            } // Tangani perubahan
            placeholder="Pilih Status"
          />
          <TextAreaCmp
            label="Keterangan Optional"
            value={data.output_video[0].description}
            onChange={(e) =>
              handleOutputChangeVideo("description", e.target.value)
            }
            placeholder="url dan nama jurnal, penerbit, url paten"
            rows={2}
          />
        </div>
      </div>
    </div>
  );
};

export default SubtansiUsulan;
