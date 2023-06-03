import "./register.scss";

const Register = () => {
  return (
    <div className="register container">
      <h1 className="register-title">Register</h1>

      <form className="register-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Enter your username" />
        </div>

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
          <button className="btn button__register" type="submit">
            Register
          </button>
        </div>
      </form>

      <button className="btn button__login button--absolute" type="button">
        Login
      </button>
    </div>
  );
};

export default Register;
