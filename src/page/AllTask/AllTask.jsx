import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import TaskCard from "./TaskCard";

const AllTask = () => {
  const { user } = useAuth();

  const { data: tasks = [], isLoading } = useQuery({
    queryKey: ["task"],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/task/${user?.email}`);

      return res.data;
    },
  });

  console.log(tasks);
  return (
    <div>
    <h1 className="text-3xl font-bold text-blue-700 text-center py-10">All Task</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {tasks.map((task) => (
          <TaskCard key={task._id} task={task}></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
