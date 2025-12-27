import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Login = () => {
  const { googleSignIn, userSigninByLogin } = useContext(AuthContext);

  const handleLoginForm = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    userSigninByLogin(email, password)
      .then(() => {
        toast.success("login successful");
      })
      .catch(() => {
        toast.error("login failed");
      });
  };

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
      <div>
        <h1 className="text-3xl font-bold mb-3">Login Now</h1>
        <form
          onSubmit={handleLoginForm}
          className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl"
        >
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />
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
            <Link to="/register" className="btn btn-sm btn-info ">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
