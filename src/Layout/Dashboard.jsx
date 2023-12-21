import { BsHouse, } from "react-icons/Bs";
import { MdMenu,  } from "react-icons/Md";
import { Link, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  
  return (
    <div className="grid grid-cols-12 h-full ">
     
      <div className="col-span-5 md:col-span-3 min-h-screen bg-blue-600 font-bold text-white">
        <ul className="menu md:p-4 dashboardItem">
          <>
          <li>
            <Link to="/dashboard/addTask">
              <BsHouse></BsHouse>Task
            </Link>
          </li>
          <li>
            <Link to="/dashboard/allTask">
              <BsHouse></BsHouse>All Task
            </Link>
          </li>
          </>
             
              
          
           
          <div className="divider"></div>
          <li>
            <Link to="/">
              <BsHouse></BsHouse>Home
            </Link>
          </li>
          <li>
            <NavLink to="/meals">
              <MdMenu></MdMenu> Our Meals
            </NavLink>
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
