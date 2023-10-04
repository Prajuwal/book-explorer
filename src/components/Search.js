import React, { useState } from "react";
import "../index.css";
const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="my-4">
      <input
        type="text"
        placeholder="Search for books..."
        className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-indigo-500 text-white rounded-lg ml-2"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
