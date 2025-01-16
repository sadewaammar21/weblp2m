import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { downloadResearchDocument, downloadEveryDocument, getResearchDetail } from "../../Features/ResearchSlice";

const DetailPenelitian = () => {
  const {id} = useParams();
  const [research, setResearch] = useState({});

  const fetchDetailResearch = async(id) =>{
    const response = await getResearchDetail(id);
    setResearch(response.data);
    console.log(research);
  }

  useEffect(()=>{
    fetchDetailResearch(id);
  }, [id]);

  const handleDownloadPdf = (id) => {
    downloadResearchDocument(id);
  }

  const handleDownloadDocument = (filePath) => {
    downloadEveryDocument(filePath);
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
                Usulan penelitian anda telah disetujui
              </h2>
            </div>
          </div>
          <button className="cursor-pointer" onClick={() => handleDownloadPdf(research.id)}>
            <img
              src={process.env.PUBLIC_URL + "/assets/icon_pdf_brks.svg"}
              alt="user"
              className="w-15 h-15"
            />
          </button>
        </div>
        <h1 className="text-xl font-bold text-violet-800 mx-5 my-5">
          TES USULAN PENELITIAN{" "}
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
                  {research.title}
                </td>
              </tr>

              <tr className="boder border-black border-b-2">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans ">
                  Kelompok Skema
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">
                  {research.scheme.name}
                </td>
              </tr>
              <tr className=" boder border-black border-b-2">
                <td className="px-6 py-4 text-sm font-sans ">Ruang Lingkup</td>
                <td className="px-6 py-4 text-sm font-bold whitespace-normal break-words text-right">
                  {research.scope.name}
                </td>
              </tr>

              <tr className=" boder border-black border-b-2">
                <td className="px-6 py-4 text-sm font-sans ">Bidang Fokus</td>
                <td className="px-6 py-4 text-sm font-bold whitespace-normal break-words text-right">
                  {research.research_focus.name}
                </td>
              </tr>
              <tr className=" boder border-black border-b-2">
                <td className="px-6 py-4 text-sm font-sans ">Tahun Usulan </td>
                <td className="px-6 py-4 text-sm font-bold whitespace-normal break-words text-right">
                  {research.year}
                </td>
              </tr>
              <tr className=" boder border-black border-b-2">
                <td className="px-6 py-4 text-sm font-sans ">
                  Tahun Pelaksanaan
                </td>
                <td className="px-6 py-4 text-sm font-bold whitespace-normal break-words text-right">
                  {research.year}
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
                  {research.duration} Tahun
                </td>
              </tr>
              <tr className=" boder border-black border-b-2">
                <td className="px-6 py-4 text-sm font-sans ">Tema Penelitan</td>
                <td className="px-6 py-4 text-sm font-bold whitespace-normal break-words text-right">
                  {research.research_theme.name}
                </td>
              </tr>
              <tr className=" boder border-black border-b-2">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans">
                  Topik Penelitian
                </td>
                <td className="px-6 py-4 whitespace-normal break-words text-sm font-bold text-right">
                  {research.research_topic.name}
                </td>
              </tr>
              <tr className="boder border-black border-b-2">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans">
                  Rumpun Ilmu Level 3
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">
                  {research.science_cluster1.name}
                </td>
              </tr>

              <tr className="bg-gray-50 boder border-black border-b-2">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans">
                  Target TKT
                </td>
                <td className="px-6 py-4 whitespace-normal break-words text-sm font-bold text-right max-w-md">
                  {research.tkt_final}
                </td>
              </tr>

              <tr className="boder border-black border-b-2">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans ">
                  Profil Sinta Ketua Pengusul
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">
                  6049857
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
            {research.members && research.members.map((item, index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{item.nidn}</td>
                <td>{item.name}</td>
                <td>{item.institution}</td>
                <td>{item.id_prodi}</td>
                <td>{item.pivot.task}</td>
                <td>{item.pivot.status}</td>
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
              <th className="border border-black px-4 py-2">NIM</th>
              <th className="border border-black px-4 py-2">Nama</th>
              <th className="border border-black px-4 py-2">Email</th>
              <th className="border border-black px-4 py-2">Prodi</th>
              <th className="border border-black px-4 py-2">Tugas</th>
              <th className="border border-black px-4 py-2">Peran</th>
            </tr>
          </thead>
          <tbody>
            {research.students && research.students.map((item, index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{item.nim}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.prodi}</td>
                <td>{item.task}</td>
                <td>{item.role}</td>
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
            <button className="ml-2" onClick={() => handleDownloadDocument(research.substance)}>
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
          <thead className="border border-gray-300 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
            {research.output && research.output.map((item, index) => (
              <tr key={index}>
                <td>{item.year}</td>
                <td>{item.id_category_output}</td>
                <td>{item.id_type_output}</td>
                <td>{item.status}</td>
                <td>{item.description}</td>
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
            {research.budget_plan && research.budget_plan.map((item, index) => (
              <tr key={index}>
                <td>{item.id_group_budget}</td>
                <td>{item.id_component_budget}</td>
                <td>{item.item}</td>
                <td>{item.unit}</td>
                <td>{item.price_unit}</td>
                <td>{item.volume}</td>
                <td>{item.total}</td>
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
              <th className="border border-black px-4 py-2">Institusi</th>
              <th className="border border-black px-4 py-2">
                Alamat Institusi
              </th>
              <th className="border border-black px-4 py-2">Negara </th>
              <th className="border border-black px-4 py-2">Surel </th>
              <th className="border border-black px-4 py-2">
                Surat Kesanggupan
              </th>
              <th className="border border-black px-4 py-2">Dana</th>
            </tr>
          </thead>
          <tbody>
            {research.supporting_document && research.supporting_document.map((item, index) => (
              <tr key={index}>
                <td>{item.partner_name}</td>
                <td>{item.institution}</td>
                <td>{item.institution_address}</td>
                <td>{item.country_code}</td>
                <td>{item.email}</td>
                <td>{item.document}</td>
                <td>{item.funding_contribution1 + item.funding_contribution2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DetailPenelitian;
