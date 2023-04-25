import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

type AuthContextType = {
  loginUser: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  authTokens: AuthTokens | null;
  user: any;
};

const AuthContext = createContext<AuthContextType>({
  loginUser: async (e: React.FormEvent<HTMLFormElement>) => {},
  authTokens: null,
  user: null,
});

export default AuthContext;

type AuthTokens = {
  access: string;
  refresh: string;
};

type Props = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const navigate = useNavigate();

  let [authTokens, setAuthTokens] = useState<AuthTokens | null>(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens") as string)
      : null
  );

  let [user, setUser] = useState(
    localStorage.getItem("authTokens")
      ? jwtDecode(localStorage.getItem("authTokens") as string)
      : null
  );
  let [loading, setLoading] = useState(false);

  const loginUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:8000/api/token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: e.currentTarget.username.value,
          password: e.currentTarget.password.value,
        }),
      });

      const data: AuthTokens = await response.json();

      if (response.status === 200) {
        localStorage.setItem("authTokens", JSON.stringify(data));
        setAuthTokens(data);
        console.log(authTokens);
        setUser(jwtDecode(data.access));
        console.log(user);
        setLoading(false);
        navigate("/");
      } else {
        alert(response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const contextData = {
    loginUser,
    authTokens,
    user,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
