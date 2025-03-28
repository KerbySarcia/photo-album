import { FormEvent, useState } from "react";
import "./login-page.css";
import { useNavigate } from "react-router";
import useAuthStore from "../../utils/auth-store";
import apiRequest from "../../utils/api";

const LoginPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { setCurrentUser } = useAuthStore();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    const data = Object.fromEntries(formData);

    try {
      const res = await apiRequest.post(
        `/users/auth/${isRegister ? "register" : "login"}`,
        data
      );

      setCurrentUser(res.data);

      navigate("/");
    } catch (err) {
      // @ts-expect-errorignore
      setError(err.response.data.message);
    }
  };

  return (
    <div className="loginPage">
      <div className="authContainer">
        <img src="/general/logo.png" alt="" />
        <h1>{isRegister ? "Create an Account" : "Login to your account"}</h1>
        {isRegister ? (
          <form onSubmit={handleSubmit} key="register-form">
            <div className="formGroup">
              <label htmlFor="username">Username</label>
              <input
                type="username"
                placeholder="Username"
                required
                name="username"
                id="username"
              />
            </div>
            <div className="formGroup">
              <label htmlFor="displayName">Display Name</label>
              <input
                type="displayName"
                placeholder="Display Name"
                required
                name="displayName"
                id="displayName"
              />
            </div>
            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                required
                name="email"
                id="email"
              />
            </div>
            <div className="formGroup">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                required
                name="password"
                id="password"
              />
            </div>
            <button type="submit">Register</button>
            <p onClick={() => setIsRegister(false)}>
              Do you have an account? <b>Login</b>
            </p>
            {error && <p className="error">{error}</p>}
          </form>
        ) : (
          <form onSubmit={handleSubmit} key="login-form">
            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                required
                name="email"
                id="email"
              />
            </div>
            <div className="formGroup">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                required
                name="password"
                id="password"
              />
            </div>
            <button type="submit">Login</button>
            <p onClick={() => setIsRegister(true)}>
              Don't have an account? <b>Register</b>
            </p>
            {error && <p className="error">{error}</p>}
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
