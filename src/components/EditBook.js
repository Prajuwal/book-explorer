import React, { useState } from "react";
import axios from "axios";

const EditBook = ({ book, onClose }) => {
  const [formData, setFormData] = useState({
    title: book.title,
    author: book.author,
    country: book.country,
    language: book.language,
    link: book.link,
    pages: book.pages,
    year: book.year,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedBook = { ...formData, id: book.id }; // Include the existing ID

    try {
      await axios.put(
        `http://68.178.162.203:8080/application-test-v1.1/books/${book.id}`,
        updatedBook
      );
      onClose(); // Close the modal after successful update
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Edit Book</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required // Title is a required field
              className="mt-1 w-full rounded-md border-black border-2 transition duration-300 focus:border-green-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Author:</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border-black border-2 transition duration-300 focus:border-green-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Country:</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border-black border-2 transition duration-300 focus:border-green-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Language:</label>
            <input
              type="text"
              name="language"
              value={formData.language}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border-black border-2 transition duration-300 focus:border-green-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Link:</label>
            <input
              type="text"
              name="link"
              value={formData.link}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border-black border-2 transition duration-300 focus:border-green-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Pages:</label>
            <input
              type="number"
              name="pages"
              value={formData.pages}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border-black border-2 transition duration-300 focus:border-green-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Year:</label>
            <input
              type="text"
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border-black border-2 transition duration-300 focus:border-green-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mt-4 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-500 text-white rounded-lg"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBook;
