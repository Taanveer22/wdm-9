import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { userUpdateProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    // console.log(name, photoUrl);

    // funtion from firebase
    userUpdateProfile(name, photoUrl)
      .then(() => {
        toast.success("profile form data update complete");
        navigate("/profile");
      })
      .catch(() => {
        toast.error("profile form data not updated");
      });
  };

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleUpdateProfile}>
        <h1 className="text-3xl font-semibold text-center mb-3">
          Update Profile Now
        </h1>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label">Name</label>
          <input name="name" type="text" className="input" placeholder="Name" />

          <label className="label">Photo Url</label>
          <input
            name="photoUrl"
            type="text"
            className="input"
            placeholder="Photo Url"
          />

          <button className="btn btn-neutral mt-4">Update</button>
        </fieldset>
      </form>
    </div>
  );
};

export default UpdateProfile;
