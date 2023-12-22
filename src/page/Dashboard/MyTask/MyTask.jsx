import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import { FaEdit, FaTrashAlt } from "react-icons/Fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useState } from "react";

const MyTask = () => {
  const { user } = useAuth();
  const [id, setId] = useState();
  // console.log(user);

  const { data: tasks = [], refetch } = useQuery({
    queryKey: ["task"],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/task/${user?.email}`);

      return res.data;
    },
  });
  const userEmail = user?.email;
  const userphoto = user?.photoURL;
  const userName = user?.displayName;
  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axios.delete(
          `http://localhost:5000/task/${item._id}`
        );
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${item.taskName} Deleted to the task`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };
  const handleId = (id) => {
    setId(id);
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const taskItem = {
      taskName: data.taskName,
      type: data.type,
      date: data.date,
      description: data.description,
      userEmail: userEmail,
      userphoto: userphoto,
      userName: userName,
     
    };
    console.log(taskItem);
    const taskRes = await axios.patch(`http://localhost:5000/task/${id}`, taskItem);
    console.log(taskRes.data);
    if (taskRes.data.modifiedCount > 0) {
      // reset();
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: `${data.taskName} updated to the task`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div>
      <div className="w-96 md:w-full">
        <div className="overflow-x-auto">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Views Details</th>
                  <th>Image</th>
                  <th>Task Name</th>
                  <th>Your Name</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {tasks?.map((item) => (
                  <tr key={item._id}>
                    <th>
                      <Link to={`/task/${item?._id}`}>Views</Link>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item.userphoto}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{item.taskName}</td>
                    <td>{item.userName}</td>

                    <td>
                      <Link
                        onClick={() =>
                          document.getElementById("my_modal_5").showModal()
                        }
                      >
                        <button
                          onClick={() => handleId(item._id)}
                          className="btn text-xl btn-circle btn-outline bg-orange-500 text-white"
                        >
                          <FaEdit></FaEdit>
                        </button>
                      </Link>
                      <dialog
                        id="my_modal_5"
                        className="modal modal-bottom sm:modal-middle"
                      >
                        <div className="modal-box">
                          <form onSubmit={handleSubmit(onSubmit)}>
                            {/* task title */}
                            <div className="form-control w-full my-6">
                              <label className="label">
                                <span className="label-text">Task Title*</span>
                              </label>
                              <input
                                {...register("taskName")}
                                type="text"
                                required
                                defaultValue={item.taskName}
                                placeholder="Task Title"
                                className="input input-bordered w-full "
                              />
                            </div>

                            <div className="md:flex justify-center items-center gap-6">
                              {/* category */}
                              <div className="form-control w-full my-6">
                                <label className="label">
                                  <span className="label-text">Task Type*</span>
                                </label>
                                <select
                                  defaultValue={item.type}
                                  {...register("type", { required: true })}
                                  className="select select-bordered w-full"
                                >
                                  <option disabled defaultValue={item.type}>
                                    Select a Type
                                  </option>
                                  <option value="Low">Low</option>
                                  <option value="Moderate">Moderate</option>
                                  <option value="High">High</option>
                                </select>
                              </div>
                              {/* Date time */}
                              <div className="form-control w-full my-6">
                                <label className="label">
                                  <span className="label-text">Date*</span>
                                </label>
                                <input
                                  {...register("date")}
                                  type="date"
                                  required
                                  defaultValue={item.date}
                                  className="input input-bordered w-full "
                                />
                              </div>
                            </div>

                            <div className="md:flex justify-center items-center gap-6">
                              {/* task description */}
                              <div className="form-control w-full my-6">
                                <label className="label">
                                  <span className="label-text">
                                    task Description*
                                  </span>
                                </label>
                                <textarea
                                  required
                                  defaultValue={item.description}
                                  {...register("description")}
                                  placeholder="task Description"
                                  className="textarea textarea-bordered textarea-lg w-full "
                                ></textarea>
                              </div>
                            </div>

                            <div className=" md:flex  justify-around items-center gap-5 w-full ">
                              <button
                                type="submit"
                                className=" btn  bg-gradient-to-r from-blue-300 to-blue-500 text-white font-bold mb-5 md:mb-0 "
                              >
                                updated task
                              </button>
                            </div>
                          </form>

                          <div className="modal-action">
                            <form method="dialog">
                              {/* if there is a button in form, it will close the modal */}
                              <button className="btn">Close</button>
                            </form>
                          </div>
                        </div>
                      </dialog>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDeleteItem(item)}
                        className="btn  btn-circle btn-outline bg-red-600 text-white"
                      >
                        <FaTrashAlt></FaTrashAlt>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTask;
