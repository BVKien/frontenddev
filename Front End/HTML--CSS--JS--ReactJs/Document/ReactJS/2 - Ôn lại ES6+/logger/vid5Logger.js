// vô số
// sử dụng destructuring để import lại
import { TYPE_LOG } from "../vid5Constants.js";

function logger(log, type = TYPE_LOG) {
  console[type](log);
}

// chỉ được 1
// export giá trị muốn export ra ngoài
export default logger;
