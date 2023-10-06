import React, { useState } from "react";

const Filter = ({ onFilter }) => {
  const [selectedFilter, setSelectedFilter] = useState(""); // State to track selected filter

  const handleFilterChange = (e) => {
    const newFilter = e.target.value;
    setSelectedFilter(newFilter);
    onFilter(newFilter); // Notify the parent component about the selected filter
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700">Filter by Country:</label>
      <select
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        onChange={handleFilterChange}
        value={selectedFilter}
      >
        <option value="">All</option>
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
     
      </select>
    </div>
  );
};

export default Filter;
