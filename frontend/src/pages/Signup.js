import { useSignup } from "../hooks/useSignup";
const { useState } = require("react");

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if both passwords are identical
    if (password === confirmPassword) {
      setPasswordError("");
      // Process the form submission here
      await signup(email, password);
    } else {
      setPasswordError("Passwords do not match.");
    }
  };
  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign up</h3>

      <label>Email:</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Password:</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <label>Confirm Password:</label>
      <input
        type="password"
        onChange={(e) => setConfirmPassword(e.target.value)}
        value={confirmPassword}
      />
      <button disabled={isLoading}>Sign Up</button>
      {passwordError && <div className="error">{passwordError}</div>}
      {!passwordError && error && <div className="error">{error}</div>}
    </form>
  );
};

export default Signup;
