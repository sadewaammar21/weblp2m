import React from "react";
import { motion } from "framer-motion";

/* ==========================================
     DETAIL SVG – DESK / OFFICE ILLUSTRATION
   ========================================== */

const DetailedDesk = ({ className = "w-[520px] max-w-full" }) => (
  <svg
    viewBox="0 0 900 350"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Shadow */}
    <ellipse cx="450" cy="310" rx="360" ry="25" fill="#00000015" />

    {/* Desk */}
    <rect x="150" y="240" width="600" height="30" rx="6" fill="#E7EBF3" />
    <rect
      x="160"
      y="200"
      width="180"
      height="40"
      rx="6"
      fill="#FFFFFF"
      stroke="#D0D7E3"
    />
    <rect
      x="370"
      y="200"
      width="220"
      height="40"
      rx="6"
      fill="#FFFFFF"
      stroke="#D0D7E3"
    />

    {/* Monitor */}
    <rect
      x="310"
      y="80"
      width="280"
      height="140"
      rx="10"
      fill="#FDFDFD"
      stroke="#CBD3E1"
    />
    <rect x="330" y="100" width="240" height="100" rx="6" fill="#EAF0FA" />
    <rect x="410" y="225" width="80" height="12" rx="6" fill="#D3DAE8" />

    {/* Coffee cup */}
    <ellipse cx="250" cy="230" rx="45" ry="15" fill="#00000010" />
    <rect
      x="220"
      y="180"
      width="60"
      height="40"
      rx="10"
      fill="#FFFFFF"
      stroke="#D5DCE8"
    />
    <rect
      x="275"
      y="190"
      width="12"
      height="20"
      rx="4"
      fill="#FFFFFF"
      stroke="#D5DCE8"
    />

    {/* Plant */}
    <ellipse cx="650" cy="230" rx="45" ry="14" fill="#00000010" />
    <rect x="620" y="170" width="60" height="50" rx="10" fill="#F8D3A3" />
    <path
      d="M650 140 C635 150 630 160 650 170 C665 162 670 150 650 140Z"
      fill="#72C58B"
    />
    <path
      d="M650 150 C665 160 675 170 650 180 C630 172 635 160 650 150Z"
      fill="#57A66F"
    />

    {/* Books */}
    <rect x="200" y="210" width="70" height="12" fill="#9EC3FF" rx="4" />
    <rect x="200" y="196" width="70" height="12" fill="#AEE0C4" rx="4" />
    <rect x="200" y="182" width="70" height="12" fill="#FFC4C4" rx="4" />

    {/* Paper stack */}
    <rect x="570" y="205" width="90" height="8" fill="#EDEFF5" rx="2" />
    <rect x="570" y="198" width="90" height="8" fill="#F3F4F8" rx="2" />
    <rect
      x="570"
      y="191"
      width="90"
      height="8"
      fill="#FFFFFF"
      stroke="#D3DAE8"
      rx="2"
    />
  </svg>
);

/* ======================================================
   LIFE BUOY (PELAMPUNG) UNTUK ANGKA "0" DI "404"
   ====================================================== */

const Lifebuoy = ({ className = "w-28 h-28" }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <circle
      cx="50"
      cy="50"
      r="40"
      fill="#FFFFFF"
      stroke="#CBD5E1"
      strokeWidth="6"
    />
    <circle
      cx="50"
      cy="50"
      r="22"
      fill="#FFFFFF"
      stroke="#CBD5E1"
      strokeWidth="5"
    />

    {/* Segments */}
    <path d="M50 10 L65 28 A40 40 0 0 0 50 30 Z" fill="#3B82F6" />
    <path d="M90 50 L72 65 A40 40 0 0 0 70 50 Z" fill="#3B82F6" />
    <path d="M50 90 L35 72 A40 40 0 0 0 50 70 Z" fill="#3B82F6" />
    <path d="M10 50 L28 35 A40 40 0 0 0 30 50 Z" fill="#3B82F6" />
  </svg>
);

/* ======================================================
                     MAIN COMPONENT 404
   ====================================================== */

export default function Error404() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 py-12 text-gray-800"
    >
      <div className="max-w-2xl w-full text-center">
        {/* 404 with floating lifebuoy */}
        <div className="flex justify-center gap-4 items-end">
          <motion.h1
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-[100px] font-extrabold leading-none"
          >
            4
          </motion.h1>

          <motion.div
            animate={{ rotate: [0, 8, -6, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          >
            <Lifebuoy />
          </motion.div>

          <motion.h1
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-[100px] font-extrabold leading-none"
          >
            4
          </motion.h1>
        </div>

        <p className="text-gray-500 text-lg mt-2">Sorry, page not found.</p>

        {/* Buttons */}
        <div className="flex justify-center gap-3 mt-6">
          <button
            onClick={() => (window.location.href = "/")}
            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow"
          >
            Go Home
          </button>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-2 bg-white border border-gray-300 rounded-lg shadow-sm"
          >
            Go Back
          </button>
        </div>

        {/* Floating SVG Desk */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="mt-12"
        >
          <DetailedDesk />
        </motion.div>

        <p className="text-xs text-gray-400 mt-12">
          © {new Date().getFullYear()} LPPM TSU
        </p>
      </div>
    </motion.main>
  );
}
