import { Link, useNavigate } from "react-router-dom";
import "./login.scss";
import { useContext, useRef } from "react";
import { UserActionType, UserContext } from "../../context/UserContext";
import axios from "../../axios";
import CUser from "../../shared/user.model";

const Login = () => {
  const userRef = useRef<HTMLInputElement>(null);
  const passswordRef = useRef<HTMLInputElement>(null);
  const { dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (userRef.current?.value === "") {
      alert("Username can't be empty!!!");
    } else if (passswordRef.current?.value === "") {
      alert("Password can't be empty!!!");
    } else {
      dispatch({
        type: UserActionType.LOGIN_START,
        payload: null,
      });

      try {
        const { data } = await axios.post<CUser>("/auth/login", {
          username: userRef.current?.value,
          password: passswordRef.current?.value,
        });
        dispatch({
          type: UserActionType.LOGIN_SUCCESS,
          payload: data,
        });
        navigate("/settings");
      } catch (error) {
        dispatch({
          type: UserActionType.LOGIN_ERROR,
          payload: null,
        });
      }
    }
  };

  return (
    <div className="login container">
      <h1 className="login-title">Login</h1>

      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            ref={userRef}
            type="text"
            id="username"
            placeholder="Enter your username"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            ref={passswordRef}
            type="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>

        <div className="form-group">
          <button className="btn button__login" type="submit">
            Login
          </button>
        </div>
      </form>

      <Link
        to="/register"
        className="btn button__register button--absolute"
        type="button"
      >
        Register
      </Link>
    </div>
  );
};

export default Login;
