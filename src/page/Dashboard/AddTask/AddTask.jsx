import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const AddTask = () => {
    const { register, handleSubmit, reset} = useForm();
  const { user } = useAuth();
  console.log(user)
const userEmail=user?.email
  const onSubmit = async (data) => {
    console.log(data)
    
    
        const taskItem = {
          taskName: data.taskName,
          type: data.type,
          date: data.date,
          description: data.description,
          userEmail: userEmail,
          userName: data.userName,
        };
        //  now
        const taskRes = await axios.post("http://localhost:5000/task", taskItem);
        // console.log(taskRes.data);
        if (taskRes.data.insertedId) {
          reset();
          toast.success("task added Successfully");
        }
      

    
    
  };
  const addUpcoming = async (data) => {
    console.log("upcoming", data);
    
  };
    return (
        <div>
        <Toaster position="top-center" reverseOrder={false} />
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
              defaultValue="default"
              {...register("type", { required: true })}
              className="select select-bordered w-full">
              <option disabled defaultValue={"Select"}>
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
              className="input input-bordered w-full "
            />
          </div>
          
        </div>


        <div className="md:flex justify-center items-center gap-6">
          
          {/* admin Name */}
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">user Name</span>
            </label>
            <input
              {...register("userName")}
              type="text"
              required
              defaultValue={user?.displayName}
              placeholder="User Name"
              className="input input-bordered w-full "
            />
          </div>
          {/* user Email */}
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">user Email</span>
            </label>
            <input
              {...register("userEmail")}
              type="Email"
              required
              readOnly
              defaultValue={user?.email}
              placeholder="user Email"
              className="input input-bordered w-full "
            />
          </div>
        </div>


        <div className="md:flex justify-center items-center gap-6">
          {/* task description */}
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">task Description*</span>
            </label>
            <textarea
              required
              {...register("description")}
              placeholder="task Description"
              className="textarea textarea-bordered textarea-lg w-full "></textarea>
          </div>
        </div>

        <div className=" md:flex  justify-around items-center gap-5 w-full ">
          <button
            type="submit"
            className=" btn  bg-gradient-to-r from-green-600 to-orange-500 text-white font-bold mb-5 md:mb-0 ">
            add a task
          </button>
        </div>
      </form>
      <button
        type="submit"
        onClick={handleSubmit(addUpcoming)}
        className=" btn  bg-gradient-to-r from-blue-500 text-white font-bold to-green-700 ">
        Add Upcoming
      </button>
            
        </div>
    );
};

export default AddTask;