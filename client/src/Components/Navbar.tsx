import { FC, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../Utils/AuthContext";

const Navbar: FC = () => {
  const { user } = useContext(AuthContext);

  return (
    <nav className="w-screen flex justify-between p-2 py-4 bg-primary text-white">
      <Link to="/" className="logo ml-4 text-3xl flex items-center">
        Projectron
      </Link>
      <span className="nav-links flex justify-center items-center">
        {user ? (
          <>
            <Link to="/profile" className="text-xl p-2 mx-4 rounded border-2">
              Profile
            </Link>
            <Link to="/Logout" className="text-xl p-2 mx-4 rounded border-2">
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link to="/login" className="text-xl p-2 mx-4 rounded border-2">
              Login
            </Link>
            <Link to="/signup" className="text-xl p-2 mx-4 rounded border-2">
              SignUp
            </Link>
          </>
        )}
      </span>
    </nav>
  );
};

export default Navbar;
