import { Link, Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const ProtectedLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <>
      {/* <Header />
      <Sidebar /> */}
      {/* <Header
        pages={[
          // { label: "Settings", path: "settings" },
          // { label: "Profile", path: "profile" },
          { path: "menu-rental5airpost" },
          {
            path: "dtrs_rental5airport/pm/generate/report/pdf/dmk/hdtk/create",
          },
          {
            path: "dtrs_rental5airport/pm/generate/report/pdf/dmk/hdtk/autocreate",
          },
        ]}
      /> */}
      {outlet}
      {/* <Footer /> */}
    </>
  );
};
