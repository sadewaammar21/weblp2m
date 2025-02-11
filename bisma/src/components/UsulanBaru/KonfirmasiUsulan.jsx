import React from "react";
import { downloadEveryDocument } from "../../Features/ResearchSlice";

const KonfirmasiUsulan = ({ data }) => {
  console.log("Data di dalam KonfirmasiUsulan:", data);

  const handleDownloadDocument = (filePath) => {
    downloadEveryDocument(filePath);
  };
  return (
    <div className="px-10">
      <div className="">
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
              Anda belum bisa melakukan submit usulan, status keanggotaan belum
              semuanya menyutujui!
            </h2>
          </div>
        </div>
        <h1 className="text-xl font-bold text-violet-800 mx-5 my-5">
          TES USULAN PENELITIAN{" "}
        </h1>
      </div>
      <div className="flex justify-between">
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <tbody>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans">
                  TKT Saat Ini
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">
                  {data.tkt_current}
                </td>
              </tr>

              <tr className="bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans">
                  Target Akhir TKT
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">
                  {data.tkt_final}
                </td>
              </tr>

              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans ">
                  Kelompok Skema
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">
                  {data.scheme_id}
                </td>
              </tr>

              <tr className="bg-gray-50">
                <td className="px-6 py-4 text-sm font-sans ">Ruang Lingkup</td>
                <td className="px-6 py-4 text-sm font-bold whitespace-normal break-words text-right">
                  {data.scope_id}
                </td>
              </tr>

              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans ">
                  Kategori SBK
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">
                  {data.category_id}
                </td>
              </tr>

              <tr className="bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans ">
                  Bidang Fokus Penelitian
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">
                  {data.focus_id}
                </td>
              </tr>

              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans ">
                  Prioritas Riset
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">
                  {data.priority_id}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* pembatas tabel */}

        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <tbody>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans">
                  Rumpun Ilmu Level 3
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">
                  2
                </td>
              </tr>

              <tr className="bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans">
                  {data.cluster_lv3}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">
                  3
                </td>
              </tr>

              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans ">
                  Tema Penilitian
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">
                  {data.theme_id}
                </td>
              </tr>

              <tr className="bg-gray-50">
                <td className="px-6 py-4 text-sm font-sans ">
                  Topik Penelitian
                </td>
                <td className="px-6 py-4 text-sm font-bold whitespace-normal break-words text-right">
                  {data.topic_id}
                </td>
              </tr>

              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans ">
                  Lama Kegiatan
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">
                  {data.duration} Tahun
                </td>
              </tr>

              <tr className="bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans ">
                  Tahun Pertahun Usulan
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">
                  {data.year}
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
            Anggota Usulan Dosen
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
            {data.members &&
              data.members.map((item, index) => (
                <tr key={index}>
                  <td className="border border-black px-4 py-2">{index + 1}</td>
                  <td className="border border-black px-4 py-2">{item.nidn}</td>
                  <td className="border border-black px-4 py-2">{item.name}</td>
                  <td className="border border-black px-4 py-2">
                    {item.institution}
                  </td>
                  <td className="border border-black px-4 py-2">
                    {item.id_prodi}
                  </td>
                  <td className="border border-black px-4 py-2">
                    {item.pivot.task}
                  </td>
                  <td className="border border-black px-4 py-2">
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
            Anggota Usulan Mahasiswa
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
            {data.students &&
              data.students.map((item, index) => (
                <tr key={index}>
                  <td className="border border-black px-4 py-2">{index + 1}</td>
                  <td className="border border-black px-4 py-2">{item.nim}</td>
                  <td className="border border-black px-4 py-2">{item.name}</td>
                  <td className="border border-black px-4 py-2">
                    {item.email}
                  </td>
                  <td className="border border-black px-4 py-2">
                    {item.prodi}
                  </td>
                  <td className="border border-black px-4 py-2">{item.task}</td>
                  <td className="border border-black px-4 py-2">{item.role}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {/* <div className="mt-10 mb-10 p-4 bg-violet-100 w-full rounded-md ">
        <div className="">
          <h2 className="text-md font-bold text-violet-800"> Substansi</h2>
        </div>
      </div> */}

      <div className="mt-10 mb-10 p-4 bg-violet-100 w-full rounded-md ">
        <div className="">
          <h2 className="text-md font-bold text-violet-800"> Substansi</h2>
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
              onClick={() => handleDownloadDocument(data.substance)}
            >
              <img
                src={process.env.PUBLIC_URL + "/assets/download_sub.svg"}
                alt="user"
                className="w-17 h-17 my-1"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-10 p-4 bg-violet-100 w-full rounded-md ">
        <div className="">
          <h2 className="text-md font-bold text-violet-800">
            {" "}
            Luaran Yang dijanjikan
          </h2>
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
            {data.output &&
              data.output.map((item, index) => (
                <tr key={index}>
                  <td className="border border-black px-4 py-2">{item.year}</td>
                  <td className="border border-black px-4 py-2">
                    {item.id_category_output}
                  </td>
                  <td className="border border-black px-4 py-2">
                    {item.id_type_output}
                  </td>
                  <td className="border border-black px-4 py-2">
                    {item.status}
                  </td>
                  <td className="border border-black px-4 py-2">
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

      <div className="">
        <h2 className="mb-2 text-md font-bold text-violet-800">
          {" "}
          {/* Total RAB 2 Tahun Rp.0,00 */}
        </h2>
      </div>
      <div className="">
        <h2 className="text-sm font-sans text-violet-800"> Tahun 1</h2>
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
            {data.budget_plan &&
              data.budget_plan.map((item, index) => (
                <tr key={index}>
                  <td className="border border-black px-4 py-2">
                    {item.id_group_budget}
                  </td>
                  <td className="border border-black px-4 py-2">
                    {item.id_component_budget}
                  </td>
                  <td className="border border-black px-4 py-2">{item.item}</td>
                  <td className="border border-black px-4 py-2">{item.unit}</td>
                  <td className="border border-black px-4 py-2">
                    {item.price_unit}
                  </td>
                  <td className="border border-black px-4 py-2">
                    {item.volume}
                  </td>
                  <td className="border border-black px-4 py-2">
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
      </div> */}
      {/* <div className="relative overflow-x-auto  my-2">
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
      </div> */}
      {/* <div className="flex justify-between">
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
            {data.supporting_document &&
              data.supporting_document.map((item, index) => (
                <tr key={index}>
                  <td className="border border-black px-4 py-2">
                    {item.partner_name}
                  </td>
                  <td className="border border-black px-4 py-2">
                    {item.institution}
                  </td>
                  <td className="border border-black px-4 py-2">
                    {item.institution_address}
                  </td>
                  <td className="border border-black px-4 py-2">
                    {item.country_code}
                  </td>
                  <td className="border border-black px-4 py-2">
                    {item.email}
                  </td>
                  <td className="border border-black px-4 py-2">
                    {item.document}
                  </td>
                  <td className="border border-black px-4 py-2">
                    {item.funding_contribution1 + item.funding_contribution2}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default KonfirmasiUsulan;
