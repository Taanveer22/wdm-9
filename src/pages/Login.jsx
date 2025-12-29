import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { setEmailToLs } from "../utilities/localStorage";

const Login = () => {
  const { googleSignIn, userSigninByLogin } = useContext(AuthContext);

  // store email and password input value
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginForm = (e) => {
    e.preventDefault();

    // const email = e.target.email.value;
    // const password = e.target.password.value;
    // console.log(email, password);

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

  // Save email before going to ForgetPassword page
  const handleForgetPassword = () => {
    setEmailToLs(email);
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />
              <div>
                {/* Pass email using state */}
                <Link
                  onClick={handleForgetPassword}
                  to="/forgetPassword"
                  className="link link-hover"
                >
                  Forgot password?
                </Link>
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
