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
      `/model/DTRS_Rental5Airport/Desktop/generatePDF/uploaded/templates/DTRS_Rental5airport_Template_PDF_Desktop.pdf`
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

    // const fontBytesWingdings2 = fs.readFileSync(
    //   path.join(__dirname, "/fonts/Wingdings2/WINGDNG2.TTF")
    // );
    // const fontWingdings2 = await document.embedFont(fontBytesWingdings2);

    const page_1 = document.getPage(0);

    // const numberPDF = "1";
    // const brandPDF = "dasd";
    // const modelPDF = "dasd";
    // const serialnumberPDF = "dasd";
    // const agencyPDF = "dasd";

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
        `/model/DTRS_Rental5Airport/Desktop/generatePDF/uploaded/data/${import_pdf.airportPDF}-DTRS-PM${import_pdf.timePDF}-${import_pdf.yearPDF}-Desktop-${import_pdf.number1PDF}-${import_pdf.number2PDF}-${import_pdf.number3PDF}-${import_pdf.number4PDF}-${import_pdf.number5PDF}-${import_pdf.number6PDF}.pdf`
      ),
      await document.save()
    );

    // localStorage = new LocalStorage("./scratch");
    // localStorage.setItem(
    //   "file_pdf_show",
    //   `${import_pdf.numberPDF}_DTRS_3_PreventiveMaintenanceReport_20230522.pdf`
    // );
    // fs.opendir(
    //   // Path of the directory
    //   path.join(
    //     process.cwd(),
    //     `/model/DTRS_Rental5Airport/DMK/HDTK/generatePDF/uploaded/data`
    //   ),

    //   // Options for modifying the operation
    //   { encoding: "utf8", bufferSize: 64 },

    //   // Callback with the error and returned
    //   // directory
    //   (err, dir) => {
    //     if (err) console.log("Error:", err);
    //     else {
    //       // Print the pathname of the directory
    //       console.log("Path of the directory:", dir.path);

    //       // Close the directory
    //       console.log("Closing the directory");
    //       dir.closeSync();
    //     }
    //   }
    // );

    let sendToroutes = {
      statusFoundFilePDF: statusFilePDF,
    };
    return sendToroutes;
  }

  if (statusFilePDF == "notFoundFilePDF") {
    // console.log("NOk");
    let sendToroutes = {
      statusFoundFilePDF: statusFilePDF,
    };
    return sendToroutes;
  }
}

// createPDF().catch((err) => console.log(err));
module.exports = { create };
