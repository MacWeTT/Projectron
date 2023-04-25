import { FC } from "react";
import { useContext } from "react";
import AuthContext from "../Utils/AuthContext";
import Navbar from "../Components/Navbar";

const Login: FC = () => {
  let { loginUser } = useContext(AuthContext);

  return (
    <div>
      <Navbar />
      <div>
        <h1>Login</h1>
        <form onSubmit={loginUser}>
          <label htmlFor="username">Username</label> <br />
          <input type="text" name="username" id="username" /> <br />
          <label htmlFor="password">Password</label> <br />
          <input type="password" name="password" id="password" /> <br />
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
