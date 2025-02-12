import React from "react";

const KonfirmasiUsulan = ({ data }) => {
  console.log("Data di dalam KonfirmasiUsulan:", data);
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
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200 shadow-md rounded-lg boder border-black border-l-2 border-r-2 border-t-2 border-b-2 ">
            <tbody>
              <tr className=" boder border-black border-b-2">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans">
                  Kelompok Skema
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">
                  {data.scheme.name || "Riset Dasar"}
                  {console.log(`data dari skema adalah ${data.scheme.name}`)}
                </td>
              </tr>

              <tr className="boder border-black border-b-2">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans ">
                  Ruang Lingkup
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">
                  {data.scope.name}
                </td>
              </tr>

              <tr className=" boder border-black border-b-2">
                <td className="px-6 py-4 text-sm font-sans ">Bidang Fokus</td>
                <td className="px-6 py-4 text-sm font-bold whitespace-normal break-words text-right">
                  {data.focus_thematic?.name || data.focus_r_i_r_n_s?.name}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="max-w-4xl mx-10 bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200 shadow-md rounded-lg boder border-black border-l-2 border-r-2 border-t-2 border-b-2 ">
            <tbody>
              <tr className="boder border-black border-b-2">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans">
                  Rumpun Ilmu Level 2
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">
                  Teknik Komputer
                </td>
              </tr>
              <tr className="boder border-black border-b-2">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans">
                  Lama Kegiatan
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">
                  {data?.duration} Tahun
                </td>
              </tr>

              <tr className="bg-gray-50 boder border-black border-b-2">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans">
                  Tahun Pertama Usulan
                </td>
                <td className="px-6 py-4 whitespace-normal break-words text-sm font-bold text-right max-w-md">
                  {data.year}
                </td>
              </tr>

              <tr className="boder border-black border-b-2">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans ">
                  URL Profil Sinta Ketua Pengusul
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">
                  {data.user.sinta_id}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-10 mb-10 p-4 bg-violet-100 w-full rounded-md ">
        <div className="">
          <h2 className="text-md font-bold text-violet-800">
            {" "}
            Identitas Pengusul Ketua
          </h2>
        </div>
      </div>

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
              <th className="border border-black px-4 py-2">NIDN</th>
              <th className="border border-black px-4 py-2">Nama Anggota</th>
              <th className="border border-black px-4 py-2">Peran</th>
              <th className="border border-black px-4 py-2">Urain Tugas</th>
              <th className="border border-black px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.members &&
              data.members.map((item, index) => (
                <tr key={index}>
                  <td className="  border-neutral-100 border-[0.5px] px-4 py-2 text-neutral-500">
                    {item.id}
                  </td>
                  <td className="  border-neutral-100 border-[0.5px] px-4 py-2 text-neutral-500">
                    {item.name}
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
            Anggota Usulan Mahasiswa
          </h2>
        </div>
      </div>

      <div className="relative overflow-x-auto  my-10">
        <table className="w-full text-sm text-center bg-neutral-20 text-gray-500 dark:text-gray-400 border border-gray-300 ">
          <thead className="border border-gray-300 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="border border-black">
              <th className="border border-black px-4 py-2">NIM</th>
              <th className="border border-black px-4 py-2">Nama</th>
              <th className="border border-black px-4 py-2">Instansi</th>
              <th className="border border-black px-4 py-2">Prodi</th>
              <th className="border border-black px-4 py-2">Peran</th>
              <th className="border border-black px-4 py-2">No.HP</th>
              <th className="border border-black px-4 py-2">Uraian Tugas</th>
            </tr>
          </thead>
          <tbody>
            {data.student_services &&
              data.student_services.map((item, index) => (
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
          <h2 className="text-md font-bold text-violet-800"> Substansi</h2>
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
            {data.output_media &&
              data.output_media.map((item, index) => (
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
            {data.output_partner &&
              data.output_media.map((item, index) => (
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
            {data.output_publication &&
              data.output_media.map((item, index) => (
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
            {data.output_video &&
              data.output_media.map((item, index) => (
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

      <div className="">
        <h2 className="mb-2 text-md font-bold text-violet-800">
          {" "}
          {/* Total RAB {data.duration} Tahun Rp.{data.budget_plan_service} */}
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
            {data.budget_plan_service &&
              data.budget_plan_service.map((item, index) => (
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
      </div> */}
      {/* <div className="">
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
            {data.partner &&
              data.partner.map((item, index) => (
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
                        // handleDownloadPdf(item.document);
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
      <div className="mt-10 mb-10 p-4 bg-violet-100 w-full rounded-md ">
        <div className="">
          <h2 className="text-md font-bold text-violet-800"> File Pendukung</h2>
        </div>
      </div>
      <div className="relative overflow-x-auto  my-2">
        <table className="w-full text-sm text-center bg-neutral-20 text-gray-500 dark:text-gray-400 border border-gray-300 ">
          <thead className="border border-gray-300 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="border border-black">
              <th className="border border-black px-4 py-2">Jenis</th>
              <th className="border border-black px-4 py-2">File Pendukung</th>
            </tr>
          </thead>
          <tbody>
            {data.supporting_file &&
              data.supporting_file.map((item, index) => (
                <tr key={index} className="text-neutral-500">
                  <td className="  border-neutral-100 border-[0.5px] px-4 py-2">
                    {item.type_id}
                  </td>
                  <td className="  border-neutral-100 border-[0.5px] px-4 py-2">
                    {item.document}
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
