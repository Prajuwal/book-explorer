import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="mt-4 flex justify-center">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`${
          currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-indigo-500"
        } text-white px-4 py-2 rounded-l-md`}
      >
        Previous
      </button>
      <span className="text-gray-600 px-4 py-2">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages || totalPages === 0} // Disable next button if totalPages is 0
        className={`${
          currentPage === totalPages || totalPages === 0
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-indigo-500"
        } text-white px-4 py-2 rounded-r-md`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
