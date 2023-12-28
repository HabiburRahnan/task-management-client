import { MdAddToDrive, MdBorderAll,MdHome } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12 h-full ">
      <div className="col-span-5 md:col-span-3 min-h-screen bg-blue-600 font-bold text-white">
        <ul className="menu md:p-4 dashboardItem">
          <>
            <li>
              <Link to="/dashboard/addTask">
                <MdAddToDrive />
                Add Task
              </Link>
            </li>
            <li>
              <Link to="/dashboard/allTask">
                <MdBorderAll /> All Task
              </Link>
            </li>
            
            <li>
              <Link to="/dashboard/myTask">
                <MdBorderAll /> My Task
              </Link>
            </li>
          </>

          <div className="divider"></div>
          <li>
            <Link to="/">
            <MdHome /> Home
            </Link>
          </li>
          
        </ul>
      </div>

      <div className="col-span-7 md:col-span-9 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
