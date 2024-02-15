const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 8085;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//
app.use(
  express.static(
    __dirname + "/controllers/DTRS_Rental5Airport/HDTK/generatePDF/templates"
  ),
  express.static(
    __dirname + "/controllers/DTRS_Rental5Airport/Desktop/generatePDF/templates"
  ),
  express.static(
    __dirname + "/controllers/DTRS_Rental5Airport/Vehicle/generatePDF/templates"
  )
);
//
app.use(
  express.static(
    __dirname + "/model/DTRS_Rental5Airport/HDTK/generatePDF/uploaded"
  ),
  express.static(
    __dirname + "/model/DTRS_Rental5Airport/Desktop/generatePDF/uploaded"
  ),
  express.static(
    __dirname + "/model/DTRS_Rental5Airport/Vehicle/generatePDF/uploaded"
  )
);
//
app.use(cors());
app.use(
  "/api/generatePDF/dtrs_rental5airport/hdtk/",
  require("./routes/DTRS_Rental5Airport/routes-generatePDF-hdtk")
);
app.use(
  "/api/generatePDF/dtrs_rental5airport/desktop/",
  require("./routes/DTRS_Rental5Airport/routes-generatePDF-desktop")
);
app.use(
  "/api/generatePDF/dtrs_rental5airport/vehicle/",
  require("./routes/DTRS_Rental5Airport/routes-generatePDF-vehicle")
);

app.listen(PORT, () => {
  console.log("Backend is running PORT 8085 ... ");
});
