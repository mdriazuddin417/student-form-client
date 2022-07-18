import React from "react";

const StudentTable = () => {
  return (
    <div className="lg:py-20  lg:px-12 p-3">
      <div>
        <table className="table-fixed border border-[#e9e9e9] w-full">
          <thead>
            <tr className="bg-[#e9e9e9] py-2 lg:text-[16px] text-[8px] sm:text-base md:text[12px] ">
              <th className="border border-[#e9e9e9] ">Serial</th>
              <th className="border border-[#e9e9e9] ">Name</th>
              <th className="border border-[#e9e9e9] ">Father's Name</th>
              <th className="border border-[#e9e9e9] ">Phone </th>
              <th className="border border-[#e9e9e9] ">Address</th>
              <th className="border border-[#e9e9e9] ">Class</th>
              <th className="border border-[#e9e9e9] ">Update</th>
              <th className="border border-[#e9e9e9] ">Delete</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr className="border border-[#e9e9e9] lg:text-[15] md:text-md sm:text-sm text-[5px] ">
              <th>1</th>
              <td>Riaz uddin</td>
              <td>Ayub Ali</td>
              <td>01786552964</td>
              <td>Rampur</td>
              <td>honourse</td>
              <td>
                <button className=" md:btn lg:btn lg:btn-sm md:btn-sm md:btn-success lg:btn-success bg-green-600 rounded text-white p-1">
                  Update
                </button>
              </td>
              <td>
                <button className=" md:btn lg:btn lg:btn-sm md:btn-sm md:btn-error lg:btn-error bg-red-600 rounded text-white p-1">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentTable;
