// Login Page
export const APP_INIT = "APP_INIT";

// Login Page
export const HTTP_LOGIN_FETCHING = "HTTP_LOGIN_FETCHING";
export const HTTP_LOGIN_SUCCESS = "HTTP_LOGIN_SUCCESS";
export const HTTP_LOGIN_FAILED = "HTTP_LOGIN_FAILED";

// Register Page
export const HTTP_REGISTER_FETCHING = "HTTP_REGISTER_FETCHING";
export const HTTP_REGISTER_SUCCESS = "HTTP_REGISTER_SUCCESS";
export const HTTP_REGISTER_FAILED = "HTTP_REGISTER_FAILED";

// Stock Page
export const HTTP_STOCK_FETCHING = "HTTP_STOCK_FETCHING";
export const HTTP_STOCK_SUCCESS = "HTTP_STOCK_SUCCESS";
export const HTTP_STOCK_FAILED = "HTTP_STOCK_FAILED";

// Stock Edit Page
export const HTTP_STOCK_EDIT_FETCHING = "HTTP_STOCK_EDIT_FETCHING";
export const HTTP_STOCK_EDIT_SUCCESS = "HTTP_STOCK_EDIT_SUCCESS";
export const HTTP_STOCK_EDIT_FAILED = "HTTP_STOCK_EDIT_FAILED";
export const HTTP_STOCK_EDIT_INITIALED = "HTTP_STOCK_EDIT_INITIALED";

// Transaction Edit Page
export const HTTP_TRANSACTION_FETCHING = "HTTP_TRANSACTION_FETCHING";
export const HTTP_TRANSACTION_SUCCESS = "HTTP_TRANSACTION_SUCCESS";
export const HTTP_TRANSACTION_FAILED = "HTTP_TRANSACTION_FAILED";

// Shop Page
export const HTTP_SHOP_FETCHING = "HTTP_SHOP_FETCHING";
export const HTTP_SHOP_SUCCESS = "HTTP_SHOP_SUCCESS";
export const HTTP_SHOP_FAILED = "HTTP_SHOP_FAILED";

export const SHOP_UPDATE_ORDER = "SHOP_UPDATE_ORDER";
export const SHOP_UPDATE_PAYMENT = "SHOP_UPDATE_PAYMENT";

// Error Code
export const E_PICKER_CANCELLED = "E_PICKER_CANCELLED";
export const E_PICKER_CANNOT_RUN_CAMERA_ON_SIMULATOR =
  "E_PICKER_CANNOT_RUN_CAMERA_ON_SIMULATOR";
export const E_PERMISSION_MISSING = "E_PERMISSION_MISSING";
export const E_PICKER_NO_CAMERA_PERMISSION = "E_PICKER_NO_CAMERA_PERMISSION";
export const E_USER_CANCELLED = "E_USER_CANCELLED";
export const E_UNKNOWN = "E_UNKNOWN";
export const E_DEVELOPER_ERROR = "E_DEVELOPER_ERROR";
export const TIMEOUT_NETWORK = "ECONNABORTED"; // request service timeout
export const NOT_CONNECT_NETWORK = "NOT_CONNECT_NETWORK";

//////////////// Localization Begin ////////////////
export const NETWORK_CONNECTION_MESSAGE =
  "Cannot connect to server, Please try again.";
export const NETWORK_TIMEOUT_MESSAGE =
  "A network timeout has occurred, Please try again.";
export const UPLOAD_PHOTO_FAIL_MESSAGE =
  "An error has occurred. The photo was unable to upload.";

export const YES = "YES";
export const NO = "NO";
export const OK = "ok";
export const NOK = "nok";

export const STATUS_CODE_401 = 401;
export const STATUS_CODE_200 = 200;
export const STATUS_CODE_408 = 408;

export const apiUrl = "http://localhost:8085/api/";
export const imageUrl = "http://localhost:8085";
export const pdfUrl = "http://localhost:8085";

export const server = {
  // Login
  LOGIN_URL: `authen/login`,
  LOGIN_PASSED: `yes`,
  //

  // DTRS Rental5Airport = Generate PDF
  API_GENERATEPDF_DTRS_RENTAL5AIRPORT_HDTK_CREATE_URL: `generatePDF/dtrs_rental5airport/hdtk/create`,
  API_GENERATEPDF_DTRS_RENTAL5AIRPORT_HDTK_AUTOCREATE_URL: `generatePDF/dtrs_rental5airport/hdtk/autocreate`,
  API_GENERATEPDF_DTRS_RENTAL5AIRPORT_DESKTOP_CREATE_URL: `generatePDF/dtrs_rental5airport/desktop/create`,
  API_GENERATEPDF_DTRS_RENTAL5AIRPORT_DESKTOP_AUTOCREATE_URL: `generatePDF/dtrs_rental5airport/desktop/autocreate`,
  API_GENERATEPDF_DTRS_RENTAL5AIRPORT_VEHICLE_CREATE_URL: `generatePDF/dtrs_rental5airport/vehicle/create`,
  API_GENERATEPDF_DTRS_RENTAL5AIRPORT_VEHICLE_AUTOCREATE_URL: `generatePDF/dtrs_rental5airport/vehicle/autocreate`,

  // Download HDTK
  API_GENERATEPDF_DTRS_RENTAL5AIRPORT_HDTK_CHECKFILE_DOWNLOAD_URL: `generatePDF/dtrs_rental5airport/hdtk/checkfile/download`,
  API_GENERATEPDF_DTRS_RENTAL5AIRPORT_HDTK_DOWNLOAD_URL: `generatePDF/dtrs_rental5airport/hdtk/download/download_reportPDF_DTRS_Rental5Airport_HDTK.zip`,

  API_GENERATEPDF_DTRS_RENTAL5AIRPORT_HDTK_CHECKFILE_DOWNLOAD_AUTOMATION_URL: `generatePDF/dtrs_rental5airport/hdtk/checkfile/download/automation`,
  API_GENERATEPDF_DTRS_RENTAL5AIRPORT_HDTK_DOWNLOAD_AUTOMATION_URL: `generatePDF/dtrs_rental5airport/hdtk/download/automation/download_reportPDF_automation_DTRS_Rental5Airport_HDTK.zip`,

  API_GENERATEPDF_DTRS_RENTAL5AIRPORT_HDTK_CHECKFILE_DOWNLOAD_IMAGES_URL: `generatePDF/dtrs_rental5airport/hdtk/checkfile/download/images`,
  API_GENERATEPDF_DTRS_RENTAL5AIRPORT_HDTK_DOWNLOAD_IMAGES_URL: `generatePDF/dtrs_rental5airport/hdtk/download/images/download_reportPDF_Images_DTRS_Rental5Airport_HDTK.zip`,

  // Download Desktop
  API_GENERATEPDF_DTRS_RENTAL5AIRPORT_DESKTOP_CHECKFILE_DOWNLOAD_URL: `generatePDF/dtrs_rental5airport/desktop/checkfile/download`,
  API_GENERATEPDF_DTRS_RENTAL5AIRPORT_DESKTOP_DOWNLOAD_URL: `generatePDF/dtrs_rental5airport/desktop/download/download_reportPDF_DTRS_Rental5Airport_Desktop.zip`,

  API_GENERATEPDF_DTRS_RENTAL5AIRPORT_DESKTOP_CHECKFILE_DOWNLOAD_AUTOMATION_URL: `generatePDF/dtrs_rental5airport/desktop/checkfile/download/automation`,
  API_GENERATEPDF_DTRS_RENTAL5AIRPORT_DESKTOP_DOWNLOAD_AUTOMATION_URL: `generatePDF/dtrs_rental5airport/desktop/download/automation/download_reportPDF_automation_DTRS_Rental5Airport_Desktop.zip`,

  API_GENERATEPDF_DTRS_RENTAL5AIRPORT_DESKTOP_CHECKFILE_DOWNLOAD_IMAGES_URL: `generatePDF/dtrs_rental5airport/desktop/checkfile/download/images`,
  API_GENERATEPDF_DTRS_RENTAL5AIRPORT_DESKTOP_DOWNLOAD_IMAGES_URL: `generatePDF/dtrs_rental5airport/desktop/download/images/download_reportPDF_Images_DTRS_Rental5Airport_Desktop.zip`,

  // Download vehicle
  API_GENERATEPDF_DTRS_RENTAL5AIRPORT_VEHICLE_CHECKFILE_DOWNLOAD_URL: `generatePDF/dtrs_rental5airport/vehicle/checkfile/download`,
  API_GENERATEPDF_DTRS_RENTAL5AIRPORT_VEHICLE_DOWNLOAD_URL: `generatePDF/dtrs_rental5airport/vehicle/download/download_reportPDF_DTRS_Rental5Airport_Vehicle.zip`,

  API_GENERATEPDF_DTRS_RENTAL5AIRPORT_VEHICLE_CHECKFILE_DOWNLOAD_AUTOMATION_URL: `generatePDF/dtrs_rental5airport/vehicle/checkfile/download/automation`,
  API_GENERATEPDF_DTRS_RENTAL5AIRPORT_VEHICLE_DOWNLOAD_AUTOMATION_URL: `generatePDF/dtrs_rental5airport/vehicle/download/automation/download_reportPDF_automation_DTRS_Rental5Airport_Vehicle.zip`,

  API_GENERATEPDF_DTRS_RENTAL5AIRPORT_VEHICLE_CHECKFILE_DOWNLOAD_IMAGES_URL: `generatePDF/dtrs_rental5airport/vehicle/checkfile/download/images`,
  API_GENERATEPDF_DTRS_RENTAL5AIRPORT_VEHICLE_DOWNLOAD_IMAGES_URL: `generatePDF/dtrs_rental5airport/vehicle/download/images/download_reportPDF_Images_DTRS_Rental5Airport_Vehicle.zip`,

  // add file
  API_ADDFILE_PDF_HDTK: `generatePDF/dtrs_rental5airport/hdtk/addfilePDF-HDTK`,
  API_ADDFILE_PDF_DESKTOP: `generatePDF/dtrs_rental5airport/desktop/addfilePDF-Desktop`,
  API_ADDFILE_PDF_VEHICLE: `generatePDF/dtrs_rental5airport/vehicle/addfilePDF-Vehicle`,
  //
};
