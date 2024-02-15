const express = require("express");
const router = express.Router();
const formidable = require("formidable");
const fs = require("fs-extra");
const path = require("path");
//
const findRemoveSync = require("find-remove");
const compressing = require("compressing");
const { glob, globSync, globStream, globStreamSync, Glob } = require("glob");
//

//
const constants = require("../../utils/constant");
const {
  create,
} = require("../../controllers/DTRS_Rental5Airport/Desktop/generatePDF/create");

const {
  autocreate,
} = require("../../controllers/DTRS_Rental5Airport/Desktop/generatePDF/autocreate");
//

// Upload Image
uploadImageDesktop = async (files, doc) => {
  if (files.image1 != null) {
    // save image 1

    let split_file_type1 = files.image1[0].originalFilename.split(".");
    let fileExtention1 = split_file_type1.pop();

    doc.image1 = `${doc.airport}-DTRS-PM${doc.time}-${doc.year}-Desktop-${doc.number1}.${fileExtention1}`;
    let newpath1 =
      path.resolve(
        process.cwd() +
        "/model/DTRS_Rental5Airport/Desktop/generatePDF/uploaded/images"
      ) +
      "/" +
      doc.image1;
    if (fs.exists(newpath1)) {
      await fs.remove(newpath1);
    }
    await fs.moveSync(files.image1[0].filepath, newpath1);
  }
  if (files.image2 != null) {
    // save image 2
    let split_file_type2 = files.image2[0].originalFilename.split(".");
    let fileExtention2 = split_file_type2.pop();

    doc.image2 = `${doc.airport}-DTRS-PM${doc.time}-${doc.year}-Desktop-${doc.number2}.${fileExtention2}`;
    let newpath2 =
      path.resolve(
        process.cwd() +
        "/model/DTRS_Rental5Airport/Desktop/generatePDF/uploaded/images"
      ) +
      "/" +
      doc.image2;
    if (fs.exists(newpath2)) {
      await fs.remove(newpath2);
    }
    await fs.moveSync(files.image2[0].filepath, newpath2);
    //
  }
  if (files.image3 != null) {
    // save image 3
    let split_file_type3 = files.image3[0].originalFilename.split(".");
    let fileExtention3 = split_file_type3.pop();

    doc.image3 = `${doc.airport}-DTRS-PM${doc.time}-${doc.year}-Desktop-${doc.number3}.${fileExtention3}`;
    let newpath3 =
      path.resolve(
        process.cwd() +
        "/model/DTRS_Rental5Airport/Desktop/generatePDF/uploaded/images"
      ) +
      "/" +
      doc.image3;
    if (fs.exists(newpath3)) {
      await fs.remove(newpath3);
    }
    await fs.moveSync(files.image3[0].filepath, newpath3);
    //
  }
  if (files.image4 != null) {
    // save image 4
    let split_file_type4 = files.image4[0].originalFilename.split(".");
    let fileExtention4 = split_file_type4.pop();

    doc.image4 = `${doc.airport}-DTRS-PM${doc.time}-${doc.year}-Desktop-${doc.number4}.${fileExtention4}`;
    let newpath4 =
      path.resolve(
        process.cwd() +
        "/model/DTRS_Rental5Airport/Desktop/generatePDF/uploaded/images"
      ) +
      "/" +
      doc.image4;
    if (fs.exists(newpath4)) {
      await fs.remove(newpath4);
    }
    await fs.moveSync(files.image4[0].filepath, newpath4);
    //
  }
  if (files.image5 != null) {
    // save image 5
    let split_file_type5 = files.image5[0].originalFilename.split(".");
    let fileExtention5 = split_file_type5.pop();

    doc.image5 = `${doc.airport}-DTRS-PM${doc.time}-${doc.year}-Desktop-${doc.number5}.${fileExtention5}`;
    let newpath5 =
      path.resolve(
        process.cwd() +
        "/model/DTRS_Rental5Airport/Desktop/generatePDF/uploaded/images"
      ) +
      "/" +
      doc.image5;
    if (fs.exists(newpath5)) {
      await fs.remove(newpath5);
    }
    await fs.moveSync(files.image5[0].filepath, newpath5);
    //
  }
  if (files.image6 != null) {
    // save image 6
    let split_file_type6 = files.image6[0].originalFilename.split(".");
    let fileExtention6 = split_file_type6.pop();

    doc.image6 = `${doc.airport}-DTRS-PM${doc.time}-${doc.year}-Desktop-${doc.number6}.${fileExtention6}`;
    let newpath6 =
      path.resolve(
        process.cwd() +
        "/model/DTRS_Rental5Airport/Desktop/generatePDF/uploaded/images"
      ) +
      "/" +
      doc.image6;
    if (fs.exists(newpath6)) {
      await fs.remove(newpath6);
    }
    await fs.moveSync(files.image6[0].filepath, newpath6);
    //
  }

  var setNameImage = {
    image1: doc.image1,
    image2: doc.image2,
    image3: doc.image3,
    image4: doc.image4,
    image5: doc.image5,
    image6: doc.image6,
  };

  return setNameImage;
};
// Upload Excel
uploadExcelDesktop = async (files, doc) => {
  // console.log("xlsx : ", files);

  if (files.excel[0].originalFilename != null) {
    let fileExtention = files.excel[0].originalFilename.split(".")[1];

    if (fileExtention == "xlsx" || fileExtention == "xls") {
      let newpathExcel =
        path.resolve(
          process.cwd() + "/model/DTRS_Rental5Airport/Desktop/generatePDF"
        ) +
        "/" +
        "db_rental5airport_desktop.xlsx";
      if (fs.exists(newpathExcel)) {
        await fs.remove(newpathExcel);
      }
      await fs.moveSync(files.excel[0].filepath, newpathExcel);
    }
  }
};
// Upload Image Group
uploadImageDesktopGroup = async (files, doc) => {
  Object.keys(files).forEach(async (key, index) => {
    // console.log("image : ", files[key][0].originalFilename);

    if (files[key][0].originalFilename != null) {
      // acess 1 file = xlsx , image

      const split_file_type = files[key][0].originalFilename.split(".");
      const fileExtention1 = split_file_type.pop();

      const split_file_number1 =
        files[key][0].originalFilename.lastIndexOf("-");
      const split_file_number2 = files[key][0].originalFilename.slice(
        split_file_number1 + 1
      );
      const fileExtention2 = split_file_number2.split(".")[0];

      if (fileExtention1 == "jpg") {
        let newpathImage =
          path.resolve(
            process.cwd() +
            "/model/DTRS_Rental5Airport/Desktop/generatePDF/uploaded/images"
          ) +
          "/" +
          `${doc.airport}-DTRS-PM${doc.time}-${doc.year}-Desktop-${fileExtention2}.${fileExtention1}`;
        if (fs.exists(newpathImage)) {
          await fs.remove(newpathImage);
        }
        await fs.moveSync(files[key][0].filepath, newpathImage);
      }
    }
  });
};

// Upload PDF Desktop
uploadPDFDesktop = async (files, doc) => {
  if (files.pdfdesktop != null) {
    let fileExtention1 = files.pdfdesktop[0].originalFilename.split(".")[1];
    doc.pdfdesktop = `DTRS_Rental5airport_Template_PDF_Desktop.${fileExtention1}`;
    let newpath =
      path.resolve(
        process.cwd() +
        "/model/DTRS_Rental5Airport/Desktop/generatePDF/uploaded/templates"
      ) +
      "/" +
      doc.pdfdesktop;
    if (fs.exists(newpath)) {
      await fs.remove(newpath);
    }
    await fs.moveSync(files.pdfdesktop[0].filepath, newpath);
  }
};

router.post("/create", async (req, res) => {
  try {
    const form = new formidable.IncomingForm();
    form.parse(req, async (error, fields, files) => {
      let import_pdf = {
        // header
        airportPDF: String(fields.airport),
        timePDF: String(fields.time),
        yearPDF: String(fields.year),
        brandPDF: String(fields.brand),
        modelPDF: String(fields.model),

        // image row 1
        number1PDF: String(fields.number1),
        serialnumber1PDF: String(fields.serialnumber1),
        agency1PDF: String(fields.agency1),
        location1PDF: String(fields.location1),
        //
        // image row 2
        number2PDF: String(fields.number2),
        serialnumber2PDF: String(fields.serialnumber2),
        agency2PDF: String(fields.agency2),
        location2PDF: String(fields.location2),
        //
        // image row 3
        number3PDF: String(fields.number3),
        serialnumber3PDF: String(fields.serialnumber3),
        agency3PDF: String(fields.agency3),
        location3PDF: String(fields.location3),
        //
        // image row 4
        number4PDF: String(fields.number4),
        serialnumber4PDF: String(fields.serialnumber4),
        agency4PDF: String(fields.agency4),
        location4PDF: String(fields.location4),
        //
        // image row 5
        number5PDF: String(fields.number5),
        serialnumber5PDF: String(fields.serialnumber5),
        agency5PDF: String(fields.agency5),
        location5PDF: String(fields.location5),
        //
        // image row 6
        number6PDF: String(fields.number6),
        serialnumber6PDF: String(fields.serialnumber6),
        agency6PDF: String(fields.agency6),
        location6PDF: String(fields.location6),
        //

        // footer
        pagePDF: String(fields.page),
        ofPDF: String(fields.of),
        //

        sumImagePDF: await uploadImageDesktop(files, fields),
      };
      let checkfilePDF = await create(import_pdf);

      res.json({
        result: constants.kResultOk,
        statusFoundFilePDF: checkfilePDF.statusFoundFilePDF,
      });
    });
  } catch (error) {
    res.json({ result: constants.kResultNOk, message: JSON.stringify(error) });
  }
});
router.post("/autocreate", async (req, res) => {
  try {
    const form = new formidable.IncomingForm();
    form.parse(req, async (error, fields, files) => {
      let import_pdf = {
        // header
        airportPDF: String(fields.airport),
        timePDF: String(fields.time),
        yearPDF: String(fields.year),
        brandPDF: String(fields.brand),
        modelPDF: String(fields.model),
      };
      await uploadImageDesktopGroup(files, fields);
      await uploadExcelDesktop(files, fields);

      let checkImage = await autocreate(import_pdf);

      res.json({
        result: constants.kResultOk,
        statusFoundImage: checkImage.statusFoundImage,
        nameImage: checkImage.nameImage.getAll("notFoundImage"),
        statusFoundXlsx: checkImage.statusFoundXlsx,
        nameXlsx: checkImage.nameXlsx,
      });
    });
  } catch (error) {
    res.json({ result: constants.kResultNOk, message: JSON.stringify(error) });
  }
});
router.post("/addfilePDF-Desktop", async (req, res) => {
  try {
    const form = new formidable.IncomingForm();
    form.parse(req, async (error, fields, files) => {
      let filePDF_Desktop = {
        pdfdesktop: String(fields.pdfdesktop),
        pdfdesktopUpload: await uploadPDFDesktop(files, fields),
      };

      res.json({
        result: constants.kResultOk,
      });
    });
  } catch (error) {
    res.json({ result: constants.kResultNOk, message: JSON.stringify(error) });
  }
});

// Checkfile Download File Automation
router.get("/checkfile/download/automation", async (req, res) => {
  // http://localhost:8085/api/generatePDF/dtrs_rental5airport/hdtk/download/automation/download_reportPDF_automation_DTRS_Rental5Airport_HDTK.zip

  let checkfiles = globSync(
    path.join(
      process.cwd(),
      `/model/DTRS_Rental5Airport/Desktop/generatePDF/uploaded/automations/*.pdf`
    )
  );
  if (checkfiles == "") {
    res.json({
      result: constants.kResultNOk,
      message: "Not Found file zip",
    });
  }
  if (checkfiles != "") {
    res.json({
      result: constants.kResultOk,
    });
  }
});
// Download File Automation
router.get("/download/automation/:filename", async (req, res) => {
  // http://localhost:8085/api/generatePDF/dtrs_rental5airport/desktop/download/automation/download_reportPDF_automation_DTRS_Rental5Airport_Desktop.zip

  await compressing.zip.compressDir(
    path.join(
      process.cwd(),
      `/model/DTRS_Rental5Airport/Desktop/generatePDF/uploaded/automations`
    ),
    path.join(
      process.cwd(),
      `/model/DTRS_Rental5Airport/Desktop/generatePDF/uploaded/compressing/download_reportPDF_automation_DTRS_Rental5Airport_Desktop.zip`
    )
  );

  let filePath =
    path.join(
      process.cwd() +
      "/model/DTRS_Rental5Airport/Desktop/generatePDF/uploaded/compressing"
    ) +
    "/" +
    req.params.filename;

  res.download(
    filePath,
    "download_reportPDF_automation_DTRS_Rental5Airport_Desktop.zip",
    (err) => {
      if (err) {
        res.json({
          result: constants.kResultNOk,
          message: "Problem downloading the file",
        });
      }
      if (!err) {
        findRemoveSync(
          path.join(
            process.cwd(),
            `/model/DTRS_Rental5Airport/Desktop/generatePDF/uploaded/automations`
          ),
          {
            extensions: ".pdf",
          }
        );
        findRemoveSync(
          path.join(
            process.cwd(),
            `/model/DTRS_Rental5Airport/Desktop/generatePDF/uploaded/compressing`
          ),
          {
            extensions: ".zip",
          }
        );
      }
    }
  );
});

// Checkfile Download File Data
router.get("/checkfile/download", async (req, res) => {
  // http://localhost:8085/api/generatePDF/dtrs_rental5airport/hdtk/download/automation/download_reportPDF_automation_DTRS_Rental5Airport_HDTK.zip

  let checkfiles = globSync(
    path.join(
      process.cwd(),
      `/model/DTRS_Rental5Airport/Desktop/generatePDF/uploaded/data/*.pdf`
    )
  );
  if (checkfiles == "") {
    res.json({
      result: constants.kResultNOk,
      message: "Not Found file zip",
    });
  }
  if (checkfiles != "") {
    res.json({
      result: constants.kResultOk,
    });
  }
});
// Download File Data
router.get("/download/:filename", async (req, res) => {
  // http://localhost:8085/api/generatePDF/dtrs_rental5airport/desktop/download/download_reportPDF_DTRS_Rental5Airport_Desktop.zip

  await compressing.zip.compressDir(
    path.join(
      process.cwd(),
      `/model/DTRS_Rental5Airport/Desktop/generatePDF/uploaded/data`
    ),
    path.join(
      process.cwd(),
      `/model/DTRS_Rental5Airport/Desktop/generatePDF/uploaded/compressing/download_reportPDF_DTRS_Rental5Airport_Desktop.zip`
    )
  );

  let filePath =
    path.join(
      process.cwd() +
      "/model/DTRS_Rental5Airport/Desktop/generatePDF/uploaded/compressing"
    ) +
    "/" +
    req.params.filename;

  res.download(
    filePath,
    "download_reportPDF_DTRS_Rental5Airport_Desktop.zip",
    (err) => {
      if (err) {
        res.json({
          result: constants.kResultNOk,
          message: "Problem downloading the file",
        });
      }
      if (!err) {
        findRemoveSync(
          path.join(
            process.cwd(),
            `/model/DTRS_Rental5Airport/Desktop/generatePDF/uploaded/data`
          ),
          {
            extensions: ".pdf",
          }
        );
        findRemoveSync(
          path.join(
            process.cwd(),
            `/model/DTRS_Rental5Airport/Desktop/generatePDF/uploaded/compressing`
          ),
          {
            extensions: ".zip",
          }
        );
      }
    }
  );
});

// Checkfile Download File Image
router.get("/checkfile/download/images", async (req, res) => {
  // http://localhost:8085/api/generatePDF/dtrs_rental5airport/hdtk/download/automation/download_reportPDF_automation_DTRS_Rental5Airport_HDTK.zip

  let checkfiles = globSync(
    path.join(
      process.cwd(),
      `/model/DTRS_Rental5Airport/Desktop/generatePDF/uploaded/images/*.jpg`
    )
  );

  if (checkfiles == "") {
    res.json({
      result: constants.kResultNOk,
      message: "Not Found file zip",
    });
  }
  if (checkfiles != "") {
    res.json({
      result: constants.kResultOk,
    });
  }
});
// Download File Image
router.get("/download/images/:filename", async (req, res) => {
  // http://localhost:8085/api/generatePDF/dtrs_rental5airport/desktop/download/images/download_reportPDF_Images_DTRS_Rental5Airport_Desktop.zip

  await compressing.zip.compressDir(
    path.join(
      process.cwd(),
      `/model/DTRS_Rental5Airport/Desktop/generatePDF/uploaded/images`
    ),
    path.join(
      process.cwd(),
      `/model/DTRS_Rental5Airport/Desktop/generatePDF/uploaded/compressing/download_reportPDF_Images_DTRS_Rental5Airport_Desktop.zip`
    )
  );

  let filePath =
    path.join(
      process.cwd() +
      "/model/DTRS_Rental5Airport/Desktop/generatePDF/uploaded/compressing"
    ) +
    "/" +
    req.params.filename;

  res.download(
    filePath,
    "download_reportPDF_Images_DTRS_Rental5Airport_Desktop.zip",
    (err) => {
      if (err) {
        res.json({
          result: constants.kResultNOk,
          message: "Problem downloading the file",
        });
      }
      if (!err) {
        findRemoveSync(
          path.join(
            process.cwd(),
            `/model/DTRS_Rental5Airport/Desktop/generatePDF/uploaded/images`
          ),
          {
            extensions: ".jpg",
          }
        );
        findRemoveSync(
          path.join(
            process.cwd(),
            `/model/DTRS_Rental5Airport/Desktop/generatePDF/uploaded/compressing`
          ),
          {
            extensions: ".zip",
          }
        );
      }
    }
  );
});

module.exports = router;
