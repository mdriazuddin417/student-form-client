import React from "react";

const SingleStudent = ({ index, student }) => {
  const { name, course, father, address, roll, phone } = student;
  console.log(student);
  return (
    <tr className="border border-[#e9e9e9] lg:text-[15] md:text-md sm:text-sm text-[8px] ">
      <th>{index + 1}</th>
      <td>{course}</td>
      <td>{roll}</td>
      <td>{name}</td>
      <td>{father}</td>
      <td>{phone}</td>
      <td>{address}</td>

      <td>
        <button className=" md:btn lg:btn lg:btn-xs md:btn-xs md:btn-success lg:btn-success bg-green-600 rounded text-white p-[5px] m-1">
          Update
        </button>
      </td>
      <td>
        <button className=" md:btn lg:btn lg:btn-xs md:btn-xs md:btn-error lg:btn-error bg-red-600 rounded text-white p-[5px] m-1">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default SingleStudent;
