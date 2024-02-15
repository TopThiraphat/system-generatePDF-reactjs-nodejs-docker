const XLSX = require("xlsx");
const { PDFDocument, PDFForm, StandardFonts, PDFFont } = require("pdf-lib");
const path = require("path");
const fs = require("fs");
const { writeFileSync, readFileSync } = require("fs");
const fontkit = require("@pdf-lib/fontkit");

const { glob, globSync, globStream, globStreamSync, Glob } = require("glob");

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
  messagelocation1PDF_x,
  messagelocation1PDF_y,
  location1PDF_x,
  location1PDF_y,
  // image
  image1PDF_x,
  image1PDF_y,
  image1PDF_w,
  image1PDF_h,

  // Row 1 col 2
  number2PDF_x,
  number2PDF_y,
  messageSerialNumber2PDF_x,
  messageSerialNumber2PDF_y,
  serialNumber2PDF_x,
  serialNumber2PDF_y,
  messageAgency2PDF_x,
  messageAgency2PDF_y,
  agency2PDF_x,
  agency2PDF_y,
  messagelocation2PDF_x,
  messagelocation2PDF_y,
  location2PDF_x,
  location2PDF_y,
  // image
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
  messagelocation3PDF_x,
  messagelocation3PDF_y,
  location3PDF_x,
  location3PDF_y,
  // image
  image3PDF_x,
  image3PDF_y,
  image3PDF_w,
  image3PDF_h,

  // Row 2 col 2
  number4PDF_x,
  number4PDF_y,
  messageSerialNumber4PDF_x,
  messageSerialNumber4PDF_y,
  serialNumber4PDF_x,
  serialNumber4PDF_y,
  messageAgency4PDF_x,
  messageAgency4PDF_y,
  agency4PDF_x,
  agency4PDF_y,
  messagelocation4PDF_x,
  messagelocation4PDF_y,
  location4PDF_x,
  location4PDF_y,
  // image
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
  messagelocation5PDF_x,
  messagelocation5PDF_y,
  location5PDF_x,
  location5PDF_y,
  // image
  image5PDF_x,
  image5PDF_y,
  image5PDF_w,
  image5PDF_h,

  // Row 3 col 2
  number6PDF_x,
  number6PDF_y,
  messageSerialNumber6PDF_x,
  messageSerialNumber6PDF_y,
  serialNumber6PDF_x,
  serialNumber6PDF_y,
  messageAgency6PDF_x,
  messageAgency6PDF_y,
  agency6PDF_x,
  agency6PDF_y,
  messagelocation6PDF_x,
  messagelocation6PDF_y,
  location6PDF_x,
  location6PDF_y,
  // image
  image6PDF_x,
  image6PDF_y,
  image6PDF_w,
  image6PDF_h,
} = require("../../../../utils/constant_DTRS_Rental5Airport_Desktop");

async function autocreate(import_pdf) {
  let statusFilePDF = "FoundFilePDF";
  const checkfilesPDF = globSync(
    path.join(
      process.cwd(),
      `/model/DTRS_Rental5Airport/Desktop/generatePDF/uploaded/templates/DTRS_Rental5airport_Template_PDF_Desktop.pdf`
    )
  );
  let statusFileXlsx = "FoundFileXlsx";
  const checkfilesXlsx = globSync(
    path.join(
      process.cwd(),
      `/model/DTRS_Rental5Airport/Desktop/generatePDF/db_rental5airport_desktop.xlsx`
    )
  );

  if (checkfilesPDF[0] == null) {
    statusFilePDF = "notFoundFilePDF";
  }
  if (checkfilesXlsx[0] == null) {
    statusFileXlsx = "notFoundFileXlsx";
  }

  if (statusFilePDF == "FoundFilePDF" && statusFileXlsx == "FoundFileXlsx") {
    var workbook = XLSX.readFile(
      path.join(
        process.cwd(),
        `/model/DTRS_Rental5Airport/Desktop/generatePDF/db_rental5airport_desktop.xlsx`
      )
    );
    var sheet_name_list = workbook.SheetNames;
    var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

    var xlDataHeader = XLSX.utils.sheet_to_json(
      workbook.Sheets[sheet_name_list[0]],
      {
        header: 1,
      }
    );

    // Check Excel
    let statusFoundXlsx = "FoundXlsx";
    let checkXlsx = {
      checkNameKey: "ถูกต้อง",
      checkNo: "ถูกต้อง",
      checkSerialNo: "ถูกต้อง",
      checkDepartment: "ถูกต้อง",
    };
    if (xlDataHeader[0][0] != "No") {
      statusFoundXlsx = "notFoundXlsx";
      checkXlsx.checkNo = `ควรตั้งเป็น "No"`;
    }
    if (xlDataHeader[0][1] != "SerialNo") {
      statusFoundXlsx = "notFoundXlsx";
      checkXlsx.checkSerialNo = `ควรตั้งเป็น "SerialNo"`;
    }
    if (xlDataHeader[0][2] != "Department") {
      statusFoundXlsx = "notFoundXlsx";
      checkXlsx.checkDepartment = `ควรตั้งเป็น "Department"`;
    }
    if (xlDataHeader[0][4] != "NameKey") {
      statusFoundXlsx = "notFoundXlsx";
      checkXlsx.checkNameKey = `ควรตั้งเป็น "NameKey"`;
    }
    //

    var setData = {
      // header
      timePDF: "",
      yearPDF: "",
      brandPDF: "",
      modelPDF: "",
      //

      // image row 1
      number1PDF: "",
      serialnumber1PDF: "",
      agency1PDF: "",
      location1PDF: "",

      // image row 2
      number2PDF: "",
      serialnumber2PDF: "",
      agency2PDF: "",
      location2PDF: "",

      // image row 3
      number3PDF: "",
      serialnumber3PDF: "",
      agency3PDF: "",
      location3PDF: "",

      // image row 4
      number4PDF: "",
      serialnumber4PDF: "",
      agency4PDF: "",
      location4PDF: "",

      // image row 5
      number5PDF: "",
      serialnumber5PDF: "",
      agency5PDF: "",
      location5PDF: "",

      // image row 6
      number6PDF: "",
      serialnumber6PDF: "",
      agency6PDF: "",
      location6PDF: "",

      // footer
      pagePDF: "",
      ofPDF: "",
    };

    // Check Image with Excel
    let formData = new FormData();
    let statusFoundImage = "FoundImage";

    for (let countCheck = 0; countCheck < xlData.length; countCheck++) {
      const checkfiles = globSync(
        path.join(
          process.cwd(),
          `/model/DTRS_Rental5Airport/Desktop/generatePDF/uploaded/images/${import_pdf.airportPDF
          }-DTRS-PM${import_pdf.timePDF}-${import_pdf.yearPDF}-Desktop-${String(
            xlData[countCheck].No
          )}.jpg`
        )
      );

      if (checkfiles[0] == null) {
        statusFoundImage = "notFoundImage";
        formData.append("notFoundImage", `${String(xlData[countCheck].No)}`);
      }
    }
    let countPagePDF = 0;
    let sumofPDF = xlData.length / 6;
    if (statusFoundImage == "FoundImage") {
      // console.log("Ok");
      for (let i = 0; i < xlData.length;) {
        const document = await PDFDocument.load(
          readFileSync(
            path.join(
              process.cwd(),
              `/model/DTRS_Rental5Airport/Desktop/generatePDF/uploaded/templates/DTRS_Rental5airport_Template_PDF_Desktop.pdf`
            )
          )
        );
        document.registerFontkit(fontkit);
        const fontBytesTHSarabunBold = fs.readFileSync(
          path.join(__dirname, "/fonts/th-sarabun-psk/THSarabunBold.ttf")
        );
        const fontTHSarabunPSKBold = await document.embedFont(
          fontBytesTHSarabunBold
        );

        const fontBytesTHSarabun = fs.readFileSync(
          path.join(__dirname, "/fonts/th-sarabun-psk/THSarabun.ttf")
        );
        const fontTHSarabunPSK = await document.embedFont(fontBytesTHSarabun);

        const page_1 = document.getPage(0);

        // header
        setData.airportPDF = import_pdf.airportPDF;
        setData.timePDF = import_pdf.timePDF;
        setData.yearPDF = import_pdf.yearPDF;
        setData.brandPDF = String(import_pdf.brandPDF);
        setData.modelPDF = String(import_pdf.modelPDF);

        //

        // image row 1
        setData.number1PDF = String(xlData[i].No);
        setData.serialnumber1PDF = String(xlData[i].SerialNo);
        setData.agency1PDF = String(xlData[i].Department);
        setData.location1PDF = String(xlData[i].LocationDevice);

        //
        // image row 2
        i++;
        setData.number2PDF = String(xlData[i].No);
        setData.serialnumber2PDF = String(xlData[i].SerialNo);
        setData.agency2PDF = String(xlData[i].Department);
        setData.location2PDF = String(xlData[i].LocationDevice);

        //
        // image row 3
        i++;
        setData.number3PDF = String(xlData[i].No);
        setData.serialnumber3PDF = String(xlData[i].SerialNo);
        setData.agency3PDF = String(xlData[i].Department);
        setData.location3PDF = String(xlData[i].LocationDevice);

        //
        // image row 4
        i++;
        setData.number4PDF = String(xlData[i].No);
        setData.serialnumber4PDF = String(xlData[i].SerialNo);
        setData.agency4PDF = String(xlData[i].Department);
        setData.location4PDF = String(xlData[i].LocationDevice);

        //
        // image row 5
        i++;
        setData.number5PDF = String(xlData[i].No);
        setData.serialnumber5PDF = String(xlData[i].SerialNo);
        setData.agency5PDF = String(xlData[i].Department);
        setData.location5PDF = String(xlData[i].LocationDevice);

        //
        // image row 6
        i++;
        setData.number6PDF = String(xlData[i].No);
        setData.serialnumber6PDF = String(xlData[i].SerialNo);
        setData.agency6PDF = String(xlData[i].Department);
        setData.location6PDF = String(xlData[i].LocationDevice);

        //
        i++;

        // footer
        countPagePDF++;
        setData.pagePDF = String(countPagePDF);
        setData.ofPDF = String(sumofPDF);

        // header
        page_1.moveTo(brandPDF_x, brandPDF_y);
        page_1.drawText(setData.brandPDF, {
          font: fontTHSarabunPSKBold,
          size: 16,
        });
        page_1.moveTo(modelPDF_x, modelPDF_y);
        page_1.drawText(setData.modelPDF, {
          font: fontTHSarabunPSKBold,
          size: 16,
        });
        //
        // footer
        page_1.moveTo(pagePDF_x, pagePDF_Y);
        page_1.drawText(setData.pagePDF, {
          font: fontTHSarabunPSK,
          size: 14,
        });
        page_1.moveTo(ofPDF_x, ofPDF_y);
        page_1.drawText(setData.ofPDF, {
          font: fontTHSarabunPSK,
          size: 14,
        });

        setRow1(page_1, fontTHSarabunPSKBold, document, setData);
        setRow2(page_1, fontTHSarabunPSKBold, document, setData);
        setRow3(page_1, fontTHSarabunPSKBold, document, setData);

        writeFileSync(
          path.join(
            process.cwd(),
            `/model/DTRS_Rental5Airport/Desktop/generatePDF/uploaded/automations/${setData.airportPDF}-DTRS-PM${setData.timePDF}-${setData.yearPDF}-Desktop-${setData.number1PDF}-${setData.number2PDF}-${setData.number3PDF}-${setData.number4PDF}-${setData.number5PDF}-${setData.number6PDF}.pdf`
          ),
          await document.save()
        );
      }

      async function setRow1(page_1, fontTHSarabunPSKBold, document, setData) {
        // Row 1 col 1
        page_1.moveTo(number1PDF_x, number1PDF_y);
        page_1.drawText(setData.number1PDF, {
          font: fontTHSarabunPSKBold,
          size: 14,
        });
        page_1.moveTo(messageSerialNumber1PDF_x, messageSerialNumber1PDF_y);
        page_1.drawText(" Serial Number :", {
          font: fontTHSarabunPSKBold,
          size: 14,
        });
        page_1.moveTo(serialNumber1PDF_x, serialNumber1PDF_y);
        page_1.drawText(setData.serialnumber1PDF, {
          font: fontTHSarabunPSKBold,
          size: 14,
        });
        page_1.moveTo(messageAgency1PDF_x, messageAgency1PDF_y);
        page_1.drawText("หน่วยงาน :", {
          font: fontTHSarabunPSKBold,
          size: 14,
        });
        page_1.moveTo(agency1PDF_x, agency1PDF_y);
        page_1.drawText(setData.agency1PDF, {
          font: fontTHSarabunPSKBold,
          size: 14,
        });
        page_1.moveTo(messagelocation1PDF_x, messagelocation1PDF_y);
        page_1.drawText("สถานที่ :", {
          font: fontTHSarabunPSKBold,
          size: 14,
        });
        page_1.moveTo(location1PDF_x, location1PDF_y);
        page_1.drawText(setData.location1PDF, {
          font: fontTHSarabunPSKBold,
          size: 14,
        });

        const image_row1_col1 = await document.embedJpg(
          fs.readFileSync(
            path.join(
              process.cwd(),
              `/model/DTRS_Rental5Airport/Desktop/generatePDF/uploaded/images/${setData.airportPDF}-DTRS-PM${setData.timePDF}-${setData.yearPDF}-Desktop-${setData.number1PDF}.jpg`
            )
          )
        );
        page_1.drawImage(image_row1_col1, {
          x: image1PDF_x,
          y: image1PDF_y,
          width: image1PDF_w,
          height: image1PDF_h,
        });
        // Row 1 col 2
        page_1.moveTo(number2PDF_x, number2PDF_y);
        page_1.drawText(setData.number2PDF, {
          font: fontTHSarabunPSKBold,
          size: 14,
        });
        page_1.moveTo(messageSerialNumber2PDF_x, messageSerialNumber2PDF_y);
        page_1.drawText(" Serial Number :", {
          font: fontTHSarabunPSKBold,
          size: 14,
        });
        page_1.moveTo(serialNumber2PDF_x, serialNumber2PDF_y);
        page_1.drawText(setData.serialnumber2PDF, {
          font: fontTHSarabunPSKBold,
          size: 14,
        });
        page_1.moveTo(messageAgency2PDF_x, messageAgency2PDF_y);
        page_1.drawText("หน่วยงาน :", {
          font: fontTHSarabunPSKBold,
          size: 14,
        });
        page_1.moveTo(agency2PDF_x, agency2PDF_y);
        page_1.drawText(setData.agency2PDF, {
          font: fontTHSarabunPSKBold,
          size: 14,
        });
        page_1.moveTo(messagelocation2PDF_x, messagelocation2PDF_y);
        page_1.drawText("สถานที่ :", {
          font: fontTHSarabunPSKBold,
          size: 14,
        });
        page_1.moveTo(location2PDF_x, location2PDF_y);
        page_1.drawText(setData.location2PDF, {
          font: fontTHSarabunPSKBold,
          size: 14,
        });
        const image_row1_col2 = await document.embedJpg(
          fs.readFileSync(
            path.join(
              process.cwd(),
              `/model/DTRS_Rental5Airport/Desktop/generatePDF/uploaded/images/${setData.airportPDF}-DTRS-PM${setData.timePDF}-${setData.yearPDF}-Desktop-${setData.number2PDF}.jpg`
            )
          )
        );
        page_1.drawImage(image_row1_col2, {
          x: image2PDF_x,
          y: image2PDF_y,
          width: image2PDF_w,
          height: image2PDF_h,
        });
      }
      async function setRow2(page_1, fontTHSarabunPSKBold, document, setData) {
        // Row 2 col 1
        page_1.moveTo(number3PDF_x, number3PDF_y);
        page_1.drawText(setData.number3PDF, {
          font: fontTHSarabunPSKBold,
          size: 14,
        });
        page_1.moveTo(messageSerialNumber3PDF_x, messageSerialNumber3PDF_y);
        page_1.drawText(" Serial Number :", {
          font: fontTHSarabunPSKBold,
          size: 14,
        });
        page_1.moveTo(serialNumber3PDF_x, serialNumber3PDF_y);
        page_1.drawText(setData.serialnumber3PDF, {
          font: fontTHSarabunPSKBold,
          size: 14,
        });
        page_1.moveTo(messageAgency3PDF_x, messageAgency3PDF_y);
        page_1.drawText("หน่วยงาน :", {
          font: fontTHSarabunPSKBold,
          size: 14,
        });
        page_1.moveTo(agency3PDF_x, agency3PDF_y);
        page_1.drawText(setData.agency3PDF, {
          font: fontTHSarabunPSKBold,
          size: 14,
        });
        page_1.moveTo(messagelocation3PDF_x, messagelocation3PDF_y);
        page_1.drawText("สถานที่ :", {
          font: fontTHSarabunPSKBold,
          size: 14,
        });
        page_1.moveTo(location3PDF_x, location3PDF_y);
        page_1.drawText(setData.location3PDF, {
          font: fontTHSarabunPSKBold,
          size: 14,
        });

        const image_row2_col1 = await document.embedJpg(
          fs.readFileSync(
            path.join(
              process.cwd(),
              `/model/DTRS_Rental5Airport/Desktop/generatePDF/uploaded/images/${setData.airportPDF}-DTRS-PM${setData.timePDF}-${setData.yearPDF}-Desktop-${setData.number3PDF}.jpg`
            )
          )
        );
        page_1.drawImage(image_row2_col1, {
          x: image3PDF_x,
          y: image3PDF_y,
          width: image3PDF_w,
          height: image3PDF_h,
        });
        // Row 2 col 2
        page_1.moveTo(number4PDF_x, number4PDF_y);
        page_1.drawText(setData.number4PDF, {
          font: fontTHSarabunPSKBold,
          size: 14,
        });
        page_1.moveTo(messageSerialNumber4PDF_x, messageSerialNumber4PDF_y);
        page_1.drawText(" Serial Number :", {
          font: fontTHSarabunPSKBold,
          size: 14,
        });
        page_1.moveTo(serialNumber4PDF_x, serialNumber4PDF_y);
        page_1.drawText(setData.serialnumber4PDF, {
          font: fontTHSarabunPSKBold,
          size: 14,
        });
        page_1.moveTo(messageAgency4PDF_x, messageAgency4PDF_y);
        page_1.drawText("หน่วยงาน :", {
          font: fontTHSarabunPSKBold,
          size: 14,
        });
        page_1.moveTo(agency4PDF_x, agency4PDF_y);
        page_1.drawText(setData.agency4PDF, {
          font: fontTHSarabunPSKBold,
          size: 14,
        });
        page_1.moveTo(messagelocation4PDF_x, messagelocation4PDF_y);
        page_1.drawText("สถานที่ :", {
          font: fontTHSarabunPSKBold,
          size: 14,
        });
        page_1.moveTo(location4PDF_x, location4PDF_y);
        page_1.drawText(setData.location4PDF, {
          font: fontTHSarabunPSKBold,
          size: 14,
        });

        const image_row2_col2 = await document.embedJpg(
          fs.readFileSync(
            path.join(
              process.cwd(),
              `/model/DTRS_Rental5Airport/Desktop/generatePDF/uploaded/images/${setData.airportPDF}-DTRS-PM${setData.timePDF}-${setData.yearPDF}-Desktop-${setData.number4PDF}.jpg`
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
      async function setRow3(page_1, fontTHSarabunPSKBold, document, setData) {
        // Row 3 col 1
        page_1.moveTo(number5PDF_x, number5PDF_y);
        page_1.drawText(setData.number5PDF, {
          font: fontTHSarabunPSKBold,
          size: 14,
        });
        page_1.moveTo(messageSerialNumber5PDF_x, messageSerialNumber5PDF_y);
        page_1.drawText(" Serial Number :", {
          font: fontTHSarabunPSKBold,
          size: 14,
        });
        page_1.moveTo(serialNumber5PDF_x, serialNumber5PDF_y);
        page_1.drawText(setData.serialnumber5PDF, {
          font: fontTHSarabunPSKBold,
          size: 14,
        });
        page_1.moveTo(messageAgency5PDF_x, messageAgency5PDF_y);
        page_1.drawText("หน่วยงาน :", {
          font: fontTHSarabunPSKBold,
          size: 14,
        });
        page_1.moveTo(agency5PDF_x, agency5PDF_y);
        page_1.drawText(setData.agency5PDF, {
          font: fontTHSarabunPSKBold,
          size: 14,
        });
        page_1.moveTo(messagelocation5PDF_x, messagelocation5PDF_y);
        page_1.drawText("สถานที่ :", {
          font: fontTHSarabunPSKBold,
          size: 14,
        });
        page_1.moveTo(location5PDF_x, location5PDF_y);
        page_1.drawText(setData.location5PDF, {
          font: fontTHSarabunPSKBold,
          size: 14,
        });

        const image_row3_col1 = await document.embedJpg(
          fs.readFileSync(
            path.join(
              process.cwd(),
              `/model/DTRS_Rental5Airport/Desktop/generatePDF/uploaded/images/${setData.airportPDF}-DTRS-PM${setData.timePDF}-${setData.yearPDF}-Desktop-${setData.number5PDF}.jpg`
            )
          )
        );
        page_1.drawImage(image_row3_col1, {
          x: image5PDF_x,
          y: image5PDF_y,
          width: image5PDF_w,
          height: image5PDF_h,
        });
        // Row 3 col 2
        page_1.moveTo(number6PDF_x, number6PDF_y);
        page_1.drawText(setData.number6PDF, {
          font: fontTHSarabunPSKBold,
          size: 14,
        });
        page_1.moveTo(messageSerialNumber6PDF_x, messageSerialNumber6PDF_y);
        page_1.drawText(" Serial Number :", {
          font: fontTHSarabunPSKBold,
          size: 14,
        });
        page_1.moveTo(serialNumber6PDF_x, serialNumber6PDF_y);
        page_1.drawText(setData.serialnumber6PDF, {
          font: fontTHSarabunPSKBold,
          size: 14,
        });
        page_1.moveTo(messageAgency6PDF_x, messageAgency6PDF_y);
        page_1.drawText("หน่วยงาน :", {
          font: fontTHSarabunPSKBold,
          size: 14,
        });
        page_1.moveTo(agency6PDF_x, agency6PDF_y);
        page_1.drawText(setData.agency6PDF, {
          font: fontTHSarabunPSKBold,
          size: 14,
        });
        page_1.moveTo(messagelocation6PDF_x, messagelocation6PDF_y);
        page_1.drawText("สถานที่ :", {
          font: fontTHSarabunPSKBold,
          size: 14,
        });
        page_1.moveTo(location6PDF_x, location6PDF_y);
        page_1.drawText(setData.location6PDF, {
          font: fontTHSarabunPSKBold,
          size: 14,
        });

        const image_row3_col2 = await document.embedJpg(
          fs.readFileSync(
            path.join(
              process.cwd(),
              `/model/DTRS_Rental5Airport/Desktop/generatePDF/uploaded/images/${setData.airportPDF}-DTRS-PM${setData.timePDF}-${setData.yearPDF}-Desktop-${setData.number6PDF}.jpg`
            )
          )
        );
        page_1.drawImage(image_row3_col2, {
          x: image6PDF_x,
          y: image6PDF_y,
          width: image6PDF_w,
          height: image6PDF_h,
        });
      }

      let sendToroutes = {
        statusFoundImage: statusFoundImage,
        nameImage: formData,
        statusFoundXlsx: statusFoundXlsx,
        nameXlsx: checkXlsx,
      };
      return sendToroutes;
    }
    if (statusFoundImage == "notFoundImage") {
      // console.log("NOk");
      let sendToroutes = {
        statusFoundImage: statusFoundImage,
        nameImage: formData,
        statusFoundXlsx: statusFoundXlsx,
        nameXlsx: checkXlsx,
      };
      return sendToroutes;
    }
    //
  }
}

module.exports = { autocreate };
