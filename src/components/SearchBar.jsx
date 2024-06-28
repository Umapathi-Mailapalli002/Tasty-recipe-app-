import React from "react";

const SearchBar = ({
  type,
  placeholder,
  required = false,
  value,
  name,
  handleInputChange,
  searchRecipe,
}) => {
  return (
    <div className="relative">
      <input
        type={type || "text"}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        required={required}
        className="bg-white border border-gray-300 placeholder-gray-500 text-gray-700 rounded-full focus:ring-2 focus:ring-red-500 focus:border-blue-500 block w-[90vw] lg:w-[32vw] sm:w-[55vw] md:w-[55vw]  py-2 px-4 outline-none transition duration-300 ease-in-out"
      ></input>
      <div className="absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          className="text-gray-600"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path onClick={searchRecipe} d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path>
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;
