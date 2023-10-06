import React, { useState, useEffect } from "react";
import axios from "axios";

const EditBook = ({ bookId, onClose }) => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    country: "",
    language: "",
    link: "",
    pages: "",
    year: "",
  });

  useEffect(() => {
   
    const fetchBookData = async () => {
      try {
        const response = await axios.get(
          `http://68.178.162.203:8080/application-test-v1.1/books/${bookId}`
        );
        setBook(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBookData();
  }, [bookId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBook({
      ...book,
      [name]: value,
    });
  };

  const handleEditBook = async () => {
    try {
      await axios.put(
        `http://68.178.162.203:8080/application-test-v1.1/books/${bookId}`,
        book
      );
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Edit Book</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Title:</label>
          <input
            type="text"
            name="title"
            value={book.title}
            onChange={handleInputChange}
            className="mt-1 w-full rounded-md border-black border-2 transition duration-300 focus:border-green-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Author:</label>
          <input
            type="text"
            name="author"
            value={book.author}
            onChange={handleInputChange}
            className="mt-1 w-full rounded-md border-black border-2 transition duration-300 focus:border-green-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Country:</label>
          <input
            type="text"
            name="country"
            value={book.country}
            onChange={handleInputChange}
            className="mt-1 w-full rounded-md border-black border-2 transition duration-300 focus:border-green-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Language:</label>
          <input
            type="text"
            name="language"
            value={book.language}
            onChange={handleInputChange}
            className="mt-1 w-full rounded-md border-black border-2 transition duration-300 focus:border-green-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Link:</label>
          <input
            type="text"
            name="link"
            value={book.link}
            onChange={handleInputChange}
            className="mt-1 w-full rounded-md border-black border-2 transition duration-300 focus:border-green-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Pages:</label>
          <input
            type="text"
            name="pages"
            value={book.pages}
            onChange={handleInputChange}
            className="mt-1 w-full rounded-md border-black border-2 transition duration-300 focus:border-green-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Year:</label>
          <input
            type="text"
            name="year"
            value={book.year}
            onChange={handleInputChange}
            className="mt-1 w-full rounded-md border-black border-2 transition duration-300 focus:border-green-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="text-right">
          <button
            onClick={handleEditBook}
            className="px-4 py-2 bg-indigo-500 text-white rounded-lg"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-400 text-white rounded-lg ml-2"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditBook;
