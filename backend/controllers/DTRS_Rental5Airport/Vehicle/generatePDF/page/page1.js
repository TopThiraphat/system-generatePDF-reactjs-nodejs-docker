const {
  // herder
  brandPDF_x,
  brandPDF_y,
  modelPDF_x,
  modelPDF_y,
  //
  // footer
  pagePDF_x,
  pagePDF_Y,
  ofPDF_x,
  ofPDF_y,
  //
  // Row 1 col 1
  number1PDF_x,
  number1PDF_y,
  messageSerialNumber1PDF_x,
  messageSerialNumber1PDF_y,
  serialNumber1PDF_x,
  serialNumber1PDF_y,
  messageAgency1PDF_x,
  messageAgency1PDF_y,
  agency1PDF_x,
  agency1PDF_y,
  image1PDF_x,
  image1PDF_y,
  image1PDF_w,
  image1PDF_h,
  // Row 1 col 2
  messageCarregistration1PDF_x,
  messageCarregistration1PDF_y,
  carregistration1PDF_x,
  carregistration1PDF_y,
  image2PDF_x,
  image2PDF_y,
  image2PDF_w,
  image2PDF_h,

  // Row 2 col 1
  number3PDF_x,
  number3PDF_y,
  messageSerialNumber3PDF_x,
  messageSerialNumber3PDF_y,
  serialNumber3PDF_x,
  serialNumber3PDF_y,
  messageAgency3PDF_x,
  messageAgency3PDF_y,
  agency3PDF_x,
  agency3PDF_y,
  image3PDF_x,
  image3PDF_y,
  image3PDF_w,
  image3PDF_h,

  // Row 2 col 2
  messageCarregistration2PDF_x,
  messageCarregistration2PDF_y,
  carregistration2PDF_x,
  carregistration2PDF_y,
  image4PDF_x,
  image4PDF_y,
  image4PDF_w,
  image4PDF_h,

  // Row 3 col 1
  number5PDF_x,
  number5PDF_y,
  messageSerialNumber5PDF_x,
  messageSerialNumber5PDF_y,
  serialNumber5PDF_x,
  serialNumber5PDF_y,
  messageAgency5PDF_x,
  messageAgency5PDF_y,
  agency5PDF_x,
  agency5PDF_y,
  image5PDF_x,
  image5PDF_y,
  image5PDF_w,
  image5PDF_h,
  // Row 3 col 2
  messageCarregistration3PDF_x,
  messageCarregistration3PDF_y,
  carregistration3PDF_x,
  carregistration3PDF_y,
  image6PDF_x,
  image6PDF_y,
  image6PDF_w,
  image6PDF_h,
} = require("../../../../../utils/constant_DTRS_Rental5Airport_Vehicle");

async function pagePDF_1(
  page_1,
  fontTHSarabunPSKBold,
  fontTHSarabunPSK,
  document,
  fs,
  path,
  import_pdf
) {
  // header
  page_1.moveTo(brandPDF_x, brandPDF_y);
  page_1.drawText(import_pdf.brandPDF, {
    font: fontTHSarabunPSKBold,
    size: 16,
  });
  page_1.moveTo(modelPDF_x, modelPDF_y);
  page_1.drawText(import_pdf.modelPDF, {
    font: fontTHSarabunPSKBold,
    size: 16,
  });
  //

  // footer
  page_1.moveTo(pagePDF_x, pagePDF_Y);
  page_1.drawText(import_pdf.pagePDF, {
    font: fontTHSarabunPSK,
    size: 14,
  });
  page_1.moveTo(ofPDF_x, ofPDF_y);
  page_1.drawText(import_pdf.ofPDF, {
    font: fontTHSarabunPSK,
    size: 14,
  });

  setRow1(page_1, fontTHSarabunPSKBold, document, fs, path, import_pdf);
  setRow2(page_1, fontTHSarabunPSKBold, document, fs, path, import_pdf);
  setRow3(page_1, fontTHSarabunPSKBold, document, fs, path, import_pdf);

  async function setRow1(
    page_1,
    fontTHSarabunPSKBold,
    document,
    fs,
    path,
    import_pdf
  ) {
    if (
      import_pdf.number1PDF != "" &&
      import_pdf.serialnumber1PDF != "" &&
      import_pdf.agency1PDF != "" &&
      import_pdf.sumImagePDF.image1 != "undefined"
    ) {
      // Row 1 col 1
      page_1.moveTo(number1PDF_x, number1PDF_y);
      page_1.drawText(import_pdf.number1PDF, {
        font: fontTHSarabunPSKBold,
        size: 14,
      });
      page_1.moveTo(messageSerialNumber1PDF_x, messageSerialNumber1PDF_y);
      page_1.drawText(" Serial Number :", {
        font: fontTHSarabunPSKBold,
        size: 14,
      });
      page_1.moveTo(serialNumber1PDF_x, serialNumber1PDF_y);
      page_1.drawText(import_pdf.serialnumber1PDF, {
        font: fontTHSarabunPSKBold,
        size: 14,
      });
      page_1.moveTo(messageAgency1PDF_x, messageAgency1PDF_y);
      page_1.drawText("หน่วยงาน :", {
        font: fontTHSarabunPSKBold,
        size: 14,
      });
      page_1.moveTo(agency1PDF_x, agency1PDF_y);
      page_1.drawText(import_pdf.agency1PDF, {
        font: fontTHSarabunPSKBold,
        size: 14,
      });
      const image_row1_col1 = await document.embedJpg(
        fs.readFileSync(
          path.join(
            process.cwd(),
            `/model/DTRS_Rental5Airport/Vehicle/generatePDF/uploaded/images/${import_pdf.sumImagePDF.image1}`
          )
        )
      );
      page_1.drawImage(image_row1_col1, {
        x: image1PDF_x,
        y: image1PDF_y,
        width: image1PDF_w,
        height: image1PDF_h,
      });
    }
    if (
      import_pdf.number2PDF != "" &&
      import_pdf.serialnumber2PDF != "" &&
      import_pdf.agency2PDF != "" &&
      import_pdf.sumImagePDF.image2 != "undefined"
    ) {
      // Row 1 col 2
      page_1.moveTo(messageCarregistration1PDF_x, messageCarregistration1PDF_y);
      page_1.drawText("ทะเบียนรถ : ", {
        font: fontTHSarabunPSKBold,
        size: 14,
      });
      page_1.moveTo(carregistration1PDF_x, carregistration1PDF_y);
      page_1.drawText(import_pdf.carregistration1PDF, {
        font: fontTHSarabunPSKBold,
        size: 14,
      });
      const image_row1_col2 = await document.embedJpg(
        fs.readFileSync(
          path.join(
            process.cwd(),
            `/model/DTRS_Rental5Airport/Vehicle/generatePDF/uploaded/images/${import_pdf.sumImagePDF.image2}`
          )
        )
      );
      page_1.drawImage(image_row1_col2, {
        x: image2PDF_x,
        y: image2PDF_y,
        width: image2PDF_w,
        height: image2PDF_h,
      });
      //
    }
  }

  async function setRow2(
    page_1,
    fontTHSarabunPSKBold,
    document,
    fs,
    path,
    import_pdf
  ) {
    if (
      import_pdf.number3PDF != "" &&
      import_pdf.serialnumber3PDF != "" &&
      import_pdf.agency3PDF != "" &&
      import_pdf.sumImagePDF.image3 != "undefined"
    ) {
      // Row 2 col 1
      page_1.moveTo(number3PDF_x, number3PDF_y);
      page_1.drawText(import_pdf.number3PDF, {
        font: fontTHSarabunPSKBold,
        size: 14,
      });
      page_1.moveTo(messageSerialNumber3PDF_x, messageSerialNumber3PDF_y);
      page_1.drawText(" Serial Number :", {
        font: fontTHSarabunPSKBold,
        size: 14,
      });
      page_1.moveTo(serialNumber3PDF_x, serialNumber3PDF_y);
      page_1.drawText(import_pdf.serialnumber3PDF, {
        font: fontTHSarabunPSKBold,
        size: 14,
      });
      page_1.moveTo(messageAgency3PDF_x, messageAgency3PDF_y);
      page_1.drawText("หน่วยงาน :", {
        font: fontTHSarabunPSKBold,
        size: 14,
      });
      page_1.moveTo(agency3PDF_x, agency3PDF_y);
      page_1.drawText(import_pdf.agency3PDF, {
        font: fontTHSarabunPSKBold,
        size: 14,
      });
      const image_row2_col1 = await document.embedJpg(
        fs.readFileSync(
          path.join(
            process.cwd(),
            `/model/DTRS_Rental5Airport/Vehicle/generatePDF/uploaded/images/${import_pdf.sumImagePDF.image3}`
          )
        )
      );
      page_1.drawImage(image_row2_col1, {
        x: image3PDF_x,
        y: image3PDF_y,
        width: image3PDF_w,
        height: image3PDF_h,
      });
    }
    if (
      import_pdf.number4PDF != "" &&
      import_pdf.serialnumber4PDF != "" &&
      import_pdf.agency4PDF != "" &&
      import_pdf.sumImagePDF.image4 != "undefined"
    ) {
      // Row 2 col 2
      page_1.moveTo(messageCarregistration2PDF_x, messageCarregistration2PDF_y);
      page_1.drawText("ทะเบียนรถ : ", {
        font: fontTHSarabunPSKBold,
        size: 14,
      });
      page_1.moveTo(carregistration2PDF_x, carregistration2PDF_y);
      page_1.drawText(import_pdf.carregistration2PDF, {
        font: fontTHSarabunPSKBold,
        size: 14,
      });

      const image_row2_col2 = await document.embedJpg(
        fs.readFileSync(
          path.join(
            process.cwd(),
            `/model/DTRS_Rental5Airport/Vehicle/generatePDF/uploaded/images/${import_pdf.sumImagePDF.image4}`
          )
        )
      );
      page_1.drawImage(image_row2_col2, {
        x: image4PDF_x,
        y: image4PDF_y,
        width: image4PDF_w,
        height: image4PDF_h,
      });
    }
  }

  async function setRow3(
    page_1,
    fontTHSarabunPSKBold,
    document,
    fs,
    path,
    import_pdf
  ) {
    if (
      import_pdf.number5PDF != "" &&
      import_pdf.serialnumber5PDF != "" &&
      import_pdf.agency5PDF != "" &&
      import_pdf.sumImagePDF.image5 != "undefined"
    ) {
      // Row 3 col 1
      page_1.moveTo(number5PDF_x, number5PDF_y);
      page_1.drawText(import_pdf.number5PDF, {
        font: fontTHSarabunPSKBold,
        size: 14,
      });
      page_1.moveTo(messageSerialNumber5PDF_x, messageSerialNumber5PDF_y);
      page_1.drawText(" Serial Number :", {
        font: fontTHSarabunPSKBold,
        size: 14,
      });
      page_1.moveTo(serialNumber5PDF_x, serialNumber5PDF_y);
      page_1.drawText(import_pdf.serialnumber5PDF, {
        font: fontTHSarabunPSKBold,
        size: 14,
      });
      page_1.moveTo(messageAgency5PDF_x, messageAgency5PDF_y);
      page_1.drawText("หน่วยงาน :", {
        font: fontTHSarabunPSKBold,
        size: 14,
      });
      page_1.moveTo(agency5PDF_x, agency5PDF_y);
      page_1.drawText(import_pdf.agency5PDF, {
        font: fontTHSarabunPSKBold,
        size: 14,
      });
      const image_row3_col1 = await document.embedJpg(
        fs.readFileSync(
          path.join(
            process.cwd(),
            `/model/DTRS_Rental5Airport/Vehicle/generatePDF/uploaded/images/${import_pdf.sumImagePDF.image5}`
          )
        )
      );
      page_1.drawImage(image_row3_col1, {
        x: image5PDF_x,
        y: image5PDF_y,
        width: image5PDF_w,
        height: image5PDF_h,
      });
    }
    if (
      import_pdf.number6PDF != "" &&
      import_pdf.serialnumber6PDF != "" &&
      import_pdf.agency6PDF != "" &&
      import_pdf.sumImagePDF.image6 != "undefined"
    ) {
      // Row 3 col 1

      page_1.moveTo(messageCarregistration3PDF_x, messageCarregistration3PDF_y);
      page_1.drawText("ทะเบียนรถ : ", {
        font: fontTHSarabunPSKBold,
        size: 14,
      });
      page_1.moveTo(carregistration3PDF_x, carregistration3PDF_y);
      page_1.drawText(import_pdf.carregistration3PDF, {
        font: fontTHSarabunPSKBold,
        size: 14,
      });
      const image_row3_col2 = await document.embedJpg(
        fs.readFileSync(
          path.join(
            process.cwd(),
            `/model/DTRS_Rental5Airport/Vehicle/generatePDF/uploaded/images/${import_pdf.sumImagePDF.image6}`
          )
        )
      );
      page_1.drawImage(image_row3_col2, {
        x: image6PDF_x,
        y: image6PDF_y,
        width: image6PDF_w,
        height: image6PDF_h,
      });
      //
    }
  }
}

module.exports = { pagePDF_1 };
