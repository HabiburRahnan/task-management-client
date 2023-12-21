import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import Google from "../../Components/SocalLogin/Google";

const Login = () => {
  const { loginUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    loginUser(data.email, data.password).then(() => {
      toast.success("Login Successfully");
      navigate(from, { replace: true });
    });
  };

  return (
    <div className="hero h-[600px] rounded-xl" style={{
      backgroundImage: "url(https://i.ibb.co/vXK5f4s/login.jpg)",

    }}>
    <Toaster position="top-center" reverseOrder={false} />
    <div className="card md:w-1/2 w-full max-w-sm shadow-3xl text-white">
    <div className="text-3xl text-center  pt-5  text-white font-bold">
           Login Now
          </div>
    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
      <div className="form-control">
        <label className="label">
          <span className="label-text text-white">Email</span>
        </label>
        <input
          type="email"
          placeholder="email"
          {...register("email", { required: true })}
          name="email"
          className="input input-bordered"
        />
        {errors.email && (
          <span className="text-red-600">Email is required</span>
        )}
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-white">Password</span>
        </label>
        <input
          type="password"
          placeholder="password"
          {...register("password", {
            required: true,
            minLength: 6,
            maxLength: 20,
            pattern:
              /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
          })}
          name="password"
          className="input input-bordered"
        />
        {errors.password?.type === "required" && (
          <span className="text-red-600">
            password must be 6 characters
          </span>
        )}
        {errors.password?.type === "minLength" && (
          <span className="text-red-600">
            password must be 6 characters
          </span>
        )}
        {errors.password?.type === "maxLength" && (
          <span className="text-red-600">
            password must be less 20 characters
          </span>
        )}
        {errors.password?.type === "pattern" && (
          <span className="text-red-600">
            password must be Minimum six characters, at least one letter,
            one number and one special character
          </span>
        )}
      </div>

      <div className="form-control mt-6 ">
        <input
          type="submit"
          value="Login"
          className="btn bg-blue-500 hover:bg-blue-700 text-white"
        />
      </div>
    </form>
    <Google></Google>
    <p className="py-5 flex justify-center  items-center ">
      New Here Create a account ?
      <Link className="text-blue-600 font-semibold" to="/register">
        Register
      </Link>
    </p>
  </div>
    </div>
  );
};

export default Login;
