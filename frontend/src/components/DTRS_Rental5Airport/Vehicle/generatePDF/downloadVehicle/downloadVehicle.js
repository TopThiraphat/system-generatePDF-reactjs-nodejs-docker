import React, { Component } from "react";
//
import { httpClient } from "../../../../../utils/HttpClient";
import { server, pdfUrl, apiUrl } from "../../../../../utils/constants";
//
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function DownloadVehicle() {
  const MySwal = withReactContent(Swal);
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <section className="content-header">
          <h1>
            ดาวน์โหลด PDF ไฟล์
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
            <li className="active"> ดาวน์โหลด PDF ไฟล์</li>
          </ol>
        </section>
      </section>

      <section className="content">
        <div className="box">
          <div className="box-header">
            <h3 className="box-title">
              ดาวน์โหลด Report PDF DTRS Rental 5 Airport สำหรับ <b>Vehicle</b>
            </h3>
          </div>
          <div className="box-body">
            <a
              className="btn btn-block btn-social btn-bitbucket"
              onClick={async function () {
                let checkStatusCode = await httpClient.get(
                  server.API_GENERATEPDF_DTRS_RENTAL5AIRPORT_VEHICLE_CHECKFILE_DOWNLOAD_AUTOMATION_URL
                );
                if (checkStatusCode.data.result == "NOK") {
                  MySwal.fire({
                    icon: "error",
                    title: "มีบางอย่างผิดพลาด",
                    text: "ไม่สามารถดาวน์โหลดไฟล์ Automation PDF ได้ !",
                    showConfirmButton: false,
                  });
                } else {
                  window.location.href = `${apiUrl}${server.API_GENERATEPDF_DTRS_RENTAL5AIRPORT_VEHICLE_DOWNLOAD_AUTOMATION_URL}`;
                }
              }}
            >
              <i className="fa fa-file" /> ดาวน์โหลด ไฟล์ Automation Generate
              PDF
            </a>
            <a
              className="btn btn-block btn-social btn-dropbox"
              onClick={async function () {
                let checkStatusCode = await httpClient.get(
                  server.API_GENERATEPDF_DTRS_RENTAL5AIRPORT_VEHICLE_CHECKFILE_DOWNLOAD_URL
                );
                if (checkStatusCode.data.result == "NOK") {
                  MySwal.fire({
                    icon: "error",
                    title: "มีบางอย่างผิดพลาด",
                    text: "ไม่สามารถดาวน์โหลดไฟล์ PDF ได้ !",
                    showConfirmButton: false,
                  });
                } else {
                  window.location.href = `${apiUrl}${server.API_GENERATEPDF_DTRS_RENTAL5AIRPORT_VEHICLE_DOWNLOAD_URL}`;
                }
              }}
            >
              <i className="fa fa-file" /> ดาวน์โหลด ไฟล์ PDF
            </a>
            <a
              className="btn btn-block btn-social btn-facebook"
              onClick={async function () {
                let checkStatusCode = await httpClient.get(
                  server.API_GENERATEPDF_DTRS_RENTAL5AIRPORT_VEHICLE_CHECKFILE_DOWNLOAD_IMAGES_URL
                );
                if (checkStatusCode.data.result == "NOK") {
                  MySwal.fire({
                    icon: "error",
                    title: "มีบางอย่างผิดพลาด",
                    text: "ไม่สามารถดาวน์โหลดไฟล์ รูปภาพ ได้ !",
                    showConfirmButton: false,
                  });
                } else {
                  window.location.href = `${apiUrl}${server.API_GENERATEPDF_DTRS_RENTAL5AIRPORT_VEHICLE_DOWNLOAD_IMAGES_URL}`;
                }
              }}
            >
              <i className="fa fa-image" /> ดาวน์โหลด ไฟล์รูปภาพ
            </a>

            <br />
          </div>
        </div>
      </section>
    </div>
  );
}

export default DownloadVehicle;
