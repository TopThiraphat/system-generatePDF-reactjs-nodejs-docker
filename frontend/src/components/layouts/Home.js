import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Header from "./header/header";

export const Home = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (user) {
    return <Navigate to="/home" replace />;
  }

  return (
    <div>
      {/* <Header
        pages={[
          // { label: "Home", path: "/" },
          // { label: "Login", path: "/login" },
          { path: "/" },
          // { path: "/login" },
        ]}
      /> */}
      {outlet}
    </div>
  );
};
