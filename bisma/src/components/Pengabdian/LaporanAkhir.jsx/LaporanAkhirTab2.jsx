import React, { useEffect, useState } from "react";
import TextfieldCmp from "../../TextfieldCmp";
import TextAreaCmp from "../../TextAreaCmp";

const LaporanAkhirTab2 = ({ data, setData }) => {
  // const [mitraSasaran, setMitraSasaran] = useState("");
  // const [masyarakatEP, setMasyarakatEP] = useState("");
  // const [masyarakatENP, setMasyarakatENP] = useState("");
  // const [pendidikanMitra, setpendidikanMitra] = useState("");
  // const [BidangPM, setBidangPM] = useState("");
  // const [jaraKeMitra, setJarakKeMitra] = useState("");
  // const [metodePelaksanaanKegiatan, setMetodePelaksanaanKegiatan] =
  //   useState("");
  // const [keberlanjutanProgram, setKeberlanjutanProgram] = useState("");
  // const [peranMitraDalamKegiatan, setperanMitraDalamKegiatana] = useState("");
  // const [peranPemerintahDaerah, setperanPemerintahDaerah] = useState("");

  const mitraSasaran = [
    {
      value: "Masyarakat Ekonnomi Produktif",
      name: "Masyarakat Ekonnomi Produktif",
    },
    {
      value: "Masyarakat Ekonnomi non Produktif",
      name: "Masyarakat Ekonnomi non Produktif",
    },
  ];

  const masyarakatEP = [
    { value: "Pengusaha Mitra/UMKM", name: "Pengusaha Mitra/UMKM" },
    { value: "Anggota Koperasi", name: "Anggota Koperasi" },
    { value: "Kelompok Petani", name: "Kelompok Petani" },
    {
      value: "Kelompok Industri Rumah Tangga",
      name: "Kelompok Industri Rumah Tangga",
    },
    { value: "Tidak Ada", name: "Tidak Ada" },
  ];

  const masyarakatENP = [
    {
      value: "Kelompok Pendidikan (PAUD, SD, SMP, SMA/SMK/Pesantren)",
      name: "Kelompok Pendidikan (PAUD, SD, SMP, SMA/SMK/Pesantren)",
    },
    { value: "Kelompok PKK/Karang Taruna", name: "Kelompok PKK/Karang Taruna" },
    { value: "Puskesmas/Posyandu", name: "Puskesmas/Posyandu" },
    { value: "Tidak Ada", name: "Tidak Ada" },
  ];

  const pendidikanMitra = [
    { value: "S3", name: "S3" },
    { value: "S2", name: "S2" },
    { value: "S1", name: "S1" },
    { value: "Diploma", name: "Diploma" },
    { value: "SMA", name: "SMA" },
    { value: "SMP", name: "SMP" },
    { value: "SD", name: "SD" },
    { value: "Tidak Berpendidikan", name: "Tidak Berpendidikan" },
  ];

  const BidangPM = [
    { value: "Teknologi", name: "Teknologi" },
    { value: "Manajemen", name: "Manajemen" },
    { value: "Sosial Ekonomi", name: "Sosial Ekonomi" },
    { value: "Hukum", name: "Hukum" },
    { value: "Keamanan", name: "Keamanan" },
  ];

  const jaraKeMitra = [
    { value: "<50 KM", name: "<50 KM" },
    { value: "50-100 KM", name: "50-100 KM" },
    { value: "101-200 KM", name: "101-200 KM" },
    { value: ">200 KM (Beda Provinsi)", name: ">200 KM (Beda Provinsi)" },
  ];

  const metodePelaksanaanKegiatan = [
    { value: "Penyuluhan", name: "Penyuluhan" },
    { value: "Pendampingan", name: "Pendampingan" },
    { value: "Pendidikan", name: "Pendidikan" },
    { value: "Demplot/Percontohan", name: "Demplot/Percontohan" },
    { value: "Rancang Bangun", name: "Rancang Bangun" },
    { value: "Pelatihan", name: "Pelatihan" },
  ];

  const keberlanjutanProgram = [
    { value: "Berlanjut", name: "Berlanjut" },
    { value: "Berhenti", name: "Berhenti" },
  ];

  const peranMitraDalamKegiatan = [
    { value: "Objek Kegiatan", name: "Objek Kegiatan" },
    { value: "Subjek Kegiatan", name: "Subjek Kegiatan" },
  ];

  const peranPemerintahDaerah = [
    { value: "Dukungan Dana", name: "Dukungan Dana" },
    { value: "Dukungan Kebijakan", name: "Dukungan Kebijakan" },
    {
      value: "Dukungan Pelaksanaan Kegiatan",
      name: "Dukungan Pelaksanaan Kegiatan",
    },
  ];

  useEffect(() => {
    console.log("Report data:", data); // Debugging the report data
  }, [data]);

  const handleInputChange = () => (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setData((prevData) => ({
      ...prevData,
      [inputName]: inputValue,
    }));
  };

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
    console.log(data);
  };

  const handleResponseChange = (name, value) => {
    setData({ ...data, [name]: value });
    console.log(data);
  };

  return (
    <div className="space-y-6  mx-auto">
      {/* Mitra Sasaran */}
      <div className="grid grid-cols-2 gap-x-4">
        <div>
          <label className="font-semibold text-lg">1. Mitra Sasaran</label>
        </div>
        <div className="mt-2 space-y-2">
          {mitraSasaran.map((item) => (
            <label key={item.value} className="flex items-center space-x-2">
              <input
                type="radio"
                name="target_partners" // Semua radio harus memiliki nama yang sama
                value={item.value} // Pastikan value sesuai dengan item yang dipilih
                checked={data.target_partners === item.value}
                onChange={(e) =>
                  handleResponseChange("target_partners", e.target.value)
                }
                className="form-radio text-purple-600"
              />
              <span className="break-words whitespace-normal">{item.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Status Social Mitra */}
      <label className="font-semibold text-lg">2. Status Social Mitra</label>
      <div className="grid grid-cols-2 gap-x-4">
        <div>
          <label className="font-semibold text-lg">
            - Masyarakat Ekonomi Produktif
          </label>
        </div>
        <div className="mt-2 space-y-2">
          {masyarakatEP.map((item) => (
            <label key={item.value} className="flex items-center space-x-2">
              <input
                type="radio"
                name="productive_economic_society" // Semua radio harus memiliki nama yang sama
                value={item.value} // Pastikan value sesuai dengan item yang dipilih
                checked={data.productive_economic_society === item.value}
                onChange={(e) =>
                  handleResponseChange(
                    "productive_economic_society",
                    e.target.value
                  )
                }
                className="form-radio text-purple-600"
              />
              <span className="break-words whitespace-normal">{item.name}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-4">
        <div>
          <label className="font-semibold text-lg">
            - Masyarakat Ekonomi non Produktif
          </label>
        </div>
        <div className="mt-2 space-y-2">
          {masyarakatENP.map((item) => (
            <label key={item.value} className="flex items-center space-x-2">
              <input
                type="radio"
                name="nonproductive_economic_society" // Semua radio harus memiliki nama yang sama
                value={item.value} // Pastikan value sesuai dengan item yang dipilih
                checked={data.nonproductive_economic_society === item.value}
                onChange={(e) =>
                  handleResponseChange(
                    "nonproductive_economic_society",
                    e.target.value
                  )
                }
                className="form-radio text-purple-600"
              />
              <span className="break-words whitespace-normal">{item.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Jumlah Mitra */}
      <div className="grid grid-cols-2 gap-x-4">
        <div>
          <label className="font-semibold text-lg">
            3. Jumlah Mitra (Number)
          </label>
        </div>
        <div className="mt-2 space-y-2">
          <TextfieldCmp
            value={data.number_of_partners}
            name="number_of_partners"
            onChange={handleInputChange()}
            width="30"
            placeholder={`0`}
          />
        </div>
      </div>

      {/* Pendidikan Mitra */}
      <div className="grid grid-cols-2 gap-x-4">
        <div>
          <label className="font-semibold text-lg">4. Pendidikan Mitra</label>
        </div>
        <div className="mt-2 space-y-2">
          {pendidikanMitra.map((item) => (
            <label key={item.value} className="flex items-center space-x-2">
              <input
                type="radio"
                name="partner_education" // Semua radio harus memiliki nama yang sama
                value={item.value} // Pastikan value sesuai dengan item yang dipilih
                checked={data.partner_education === item.value}
                onChange={(e) =>
                  handleResponseChange("partner_education", e.target.value)
                }
                className="form-radio text-purple-600"
              />
              <span className="break-words whitespace-normal">{item.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Bidang Permasalahan Mitra */}
      <div className="grid grid-cols-2 gap-x-4">
        <div>
          <label className="font-semibold text-lg">
            5. Bidang Permasalahan Mitra
          </label>
        </div>
        <div className="mt-2 space-y-2">
          {BidangPM.map((item) => (
            <label key={item.value} className="flex items-center space-x-2">
              <input
                type="radio"
                name="problem_areas" // Semua radio harus memiliki nama yang sama
                value={item.value} // Pastikan value sesuai dengan item yang dipilih
                checked={data.problem_areas === item.value}
                onChange={(e) =>
                  handleResponseChange("problem_areas", e.target.value)
                }
                className="form-radio text-purple-600"
              />
              <span className="break-words whitespace-normal">{item.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Jarak Ke Mitra */}
      <div className="grid grid-cols-2 gap-x-4">
        <div>
          <label className="font-semibold text-lg">6. Jarak Ke Mitra</label>
        </div>
        <div className="mt-2 space-y-2">
          {jaraKeMitra.map((item) => (
            <label key={item.value} className="flex items-center space-x-2">
              <input
                type="radio"
                name="distance_partners" // Semua radio harus memiliki nama yang sama
                value={item.value} // Pastikan value sesuai dengan item yang dipilih
                checked={data.distance_partners === item.value}
                onChange={(e) =>
                  handleResponseChange("distance_partners", e.target.value)
                }
                className="form-radio text-purple-600"
              />
              <span className="break-words whitespace-normal">{item.name}</span>
            </label>
          ))}
        </div>
      </div>
      {/* Jenis Kelamin Tim Pengusul */}
      <label className="font-semibold text-lg">
        7. Jenis Kelamin Tim Pengusul
      </label>
      <div className="grid grid-cols-2 gap-x-4">
        <div>
          <label className="font-semibold text-lg">- Laki-laki</label>
        </div>
        <div className="mt-2 space-y-2">
          <TextfieldCmp
            value={data.male_proposing_team}
            name="male_proposing_team"
            onChange={handleInputChange()}
            placeholder={`0`}
            width="30"
          />
        </div>
        <div>
          <label className="font-semibold text-lg">- Perempuan</label>
        </div>
        <div className="mt-2 space-y-2">
          <TextfieldCmp
            value={data.female_proposing_team}
            name="female_proposing_team"
            onChange={handleInputChange()}
            placeholder={`0`}
            width="30"
          />
        </div>
      </div>
      {/* Jenis Kelamin Tim Mitra */}
      <label className="font-semibold text-lg">
        8. Jenis Kelamin Tim Mitra
      </label>
      <div className="grid grid-cols-2 gap-x-4">
        <div>
          <label className="font-semibold text-lg">- Laki-laki</label>
        </div>
        <div className="mt-2 space-y-2">
          <TextfieldCmp
            value={data.male_partners_team}
            name="male_partners_team"
            onChange={handleInputChange()}
            placeholder={`0`}
            width="30"
          />
        </div>
        <div>
          <label className="font-semibold text-lg">- Perempuan</label>
        </div>
        <div className="mt-2 space-y-2">
          <TextfieldCmp
            width="30"
            value={data.female_partners_team}
            name="female_partners_team"
            onChange={handleInputChange()}
            placeholder={`0`}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-4">
        <div>
          <label className="font-semibold text-lg">9. Jumlah Mahasiswa</label>
        </div>
        <div className="mt-2 space-y-2">
          <TextfieldCmp
            value={data.total_students}
            name="total_students"
            onChange={handleInputChange()}
            placeholder={`0`}
            width="30"
          />
        </div>
      </div>
      <label className="font-semibold text-lg">
        10. Jenis Kelamin Mahasiswa
      </label>
      <div className="grid grid-cols-2 gap-x-4">
        <div>
          <label className="font-semibold text-lg">- Laki-laki</label>
        </div>
        <div className="mt-2 space-y-2">
          <TextfieldCmp
            value={data.male_student}
            name="male_student"
            onChange={handleInputChange()}
            placeholder={`0`}
            width="30"
          />
        </div>
        <div>
          <label className="font-semibold text-lg">- Perempuan</label>
        </div>
        <div className="mt-2 space-y-2">
          <TextfieldCmp
            value={data.female_student}
            name="female_student"
            onChange={handleInputChange()}
            placeholder={`0`}
            width="30"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-4">
        <div>
          <label className="font-semibold text-lg">
            11. Metode Pelaksanaan Kegiatan
          </label>
        </div>
        <div className="mt-2 space-y-2">
          {metodePelaksanaanKegiatan.map((item) => (
            <label key={item.value} className="flex items-center space-x-2">
              <input
                type="radio"
                name="implementation_activities" // Semua radio harus memiliki nama yang sama
                value={item.value} // Pastikan value sesuai dengan item yang dipilih
                checked={data.implementation_activities === item.value}
                onChange={(e) =>
                  handleResponseChange(
                    "implementation_activities",
                    e.target.value
                  )
                }
                className="form-radio text-purple-600"
              />
              <span className="break-words whitespace-normal">{item.name}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-4">
        <div>
          <label className="font-semibold text-lg">
            12. Waktu Efektif Pelaksanaan
          </label>
        </div>
        <div className="flex mt-2 space-y-2">
          <TextfieldCmp
            value={data.implementation_time}
            name="implementation_time"
            onChange={handleInputChange()}
            placeholder={`0`}
            width="30"
          />
          <span className="mx-2">Bulan</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-4">
        <div>
          <label className="font-semibold text-lg">
            13. Keberlanjutan Program
          </label>
        </div>
        <div className="mt-2 space-y-2">
          {keberlanjutanProgram.map((item) => (
            <label key={item.value} className="flex items-center space-x-2">
              <input
                type="radio"
                name="program_sustainability" // Semua radio harus memiliki nama yang sama
                value={item.value} // Pastikan value sesuai dengan item yang dipilih
                checked={data.program_sustainability === item.value}
                onChange={(e) =>
                  handleResponseChange("program_sustainability", e.target.value)
                }
                className="form-radio text-purple-600"
              />
              <span className="break-words whitespace-normal">{item.name}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-4">
        <div>
          <label className="font-semibold text-lg">
            14. Kapasitas Produksi Sebelum Program
          </label>
        </div>
        <div className="flex mt-2 space-y-2">
          <TextfieldCmp
            value={data.production_capacity_before_program}
            name="production_capacity_before_program"
            onChange={handleInputChange()}
            placeholder={`0`}
            width="30"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-4">
        <div>
          <label className="font-semibold text-lg">
            15. Kapasitas Produksi Setelah Program
          </label>
        </div>
        <div className="flex mt-2 space-y-2">
          <TextfieldCmp
            value={data.production_capacity_after_program}
            name="production_capacity_after_program"
            onChange={handleInputChange()}
            placeholder={`0`}
            width="30"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-4">
        <div>
          <label className="font-semibold text-lg">
            16. Omzet Sebelum Program (Rp. )
          </label>
        </div>
        <div className="flex mt-2 space-y-2">
          <TextfieldCmp
            value={data.turnover_before_program}
            name="turnover_before_program"
            onChange={handleInputChange()}
            placeholder={`0`}
            width="30"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-4">
        <div>
          <label className="font-semibold text-lg">
            17. Omzet Setelah Program (Rp. )
          </label>
        </div>
        <div className="flex mt-2 space-y-2">
          <TextfieldCmp
            value={data.turnover_after_program}
            name="turnover_after_program"
            onChange={handleInputChange()}
            placeholder={`0`}
            width="30"
          />
        </div>
      </div>
      <label className="font-semibold text-lg">
        18. Sumber Pendanaan Lainnya
      </label>
      <div className="grid grid-cols-2 gap-x-4">
        <div>
          <label className="font-semibold text-lg">. Sumber Pendanaan</label>
        </div>
        <div className="flex mt-2 space-y-2">
          <TextfieldCmp
            value={data.funding_sources}
            name="funding_sources"
            onChange={handleInputChange()}
            placeholder={`Direktorat Riset, Teknologi, dan Pengabdian kepada masyarakat`}
          />
        </div>
        <div>
          <label className="font-semibold text-lg">
            . Jumlah Pendanaan (Rp. )
          </label>
        </div>
        <div className="flex mt-2 space-y-2">
          <TextfieldCmp
            value={data.funding_amount}
            name="funding_amount"
            onChange={handleInputChange()}
            width="30"
            placeholder={`10.000.000`}
          />
        </div>
      </div>
      <label className="font-semibold text-xl">B. Sumber Pendanaan</label>
      <div className="grid grid-cols-2 gap-x-4">
        <div>
          <label className="font-semibold text-lg">
            1. Peran Mitra dalam Kegiatan
          </label>
        </div>
        <div className="mt-2 space-y-2">
          {peranMitraDalamKegiatan.map((item) => (
            <label key={item.value} className="flex items-center space-x-2">
              <input
                type="radio"
                name="partner_role" // Semua radio harus memiliki nama yang sama
                value={item.value} // Pastikan value sesuai dengan item yang dipilih
                checked={data.partner_role === item.value}
                onChange={(e) =>
                  handleResponseChange("partner_role", e.target.value)
                }
                className="form-radio text-purple-600"
              />
              <span className="break-words whitespace-normal">{item.name}</span>
            </label>
          ))}
        </div>
      </div>
      <label className="font-semibold text-lg">
        2. Peran Mitra dalam Kegiatan
      </label>
      <div className="grid grid-cols-2 gap-x-4">
        <div>
          <label className="font-semibold text-lg">
            - Aktif (sebutkan kegiatan yang dilaksanakan)
          </label>
        </div>
        <div className="">
          <TextAreaCmp
            placeholder={`Aktif`}
            rows={4}
            value={data.partner_role_active}
            name="partner_role_active"
            onChange={handleInputChange()}
          />
        </div>
        <div>
          <label className="font-semibold text-lg">
            - Pasif (jelaskan alasan pasif)
          </label>
        </div>
        <div className="">
          <TextAreaCmp
            placeholder={`Pasif`}
            value={data.partner_role_passive}
            name="partner_role_passive"
            onChange={handleInputChange()}
            rows={4}
            width="w-full"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-4">
        <div>
          <label className="font-semibold text-lg">
            3. Peran Pemerintah Daerah
          </label>
        </div>
        <div className="mt-2 space-y-2">
          {peranPemerintahDaerah.map((item) => (
            <label key={item.value} className="flex items-center space-x-2">
              <input
                type="radio"
                name="government_local_role" // Semua radio harus memiliki nama yang sama
                value={item.value} // Pastikan value sesuai dengan item yang dipilih
                checked={data.government_local_role === item.value}
                onChange={(e) =>
                  handleResponseChange("government_local_role", e.target.value)
                }
                className="form-radio text-purple-600"
              />
              <span className="break-words whitespace-normal">{item.name}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-4">
        <div>
          <label className="font-semibold text-lg">
            4. Kontribusi Pendanaan (Rp. )
          </label>
        </div>
        <div className="flex mt-2 space-y-2">
          <TextfieldCmp
            value={data.funding_contribution}
            name="funding_contribution"
            onChange={handleInputChange()}
            placeholder={`10.0000`}
            width="30"
          />
        </div>
      </div>
    </div>
  );
};

export default LaporanAkhirTab2;
