import React, { useState } from "react";
import TextfieldCmp from "../../TextfieldCmp";
import TextAreaCmp from "../../TextAreaCmp";

const LaporanAkhirTab2 = () => {
  const [formData, setFormData] = useState({
    mitraSasaran: "",
    statusSocialMitra: "",
    masyarakatEkonomiProduktif: "",
    masyarakatEkonominonProduktif: "",
    jumlahMitra: "",
    pendidikanMitra: "",
    bidangPermasalahan: "",
    jaraKeMitra: "",
    jenisKelaminTimPengusul: "",
    jenisKelaminTimMitra: "",
    metodePelaksanaanKegiatan: "",
    keberlanjutanProgram: "",
    peranMitradalamKegiatan: "",
    peranPemerintahDaerah: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const bidangPermasalahan = checked
        ? [...prev.bidangPermasalahan, value]
        : prev.bidangPermasalahan.filter((item) => item !== value);

      return { ...prev, bidangPermasalahan };
    });
  };

  return (
    <div className="space-y-6  mx-auto">
      {/* Mitra Sasaran */}
      <div className="grid grid-cols-2 gap-x-4">
        <div>
          <label className="font-semibold text-lg">1. Mitra Sasaran</label>
        </div>
        <div className="mt-2 space-y-2">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="mitraSasaran"
              value="ekonomi produktif"
              checked={formData.mitraSasaran === "ekonomi produktif"}
              onChange={handleChange}
              className="form-radio text-purple-600"
            />
            <span className="break-words whitespace-normal">
              Masyarakat Ekonomi Produktif
            </span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="mitraSasaran"
              value="ekonomi non produktif"
              checked={formData.mitraSasaran === "ekonomi non produktif"}
              onChange={handleChange}
              className="form-radio text-purple-600"
            />
            <span className="break-words whitespace-normal">
              Masyarakat Ekonomi non Produktif
            </span>
          </label>
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
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="mitraSasaran"
              value="ekonomi produktif"
              checked={formData.statusSocialMitra === "ekonomi produktif"}
              onChange={handleChange}
              className="form-radio text-purple-600"
            />
            <span className="break-words whitespace-normal">
              Pengusaha Mitra/UMKM
            </span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="mitraSasaran"
              value="ekonomi non produktif"
              checked={formData.mitraSasaran === "ekonomi non produktif"}
              onChange={handleChange}
              className="form-radio text-purple-600"
            />
            <span className="break-words whitespace-normal">
              Anggota Koperasi
            </span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="mitraSasaran"
              value="ekonomi produktif"
              checked={formData.statusSocialMitra === "ekonomi produktif"}
              onChange={handleChange}
              className="form-radio text-purple-600"
            />
            <span className="break-words whitespace-normal">
              Kelompok Petani
            </span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="mitraSasaran"
              value="ekonomi produktif"
              checked={formData.statusSocialMitra === "ekonomi produktif"}
              onChange={handleChange}
              className="form-radio text-purple-600"
            />
            <span className="break-words whitespace-normal">
              Kelompok Industri Rumah Tangga
            </span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="mitraSasaran"
              value="ekonomi produktif"
              checked={formData.statusSocialMitra === "ekonomi produktif"}
              onChange={handleChange}
              className="form-radio text-purple-600"
            />
            <span className="break-words whitespace-normal">Tidak Ada</span>
          </label>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-4">
        <div>
          <label className="font-semibold text-lg">
            - Masyarakat Ekonomi non Produktif
          </label>
        </div>
        <div className="mt-2 space-y-2">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="mitraSasaran"
              value="ekonomi produktif"
              checked={formData.statusSocialMitra === "ekonomi produktif"}
              onChange={handleChange}
              className="form-radio text-purple-600"
            />
            <span className="break-words whitespace-normal">
              Kelompok Pendidikan (PAUD, SD, SMP, SMA/SMK/Pesantren)
            </span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="mitraSasaran"
              value="ekonomi non produktif"
              checked={formData.mitraSasaran === "ekonomi non produktif"}
              onChange={handleChange}
              className="form-radio text-purple-600"
            />
            <span className="break-words whitespace-normal">
              Kelompok PKK/Karang Taruna
            </span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="mitraSasaran"
              value="ekonomi produktif"
              checked={formData.statusSocialMitra === "ekonomi produktif"}
              onChange={handleChange}
              className="form-radio text-purple-600"
            />
            <span className="break-words whitespace-normal">
              Puskesmas/Posyandu
            </span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="mitraSasaran"
              value="ekonomi produktif"
              checked={formData.statusSocialMitra === "ekonomi produktif"}
              onChange={handleChange}
              className="form-radio text-purple-600"
            />
            <span className="break-words whitespace-normal">Tidak Ada</span>
          </label>
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
          <TextfieldCmp width="30" />
        </div>
      </div>

      {/* Pendidikan Mitra */}
      <div className="grid grid-cols-2 gap-x-4">
        <div>
          <label className="font-semibold text-lg">4. Pendidikan Mitra</label>
        </div>
        <div className="mt-2 space-y-2">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="mitraSasaran"
              value="ekonomi produktif"
              checked={formData.statusSocialMitra === "ekonomi produktif"}
              onChange={handleChange}
              className="form-radio text-purple-600"
            />
            <span className="break-words whitespace-normal">S3</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="mitraSasaran"
              value="ekonomi non produktif"
              checked={formData.mitraSasaran === "ekonomi non produktif"}
              onChange={handleChange}
              className="form-radio text-purple-600"
            />
            <span className="break-words whitespace-normal">S2</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="mitraSasaran"
              value="ekonomi produktif"
              checked={formData.statusSocialMitra === "ekonomi produktif"}
              onChange={handleChange}
              className="form-radio text-purple-600"
            />
            <span className="break-words whitespace-normal">S1</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="mitraSasaran"
              value="ekonomi produktif"
              checked={formData.statusSocialMitra === "ekonomi produktif"}
              onChange={handleChange}
              className="form-radio text-purple-600"
            />
            <span className="break-words whitespace-normal">Diploma</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="mitraSasaran"
              value="ekonomi produktif"
              checked={formData.statusSocialMitra === "ekonomi produktif"}
              onChange={handleChange}
              className="form-radio text-purple-600"
            />
            <span className="break-words whitespace-normal">SMA</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="mitraSasaran"
              value="ekonomi produktif"
              checked={formData.statusSocialMitra === "ekonomi produktif"}
              onChange={handleChange}
              className="form-radio text-purple-600"
            />
            <span className="break-words whitespace-normal">SMP</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="mitraSasaran"
              value="ekonomi produktif"
              checked={formData.statusSocialMitra === "ekonomi produktif"}
              onChange={handleChange}
              className="form-radio text-purple-600"
            />
            <span className="break-words whitespace-normal">SD</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="mitraSasaran"
              value="ekonomi produktif"
              checked={formData.statusSocialMitra === "ekonomi produktif"}
              onChange={handleChange}
              className="form-radio text-purple-600"
            />
            <span className="break-words whitespace-normal">
              Tidak Berpendidikan
            </span>
          </label>
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
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="mitraSasaran"
              value="ekonomi produktif"
              checked={formData.statusSocialMitra === "ekonomi produktif"}
              onChange={handleChange}
              className="form-radio text-purple-600"
            />
            <span className="break-words whitespace-normal">Teknologi</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="mitraSasaran"
              value="ekonomi non produktif"
              checked={formData.mitraSasaran === "ekonomi non produktif"}
              onChange={handleChange}
              className="form-radio text-purple-600"
            />
            <span className="break-words whitespace-normal">Manajemen</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="mitraSasaran"
              value="ekonomi produktif"
              checked={formData.statusSocialMitra === "ekonomi produktif"}
              onChange={handleChange}
              className="form-radio text-purple-600"
            />
            <span className="break-words whitespace-normal">
              Social Ekonomi
            </span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="mitraSasaran"
              value="ekonomi produktif"
              checked={formData.statusSocialMitra === "ekonomi produktif"}
              onChange={handleChange}
              className="form-radio text-purple-600"
            />
            <span className="break-words whitespace-normal">Hukum</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="mitraSasaran"
              value="ekonomi produktif"
              checked={formData.statusSocialMitra === "ekonomi produktif"}
              onChange={handleChange}
              className="form-radio text-purple-600"
            />
            <span className="break-words whitespace-normal">Keamanan</span>
          </label>
        </div>
      </div>

      {/* Jarak Ke Mitra */}
      <div className="grid grid-cols-2 gap-x-4">
        <div>
          <label className="font-semibold text-lg">6. Jarak Ke Mitra</label>
        </div>
        <div className="mt-2 space-y-2">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="mitraSasaran"
              value="ekonomi produktif"
              checked={formData.statusSocialMitra === "ekonomi produktif"}
              onChange={handleChange}
              className="form-radio text-purple-600"
            />
            <span className="break-words whitespace-normal">{`< 50 KM`}</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="mitraSasaran"
              value="ekonomi non produktif"
              checked={formData.mitraSasaran === "ekonomi non produktif"}
              onChange={handleChange}
              className="form-radio text-purple-600"
            />
            <span className="break-words whitespace-normal">50 - 100 KM</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="mitraSasaran"
              value="ekonomi produktif"
              checked={formData.statusSocialMitra === "ekonomi produktif"}
              onChange={handleChange}
              className="form-radio text-purple-600"
            />
            <span className="break-words whitespace-normal">101 - 200 KM</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="mitraSasaran"
              value="ekonomi produktif"
              checked={formData.statusSocialMitra === "ekonomi produktif"}
              onChange={handleChange}
              className="form-radio text-purple-600"
            />
            <span className="break-words whitespace-normal">
              {`> 200 KM (beda provinsi)`}
            </span>
          </label>
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
          <TextfieldCmp width="30" />
        </div>
        <div>
          <label className="font-semibold text-lg">- Perempuan</label>
        </div>
        <div className="mt-2 space-y-2">
          <TextfieldCmp width="30" />
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
          <TextfieldCmp width="30" />
        </div>
        <div>
          <label className="font-semibold text-lg">- Perempuan</label>
        </div>
        <div className="mt-2 space-y-2">
          <TextfieldCmp width="30" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-4">
        <div>
          <label className="font-semibold text-lg">9. Jumlah Mahasiswa</label>
        </div>
        <div className="mt-2 space-y-2">
          <TextfieldCmp width="30" />
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
          <TextfieldCmp width="30" />
        </div>
        <div>
          <label className="font-semibold text-lg">- Perempuan</label>
        </div>
        <div className="mt-2 space-y-2">
          <TextfieldCmp width="30" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-4">
        <div>
          <label className="font-semibold text-lg">
            11. Metode Pelaksanaan Kegiatan
          </label>
        </div>
        <div className="mt-2 space-y-2">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="mitraSasaran"
              value="ekonomi produktif"
              checked={formData.statusSocialMitra === "ekonomi produktif"}
              onChange={handleChange}
              className="form-radio text-purple-600"
            />
            <span className="break-words whitespace-normal">Penyuluhan</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="mitraSasaran"
              value="ekonomi non produktif"
              checked={formData.mitraSasaran === "ekonomi non produktif"}
              onChange={handleChange}
              className="form-radio text-purple-600"
            />
            <span className="break-words whitespace-normal">Pendampingan</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="mitraSasaran"
              value="ekonomi produktif"
              checked={formData.statusSocialMitra === "ekonomi produktif"}
              onChange={handleChange}
              className="form-radio text-purple-600"
            />
            <span className="break-words whitespace-normal">Pendidikan</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="mitraSasaran"
              value="ekonomi produktif"
              checked={formData.statusSocialMitra === "ekonomi produktif"}
              onChange={handleChange}
              className="form-radio text-purple-600"
            />
            <span className="break-words whitespace-normal">
              Demplot/Percontohan
            </span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="mitraSasaran"
              value="ekonomi produktif"
              checked={formData.statusSocialMitra === "ekonomi produktif"}
              onChange={handleChange}
              className="form-radio text-purple-600"
            />
            <span className="break-words whitespace-normal">
              Rancang Bangun
            </span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="mitraSasaran"
              value="ekonomi produktif"
              checked={formData.statusSocialMitra === "ekonomi produktif"}
              onChange={handleChange}
              className="form-radio text-purple-600"
            />
            <span className="break-words whitespace-normal">Pelatihan</span>
          </label>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-4">
        <div>
          <label className="font-semibold text-lg">
            12. Waktu Efektif Pelaksanaan
          </label>
        </div>
        <div className="flex mt-2 space-y-2">
          <TextfieldCmp width="30" />
          <span className="mx-2">Bulan</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-4">
        <div>
          <label className="font-semibold text-lg">
            13. Metode Pelaksanaan Kegiatan
          </label>
        </div>
        <div className="mt-2 space-y-2">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="mitraSasaran"
              value="ekonomi produktif"
              checked={formData.statusSocialMitra === "ekonomi produktif"}
              onChange={handleChange}
              className="form-radio text-purple-600"
            />
            <span className="break-words whitespace-normal">Berhenti</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="mitraSasaran"
              value="ekonomi produktif"
              checked={formData.statusSocialMitra === "ekonomi produktif"}
              onChange={handleChange}
              className="form-radio text-purple-600"
            />
            <span className="break-words whitespace-normal">Berlanjut</span>
          </label>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-4">
        <div>
          <label className="font-semibold text-lg">
            14. Kapasitas Produksi Sebelum Program
          </label>
        </div>
        <div className="flex mt-2 space-y-2">
          <TextfieldCmp width="30" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-4">
        <div>
          <label className="font-semibold text-lg">
            15. Kapasitas Produksi Setelah Program
          </label>
        </div>
        <div className="flex mt-2 space-y-2">
          <TextfieldCmp width="30" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-4">
        <div>
          <label className="font-semibold text-lg">
            16. Omzet Sebelum Program (Rp. )
          </label>
        </div>
        <div className="flex mt-2 space-y-2">
          <TextfieldCmp width="30" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-4">
        <div>
          <label className="font-semibold text-lg">
            17. Omzet Setelah Program (Rp. )
          </label>
        </div>
        <div className="flex mt-2 space-y-2">
          <TextfieldCmp width="30" />
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
            placeholder={`Direktorat Riset, Teknologi, dan Pengabdian kepada masyarakat`}
          />
        </div>
        <div>
          <label className="font-semibold text-lg">
            . Jumlah Pendanaan (Rp. )
          </label>
        </div>
        <div className="flex mt-2 space-y-2">
          <TextfieldCmp width="30" placeholder={`10.000.000`} />
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
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="mitraSasaran"
              value="ekonomi produktif"
              checked={formData.statusSocialMitra === "ekonomi produktif"}
              onChange={handleChange}
              className="form-radio text-purple-600"
            />
            <span className="break-words whitespace-normal">
              Objek Kegiatan
            </span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="mitraSasaran"
              value="ekonomi produktif"
              checked={formData.statusSocialMitra === "ekonomi produktif"}
              onChange={handleChange}
              className="form-radio text-purple-600"
            />
            <span className="break-words whitespace-normal">
              Subjek Kegiatan
            </span>
          </label>
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
          <TextAreaCmp placeholder={``} rows={4} />
        </div>
        <div>
          <label className="font-semibold text-lg">
            - Pasif (jelaskan alasan pasif)
          </label>
        </div>
        <div className="">
          <TextAreaCmp placeholder={``} rows={4} width="w-full" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-4">
        <div>
          <label className="font-semibold text-lg">
            3. Peran Pemerintah Daerah
          </label>
        </div>
        <div className="mt-2 space-y-2">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="mitraSasaran"
              value="ekonomi produktif"
              checked={formData.statusSocialMitra === "ekonomi produktif"}
              onChange={handleChange}
              className="form-radio text-purple-600"
            />
            <span className="break-words whitespace-normal">Dukungan Dana</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="mitraSasaran"
              value="ekonomi produktif"
              checked={formData.statusSocialMitra === "ekonomi produktif"}
              onChange={handleChange}
              className="form-radio text-purple-600"
            />
            <span className="break-words whitespace-normal">
              Dukungan Kebijakan
            </span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="mitraSasaran"
              value="ekonomi produktif"
              checked={formData.statusSocialMitra === "ekonomi produktif"}
              onChange={handleChange}
              className="form-radio text-purple-600"
            />
            <span className="break-words whitespace-normal">
              Dukungan Pelaksanaan Kegiatan
            </span>
          </label>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-4">
        <div>
          <label className="font-semibold text-lg">
            4. Kontribusi Pendanaan (Rp. )
          </label>
        </div>
        <div className="flex mt-2 space-y-2">
          <TextfieldCmp width="30" />
        </div>
      </div>
    </div>
  );
};

export default LaporanAkhirTab2;
