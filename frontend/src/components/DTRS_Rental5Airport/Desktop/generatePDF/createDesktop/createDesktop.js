import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import Nopreview from "../../../../../no-preview.jpg";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
//
import { httpClient } from "../../../../../utils/HttpClient";
import { server, pdfUrl } from "../../../../../utils/constants";
//

function CreateDesktop() {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  const [row1col2, setrow1col2] = useState(false);
  const [row2col1, setrow2col1] = useState(false);
  const [row2col2, setrow2col2] = useState(false);
  const [row3col1, setrow3col1] = useState(false);
  const [row3col2, setrow3col2] = useState(false);

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
            สร้างไฟล์ PDF
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
            <li className="active">สร้างไฟล์ PDF สำหรับ Report Desktop</li>
          </ol>
        </section>
        <section className="content">
          <div className="row">
            <section className="col-lg-7 connectedSortable">
              <div className="box box-info">
                <div className="box-header">
                  {/* <i className="fa fa-envelope" /> */}
                  <h3 className="box-title">
                    ฟอร์มสร้างไฟล์ PDF สำหรับ Report Desktop
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
                <div className="box-header">
                  <a
                    href="/home/generatePDF/dtrs_rental5airport/desktop/autocreate"
                    className="btn btn-primary btn-sm"
                    type="button"
                  >
                    {" "}
                    ระบบอัตโนมัติ
                  </a>
                </div>

                <hr />
                <div className="box-body">
                  <div className="form-group">
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          name="optionsRadios"
                          id="optionsRadios1"
                          defaultValue="option1"
                          defaultChecked
                          onClick={function () {
                            setrow1col2(false);
                            setrow2col1(false);
                            setrow2col2(false);
                            setrow3col1(false);
                            setrow3col2(false);

                            MySwal.fire({
                              position: "top-end",
                              icon: "success",
                              title: "ระบบได้เพิ่มช่อง 1 ให้คุณเรียบร้อยแล้ว",
                              showConfirmButton: false,
                              timer: 4000,
                              allowOutsideClick: false,
                            });
                          }}
                        />
                        เพิ่ม 1 ช่อง
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          name="optionsRadios"
                          id="optionsRadios1"
                          defaultValue="option1"
                          onClick={function () {
                            setrow1col2(true);
                            setrow2col1(false);
                            setrow2col2(false);
                            setrow3col1(false);
                            setrow3col2(false);

                            MySwal.fire({
                              position: "top-end",
                              icon: "success",
                              title: "ระบบได้เพิ่ม 2 ช่องให้คุณเรียบร้อยแล้ว",
                              showConfirmButton: false,
                              timer: 4000,
                              allowOutsideClick: false,
                            });
                          }}
                        />
                        เพิ่ม 2 ช่อง
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          name="optionsRadios"
                          id="optionsRadios2"
                          defaultValue="option2"
                          onClick={function () {
                            setrow1col2(true);
                            setrow2col1(true);
                            setrow2col2(false);
                            setrow3col1(false);
                            setrow3col2(false);

                            MySwal.fire({
                              position: "top-end",
                              icon: "success",
                              title: "ระบบได้เพิ่ม 3 ช่องให้คุณเรียบร้อยแล้ว",
                              showConfirmButton: false,
                              timer: 4000,
                              allowOutsideClick: false,
                            });
                          }}
                        />
                        เพิ่ม 3 ช่อง
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          name="optionsRadios"
                          id="optionsRadios3"
                          defaultValue="option3"
                          onClick={function () {
                            setrow1col2(true);
                            setrow2col1(true);
                            setrow2col2(true);
                            setrow3col1(false);
                            setrow3col2(false);

                            MySwal.fire({
                              position: "top-end",
                              icon: "success",
                              title: "ระบบได้เพิ่ม 4 ช่องให้คุณเรียบร้อยแล้ว",
                              showConfirmButton: false,
                              timer: 4000,
                              allowOutsideClick: false,
                            });
                          }}
                        />
                        เพิ่ม 4 ช่อง
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          name="optionsRadios"
                          id="optionsRadios3"
                          defaultValue="option3"
                          onClick={function () {
                            setrow1col2(true);
                            setrow2col1(true);
                            setrow2col2(true);
                            setrow3col1(true);
                            setrow3col2(false);

                            MySwal.fire({
                              position: "top-end",
                              icon: "success",
                              title: "ระบบได้เพิ่ม 5 ช่องให้คุณเรียบร้อยแล้ว",
                              showConfirmButton: false,
                              timer: 4000,
                              allowOutsideClick: false,
                            });
                          }}
                        />
                        เพิ่ม 5 ช่อง
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          name="optionsRadios"
                          id="optionsRadios3"
                          defaultValue="option3"
                          onClick={function () {
                            setrow1col2(true);
                            setrow2col1(true);
                            setrow2col2(true);
                            setrow3col1(true);
                            setrow3col2(true);

                            MySwal.fire({
                              position: "top-end",
                              icon: "success",
                              title: "ระบบได้เพิ่ม 6 ช่องให้คุณเรียบร้อยแล้ว",
                              showConfirmButton: false,
                              timer: 4000,
                              allowOutsideClick: false,
                            });
                          }}
                        />
                        เพิ่ม 6 ช่อง
                      </label>
                    </div>
                  </div>
                  <hr />
                  <form action="/pdf/add" onSubmit={handleSubmit}>
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

                    <hr />
                    <h4>
                      <b className="text-danger">ช่องที่ 1</b>
                    </h4>
                    <div className="form-group">
                      <p>ลำดับที่ : </p>
                      <input
                        type="number"
                        className="form-control"
                        name="number1"
                        placeholder="ใส่ลำดับที่อุปกรณ์"
                        onChange={handleChange}
                        value={values.number1}
                      />
                    </div>
                    <div className="form-group">
                      <p>Serial Number : </p>
                      <input
                        type="text"
                        className="form-control"
                        name="serialnumber1"
                        placeholder="ใส่ Serial Number อุปกรณ์"
                        onChange={handleChange}
                        value={values.serialnumber1}
                      />
                    </div>
                    <div className="form-group">
                      <p>หน่วยงาน : </p>
                      <input
                        type="text"
                        className="form-control"
                        name="agency1"
                        placeholder="ใส่หน่วยงาน"
                        onChange={handleChange}
                        value={values.agency1}
                      />
                    </div>
                    <div className="form-group">
                      <p>สถานที่ : </p>
                      <input
                        type="text"
                        className="form-control"
                        name="location1"
                        placeholder="ใส่สถานที่"
                        onChange={handleChange}
                        value={values.location1}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <p>
                        <b>รูปภาพประกอบการตรวจสอบ (รูปภาพที่ 1)</b>
                      </p>
                      <input
                        onChange={(e) => {
                          e.preventDefault();
                          setFieldValue("file1", e.target.files[0]); // for upload
                          setFieldValue(
                            "file1_obj",
                            URL.createObjectURL(e.target.files[0])
                          ); // for preview image
                        }}
                        type="file"
                        // alt="Submit"
                        width={48}
                        height={48}
                        className="form-control"
                        name="image1"
                        // multiple
                        accept=".jpg"
                      />
                      {showPreviewImage1(values)}
                    </div>
                    <hr />

                    {row1col2 ? (
                      <>
                        <h4>
                          <b className="text-danger">ช่องที่ 2</b>
                        </h4>
                        <div className="form-group">
                          <p>ลำดับที่ : </p>
                          <input
                            type="number"
                            className="form-control"
                            name="number2"
                            placeholder="ใส่ลำดับที่อุปกรณ์"
                            onChange={handleChange}
                            value={values.number2}
                          />
                        </div>
                        <div className="form-group">
                          <p>Serial Number : </p>
                          <input
                            type="text"
                            className="form-control"
                            name="serialnumber2"
                            placeholder="ใส่ Serial Number อุปกรณ์"
                            onChange={handleChange}
                            value={values.serialnumber2}
                          />
                        </div>
                        <div className="form-group">
                          <p>หน่วยงาน : </p>
                          <input
                            type="text"
                            className="form-control"
                            name="agency2"
                            placeholder="ใส่หน่วยงาน"
                            onChange={handleChange}
                            value={values.agency2}
                          />
                        </div>
                        <div className="form-group">
                          <p>สถานที่ : </p>
                          <input
                            type="text"
                            className="form-control"
                            name="location2"
                            placeholder="ใส่สถานที่"
                            onChange={handleChange}
                            value={values.location2}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <p>
                            <b>รูปภาพประกอบการตรวจสอบ (รูปภาพที่ 2)</b>
                          </p>
                          <input
                            onChange={(e) => {
                              e.preventDefault();
                              setFieldValue("file2", e.target.files[0]); // for upload
                              setFieldValue(
                                "file2_obj",
                                URL.createObjectURL(e.target.files[0])
                              ); // for preview image
                            }}
                            type="file"
                            // alt="Submit"
                            width={48}
                            height={48}
                            className="form-control"
                            name="image2"
                            // multiple
                            accept=".jpg"
                          />
                          {showPreviewImage2(values)}
                        </div>
                      </>
                    ) : (
                      <></>
                    )}

                    {row2col1 ? (
                      <>
                        <hr />
                        <h4>
                          <b className="text-danger">ช่องที่ 3</b>
                        </h4>
                        <div className="form-group">
                          <p>ลำดับที่ : </p>
                          <input
                            type="number"
                            className="form-control"
                            name="number3"
                            placeholder="ใส่ลำดับที่อุปกรณ์"
                            onChange={handleChange}
                            value={values.number3}
                          />
                        </div>
                        <div className="form-group">
                          <p>Serial Number : </p>
                          <input
                            type="text"
                            className="form-control"
                            name="serialnumber3"
                            placeholder="ใส่ Serial Number อุปกรณ์"
                            onChange={handleChange}
                            value={values.serialnumber3}
                          />
                        </div>
                        <div className="form-group">
                          <p>หน่วยงาน : </p>
                          <input
                            type="text"
                            className="form-control"
                            name="agency3"
                            placeholder="ใส่หน่วยงาน"
                            onChange={handleChange}
                            value={values.agency3}
                          />
                        </div>
                        <div className="form-group">
                          <p>สถานที่ : </p>
                          <input
                            type="text"
                            className="form-control"
                            name="location3"
                            placeholder="ใส่สถานที่"
                            onChange={handleChange}
                            value={values.location3}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <p>
                            <b>รูปภาพประกอบการตรวจสอบ (รูปภาพที่ 3)</b>
                          </p>
                          <input
                            onChange={(e) => {
                              e.preventDefault();
                              setFieldValue("file3", e.target.files[0]); // for upload
                              setFieldValue(
                                "file3_obj",
                                URL.createObjectURL(e.target.files[0])
                              ); // for preview image
                            }}
                            type="file"
                            // alt="Submit"
                            width={48}
                            height={48}
                            className="form-control"
                            name="image3"
                            // multiple
                            accept=".jpg"
                          />
                          {showPreviewImage3(values)}
                        </div>
                      </>
                    ) : (
                      <></>
                    )}

                    {row2col2 ? (
                      <>
                        <hr />
                        <h4>
                          <b className="text-danger">ช่องที่ 4</b>
                        </h4>
                        <div className="form-group">
                          <p>ลำดับที่ : </p>
                          <input
                            type="number"
                            className="form-control"
                            name="number4"
                            placeholder="ใส่ลำดับที่อุปกรณ์"
                            onChange={handleChange}
                            value={values.number4}
                          />
                        </div>
                        <div className="form-group">
                          <p>Serial Number : </p>
                          <input
                            type="text"
                            className="form-control"
                            name="serialnumber4"
                            placeholder="ใส่ Serial Number อุปกรณ์"
                            onChange={handleChange}
                            value={values.serialnumber4}
                          />
                        </div>
                        <div className="form-group">
                          <p>หน่วยงาน : </p>
                          <input
                            type="text"
                            className="form-control"
                            name="agency4"
                            placeholder="ใส่หน่วยงาน"
                            onChange={handleChange}
                            value={values.agency4}
                          />
                        </div>
                        <div className="form-group">
                          <p>สถานที่ : </p>
                          <input
                            type="text"
                            className="form-control"
                            name="location4"
                            placeholder="ใส่สถานที่"
                            onChange={handleChange}
                            value={values.location4}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <p>
                            <b>รูปภาพประกอบการตรวจสอบ (รูปภาพที่ 4)</b>
                          </p>
                          <input
                            onChange={(e) => {
                              e.preventDefault();
                              setFieldValue("file4", e.target.files[0]); // for upload
                              setFieldValue(
                                "file4_obj",
                                URL.createObjectURL(e.target.files[0])
                              ); // for preview image
                            }}
                            type="file"
                            // alt="Submit"
                            width={48}
                            height={48}
                            className="form-control"
                            name="image4"
                            // multiple
                            accept=".jpg"
                          />
                          {showPreviewImage4(values)}
                        </div>
                      </>
                    ) : (
                      <></>
                    )}

                    {row3col1 ? (
                      <>
                        <hr />
                        <h4>
                          <b className="text-danger">ช่องที่ 5</b>
                        </h4>
                        <div className="form-group">
                          <p>ลำดับที่ : </p>
                          <input
                            type="number"
                            className="form-control"
                            name="number5"
                            placeholder="ใส่ลำดับที่อุปกรณ์"
                            onChange={handleChange}
                            value={values.number5}
                          />
                        </div>
                        <div className="form-group">
                          <p>Serial Number : </p>
                          <input
                            type="text"
                            className="form-control"
                            name="serialnumber5"
                            placeholder="ใส่ Serial Number อุปกรณ์"
                            onChange={handleChange}
                            value={values.serialnumber5}
                          />
                        </div>
                        <div className="form-group">
                          <p>หน่วยงาน : </p>
                          <input
                            type="text"
                            className="form-control"
                            name="agency5"
                            placeholder="ใส่หน่วยงาน"
                            onChange={handleChange}
                            value={values.agency5}
                          />
                        </div>
                        <div className="form-group">
                          <p>สถานที่ : </p>
                          <input
                            type="text"
                            className="form-control"
                            name="location5"
                            placeholder="ใส่สถานที่"
                            onChange={handleChange}
                            value={values.location5}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <p>
                            <b>รูปภาพประกอบการตรวจสอบ (รูปภาพที่ 5)</b>
                          </p>
                          <input
                            onChange={(e) => {
                              e.preventDefault();
                              setFieldValue("file5", e.target.files[0]); // for upload
                              setFieldValue(
                                "file5_obj",
                                URL.createObjectURL(e.target.files[0])
                              ); // for preview image
                            }}
                            type="file"
                            // alt="Submit"
                            width={48}
                            height={48}
                            className="form-control"
                            name="image5"
                            // multiple
                            accept=".jpg"
                          />
                          {showPreviewImage5(values)}
                        </div>
                      </>
                    ) : (
                      <></>
                    )}

                    {row3col2 ? (
                      <>
                        <hr />
                        <h4>
                          <b className="text-danger">ช่องที่ 6</b>
                        </h4>
                        <div className="form-group">
                          <p>ลำดับที่ : </p>
                          <input
                            type="number"
                            className="form-control"
                            name="number6"
                            placeholder="ใส่ลำดับที่อุปกรณ์"
                            onChange={handleChange}
                            value={values.number6}
                          />
                        </div>
                        <div className="form-group">
                          <p>Serial Number : </p>
                          <input
                            type="text"
                            className="form-control"
                            name="serialnumber6"
                            placeholder="ใส่ Serial Number อุปกรณ์"
                            onChange={handleChange}
                            value={values.serialnumber6}
                          />
                        </div>
                        <div className="form-group">
                          <p>หน่วยงาน : </p>
                          <input
                            type="text"
                            className="form-control"
                            name="agency6"
                            placeholder="ใส่หน่วยงาน"
                            onChange={handleChange}
                            value={values.agency6}
                          />
                        </div>
                        <div className="form-group">
                          <p>สถานที่ : </p>
                          <input
                            type="text"
                            className="form-control"
                            name="location6"
                            placeholder="ใส่สถานที่"
                            onChange={handleChange}
                            value={values.location6}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <p>
                            <b>รูปภาพประกอบการตรวจสอบ (รูปภาพที่ 6)</b>
                          </p>
                          <input
                            onChange={(e) => {
                              e.preventDefault();
                              setFieldValue("file6", e.target.files[0]); // for upload
                              setFieldValue(
                                "file6_obj",
                                URL.createObjectURL(e.target.files[0])
                              ); // for preview image
                            }}
                            type="file"
                            // alt="Submit"
                            width={48}
                            height={48}
                            className="form-control"
                            name="image6"
                            // multiple
                            accept=".jpg"
                          />

                          {showPreviewImage6(values)}
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                    <hr />
                    <div className="form-group">
                      <p>หน้าที่ : </p>
                      <input
                        type="number"
                        className="form-control"
                        name="page"
                        placeholder="ใส่หน้าที่"
                        onChange={handleChange}
                        value={values.page}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <p>จาก :</p>
                      <input
                        type="number"
                        className="form-control"
                        name="of"
                        placeholder="ใส่จาก"
                        onChange={handleChange}
                        value={values.of}
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
                  <h4 style={{ color: "red" }}>ตัวอย่าง ตำแหน่งการใส่ข้อมูล</h4>
                  <iframe
                    // src="https://us1.pdfgeneratorapi.com/api/v3/templates/686726/output?key=ab0801834ab51edb6e8fee01dd4adc28f0dcd8a03ea2f2f17eeeb475b5c51ec8&workspace=demo.example@actualreports.com&signature=3123e0212c6e3d44b64738a77b0daf0781a1271439cab6301755cb4773a6446f&data=https://pdfgeneratorapi-web-assets.s3.amazonaws.com/data/bill_of_lading_data.json&format=pdf&output=I"
                    src={`${pdfUrl}/DTRS_Rental5airport_Template_PDF_Desktop_Preview.pdf`}
                    width="100%"
                    height="600"
                  ></iframe>
                </div>
              </div>
              <div className="box box-solid bg-white-gradient">
                <div className="box-header">
                  <h4 style={{ color: "red" }}>โครง PDF ที่ใช้ใส่ข้อมูล</h4>
                  <iframe
                    // src="https://us1.pdfgeneratorapi.com/api/v3/templates/686726/output?key=ab0801834ab51edb6e8fee01dd4adc28f0dcd8a03ea2f2f17eeeb475b5c51ec8&workspace=demo.example@actualreports.com&signature=3123e0212c6e3d44b64738a77b0daf0781a1271439cab6301755cb4773a6446f&data=https://pdfgeneratorapi-web-assets.s3.amazonaws.com/data/bill_of_lading_data.json&format=pdf&output=I"
                    src={`${pdfUrl}/templates/DTRS_Rental5airport_Template_PDF_Desktop.pdf`}
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

  const showPreviewImage1 = (values) => {
    if (values.file1_obj != null) {
      return (
        <>
          <br />
          <img src={values.file1_obj} style={{ height: 420 }} />
        </>
      );
    } else {
      return (
        <>
          <br />
          <img src={Nopreview} style={{ height: 420, width: 350 }} />
        </>
      );
    }
  };
  const showPreviewImage2 = (values) => {
    if (values.file2_obj != null) {
      return (
        <>
          <br />
          <img src={values.file2_obj} style={{ height: 420 }} />
        </>
      );
    } else {
      return (
        <>
          <br />
          <img src={Nopreview} style={{ height: 420, width: 350 }} />
        </>
      );
    }
  };
  const showPreviewImage3 = (values) => {
    if (values.file3_obj != null) {
      return (
        <>
          <br />
          <img src={values.file3_obj} style={{ height: 420 }} />
        </>
      );
    } else {
      return (
        <>
          <br />
          <img src={Nopreview} style={{ height: 420, width: 350 }} />
        </>
      );
    }
  };
  const showPreviewImage4 = (values) => {
    if (values.file4_obj != null) {
      return (
        <>
          <br />
          <img src={values.file4_obj} style={{ height: 420 }} />
        </>
      );
    } else {
      return (
        <>
          <br />
          <img src={Nopreview} style={{ height: 420, width: 350 }} />
        </>
      );
    }
  };
  const showPreviewImage5 = (values) => {
    if (values.file5_obj != null) {
      return (
        <>
          <br />
          <img src={values.file5_obj} style={{ height: 420 }} />
        </>
      );
    } else {
      return (
        <>
          <br />
          <img src={Nopreview} style={{ height: 420, width: 350 }} />
        </>
      );
    }
  };
  const showPreviewImage6 = (values) => {
    if (values.file6_obj != null) {
      return (
        <>
          <br />
          <img src={values.file6_obj} style={{ height: 420 }} />
        </>
      );
    } else {
      return (
        <>
          <br />
          <img src={Nopreview} style={{ height: 420, width: 350 }} />
        </>
      );
    }
  };

  return (
    <Formik
      initialValues={{
        // header
        airport: "BKK",
        time: 1,
        year: "66",
        brand: "",
        model: "",

        // image row 1
        number1: "",
        serialnumber1: "",
        agency1: "",
        location1: "",

        //
        // image row 2
        number2: "",
        serialnumber2: "",
        agency2: "",
        location2: "",

        //
        // image row 3
        number3: "",
        serialnumber3: "",
        agency3: "",
        location3: "",

        //

        // image row 4
        number4: "",
        serialnumber4: "",
        agency4: "",
        location4: "",

        //
        // image row 5
        number5: "",
        serialnumber5: "",
        agency5: "",
        location5: "",

        //
        // image row 6
        number6: "",
        serialnumber6: "",
        agency6: "",
        location6: "",

        // footer
        page: 1,
        of: 1,
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

        // image row 1
        formData.append("number1", values.number1);
        formData.append("serialnumber1", values.serialnumber1);
        formData.append("agency1", values.agency1);
        formData.append("location1", values.location1);
        formData.append("image1", values.file1);
        //

        // image row 2
        formData.append("number2", values.number2);
        formData.append("serialnumber2", values.serialnumber2);
        formData.append("agency2", values.agency2);
        formData.append("location2", values.location2);
        formData.append("image2", values.file2);
        //

        // image row 3
        formData.append("number3", values.number3);
        formData.append("serialnumber3", values.serialnumber3);
        formData.append("agency3", values.agency3);
        formData.append("location3", values.location3);
        formData.append("image3", values.file3);
        //

        // image row 4
        formData.append("number4", values.number4);
        formData.append("serialnumber4", values.serialnumber4);
        formData.append("agency4", values.agency4);
        formData.append("location4", values.location4);
        formData.append("image4", values.file4);
        //

        // image row 5
        formData.append("number5", values.number5);
        formData.append("serialnumber5", values.serialnumber5);
        formData.append("agency5", values.agency5);
        formData.append("location5", values.location5);
        formData.append("image5", values.file5);
        //

        // image row 6
        formData.append("number6", values.number6);
        formData.append("serialnumber6", values.serialnumber6);
        formData.append("agency6", values.agency6);
        formData.append("location6", values.location6);
        formData.append("image6", values.file6);
        //

        // footer
        formData.append("page", values.page);
        formData.append("of", values.of);

        let checkStatusCode = await httpClient.post(
          server.API_GENERATEPDF_DTRS_RENTAL5AIRPORT_DESKTOP_CREATE_URL,
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
          let timerInterval;
          MySwal.fire({
            title: "ระบบกำลังสร้างไฟล์ PDF !",
            html: "จะเสร็จสินใน <b></b> มิลลิวินาที",
            timer: 2000,
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
                    "/home/generatePDF/dtrs_rental5airport/desktop/download"
                  );
                });
              }
            }
          });
        }
      }}
    >
      {(props) => showForm(props)}
    </Formik>
  );
}

export default CreateDesktop;
