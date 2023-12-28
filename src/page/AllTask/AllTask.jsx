import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const AllTask = () => {
  const { user } = useAuth();
  console.log(user);

  const { data: tasks = [] } = useQuery({
    queryKey: ["task"],
    queryFn: async () => {
      const res = await axios.get(`https://task-management-server-sandy-xi.vercel.app/task`);

      return res.data;
    },
  });

  console.log(tasks);
  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-700 text-center py-10">
        All Task
      </h1>

      <div className="w-96 md:w-full">
        <div className="overflow-x-auto">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Views Details</th>
                  <th>Image</th>
                  <th>Task Name</th>
                  <th>user Email</th>
                  <th>user Name</th>
                  
                </tr>
              </thead>
              <tbody>
                {tasks?.map((item) => (
                  <tr key={item._id}>
                    <th>
                      <Link to={`/meals/${item?._id}`}>Views</Link>
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
                    <td>{item.userEmail}</td>
                    <td>{item.userName}</td>

                   
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

export default AllTask;
