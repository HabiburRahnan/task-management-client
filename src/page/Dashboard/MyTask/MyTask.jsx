import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import { FaEdit, FaTrashAlt } from "react-icons/Fa";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'






const MyTask = () => {
    const { user } = useAuth();
  console.log(user);

  const { data: tasks = [],refetch  } = useQuery({
    queryKey: ["task"],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/task/${user?.email}`);

      return res.data;
    },
  });
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
        const res = await axios.delete(`/meals/${item._id}`);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${item.mealName} Deleted to the menu`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
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
                  <Link to={`/dashboard/updatetask/${item._id}`}>
                    <button className="btn text-xl btn-circle btn-outline bg-orange-500 text-white">
                      <FaEdit></FaEdit>
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteItem(item)}
                    className="btn  btn-circle btn-outline bg-red-600 text-white">
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