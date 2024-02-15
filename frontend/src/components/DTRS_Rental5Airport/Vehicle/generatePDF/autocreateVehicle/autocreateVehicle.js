import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { httpClient } from "../../../../../utils/HttpClient";
import { server, pdfUrl } from "../../../../../utils/constants";

function AutocreateVehicle() {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  const showForm = ({
    values,
    handleChange,
    handleSubmit,
    setFieldValue,
    isSubmitting,
  }) => {
    return (
      <div className="content-wrapper">
        <section className="content-header">
          <h1>
            ระบบอัตโนมัติ
            <small>Control panel</small>
          </h1>
          <ol className="breadcrumb">
            <li>
              <a href="/home">
                <i className="fa fa-home" /> Home
              </a>
            </li>
            <li className="active">
              <a href="/home/generatePDF/menu-rental5airpost">
                DTRS : Rental 5 Airport
              </a>
            </li>
            <li className="active">
              <a href="/home/generatePDF/dtrs_rental5airport/vehicle/create">
                {" "}
                สร้างไฟล์ PDF สำหรับ Report Vehicle
              </a>
            </li>
            <li className="active">ระบบอัตโนมัติ</li>
          </ol>
        </section>
        <section className="content">
          <div className="row">
            <section className="col-lg-7 connectedSortable">
              <div className="box box-info">
                <div className="box-header">
                  <i className="fa fa-envelope" />
                  <h3 className="box-title">
                    ระบบสร้างไฟล์ PDF สำหรับ Report Vehicle อัตโนมัติ
                  </h3>
                  <div className="pull-right box-tools">
                    <button
                      type="button"
                      className="btn btn-info btn-sm"
                      data-widget="remove"
                      data-toggle="tooltip"
                      title="Remove"
                    >
                      <i className="fa fa-times" />
                    </button>
                  </div>
                </div>

                <div className="box-body">
                  <form onSubmit={handleSubmit}>
                    <div className="box-footer clearfix">
                      <p>
                        <b>เงื่อนไขก่อนใช้งานระบบ !</b>
                        <p></p>
                        <ul>
                          <li>
                            เพิ่มหัว Column Carregistration ใน Excel
                            และใส่ข้อมูลเลขทะเบียนรถ
                          </li>
                          <li>ห้ามมีช่องว่างในส่วนของ หัว column</li>
                          <li>ห้ามมีอักขระ</li>
                          <li>[ผิด] Serial No. [ถูก] SerialNo </li>
                        </ul>
                      </p>
                      <div className="form-group">
                        <p>ท่าอากาศยาน :</p>
                        <select
                          className="form-control"
                          value={values.airport}
                          name="airport"
                          onChange={handleChange}
                          required
                        >
                          <option value="BKK">BKK</option>
                          <option value="DMK">DMK</option>
                          <option value="HKT">HKT</option>
                          <option value="CNX">CNX</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <p>ครั้งที่ : </p>
                        <input
                          type="number"
                          className="form-control"
                          name="time"
                          placeholder="ใส่ครั้งที่ดำเนินการ"
                          onChange={handleChange}
                          value={values.time}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <p>ปีที่ดำเนินการ :</p>
                        <select
                          className="form-control"
                          value={values.year}
                          name="year"
                          onChange={handleChange}
                          required
                        >
                          <option value="66">66</option>
                          <option value="67">67</option>
                          <option value="68">68</option>
                          <option value="69">69</option>
                          <option value="70">70</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <p>ยี่ห้อ : </p>
                        <input
                          type="text"
                          className="form-control"
                          name="brand"
                          placeholder="ใส่ยี่ห้ออุปกรณ์"
                          onChange={handleChange}
                          value={values.brand}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <p>รุ่น : </p>
                        <input
                          type="text"
                          className="form-control"
                          name="model"
                          placeholder="ใส่รุ่นอุปกรณ์"
                          onChange={handleChange}
                          value={values.model}
                          required
                        />
                      </div>
                      <p>เพิ่มไฟล์ Excel</p>
                      <input
                        onChange={(e) => {
                          e.preventDefault();
                          setFieldValue("file_excel", e.target.files[0]); // for upload
                        }}
                        type="file"
                        // alt="Submit"
                        accept=".xlsx,.xls"
                        width={48}
                        height={48}
                        className="form-control"
                        name="excel"
                        required
                      />
                      <p></p>
                      <p>เพิ่มรูปภาพ</p>
                      <input
                        onChange={(e) => {
                          e.preventDefault();
                          setFieldValue("file_image", e.target.files); // for upload
                        }}
                        type="file"
                        // alt="Submit"
                        // accept="image/*"
                        accept=".jpg"
                        width={48}
                        height={48}
                        className="form-control"
                        name="image"
                        multiple
                        required
                      />

                      <p></p>
                    </div>

                    <div className="box-footer clearfix">
                      <button
                        className="pull-right btn btn-default"
                        id="addpdf"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        {" "}
                        สร้างไฟล์ <i className="fa fa-arrow-circle-right" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </section>
            <section className="col-lg-5 connectedSortable">
              <div className="box box-solid bg-white-gradient">
                <div className="box-header">
                  {/* <img
                    src={`${process.env.PUBLIC_URL}/img/test.png`}
                    style={{ height: 100 }}
                  /> */}
                  <h4 style={{ color: "red" }}>ตัวอย่าง ตำแหน่งการใส่ข้อมูล</h4>
                  <iframe
                    // src="https://us1.pdfgeneratorapi.com/api/v3/templates/686726/output?key=ab0801834ab51edb6e8fee01dd4adc28f0dcd8a03ea2f2f17eeeb475b5c51ec8&workspace=demo.example@actualreports.com&signature=3123e0212c6e3d44b64738a77b0daf0781a1271439cab6301755cb4773a6446f&data=https://pdfgeneratorapi-web-assets.s3.amazonaws.com/data/bill_of_lading_data.json&format=pdf&output=I"
                    src={`${pdfUrl}/DTRS_Rental5airport_Template_PDF_Vehicle_Preview.pdf`}
                    width="100%"
                    height="600"
                  ></iframe>
                </div>
              </div>
              <div className="box box-solid bg-white-gradient">
                <div className="box-header">
                  {/* <img
                    src={`${process.env.PUBLIC_URL}/img/test.png`}
                    style={{ height: 100 }}
                  /> */}
                  <h4 style={{ color: "red" }}>โครง PDF ที่ใช้ใส่ข้อมูล</h4>
                  <iframe
                    // src="https://us1.pdfgeneratorapi.com/api/v3/templates/686726/output?key=ab0801834ab51edb6e8fee01dd4adc28f0dcd8a03ea2f2f17eeeb475b5c51ec8&workspace=demo.example@actualreports.com&signature=3123e0212c6e3d44b64738a77b0daf0781a1271439cab6301755cb4773a6446f&data=https://pdfgeneratorapi-web-assets.s3.amazonaws.com/data/bill_of_lading_data.json&format=pdf&output=I"
                    src={`${pdfUrl}/templates/DTRS_Rental5airport_Template_PDF_Vehicle.pdf`}
                    width="100%"
                    height="600"
                  ></iframe>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    );
  };



  return (
    <>
      <Formik
        initialValues={{
          airport: "BKK",
          time: 1,
          year: "66",
          brand: "",
          model: "",
        }}
        onSubmit={async (values, { setSubmitting }) => {
          let formData = new FormData();
          // header
          formData.append("airport", values.airport);
          formData.append("time", values.time);
          formData.append("year", values.year);
          formData.append("brand", values.brand);
          formData.append("model", values.model);
          //
          // footer
          formData.append("page", values.page);
          //

          formData.append("excel", values.file_excel);

          [...values.file_image].forEach((file, i) => {
            formData.append(`image-${i}`, values.file_image[i]);
          });

          let checkStatusCode = await httpClient.post(
            server.API_GENERATEPDF_DTRS_RENTAL5AIRPORT_VEHICLE_AUTOCREATE_URL,
            formData
          );

          if (checkStatusCode.data.result == "NOK") {
            MySwal.fire({
              icon: "error",
              title: "มีบางอย่างผิดพลาด",
              text: "ไม่สามารถสร้างไฟล์ PDF ได้ !",
              showConfirmButton: false,
            });
          } else {
            if (checkStatusCode.data.statusFoundXlsx == "notFoundXlsx") {
              MySwal.fire({
                icon: "error",
                title: "ชื่อ Herder Column ไม่ถูกตามรูปแบบ",
                html: `
                <p>Colum NameKey : ${checkStatusCode.data.nameXlsx.checkNameKey}</p>
                <p>Colum No : ${checkStatusCode.data.nameXlsx.checkNo}</p>
                <p>Colum SerialNo : ${checkStatusCode.data.nameXlsx.checkSerialNo}</p>
                <p>Colum Department : ${checkStatusCode.data.nameXlsx.checkDepartment}</p>`,
                showConfirmButton: false,
              });
            }
            if (
              checkStatusCode.data.statusFoundXlsx == "FoundXlsx" &&
              checkStatusCode.data.statusFoundImage == "notFoundImage" &&
              checkStatusCode.data.statusFoundImageCarregistration ==
              "FoundImageCarregistration"
            ) {
              MySwal.fire({
                icon: "error",
                title: "ชื่อรูปภาพ ไม่ตรงกันกับ Excel",
                html: `<h5>ไม่มีรูปภาพ เลขที่ : <b>${checkStatusCode.data.nameImage}</b> !</h5>`,
                showConfirmButton: false,
              });
            }
            if (
              checkStatusCode.data.statusFoundXlsx == "FoundXlsx" &&
              checkStatusCode.data.statusFoundImage == "FoundImage" &&
              checkStatusCode.data.statusFoundImageCarregistration ==
              "notFoundImageCarregistration"
            ) {
              MySwal.fire({
                icon: "error",
                title: "ชื่อรูปภาพทะเบียนรถ ไม่ตรงกันกับ Excel",
                html: `<h5>ไม่มีรูปภาพทะเบียนรถ เลขที่ : <b>${checkStatusCode.data.nameImageCarregistration}</b> !</h5>`,
                showConfirmButton: false,
              });
            }
            if (
              checkStatusCode.data.statusFoundImage == "notFoundImage" &&
              checkStatusCode.data.statusFoundImageCarregistration ==
              "notFoundImageCarregistration"
            ) {
              MySwal.fire({
                icon: "error",
                title: "ชื่อรูปภาพ และชื่อรูปภาพทะเบียนรถ ไม่ตรงกันกับ Excel",
                html: `<h5>ไม่มีรูปภาพ เลขที่ : <b>${checkStatusCode.data.nameImage}</b> !</h5><br /><h5>ไม่มีรูปภาพทะเบียนรถ เลขที่ : <b>${checkStatusCode.data.nameImageCarregistration}</b> !</h5>`,
                showConfirmButton: false,
              });
            }
            if (
              checkStatusCode.data.statusFoundXlsx == "FoundXlsx" &&
              checkStatusCode.data.statusFoundImage == "FoundImage" &&
              checkStatusCode.data.statusFoundImageCarregistration ==
              "FoundImageCarregistration"
            ) {
              let timerInterval;
              MySwal.fire({
                title: "ระบบกำลังสร้างไฟล์ PDF !",
                html: "จะเสร็จสินใน <b></b> มิลลิวินาที",
                timer: 10000,
                timerProgressBar: true,
                allowOutsideClick: false,
                didOpen: () => {
                  Swal.showLoading();
                  const b = Swal.getHtmlContainer().querySelector("b");
                  timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft();
                  }, 100);
                },
                willClose: () => {
                  if (checkStatusCode.data.result == "OK") {
                    clearInterval(timerInterval);
                  } else {
                    clearInterval(timerInterval);
                  }
                },
              }).then(async (result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                  // console.log(checkStatusCode);
                  if (checkStatusCode.data.result == "OK") {
                    MySwal.fire({
                      position: "top-end",
                      icon: "success",
                      title: "ระบบได้สร้างไฟล์ PDF ให้คุณเรียบร้อยแล้ว",
                      showConfirmButton: false,
                      timer: 4000,
                      allowOutsideClick: false,
                    }).then(async (result) => {
                      // navigate(0);
                      navigate(
                        "/home/generatePDF/dtrs_rental5airport/vehicle/download"
                      );
                    });
                  }
                }
              });
            }
          }
        }}
      >
        {(props) => showForm(props)}
      </Formik>
    </>
  );
}

export default AutocreateVehicle;
