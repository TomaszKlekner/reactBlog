import "./login.scss";

const Login = () => {
  return (
    <div className="login container">
      <h1 className="login-title">Login</h1>

      <form className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
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

      <button className="btn button__register  button--absolute" type="button">
        Register
      </button>
    </div>
  );
};

export default Login;
