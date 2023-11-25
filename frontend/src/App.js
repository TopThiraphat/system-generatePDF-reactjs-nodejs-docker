import React, { Component, Suspense, lazy } from "react";

// system
import {
  BrowserRouter,
  Routes,
  Route,
  redirect,
  Navigate,
  createBrowserRouter,
  createRoutesFromElements,
  useOutlet,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { server, YES } from "./utils/constants";
import "./App.css";

// layouts
import Login from "./components/layouts/login/login";
import Header from "./components/layouts/header/header";
import Sidebar from "./components/layouts/sidebar/sidebar";
import Footer from "./components/layouts/footer/footer";
import ControlSidebar from "./components/layouts/control-sidebar/control-sidebar";
import ControlSidebarbg from "./components/layouts/control-sidebar-bg/control-sidebar-bg";
import MenuRental5Airport from "./components/layouts/menu-rental5airport/menu-rental5airport";

// contents DTRS_Rental5Airport
import CreatePDFHDTK from "./components/DTRS_Rental5Airport/HDTK/generatePDF/createHDTK/createHDTK";
import AutocreatePDFHDTK from "./components/DTRS_Rental5Airport/HDTK/generatePDF/autocreateHDTK/autocreateHDTK";
import DownloadPDFHDTK from "./components/DTRS_Rental5Airport/HDTK/generatePDF/downloadHDTK/downloadHDTK";

import CreatePDFDesktop from "./components/DTRS_Rental5Airport/Desktop/generatePDF/createDesktop/createDesktop";
import AutocreatePDFDesktop from "./components/DTRS_Rental5Airport/Desktop/generatePDF/autocreateDesktop/autocreateDesktop";
import DownloadPDFDesktop from "./components/DTRS_Rental5Airport/Desktop/generatePDF/downloadDesktop/downloadDesktop";

import CreatePDFVehicle from "./components/DTRS_Rental5Airport/Vehicle/generatePDF/createVehicle/createVehicle";
import AutocreatePDFVehicle from "./components/DTRS_Rental5Airport/Vehicle/generatePDF/autocreateVehicle/autocreateVehicle";
import DownloadPDFVehicle from "./components/DTRS_Rental5Airport/Vehicle/generatePDF/downloadVehicle/downloadVehicle";

// login
import { useAuth } from "./hooks/useAuth";
import { AuthLayout } from "./components/layouts/AuthLayout";
import { Home } from "./components/layouts/Home";
import { ProtectedLayout } from "./components/layouts/ProtectedLayout";

export const CommonLayout = () => {
  const { user, logout } = useAuth();

  return (
    <>
      {!!user ? (
        <>
          <Header /> <Sidebar /> <Outlet />
          <Footer />
        </>
      ) : (
        <Login />
      )}
    </>
  );
};

export function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<AuthLayout />}>
          <Route element={<CommonLayout />}>
            //////////////////////
            <Route path="/" element={<Home />}>
              <Route index element={<Login />} />
              <Route path="/login" element={<Login />} />
            </Route>
            //////////////////////
            <Route path="/home" element={<ProtectedLayout />}>
              <Route
                path="generatePDF/menu-rental5airpost"
                element={<MenuRental5Airport />}
              />
              //////////////////////
              <Route
                path="generatePDF/dtrs_rental5airport/hdtk/create"
                element={<CreatePDFHDTK />}
              />
              <Route
                path="generatePDF/dtrs_rental5airport/hdtk/autocreate"
                element={<AutocreatePDFHDTK />}
              />
              <Route
                path="generatePDF/dtrs_rental5airport/hdtk/download"
                element={<DownloadPDFHDTK />}
              />
              //////////////////////
              <Route
                path="generatePDF/dtrs_rental5airport/desktop/create"
                element={<CreatePDFDesktop />}
              />
              <Route
                path="generatePDF/dtrs_rental5airport/desktop/autocreate"
                element={<AutocreatePDFDesktop />}
              />
              <Route
                path="generatePDF/dtrs_rental5airport/desktop/download"
                element={<DownloadPDFDesktop />}
              />
              //////////////////////
              <Route
                path="generatePDF/dtrs_rental5airport/vehicle/create"
                element={<CreatePDFVehicle />}
              />
              <Route
                path="generatePDF/dtrs_rental5airport/vehicle/autocreate"
                element={<AutocreatePDFVehicle />}
              />
              <Route
                path="generatePDF/dtrs_rental5airport/vehicle/download"
                element={<DownloadPDFVehicle />}
              />
              //////////////////////
            </Route>
            //////////////////////
          </Route>
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
}
