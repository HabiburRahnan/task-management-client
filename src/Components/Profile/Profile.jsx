import useAuth from "../../hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div className="p-10 border-4  w-full md:w-[90%] mx-auto">
      <div className="flex flex-col md:flex-row items-center md:gap-24 w-full">
        <div className="md:w-1/2">
          <div className="avatar">
            <div className="w-24 rounded-full ring ml-4 mt-20 ring-[#f76042] ring-offset-base-100 ring-offset-2">
              <img src={user?.photoURL} alt="Profile" />
            </div>
          </div>
          <h1 className="text-xl font-bold mt-2">
            Email: <span className="lg:text-xl text-sm">{user?.email}</span>
          </h1>
          <h1 className="text-xl font-bold mt-2">
            Name:{" "}
            <span className="lg:text-xl text-sm">{user?.displayName}</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
