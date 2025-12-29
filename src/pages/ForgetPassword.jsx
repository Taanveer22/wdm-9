import { useContext, useEffect, useState } from "react";
import { getEmailFromLs, removeEmailFromLs } from "../utilities/localStorage";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";

const ForgetPassword = () => {
  const { userPasswordReset } = useContext(AuthContext);
  const [email, setEmail] = useState("");

  const handleResetPassword = () => {
    if (!email) {
      toast.warning("email is required");
      return;
    }
    userPasswordReset(email)
      .then(() => {
        toast.success("password reset email sent");
        // clear the email after reset
        removeEmailFromLs();
      })
      .catch(() => {
        toast.error("password reset email not sent");
      });
  };

  // Load email from localStorage when page opens
  useEffect(() => {
    const localStoredEmail = getEmailFromLs();
    setEmail(localStoredEmail);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div>
        <h1 className="text-3xl font-bold mb-4">Reset Password Now</h1>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="input"
            placeholder="Email"
          />

          <button
            onClick={handleResetPassword}
            className="btn btn-neutral mt-4"
          >
            Reset Password
          </button>
        </fieldset>
      </div>
    </div>
  );
};

export default ForgetPassword;
