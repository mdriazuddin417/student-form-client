import React, { useEffect, useState } from "react";
import SingleStudent from "./SingleStudent";

const StudentTable = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch("student.json")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);
  return (
    <div className="lg:py-20  lg:px-12 p-3">
      <div>
        <table className="table-auto border border-[#e9e9e9] w-full table-zebra shadow">
          <thead className="shadow">
            <tr className="bg-blue-200 py-2 lg:text-[16px] text-[8px] sm:text-base md:text[12px] px-1">
              <th className=" lg:py-2">Serial</th>
              <th className=" lg:py-2">Course</th>
              <th className=" lg:py-2">Roll No.</th>
              <th className=" lg:py-2">Name</th>
              <th className=" lg:py-2">Father's Name</th>
              <th className=" lg:py-2">Phone </th>
              <th className=" lg:py-2">Address</th>

              <th className=" lg:py-2">Update</th>
              <th className=" lg:py-2">Delete</th>
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
