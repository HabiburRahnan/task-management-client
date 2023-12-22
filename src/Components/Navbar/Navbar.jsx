import { Link,NavLink } from "react-router-dom";
import logo from "../../assets/download (3).png"
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  const navlist = (
    <>
      <li>
        <Link to="/">Home</Link>
        
      </li>
      <li>
        <Link to="/about">About</Link>
        
      </li>
      <li>
        <Link to="/benefit">Benefit</Link>
        
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
        
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navlist}
          </ul>
        </div>
        <img src={logo} className="btn btn-ghost text-xl"></img>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        {navlist}
        </ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <div className={`dropdown dropdown-end`}>
            <label tabIndex={0} className="cursor-pointer ">
              <div
                className="avatar tooltip  tooltip-left "
                data-tip={`${user?.displayName}`}>
                <div className={`w-10 rounded-full `}>
                  <img
                    className={`rounded-full w-12 `}
                    src={user?.photoURL}
                    alt=""
                  />
                </div>
              </div>
            </label>
            <div
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <NavLink
                data-tip={`${user?.displayName}`}
                to="/profile"
                className="px-4 py-2 hover:bg-base-300 rounded-lg tooltip  tooltip-top">
                My Profile
              </NavLink>
              <NavLink


                to="/dashboard"
                className="px-4 py-2 hover:bg-base-300 rounded-lg text-center">
                Dashboard
              </NavLink>

              <button onClick={handleLogOut} className="btn">
                Log Out
              </button>
            </div>
          </div>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "btn  btn-sm "
                : "btn btn-ghost  bg-orange-400 hover:bg-orange-400"
            }>
            Join US
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
