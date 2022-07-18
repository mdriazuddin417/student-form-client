import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [current, setCurrent] = useState({});
  const {
    reset,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  useEffect(() => {
    fetch(`https://tpl-student.herokuapp.com/student/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrent(data));
  }, [id]);

  const onSubmit = async (data) => {
    const student = {
      name: current.name,
      father: data.father || current.father,
      address: data.address || current.address,
      phone: data.phone || current.phone,
      course: data.course || current.course,
      roll: data.roll || current.roll,
    };

    await axios
      .put(`https://tpl-student.herokuapp.com/student/${id}`, { ...student })
      .then((res) => {
        if (res.data) {
          reset();
          toast.success("Update successfully");
          navigate("/");
        }
      });
  };

  return (
    <div className="h-[calc(100vh-68px)] flex justify-center items-center overflow-hidden">
      <div className="min-w-[300px] w-[450px] my-modal rounded-lg overflow-hidden p-10 relative my-parent-path">
        <div className="my-child-path flex justify-around items-center">
          <div className="w-1 h-full bg-white"></div>
          <div className="w-1 h-full bg-white"></div>
          <div className="w-1 h-full bg-white"></div>
        </div>
        <div>
          <h3 className="uppercase text-3xl text-cyan-600 font-bold text-center my-5">
            Student Update
          </h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <input
                type="text"
                value={current?.name}
                placeholder="Name"
                className="my-input-2"
                {...register("name", {})}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Father's name"
                className="my-input-2"
                {...register("father", {})}
              />
            </div>
            <div className="flex justify-between items-center gap-5">
              <div>
                <input
                  type="text"
                  placeholder="Course name"
                  className="my-input-2"
                  {...register("course", {})}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Roll No."
                  className="my-input-2"
                  {...register("roll", {})}
                />
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder="Address"
                className="my-input-2 "
                {...register("address", {})}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Phone"
                className="my-input-2 "
                {...register("phone", {})}
              />
            </div>

            <div>
              <input type="submit" value={"Update"} className="my-btn " />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
