import React from "react";
import { useState } from "react";
import EmployeeForm from "./EmployeeForm";

const EmployeeList = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };
  return (
    <div className=" px-8 pt-8 relative">
      <h1 className="text-4xl font-bold text-blue-700">
        Employee management SPA
      </h1>
      <div className="flex justify-between pt-8">
        <h2 className="text-3xl font-bold text-green-700">Employee List</h2>
        <button
          className="bg-green-700  hover:bg-green-900 text-white rounded-md px-4 py-2 flex items-center"
          onClick={openForm}
        >
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
      {isFormOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-40 z-50 ">
          <div className="bg-white p-8 rounded-lg z-50 h-[800px] overflow-y-auto">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={closeForm}
            >
              Close
            </button>

            <h2 className="text-3xl font-bold text-green-700">
              Add New Employee
            </h2>
            <EmployeeForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeList;
