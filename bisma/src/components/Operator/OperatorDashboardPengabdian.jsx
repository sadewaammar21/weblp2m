import React from 'react'

const OperatorDashboardPengabdian = () => {

    const DataOpPenelitian = [
        { P1: "Nomer SK Pendirian Lembaga", P2: ":", P3: "Nomor 01 Tahun 2023" },
        { P1: "Nama Lembaga", P2: ":", P3: "Lembaga Penelitian dan Pengabdian Kepada Masyarakat" },
        { P1: "Alamat Lembaga", P2: ":", P3: "JL. KH. Samanhudi 84-86 Surakarta" },
        { P1: "No Telepon", P2: ":", P3: "0271716500" },
        { P1: "No Fax", P2: ":", P3: "0271716500" },
        { P1: "Email", P2: ":", P3: "lppm@sinus.ac.id" },
        { P1: "Website", P2: ":", P3: "www.sinus.ac.id" },
        { P1: "Nama Jabatan Pimpinan", P2: ":", P3: "Kepala" },
    ];
    
        const DataOpPimpinan = [
        { P1: "Nama Jabatan Pimpinan", P2: ":", P3: "Kepala" },
        { P1: "NIDN Pimpinan", P2: ":", P3: "0023037801" },
        { P1: "Nama", P2: ":", P3: "YUSTINA RETNO UTAMI" },
    ];

    return (
        <div className="p-5 mx-5">
        <div className="flex">
          <h2 className="text-purple-600 font-bold text-lg mb-4">
            PROFIL LEMBAGA PENGABDIAN
          </h2>
        </div>
        <div className="space-y-2">
          {DataOpPenelitian.map((Data, index) => (
            <div key={index} className="flex items-center gap-x-4">
              <p className="w-1/3">{Data.P1}</p>
              <p className="text-center">{Data.P2}</p>
              <p className="w-2/3">{Data.P3}</p>
            </div>
          ))}
        </div>
  
        <div className="flex-grow border-t border-black my-10"></div>
        <div className="flex">
          <h2 className="text-purple-600 font-bold text-lg mb-4">
            PROFIL PIMPINAN LEMBAGA PENGABDIAN
          </h2>
        </div>
        <div className="space-y-2">
          {DataOpPimpinan.map((Data, index) => (
            <div key={index} className="flex items-center gap-x-4">
              <p className="w-1/3">{Data.P1}</p>
              <p className="text-center">{Data.P2}</p>
              <p className="w-2/3">{Data.P3}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default OperatorDashboardPengabdian