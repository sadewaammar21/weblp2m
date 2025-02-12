import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getServiceDetail,
  downloadServiceDocument,
} from "../../Features/ServiceSlice";
import { downloadEveryDocument } from "../../Features/ResearchSlice";

const DetailPengabdian = () => {
  const { id } = useParams();
  const [service, setService] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // const fetchDetailService = async (id) => {
  //   try {
  //     setLoading(true);
  //     const response = await getServiceDetail(id);
  //     setService(response.data);
  //   } catch (error) {
  //     setError(true);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const handleDownloadPdf = (documentUrl) => {
  //   if (!documentUrl) {
  //     alert("Dokumen tidak tersedia!");
  //     return;
  //   }

  //   const link = document.createElement("a");
  //   link.href = documentUrl;
  //   link.setAttribute("download", "document.pdf"); // Nama file default
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  const fetchDetailService = async (id) => {
    try {
      setLoading(true);
      const response = await getServiceDetail(id);
      console.log("API Response:", response.data); // Cek data dari API
      setService(response.data);
    } catch (error) {
      console.error("Error fetching service:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetailService(id);
  }, [id]);

  useEffect(() => {
    console.log("Service updated:", service);
  }, [service]);

  const handleDownloadPdf = (id) => {
    downloadServiceDocument(id);
  };

  const handleDownloadDocument = (filePath) => {
    downloadEveryDocument(filePath);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error ketika mengambil data</p>;
  }

  return (
    <div className="px-10">
      <div className="">
        <div className="flex space-x-10">
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
              <h2 className="text-sm font-sans text-violet-800 mr-1">
                {" "}
                Usulan pengabdian anda telah disetujui
              </h2>
            </div>
          </div>
          <button className="cursor-pointer">
            <img
              src={process.env.PUBLIC_URL + "/assets/icon_pdf_brks.svg"}
              alt="user"
              className="w-15 h-15"
            />
          </button>
        </div>
        <h1 className="text-xl font-bold text-violet-800 mx-5 my-5">
          TES USULAN PENGABDIAN{" "}
        </h1>
      </div>
      <div className="flex justify-between">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200 shadow-md rounded-lg boder border-black border-l-2 border-r-2 border-t-2 border-b-2 ">
            <tbody>
              <tr className=" boder border-black border-b-2">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans">
                  Judul
                </td>
                <td className="px-6 py-4 whitespace-normal break-words text-sm font-bold text-right">
                  {service.title}
                </td>
              </tr>

              <tr className="boder border-black border-b-2">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans ">
                  Kelompok Skema
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">
                  {service.scheme.name}
                </td>
              </tr>
              <tr className=" boder border-black border-b-2">
                <td className="px-6 py-4 text-sm font-sans ">Ruang Lingkup</td>
                <td className="px-6 py-4 text-sm font-bold whitespace-normal break-words text-right">
                  {service.scope.name}
                </td>
              </tr>

              <tr className=" boder border-black border-b-2">
                <td className="px-6 py-4 text-sm font-sans ">Bidang Fokus</td>
                <td className="px-6 py-4 text-sm font-bold whitespace-normal break-words text-right">
                  {service.focus_thematic?.name ||
                    service.focus_r_i_r_n_s?.name}
                </td>
              </tr>
              <tr className=" boder border-black border-b-2">
                <td className="px-6 py-4 text-sm font-sans ">Tahun Usulan </td>
                <td className="px-6 py-4 text-sm font-bold whitespace-normal break-words text-right">
                  {service.year}
                </td>
              </tr>
              <tr className=" boder border-black border-b-2">
                <td className="px-6 py-4 text-sm font-sans ">
                  Tahun Pelaksanaan
                </td>
                <td className="px-6 py-4 text-sm font-bold whitespace-normal break-words text-right">
                  {service.year}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="max-w-4xl mx-10 bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200 shadow-md rounded-lg boder border-black border-l-2 border-r-2 border-t-2 border-b-2 ">
            <tbody>
              <tr className=" boder border-black border-b-2">
                <td className="px-6 py-4 text-sm font-sans ">Lama Kegiatan</td>
                <td className="px-6 py-4 text-sm font-bold whitespace-normal break-words text-right">
                  {service.duration} Tahun
                </td>
              </tr>
              <tr className=" boder border-black border-b-2">
                <td className="px-6 py-4 text-sm font-sans ">
                  Rumpun Ilmu Level 1
                </td>
                <td className="px-6 py-4 text-sm font-bold whitespace-normal break-words text-right">
                  {service?.cluster_lv1.name}
                </td>
              </tr>
              <tr className=" boder border-black border-b-2">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans">
                  Rumpun Ilmu Level 2
                </td>
                <td className="px-6 py-4 whitespace-normal break-words text-sm font-bold text-right">
                  {service?.cluster_lv2.name}
                </td>
              </tr>
              <tr className="boder border-black border-b-2">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans">
                  Rumpun Ilmu Level 3
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">
                  {service?.cluster_lv3.name}
                </td>
              </tr>

              <tr className="boder border-black border-b-2">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans ">
                  Profil Sinta Ketua Pengusul
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">
                  {service.user.sinta_id}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* <div className="mt-10 mb-10 p-4 bg-violet-100 w-full rounded-md ">
        <div className="">
          <h2 className="text-md font-bold text-violet-800">
            {" "}
            Identitas Pengusul Ketua
          </h2>
        </div>
      </div> */}

      <div className="mt-10 mb-10 p-4 bg-violet-100 w-full rounded-md ">
        <div className="">
          <h2 className="text-md font-bold text-violet-800">
            {" "}
            Identitas Anggota Dosen
          </h2>
        </div>
      </div>

      <div className="relative overflow-x-auto  my-10">
        <table className="w-full text-sm text-center bg-neutral-20 text-gray-500 dark:text-gray-400 border border-gray-300 ">
          <thead className="border border-gray-300 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="border border-black">
              <th className="border border-black px-4 py-2">No</th>
              <th className="border border-black px-4 py-2">NIDN</th>
              <th className="border border-black px-4 py-2">Nama</th>
              <th className="border border-black px-4 py-2">Institusi</th>
              <th className="border border-black px-4 py-2">Prodi</th>
              <th className="border border-black px-4 py-2">Tugas</th>
              <th className="border border-black px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {service.members &&
              service.members.map((item, index) => (
                <tr key={index}>
                  <td className="  border-neutral-100 border-[0.5px] px-4 py-2 text-neutral-500">
                    {index + 1}
                  </td>
                  <td className="  border-neutral-100 border-[0.5px] px-4 py-2 text-neutral-500">
                    {item.nidn}
                  </td>
                  <td className="  border-neutral-100 border-[0.5px] px-4 py-2 text-neutral-500">
                    {item.name}
                  </td>
                  <td className="  border-neutral-100 border-[0.5px] px-4 py-2 text-neutral-500">
                    {item.institution}
                  </td>
                  <td className="  border-neutral-100 border-[0.5px] px-4 py-2 text-neutral-500">
                    {item.id_prodi}
                  </td>
                  <td className="  border-neutral-100 border-[0.5px] px-4 py-2 text-neutral-500">
                    {item.pivot.task}
                  </td>
                  <td className="  border-neutral-100 border-[0.5px] px-2 py-2">
                    <div className="bg-cyan-700 px-2 py-2 rounded-xl text-neutral-10">
                      {item.pivot.status}
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10 mb-10 p-4 bg-violet-100 w-full rounded-md ">
        <div className="">
          <h2 className="text-md font-bold text-violet-800">
            {" "}
            Identitas Anggota Non Dosen
          </h2>
        </div>
      </div>

      <div className="relative overflow-x-auto  my-10">
        <table className="w-full text-sm text-center bg-neutral-20 text-gray-500 dark:text-gray-400 border border-gray-300 ">
          <thead className="border border-gray-300 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="border border-black">
              <th className="border border-black px-4 py-2">No</th>
              <th className="border border-black px-4 py-2">NIDN</th>
              <th className="border border-black px-4 py-2">Nama</th>
              <th className="border border-black px-4 py-2">Institusi</th>
              <th className="border border-black px-4 py-2">Prodi</th>
              <th className="border border-black px-4 py-2">Tugas</th>
              <th className="border border-black px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {service.student_services &&
              service.student_services.map((item, index) => (
                <tr key={index} className="text-neutral-500">
                  <td className="  border-neutral-100 border-[0.5px] px-4 py-2">
                    {index + 1}
                  </td>
                  <td className="  border-neutral-100 border-[0.5px] px-4 py-2">
                    {item.nim}
                  </td>
                  <td className="  border-neutral-100 border-[0.5px] px-4 py-2">
                    {item.name}
                  </td>
                  <td className="  border-neutral-100 border-[0.5px] px-4 py-2">
                    {item.email}
                  </td>
                  <td className="  border-neutral-100 border-[0.5px] px-4 py-2">
                    {item.prodi}
                  </td>
                  <td className="  border-neutral-100 border-[0.5px] px-4 py-2">
                    {item.task}
                  </td>
                  <td className="  border-neutral-100 border-[0.5px] px-4 py-2">
                    {item.role}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10 mb-10 p-4 bg-violet-100 w-full rounded-md ">
        <div className="">
          <h2 className="text-md font-bold text-violet-800">
            {" "}
            Substansi dan Luaran
          </h2>
        </div>
      </div>
      <div className="flex space-x-10">
        <div>
          <div className="font-sans">Nama Makro Riset</div>
          <div className="font-sans font-bold flex items-center">
            Kelompok Riset dan Rintisan
          </div>
        </div>
        <div>
          <div className="font-sans">Substansi</div>
          <div className="font-sans font-bold flex items-center">
            <button
              className="ml-2"
              // onClick={handleDownloadDocument(service.substance)}
            >
              <img
                src={process.env.PUBLIC_URL + "/assets/download_sub.svg"}
                alt="user"
                className="w-14 h-14"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="relative overflow-x-auto  my-10">
        <table className="w-full text-sm text-center bg-neutral-20 text-gray-500 dark:text-gray-400 border border-gray-300 ">
          <thead className="border-b text-xs text-neutral-700 uppercase bg-neutral-20 text-center">
            <tr className="border border-black">
              <th className="border border-black px-4 py-2">
                Uraian Tahun Kegiatan
              </th>
              <th className="border border-black px-4 py-2">Kelompok Luaran</th>
              <th className="border border-black px-4 py-2">Jenis Luaran</th>
              <th className="border border-black px-4 py-2">Target </th>
              <th className="border border-black px-4 py-2">Keterangan</th>
            </tr>
          </thead>
          <tbody>
            {service.output_media &&
              service.output_media.map((item, index) => (
                <tr key={index} className="text-neutral-500">
                  <td className="  border-neutral-100 border-[0.5px] px-4 py-2">
                    {new Date(item.created_at).getFullYear()}
                  </td>
                  <td className="  border-neutral-100 border-[0.5px] px-4 py-2">
                    {item.id_category_output}
                  </td>
                  <td className="  border-neutral-100 border-[0.5px] px-4 py-2">
                    {item.id_type_output}
                  </td>
                  <td className="  border-neutral-100 border-[0.5px] px-4 py-2">
                    {item.status}
                  </td>
                  <td className="  border-neutral-100 border-[0.5px] px-4 py-2">
                    {item.description}
                  </td>
                </tr>
              ))}
            {service.output_partner &&
              service.output_media.map((item, index) => (
                <tr key={index} className="text-neutral-500">
                  <td className="  border-neutral-100 border-[0.5px] px-4 py-2">
                    {new Date(item.created_at).getFullYear()}
                  </td>
                  <td className="  border-neutral-100 border-[0.5px] px-4 py-2">
                    {item.id_category_output}
                  </td>
                  <td className="  border-neutral-100 border-[0.5px] px-4 py-2">
                    {item.id_type_output}
                  </td>
                  <td className="  border-neutral-100 border-[0.5px] px-4 py-2">
                    {item.status}
                  </td>
                  <td className="  border-neutral-100 border-[0.5px] px-4 py-2">
                    {item.description}
                  </td>
                </tr>
              ))}
            {service.output_publication &&
              service.output_media.map((item, index) => (
                <tr key={index} className="text-neutral-500">
                  <td className="  border-neutral-100 border-[0.5px] px-4 py-2">
                    {new Date(item.created_at).getFullYear()}
                  </td>
                  <td className="  border-neutral-100 border-[0.5px] px-4 py-2">
                    {item.id_category_output}
                  </td>
                  <td className="  border-neutral-100 border-[0.5px] px-4 py-2">
                    {item.id_type_output}
                  </td>
                  <td className="  border-neutral-100 border-[0.5px] px-4 py-2">
                    {item.status}
                  </td>
                  <td className="  border-neutral-100 border-[0.5px] px-4 py-2">
                    {item.description}
                  </td>
                </tr>
              ))}
            {service.output_video &&
              service.output_media.map((item, index) => (
                <tr key={index} className="text-neutral-500">
                  <td className="  border-neutral-100 border-[0.5px] px-4 py-2">
                    {new Date(item.created_at).getFullYear()}
                  </td>
                  <td className="  border-neutral-100 border-[0.5px] px-4 py-2">
                    {item.id_category_output}
                  </td>
                  <td className="  border-neutral-100 border-[0.5px] px-4 py-2">
                    {item.id_type_output}
                  </td>
                  <td className="  border-neutral-100 border-[0.5px] px-4 py-2">
                    {item.status}
                  </td>
                  <td className="  border-neutral-100 border-[0.5px] px-4 py-2">
                    {item.description}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10 mb-10 p-4 bg-violet-100 w-full rounded-md ">
        <div className="">
          <h2 className="text-md font-bold text-violet-800">
            {" "}
            Rencana Angggaran Biaya
          </h2>
        </div>
      </div>

      <div className="flex space-x-10">
        <div>
          <div className="font-sans">Total Anggaran Yang diajukan</div>
        </div>
        <div className="font-sans font-bold flex items-center">Rp.</div>
      </div>
      <div className="">
        <h2 className="font-medium font-sans text-black"> Tahun ke 1</h2>
      </div>
      <div className="relative overflow-x-auto  my-2">
        <table className="w-full text-sm text-center bg-neutral-20 text-gray-500 dark:text-gray-400 border border-gray-300 ">
          <thead className="border border-gray-300 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="border border-black">
              <th className="border border-black px-4 py-2">Kelompok</th>
              <th className="border border-black px-4 py-2">Komponen</th>
              <th className="border border-black px-4 py-2">Item</th>
              <th className="border border-black px-4 py-2">Satuan </th>
              <th className="border border-black px-4 py-2">Harga Satuan </th>
              <th className="border border-black px-4 py-2">Volume</th>
              <th className="border border-black px-4 py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {service.budget_plan_service &&
              service.budget_plan_service.map((item, index) => (
                <tr key={index} className="text-neutral-500">
                  <td className="  border-neutral-100 border-[0.5px] px-4 py-2">
                    {item.id_group_budget}
                  </td>
                  <td className="  border-neutral-100 border-[0.5px] px-4 py-2">
                    {item.id_component_budget}
                  </td>
                  <td className="  border-neutral-100 border-[0.5px] px-4 py-2">
                    {item.item}
                  </td>
                  <td className="  border-neutral-100 border-[0.5px] px-4 py-2">
                    {item.unit}
                  </td>
                  <td className="  border-neutral-100 border-[0.5px] px-4 py-2">
                    {item.price_unit}
                  </td>
                  <td className="  border-neutral-100 border-[0.5px] px-4 py-2">
                    {item.volume}
                  </td>
                  <td className="  border-neutral-100 border-[0.5px] px-4 py-2">
                    {item.total}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {/* <div className="flex justify-between">
        <h2 className="mb-2 text-md font-bold text-violet-800">
          {" "}
          Total Anggaran
        </h2>
        <h2 className="mb-2 text-md font-bold text-violet-800"> Rp.0,00</h2>
      </div>
      <div className="">
        <h2 className="text-sm font-sans text-violet-800"> Tahun 2</h2>
      </div>
      <div className="relative overflow-x-auto  my-2">
        <table className="w-full text-sm text-center bg-neutral-20 text-gray-500 dark:text-gray-400 border border-gray-300 ">
          <thead className="border border-gray-300 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="border border-black">
              <th className="border border-black px-4 py-2">Kelompok</th>
              <th className="border border-black px-4 py-2">Komponen</th>
              <th className="border border-black px-4 py-2">Item</th>
              <th className="border border-black px-4 py-2">Satuan </th>
              <th className="border border-black px-4 py-2">Harga Satuan </th>
              <th className="border border-black px-4 py-2">Volume</th>
              <th className="border border-black px-4 py-2">Total</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
      <div className="flex justify-between">
        <h2 className="mb-2 text-md font-bold text-violet-800">
          {" "}
          Total Anggaran
        </h2>
        <h2 className="mb-2 text-md font-bold text-violet-800"> Rp.0,00</h2>
      </div> */}

      <div className="mt-10 mb-10 p-4 bg-violet-100 w-full rounded-md ">
        <div className="">
          <h2 className="text-md font-bold text-violet-800"> Mitra</h2>
        </div>
      </div>

      <div className="relative overflow-x-auto  my-2">
        <table className="w-full text-sm text-center bg-neutral-20 text-gray-500 dark:text-gray-400 border border-gray-300 ">
          <thead className="border border-gray-300 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="border border-black">
              <th className="border border-black px-4 py-2">Nama Mitra</th>
              <th className="border border-black px-4 py-2">
                Alamat Institusi
              </th>
              <th className="border border-black px-4 py-2">Provinsi </th>
              <th className="border border-black px-4 py-2">Surel </th>
              <th className="border border-black px-4 py-2">
                Surat Kesanggupan
              </th>
              <th className="border border-black px-4 py-2">Dana</th>
            </tr>
          </thead>
          <tbody>
            {service.partner &&
              service.partner.map((item, index) => (
                <tr key={index} className="text-neutral-500">
                  <td className="  border-neutral-100 border-[0.5px] px-4 py-2">
                    {item.name}
                  </td>
                  <td className="  border-neutral-100 border-[0.5px] px-4 py-2">
                    {item.city} {item.province}
                  </td>
                  <td className="  border-neutral-100 border-[0.5px] px-4 py-2">
                    {" "}
                    {item.province}
                  </td>
                  <td className="  border-neutral-100 border-[0.5px] px-4 py-2">
                    {item.email}
                  </td>
                  <td className="  border-neutral-100 border-[0.5px] px-4 py-2">
                    <button
                      className="cursor-pointer"
                      onClick={() => {
                        console.log("Downloading:", item.document);
                        handleDownloadPdf(item.document);
                      }}
                    >
                      <img
                        src={
                          process.env.PUBLIC_URL + "/assets/icon_pdf_brks.svg"
                        }
                        alt="user"
                        className="w-10 h-10"
                      />
                    </button>
                  </td>
                  <td className="  border-neutral-100 border-[0.5px] px-4 py-2">
                    {item.funding_contribution}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DetailPengabdian;
