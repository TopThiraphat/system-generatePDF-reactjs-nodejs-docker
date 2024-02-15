const { PDFDocument, PDFForm, StandardFonts, PDFFont } = require("pdf-lib");
const path = require("path");
const fs = require("fs");
const { writeFileSync, readFileSync } = require("fs");
const fontkit = require("@pdf-lib/fontkit");
const LocalStorage = require("node-localstorage").LocalStorage;
const { glob, globSync, globStream, globStreamSync, Glob } = require("glob");
//
const { pagePDF_1 } = require("./page/page1");

//
async function create(import_pdf) {
  let statusFilePDF = "FoundFilePDF";
  const checkfiles = globSync(
    path.join(
      process.cwd(),
      `/model/DTRS_Rental5Airport/HDTK/generatePDF/uploaded/templates/DTRS_Rental5airport_Template_PDF_HDTK.pdf`
    )
  );

  if (checkfiles[0] == null) {
    statusFilePDF = "notFoundFilePDF";
  }

  if (statusFilePDF == "FoundFilePDF") {
    const document = await PDFDocument.load(
      readFileSync(
        path.join(
          process.cwd(),
          `/model/DTRS_Rental5Airport/HDTK/generatePDF/uploaded/templates/DTRS_Rental5airport_Template_PDF_HDTK.pdf`
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
    await pagePDF_1(
      page_1,
      fontTHSarabunPSKBold,
      fontTHSarabunPSK,
      document,
      fs,
      path,
      import_pdf
    );

    writeFileSync(
      path.join(
        process.cwd(),
        `/model/DTRS_Rental5Airport/HDTK/generatePDF/uploaded/data/${import_pdf.airportPDF}-DTRS-PM${import_pdf.timePDF}-${import_pdf.yearPDF}-HDTK-${import_pdf.number1PDF}-${import_pdf.number2PDF}-${import_pdf.number3PDF}-${import_pdf.number4PDF}-${import_pdf.number5PDF}-${import_pdf.number6PDF}.pdf`
      ),
      await document.save()
    );

    let sendToroutes = {
      statusFoundFilePDF: statusFilePDF,
    };
    return sendToroutes;
  }

  if (statusFilePDF == "notFoundFilePDF") {
    let sendToroutes = {
      statusFoundFilePDF: statusFilePDF,
    };
    return sendToroutes;
  }
}

module.exports = { create };
