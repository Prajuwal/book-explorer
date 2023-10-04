import React, { useState, useEffect } from "react";
import axios from "axios";
import Results from "./components/Results";
import Pagination from "./components/Pagination";
import Search from "./components/Search"; 
import "./index.css";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    pageSize: 25,
  });

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

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">Book Search</h1>

     
      <Search onSearch={handleSearch} />

    
      <Results results={searchResults} />

     
      <Pagination
        currentPage={pagination.currentPage}
        totalPages={pagination.totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
