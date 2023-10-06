import React, { useState } from "react";

const Sort = ({ onSort }) => {
  const [selectedSort, setSelectedSort] = useState("titleAsc"); // Default sort option

  const handleSortChange = (e) => {
    const newSortOption = e.target.value;
    setSelectedSort(newSortOption);
    onSort(newSortOption); // Notify the parent component about the selected sort option
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700">Sort by:</label>
      <select
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        onChange={handleSortChange}
        value={selectedSort}
      >
        <option value="titleAsc">Title (A-Z)</option>
        <option value="titleDesc">Title (Z-A)</option>
        <option value="authorAsc">Author (A-Z)</option>
        <option value="authorDesc">Author (Z-A)</option>
        <option value="pagesAsc">Number of Pages (Ascending)</option>
        <option value="pagesDesc">Number of Pages (Descending)</option>
        {/* Add more sort options as needed */}
      </select>
    </div>
  );
};

export default Sort;
