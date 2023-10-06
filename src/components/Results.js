import React from "react";

const Results = ({ results, onEdit }) => {
  return (
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {results.length === 0 ? (
        <p className="col-span-full text-center text-green-600">
          No results found.
        </p>
      ) : (
        results.map((book) => (
          <div key={book.id} className="bg-white p-4 rounded-lg shadow-lg">
            <div className="bg-indigo-400 text-white p-2 rounded-t-lg">
              <h2 className="text-lg font-semibold">{book.title}</h2>
            </div>
            <div className="p-4">
              <p className="text-gray-700">Author: {book.author}</p>
              <p className="text-gray-700">Country: {book.country}</p>
              <p className="text-gray-700">Language: {book.language}</p>
              <p className="text-indigo-600">
                Link:{" "}
                <a
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  {book.link}
                </a>
              </p>
              <p className="text-gray-700">Pages: {book.pages}</p>
              <p className="text-gray-700">Year: {book.year}</p>
              <button
                onClick={() => onEdit(book.id)} 
                className="px-4 py-2 bg-indigo-500 text-white rounded-lg mt-2"
              >
                Edit
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Results;
