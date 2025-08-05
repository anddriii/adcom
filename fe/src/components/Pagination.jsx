import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Membuat array nomor halaman, contoh: [1, 2, 3, ...]
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center gap-2 mt-12">
      {/* Tombol Sebelumnya */}
      <button 
        onClick={() => onPageChange(currentPage - 1)} 
        disabled={currentPage === 1}
        className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100 disabled:opacity-50"
      >
        {"<"}
      </button>

      {/* Tombol Nomor Halaman */}
      {pageNumbers.map(number => (
        <button 
          key={number}
          onClick={() => onPageChange(number)}
          className={`px-3 py-1 border rounded-md ${
            currentPage === number 
              ? 'bg-green-600 text-white border-green-600' 
              : 'border-gray-300 hover:bg-gray-100'
          }`}
        >
          {number}
        </button>
      ))}

      {/* Tombol Selanjutnya */}
      <button 
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100 disabled:opacity-50"
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;