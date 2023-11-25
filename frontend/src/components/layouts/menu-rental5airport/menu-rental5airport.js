import React, { useState, useRef } from "react";
import { Navigate, useOutlet, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
//
import { httpClient } from "../../../utils/HttpClient";
import { server, pdfUrl } from "../../../utils/constants";
//
function MenuRental5airport() {
  const MySwal = withReactContent(Swal);
  let defaultColor = "#F4F4F4";
  const navigate = useNavigate();

  //
  const [bgColorHDTK, setBgColorHDTK] = useState(defaultColor);
  const [importHDTK, setimportHDTK] = useState(false);
  const changeColorHDTK = () => {
    let colorHDTK = "#ffc800";
    setBgColorHDTK(colorHDTK);
    setimportHDTK(true);
    setimportDesktop(false);
    setimportVehicle(false);
    //
    setBgColorDesktop(defaultColor);
    setBgColorVehicle(defaultColor);
  };
  const showFormHDTK = ({
    values,
    handleChange,
    handleSubmit,
    setFieldValue,
    isSubmitting,
  }) => {
    return (
      <div className="box-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <p>เพิ่มไฟล์ PDF สำหรับสร้างไฟล์ Report HDTK</p>
            <input
              onChange={(e) => {
                e.preventDefault();
                setFieldValue("file_hdtk", e.target.files[0]);
              }}
              type="file"
              accept=".pdf"
              width={48}
              height={48}
              className="form-control"
              name="pdfhdtk"
              required
            />
          </div>
          <div className="box-footer clearfix">
            <button
              className="pull-right btn btn-default"
              id="addpdf"
              type="submit"
              disabled={isSubmitting}
            >
              {" "}
              เพิ่ม <i className="fa fa-arrow-circle-right" />
            </button>
          </div>
        </form>
      </div>
    );
  };
  //
  //
  const [bgColorDesktop, setBgColorDesktop] = useState(defaultColor);
  const [importDesktop, setimportDesktop] = useState(false);
  const changeColorDesktop = () => {
    let colorDesktop = "#ffc800";
    setBgColorDesktop(colorDesktop);
    setimportHDTK(false);
    setimportDesktop(true);
    setimportVehicle(false);
    //
    setBgColorHDTK(defaultColor);
    setBgColorVehicle(defaultColor);
  };
  const showFormDesktop = ({
    values,
    handleChange,
    handleSubmit,
    setFieldValue,
    isSubmitting,
  }) => {
    return (
      <div className="box-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <p>เพิ่มไฟล์ PDF สำหรับสร้างไฟล์ Report Desktop</p>
            <input
              onChange={(e) => {
                e.preventDefault();
                setFieldValue("file_desktop", e.target.files[0]);
              }}
              type="file"
              accept=".pdf"
              width={48}
              height={48}
              className="form-control"
              name="pdfdesktop"
              required
            />
          </div>
          <div className="box-footer clearfix">
            <button
              className="pull-right btn btn-default"
              id="addpdf"
              type="submit"
              disabled={isSubmitting}
            >
              {" "}
              เพิ่ม <i className="fa fa-arrow-circle-right" />
            </button>
          </div>
        </form>
      </div>
    );
  };
  //
  //
  const [bgColorVehicle, setBgColorVehicle] = useState(defaultColor);
  const [importVehicle, setimportVehicle] = useState(false);
  const changeColorVehicle = () => {
    let colorVehicle = "#ffc800";
    setBgColorVehicle(colorVehicle);
    setimportHDTK(false);
    setimportDesktop(false);
    setimportVehicle(true);
    //
    setBgColorHDTK(defaultColor);
    setBgColorDesktop(defaultColor);
  };
  const showFormVehicle = ({
    values,
    handleChange,
    handleSubmit,
    setFieldValue,
    isSubmitting,
  }) => {
    return (
      <div className="box-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <p>เพิ่มไฟล์ PDF สำหรับสร้างไฟล์ Report Vehicle</p>
            <input
              onChange={(e) => {
                e.preventDefault();
                setFieldValue("file_vehicle", e.target.files[0]);
              }}
              type="file"
              accept=".pdf"
              width={48}
              height={48}
              className="form-control"
              name="pdfvehicle"
              required
            />
          </div>
          <div className="box-footer clearfix">
            <button
              className="pull-right btn btn-default"
              id="addpdf"
              type="submit"
              disabled={isSubmitting}
            >
              {" "}
              เพิ่ม <i className="fa fa-arrow-circle-right" />
            </button>
          </div>
        </form>
      </div>
    );
  };
  //

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <h1>
          DTRS : Rental 5 Airport
          <small>Control panel</small>
        </h1>
        <ol className="breadcrumb">
          <li>
            <a href="/home">
              <i className="fa fa-home" /> Home
            </a>
          </li>
          <li className="active"> DTRS : Rental 5 Airport</li>
        </ol>
      </section>
      <section class="content">
        <div className="row">
          <div className="col-md-6">
            <div className="box">
              <div className="box-header">
                <h3 className="box-title">โปรดเลือกเมนู</h3>
              </div>
              <div className="box-body">
                <a
                  className="btn btn-app"
                  style={{ background: bgColorHDTK }}
                  // href="/dashboard/generatePDF/dtrs_rental5airport/hdtk/create"
                  onClick={changeColorHDTK}
                >
                  <i className="fa fa-signal" /> HDTK
                </a>
                <a
                  className="btn btn-app"
                  style={{ background: bgColorDesktop }}
                  onClick={changeColorDesktop}
                >
                  <i className="fa fa-desktop" /> Desktop
                </a>
                <a
                  className="btn btn-app"
                  style={{ background: bgColorVehicle }}
                  onClick={changeColorVehicle}
                >
                  <i className="fa fa-car" /> Vehicle
                </a>

                {importHDTK ? (
                  <>
                    <Formik
                      initialValues={{}}
                      onSubmit={async (values, { setSubmitting }) => {
                        let formData = new FormData();

                        formData.append("pdfhdtk", values.file_hdtk);

                        let checkStatusCode = await httpClient.post(
                          server.API_ADDFILE_PDF_HDTK,
                          formData
                        );
                        if (checkStatusCode.data.result == "NOK") {
                          MySwal.fire({
                            icon: "error",
                            title: "มีบางอย่างผิดพลาด",
                            text: "ไม่สามารถเพิ่มไฟล์ PDF ได้!",
                            showConfirmButton: false,
                          });
                        } else {
                          if (checkStatusCode.data.result == "OK") {
                            MySwal.fire({
                              position: "top-end",
                              icon: "success",
                              title: "ระบบได้เพิ่มไฟล์ PDF ให้คุณเรียบร้อยแล้ว",
                              showConfirmButton: false,
                              timer: 4000,
                              allowOutsideClick: false,
                            }).then(async (result) => {
                              navigate(
                                "/home/generatePDF/dtrs_rental5airport/hdtk/create"
                              );
                            });
                          }
                        }
                      }}
                    >
                      {(props) => showFormHDTK(props)}
                    </Formik>
                  </>
                ) : (
                  <></>
                )}
                {importDesktop ? (
                  <>
                    <Formik
                      initialValues={{}}
                      onSubmit={async (values, { setSubmitting }) => {
                        let formData = new FormData();

                        formData.append("pdfdesktop", values.file_desktop);

                        let checkStatusCode = await httpClient.post(
                          server.API_ADDFILE_PDF_DESKTOP,
                          formData
                        );
                        if (checkStatusCode.data.result == "NOK") {
                          MySwal.fire({
                            icon: "error",
                            title: "มีบางอย่างผิดพลาด",
                            text: "ไม่สามารถเพิ่มไฟล์ PDF ได้!",
                            showConfirmButton: false,
                          });
                        } else {
                          if (checkStatusCode.data.result == "OK") {
                            MySwal.fire({
                              position: "top-end",
                              icon: "success",
                              title: "ระบบได้เพิ่มไฟล์ PDF ให้คุณเรียบร้อยแล้ว",
                              showConfirmButton: false,
                              timer: 4000,
                              allowOutsideClick: false,
                            }).then(async (result) => {
                              navigate(
                                "/home/generatePDF/dtrs_rental5airport/desktop/create"
                              );
                            });
                          }
                        }
                      }}
                    >
                      {(props) => showFormDesktop(props)}
                    </Formik>
                  </>
                ) : (
                  <></>
                )}
                {importVehicle ? (
                  <>
                    <Formik
                      initialValues={{}}
                      onSubmit={async (values, { setSubmitting }) => {
                        let formData = new FormData();

                        formData.append("pdfvehicle", values.file_vehicle);

                        let checkStatusCode = await httpClient.post(
                          server.API_ADDFILE_PDF_VEHICLE,
                          formData
                        );
                        if (checkStatusCode.data.result == "NOK") {
                          MySwal.fire({
                            icon: "error",
                            title: "มีบางอย่างผิดพลาด",
                            text: "ไม่สามารถเพิ่มไฟล์ PDF ได้!",
                            showConfirmButton: false,
                          });
                        } else {
                          if (checkStatusCode.data.result == "OK") {
                            MySwal.fire({
                              position: "top-end",
                              icon: "success",
                              title: "ระบบได้เพิ่มไฟล์ PDF ให้คุณเรียบร้อยแล้ว",
                              showConfirmButton: false,
                              timer: 4000,
                              allowOutsideClick: false,
                            }).then(async (result) => {
                              navigate(
                                "/home/generatePDF/dtrs_rental5airport/vehicle/create"
                              );
                            });
                          }
                        }
                      }}
                    >
                      {(props) => showFormVehicle(props)}
                    </Formik>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MenuRental5airport;
