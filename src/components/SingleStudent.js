import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const SingleStudent = ({ index, student }) => {
  const { name, course, father, address, roll, phone, _id } = student;

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/student/${id}`).then((res) => {
      if (res.data) {
        toast.success("Delete success ..");
      }
    });
  };
  return (
    <tr className=" lg:text-[18px] md:text-[12px] sm:text-[12px] text-[8px] ">
      <th>{index + 1}</th>
      <td>{course}</td>
      <td>{roll}</td>
      <td>{name}</td>
      <td>{father}</td>
      <td>{phone}</td>
      <td>{address}</td>

      <td>
        <Link to={`/update/${_id}`}>
          <button className=" md:btn lg:btn lg:btn-sm md:btn-xs md:btn-success lg:btn-success bg-green-600 rounded text-white p-[5px] m-2">
            Update
          </button>
        </Link>
      </td>
      <td>
        <button
          onClick={() => handleDelete(_id)}
          className=" md:btn lg:btn lg:btn-sm md:btn-xs md:btn-error lg:btn-error bg-red-600 rounded text-white p-[5px] my-2"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default SingleStudent;
