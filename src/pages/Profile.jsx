import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
const Profile = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);

  return (
    <div className="flex justify-center items-center">
      <div className="card bg-neutral-500 text-neutral-content p-4">
        <h1 className="text-center text-xl font-medium">
          Welcome to Chill Mountain Trekkers
        </h1>
        <div className="card-body">
          <img
            src={user?.photoURL || "https://placehold.co/60x40"}
            className="w-16"
          />
          <h2 className="card-title">{user?.displayName || "No User"}</h2>
          <p>{user?.email || "Email Not Available"}</p>
        </div>
        <div className="flex justify-center items-center">
          <Link to="/updateProfile" className="btn btn-warning">
            Update Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
