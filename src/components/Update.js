import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Update = () => {
  const { id } = useParams();
  const {
    reset,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit = async (data) => {
    console.log(data);

    await axios.update(`http://localhost:5000/student/${id}`).then((res) => {
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
                placeholder="Name"
                className="my-input-2"
                {...register("name", {
                  required: { value: true, message: "Name is Required" },
                })}
              />
              {errors.email?.type === "required" && (
                <span className="text-red-500 text-sm mt-2 ml-2">
                  {errors?.email?.message}
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
              <input type="submit" value={"Update"} className="my-btn " />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
