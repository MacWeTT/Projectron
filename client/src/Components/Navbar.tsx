import { FC } from "react";
import { Link } from "react-router-dom";

type Props = {};

const Navbar: FC = (props: Props) => {
  return (
    <nav className="w-screen flex justify-between p-2 py-4 bg-gray-800 text-white">
      <span className="logo ml-4 text-3xl">Projectron</span>
      <span className="nav-links flex justify-center items-center">
        <Link to="/login" className="text-xl p-2 mx-4 rounded border-2">
          Login
        </Link>
        <Link to="/signup" className="text-xl p-2 mx-4 rounded border-2">
          SignUp
        </Link>
      </span>
    </nav>
  );
};

export default Navbar;
