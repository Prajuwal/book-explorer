import React, { useState, useEffect } from "react";
import axios from "axios";
import Results from "./components/Results";
import Pagination from "./components/Pagination";
import Search from "./components/Search";
import Filter from "./components/Filter";
import Sort from "./components/Sort";
import AddBook from "./components/AddBook"; // Import the AddBook component
import EditBook from "./components/EditBook"; // Import the EditBook component
import "./index.css";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    pageSize: 25,
  });
  const [countryFilter, setCountryFilter] = useState("");
  const [sortOption, setSortOption] = useState("titleAsc"); // Default sort option
  const [isAddingBook, setIsAddingBook] = useState(false); // Track Add Book modal visibility
  const [isEditingBook, setIsEditingBook] = useState(false); // Track Edit Book modal visibility
  const [editBookId, setEditBookId] = useState(null); // Store the ID of the book to edit

  const fetchBooks = async (page, title) => {
    try {
      const response = await axios.get(
        `http://68.178.162.203:8080/application-test-v1.1/books?page=${page}&title=${title}`
      );
      setSearchResults(response.data.data);
      setPagination({
        currentPage: response.data.pagination.currentPage,
        totalPages: response.data.pagination.totalPages,
        pageSize: response.data.pagination.pageSize,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBooks(pagination.currentPage, "");
  }, [pagination.currentPage]);

  const handlePageChange = (newPage) => {
    setPagination({ ...pagination, currentPage: newPage });
  };

  const handleSearch = (query) => {
    fetchBooks(1, query);
  };

  const handleCountryFilter = (country) => {
    setCountryFilter(country);
    fetchBooks(1, "");
  };

  const handleSort = (sortOption) => {
    setSortOption(sortOption);
  };

  const handleAddBookClick = () => {
    setIsAddingBook(true);
  };

  const handleEditBookClick = (bookId) => {
    setEditBookId(bookId);
    setIsEditingBook(true);
  };

  const handleEditBookClose = () => {
    setIsEditingBook(false);
    setEditBookId(null);
  };

  // Client-side sorting function
  const sortResults = (results, sortOption) => {
    const sortedResults = [...results];
    if (sortOption === "titleAsc") {
      sortedResults.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === "authorAsc") {
      sortedResults.sort((a, b) => a.author.localeCompare(b.author));
    } else if (sortOption === "pagesAsc") {
      sortedResults.sort((a, b) => a.pages - b.pages);
    } else if (sortOption === "pagesDesc") {
      sortedResults.sort((a, b) => b.pages - a.pages);
    }
    return sortedResults;
  };

  const filteredResults = searchResults.filter((book) => {
    return (
      countryFilter === "" ||
      book.country.toLowerCase() === countryFilter.toLowerCase()
    );
  });

  const sortedAndFilteredResults = sortResults(filteredResults, sortOption);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4 text-center">Book Search</h1>

      <div className="flex justify-between items-center mb-4">
        <div>
          <Search onSearch={handleSearch} />
          <Filter onFilter={handleCountryFilter} />
          <Sort onSort={handleSort} />
        </div>
        <div>
          <button
            onClick={handleAddBookClick}
            className="px-4 py-2 bg-indigo-500 text-white rounded-lg ml-2"
          >
            Add Book
          </button>
          {isEditingBook && (
            <EditBook bookId={editBookId} onClose={handleEditBookClose} />
          )}
        </div>
      </div>

      <Results
        results={sortedAndFilteredResults}
        onEdit={handleEditBookClick}
      />

      <Pagination
        currentPage={pagination.currentPage}
        totalPages={pagination.totalPages}
        onPageChange={handlePageChange}
      />

      {isAddingBook && <AddBook onClose={() => setIsAddingBook(false)} />}
    </div>
  );
};

export default App;
