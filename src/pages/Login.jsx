import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Login = () => {

  const { googleSignIn } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        toast.success("google sign in successful");
      })
      .catch(() => {
        toast.error("google sign in failed");
      });
  };
  return (
    <div className="flex justify-center items-center">
      <div >
        <h1 className="text-3xl font-bold mb-3">Login Now</h1>
        <form className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </div>
        </form>
        <div className="flex justify-center items-center mt-4">
         <div className="space-x-4">
           <button
            onClick={handleGoogleSignIn}
            className="btn btn-sm btn-warning"
          >
            Login With Google
          </button>
          <Link to="/register" className="btn btn-sm btn-info ">Register</Link>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
