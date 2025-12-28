import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { googleSignIn, userCreateByRegister, userUpdateProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  // Register → updateProfile → navigate → UI updates correctly

  const handleRegisterForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(name, photoUrl, email, password);

    // reset state
    setErrorMessage("");

    // password validation
    if (password.length < 6) {
      setErrorMessage("password must be 6 characters or more");
      return;
    }

    const hasUppercase = /[A-Z]/;
    if (!hasUppercase.test(password)) {
      setErrorMessage("need at least one uppercase");
      return;
    }

    const hasLowerCase = /[a-z]/;
    if (!hasLowerCase.test(password)) {
      setErrorMessage("need at least one lowercase");
      return;
    }

    // firebase functionality
    userCreateByRegister(email, password)
      .then(() => {
        userUpdateProfile(name, photoUrl)
          .then(() => {
            toast.success("register and profile update done");
            navigate("/");
          })
          .catch(() => {
            toast.error("profile update failed");
          });
      })
      .catch(() => {
        toast.error("user register failed");
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        toast.success("sign in with google successful");
      })
      .catch(() => {
        toast.error("sign in with google failed");
      });
  };
  return (
    <div className="flex justify-center items-center">
      <div>
        <h1 className="text-3xl font-bold  mb-3">Register Now</h1>
        <form onSubmit={handleRegisterForm}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
            />

            <label className="label">Photo Url</label>
            <input
              name="photoUrl"
              type="text"
              className="input"
              placeholder="Photo Url"
            />

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

            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </form>
        {errorMessage && (
          <p className="text-red-500 font-medium">{errorMessage}</p>
        )}
        <div className="flex justify-center items-center">
          <div className="space-x-4 mt-4">
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-sm btn-warning"
            >
              Signin With Google
            </button>
            <Link to="/login" className="btn btn-sm btn-info">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
