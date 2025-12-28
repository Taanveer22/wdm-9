import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
 
  return (
    <div>
      <h1>{user?.displayName || "n/a"}</h1>
      <p>{user?.email || "n/a"}</p>
      <img src={user?.photoURL || "https://placehold.co/60x40"} className="w-12" />
    </div>
  );
};

export default Profile;
