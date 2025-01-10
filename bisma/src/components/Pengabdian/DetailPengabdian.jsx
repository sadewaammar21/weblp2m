import React from "react";

const DetailPengabdian = (data) => {
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
                  Membangun Kemandirian Ekonomi Desa melalui Implementasi Sistem
                  Manajemen Pelaporan Keuangan Terintegrasi di BUMDesa Sinergi
                  Sidowayah
                </td>
              </tr>

              <tr className="boder border-black border-b-2">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans ">
                  Kelompok Skema
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">
                  Riset Dasar
                </td>
              </tr>
              <tr className=" boder border-black border-b-2">
                <td className="px-6 py-4 text-sm font-sans ">Ruang Lingkup</td>
                <td className="px-6 py-4 text-sm font-bold whitespace-normal break-words text-right">
                  Penelitan Dosen Pemula
                </td>
              </tr>

              <tr className=" boder border-black border-b-2">
                <td className="px-6 py-4 text-sm font-sans ">Bidang Fokus</td>
                <td className="px-6 py-4 text-sm font-bold whitespace-normal break-words text-right">
                  Teknologi Informasi dan Komunikasi
                </td>
              </tr>
              <tr className=" boder border-black border-b-2">
                <td className="px-6 py-4 text-sm font-sans ">Tahun Usulan </td>
                <td className="px-6 py-4 text-sm font-bold whitespace-normal break-words text-right">
                  2024
                </td>
              </tr>
              <tr className=" boder border-black border-b-2">
                <td className="px-6 py-4 text-sm font-sans ">
                  Tahun Pelaksanaan
                </td>
                <td className="px-6 py-4 text-sm font-bold whitespace-normal break-words text-right">
                  2024
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
                  1 Tahun
                </td>
              </tr>
              <tr className=" boder border-black border-b-2">
                <td className="px-6 py-4 text-sm font-sans ">Tema Penelitan</td>
                <td className="px-6 py-4 text-sm font-bold whitespace-normal break-words text-right">
                  Teknologi Subsitusi Bahan Bakar
                </td>
              </tr>
              <tr className=" boder border-black border-b-2">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans">
                  Topik Penelitian
                </td>
                <td className="px-6 py-4 whitespace-normal break-words text-sm font-bold text-right">
                  Teknologi untuk data informasi berbagai bentuk kearifan lokal
                  di Indonesia
                </td>
              </tr>
              <tr className="boder border-black border-b-2">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans">
                  Rumpun Ilmu Level 3
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">
                  Teknik Komputer
                </td>
              </tr>

              <tr className="bg-gray-50 boder border-black border-b-2">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans">
                  Target TKT
                </td>
                <td className="px-6 py-4 whitespace-normal break-words text-sm font-bold text-right max-w-md">
                  2
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
      <div>
        <h1 className="text-xl font-bold text-violet-800 mx-5 my-5"> Mitra</h1>
        <div className="relative overflow-x-auto my-2">
          <table className="w-full text-sm text-center bg-neutral-20 text-gray-500 border border-black">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="border border-black px-4 py-2">Jenis Mitra</th>
                <th className="border border-black px-4 py-2">
                  kelompok Mitra
                </th>
                <th className="border border-black px-4 py-2">Nama Mitra</th>
                <th className="border border-black px-4 py-2">File</th>
                <th className="border border-black px-4 py-2">Dana thn 1</th>
                <th className="border border-black px-4 py-2">Dana thn 2</th>
                <th className="border border-black px-4 py-2">Dana thn 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black px-4 py-2">Sasaran</td>
                <td className="border border-black px-4 py-2">
                  Kelompok masyarakat yang tidak produktif secara ekonomi
                </td>
                <td className="border border-black px-4 py-2">
                  SMAN 1 Mojolaban
                </td>
                <td className="border border-black px-4 py-2">
                  <button onClick={``}>
                    <span className="font-mono underline text-blue-400">
                      {" "}
                      Download
                    </span>
                  </button>
                </td>
                <td className="border border-black px-4 py-2">Rp.0</td>
                <td className="border border-black px-4 py-2">Rp.0</td>
                <td className="border border-black px-4 py-2">Rp.0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
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
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
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
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
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
            <button className="ml-2">
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
          <tbody></tbody>
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
          <tbody></tbody>
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
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DetailPengabdian;
