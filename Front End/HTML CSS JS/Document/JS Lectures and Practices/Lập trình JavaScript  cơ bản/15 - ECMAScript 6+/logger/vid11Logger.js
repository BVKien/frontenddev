/*
// có thể không export ra default
// 1 module chỉ có thể export dèault 1 cái
// và có thể export vô số cái thường như vậy
// -> import có thể sử dụng destructuring để nhận giá trị như vậy -> sang vid11.js
export const TYPE_LOG = "log";
export const TYPE_WARN = "warn";
export const TYPE_ERROR = "error";

function logger(log, type = TYPE_LOG) {
  console[type](log);
}

// export để nơi khác có thể nạp và sử dụng
export default logger;
// =============================================
*/

// bây giờ tách ra thành constants.js
// import từ constants
//import { TYPE_LOG, TYPE_WARN, TYPE_ERROR } from "./vid11Constants.js";
import { TYPE_LOG } from "../vid11Constants.js";

function logger(log, type = TYPE_LOG) {
  console[type](log);
}

// export để nơi khác có thể nạp và sử dụng
export default logger;
