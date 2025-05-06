import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const PrintView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { data = [], user = {} } = location.state || {};

  useEffect(() => {
    if (!data.length) return;
    const timeout = setTimeout(() => {
      window.print();
      navigate(-1);
    }, 500);

    return () => clearTimeout(timeout);
  }, [data, navigate]);

  const statusMap = {
    1: "Draft",
    2: "Diajukan",
    3: "Ditolak",
    4: "Diterima",
  };

  if (!data.length) {
    return (
      <div className="p-8">
        <p className="text-red-500 font-bold">Data tidak tersedia.</p>
      </div>
    );
  }

  return (
    <div className="p-8 print:p-0">
      <div className="text-center mb-6 border-b border-black pb-4">
        <img
          src={process.env.PUBLIC_URL + "/LOGO TSU.png"}
          alt="Logo Kampus"
          className="w-20 mx-auto mb-2"
        />
        <h1 className="text-base font-bold uppercase">
          Lembaga Penelitian dan Pengabdian kepada Masyarakat
        </h1>
        <h2 className="text-sm font-medium">Universitas Tiga Serangkai</h2>
        <p className="text-xs">
          Jl. Slamet Riyadi No.123, Surakarta, Jawa Tengah
        </p>
        <p className="text-xs">
          Telepon: (0271) 123456 | Email: lppm@stsn.ac.id
        </p>
      </div>
      <table className="w-full border border-black text-sm">
        <thead>
          <tr>
            <th className="border p-2">No</th>
            <th className="border p-2">Ketua</th>
            <th className="border p-2">Judul</th>
            <th className="border p-2">Bidang Fokus</th>
            <th className="border p-2">Tahun</th>
            <th className="border p-2">Peran</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td className="border p-2 text-center">{index + 1}</td>
              <td className="border p-2">{item.user.name}</td>
              <td className="border p-2">{item.title}</td>
              <td className="border p-2">
                {item.focus_thematic?.name || item.focus_r_i_r_n_s?.name}
              </td>
              <td className="border p-2 text-center">{item.year}</td>
              <td className="border p-2 text-center">
                {user.id === item.user.id ? "Ketua" : "Anggota"}
              </td>
              <td className="border p-2 text-center">
                {statusMap[item.status] || "Tidak diketahui"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-12 pr-8 flex flex-col items-end">
        <div className="text-left">
          <p>
            Surakarta,{" "}
            {new Date().toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <p className="mb-20">Ketua LPPM,</p>
          {/* <p>___________________</p> */}
          <p className=" text-sm">(Dr. Ir. Muhammad Hasbi, M.Kom)</p>
        </div>
      </div>
    </div>
  );
};

export default PrintView;
