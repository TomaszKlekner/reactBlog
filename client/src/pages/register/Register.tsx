import { Link } from "react-router-dom";
import "./register.scss";
import { useState } from "react";
import axios from "../../axios";
import CUser from "../../shared/user.model";

const Register = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setError(false);

    try {
      const newUser = new CUser(username, email, password);
      const { data } = await axios.post("/auth/register", newUser);
      setUsername("");
      setEmail("");
      setPassword("");
      data && window.location.replace("/login");
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  return (
    <div className="register container">
      <h1 className="register-title">Register</h1>

      <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            id="username"
            placeholder="Enter your username"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>

        <div className="form-group">
          <button className="btn button__register" type="submit">
            Register
          </button>
        </div>
      </form>

      <Link
        to="/login"
        className="btn button__login button--absolute"
        type="button"
      >
        Login
      </Link>
    </div>
  );
};

export default Register;
