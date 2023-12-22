import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Banner = () => {
  const {user}=useAuth()
  return (
    <div
      className="hero h-[600px]"
      style={{
        backgroundImage: "url(https://i.ibb.co/4Jkrmtq/00585a3568a0a7d.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <h1 className="mb-5 text-3xl md:text-7xl font-bold">Effortless Task Management</h1>
          <p className="mb-5">
            Plan, organize, and collaborate on any project with task management
            that can be customized for every need.
          </p>
       {
        user? <Link to="/dashboard" className="btn px-5 text-white bg-blue-600 hover:bg-blue-800">Let's Explore</Link> : <Link to="/login" className="btn px-5 text-white bg-blue-600 hover:bg-blue-800">Let's Explore</Link>
       }
        </div>
      </div>
    </div>
  );
};

export default Banner;
