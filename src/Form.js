import React from "react";

const Form = () => {
  return (
    <div className=" px-8 pt-8">
      <h1 className="text-4xl font-bold text-blue-700">
        Employee management SPA
      </h1>
      <div className="flex justify-between pt-8">
        <h2 className="text-3xl font-bold text-green-700">Employee List</h2>
        <button className="bg-green-700  hover:bg-green-900 text-white rounded-md px-4 py-2 flex items-center">
          <div className="bg-white rounded-full text-black p-1 mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
          Add New Employee
        </button>
      </div>
    </div>
  );
};

export default Form;
