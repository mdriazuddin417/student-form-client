import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleStudent from "./SingleStudent";

const StudentTable = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch("student.json")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);
  return (
    <div className="lg:py-20  lg:px-12 p-3 h-[calc(100vh-68px)]">
      <div className="text-end my-3">
        <Link to={"/add"}>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 lg:px-10 lg:py-2 px-5 py-1 rounded-xl text-lg font-bold text-white">
            Add Student <sup className="text-xl">+</sup>
          </button>
        </Link>
      </div>
      <div>
        <table className="table-auto border border-[#e9e9e9] w-full table-zebra shadow">
          <thead className="shadow">
            <tr className="bg-blue-200 py-2 lg:text-[18px] text-[8px] sm:text-base md:text[12px] px-1">
              <th className=" lg:py-3">Serial</th>
              <th className=" lg:py-3">Course</th>
              <th className=" lg:py-3">Roll No.</th>
              <th className=" lg:py-3">Name</th>
              <th className=" lg:py-3">Father's Name</th>
              <th className=" lg:py-3">Phone </th>
              <th className=" lg:py-3">Address</th>

              <th className=" lg:py-3">Update</th>
              <th className=" lg:py-3">Delete</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {students?.map((student, index) => (
              <SingleStudent
                key={student._id}
                student={student}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentTable;
