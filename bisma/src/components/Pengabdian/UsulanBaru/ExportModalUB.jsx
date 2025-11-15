import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const ExportModalUB = ({ isOpen, onClose, data, user }) => {
  const componentRef = useRef();

  const handleGeneratePDF = async (isPreview = false) => {
    const element = componentRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    // Header kiri atas
    pdf.setFontSize(10);
    pdf.text("LPPM Tiga Serangkai University", 10, 10); // x=10, y=10

    // Footer kanan bawah
    const footerText = `Dicetak: ${new Date().toLocaleDateString()}`;
    const textWidth = pdf.getTextWidth(footerText);
    pdf.text(
      footerText,
      pdf.internal.pageSize.getWidth() - textWidth - 10,
      290
    );

    // Konten dari HTML (ditaruh mulai agak di bawah agar tidak menimpa header)
    pdf.addImage(imgData, "PNG", 0, 15, pdfWidth, pdfHeight);

    if (isPreview) {
      const blobUrl = URL.createObjectURL(pdf.output("blob"));
      window.open(blobUrl);
    } else {
      pdf.save("usulan pengabdian.pdf");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-11/12 md:w-4/5 lg:w-3/4 max-h-screen overflow-y-auto rounded-lg p-6 relative">
        <h2 className="text-lg font-semibold mb-4">
          Preview PDF Usulan Pengabdian
        </h2>

        {/* Konten PDF */}
        <div ref={componentRef} className="p-4 text-sm bg-white text-black">
          {/* KOP SURAT */}
          <div className="text-center mb-6 border-b border-black pb-4">
            <img
              src="/logo-kampus.png"
              alt="Logo Kampus"
              className="w-20 mx-auto mb-2"
            />
            <h1 className="text-base font-bold uppercase">
              Lembaga Penelitian dan Pengabdian kepada Masyarakat
            </h1>
            <h2 className="text-sm font-medium">Tiga Serangkai University</h2>
            <p className="text-xs">
              Jl. Slamet Riyadi No.123, Surakarta, Jawa Tengah
            </p>
            <p className="text-xs">
              Telepon: (0271) 123456 | Email: lppm@stsn.ac.id
            </p>
          </div>

          {/* TABEL */}
          <table className="w-full border border-black text-xs">
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
                  <td className="border p-2 text-center">{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* TANDA TANGAN */}
          <div className="mt-12 text-right pr-8">
            <p>Surakarta, {new Date().toLocaleDateString()}</p>
            <p className="mt-16">________________________</p>
            <p className="text-sm">Tanda Tangan</p>
          </div>
        </div>

        {/* Tombol Aksi */}
        <div className="flex justify-end mt-4 space-x-2">
          <button
            onClick={() => handleGeneratePDF(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Preview PDF
          </button>
          <button
            onClick={() => handleGeneratePDF(false)}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Download PDF
          </button>
          <button
            onClick={onClose}
            className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExportModalUB;
