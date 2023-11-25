import React from "react";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

function Header() {
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const navigate = useNavigate();
  const { user, logout } = useAuth();

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };

  // const handleCloseNavMenu = (path) => {
  //   setAnchorElNav(null);
  //   if (path) {
  //     navigate(path);
  //   }
  // };

  return (
    <>
      <header className="main-header">
        {/* Logo */}
        <a href="/" className="logo">
          {/* mini logo for sidebar mini 50x50 pixels */}
          <span className="logo-mini">
            <b>D</b>ata
          </span>
          {/* logo for regular state and mobile devices */}
          <span className="logo-lg">
            <b>Data</b>Com
          </span>
        </a>
        {/* Header Navbar: style can be found in header.less */}
        <nav className="navbar navbar-static-top">
          {/* Sidebar toggle button*/}
          <a
            href="#"
            className="sidebar-toggle"
            data-toggle="push-menu"
            role="button"
          >
            <span className="sr-only">Toggle navigation</span>
          </a>
          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              {/* User Account: style can be found in dropdown.less */}
              <li className="dropdown user user-menu">
                {!!user && (
                  <a
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    onClick={logout}
                  >
                    <span className="hidden-xs">
                      <b>ออกจากระบบ</b>
                    </span>
                  </a>
                )}
              </li>
              {/* Control Sidebar Toggle Button */}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
