import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import SingleStudent from "./SingleStudent";
import useStudents from "../Customhook/useStudents";
import useStudent from "../Customhook/useStudent";

const StudentTable = () => {
  const [size, setSize] = useState(10);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  const [students, refetch] = useStudents();

  const [student, refetch2, loading] = useStudent(page, size);

  useEffect(() => {
    fetch("https://tpl-student.herokuapp.com/productCount")
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        const pageCount = Math.ceil(count / 10);
        setPageCount(pageCount);
      });
  }, []);

  return (
    <div className="lg:py-20  lg:px-12 p-3 h-[calc(100vh-68px)]">
      <div className="flex justify-between items-center gap-2 my-3 ">
        <h3 className="lg:text-4xl text-xl text-cyan-600  font-bold">
          Student Information
        </h3>
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
            {student?.map((student, index) => (
              <SingleStudent
                key={student._id}
                student={student}
                index={index}
                refetch={refetch2}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-white px-4 py-3 flex items-center justify-between flex-wrap border-t border-gray-200 sm:px-6">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1 </span> to
            <span className="font-medium"> {page * size}</span> of
            <span className="font-medium"> {students?.length}</span> results
          </p>
        </div>
        <Pagination setPage={setPage} pageCount={pageCount} page={page} />
      </div>
    </div>
  );
};

export default StudentTable;
