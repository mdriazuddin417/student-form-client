import React from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";

const AddStudent = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    await axios
      .post(`https://tpl-student.herokuapp.com/student`, { ...data })
      .then((res) => {
        if (res.data) {
          reset();
          toast.success("Student add success ..");
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
            Add Student
          </h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="my-input-2"
                {...register("name", {
                  required: { value: true, message: "Name is Required" },
                })}
              />
              {errors.name?.type === "required" && (
                <span className="text-red-500 text-sm mt-2 ml-2">
                  {errors?.name?.message}
                </span>
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder="Father's name"
                className="my-input-2"
                {...register("father", {
                  required: {
                    value: true,
                    message: "Father's name is Required",
                  },
                })}
              />
              {errors.father?.type === "required" && (
                <span className="text-red-500 text-sm mt-2 ml-2">
                  {errors?.father?.message}
                </span>
              )}
            </div>
            <div className="flex justify-between items-center gap-5">
              <div>
                <input
                  type="text"
                  placeholder="Course name"
                  className="my-input-2"
                  {...register("course", {
                    required: {
                      value: true,
                      message: "Course name is Required",
                    },
                  })}
                />
                {errors.course?.type === "required" && (
                  <span className="text-red-500 text-sm mt-2 ml-2">
                    {errors?.course?.message}
                  </span>
                )}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Roll No."
                  className="my-input-2"
                  {...register("roll", {
                    required: {
                      value: true,
                      message: "Roll number is Required",
                    },
                  })}
                />
                {errors.roll?.type === "required" && (
                  <span className="text-red-500 text-sm mt-2 ml-2">
                    {errors?.roll?.message}
                  </span>
                )}
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder="Address"
                className="my-input-2 "
                {...register("address", {
                  required: { value: true, message: "Address is Required" },
                })}
              />

              {errors.address?.type === "required" && (
                <span className="text-red-500 text-sm mt-2 ml-2">
                  {errors?.address?.message}
                </span>
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder="Phone"
                className="my-input-2 "
                {...register("phone", {
                  required: { value: true, message: "Number is Required" },
                })}
              />

              {errors.phone?.type === "required" && (
                <span className="text-red-500 text-sm mt-2 ml-2">
                  {errors?.phone?.message}
                </span>
              )}
            </div>

            <div>
              <input type="submit" value={"ADD"} className="my-btn " />
            </div>
          </form>
          <Link to={"/"}>
            <button className="my-btn mt-5">Return Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
