// Modules

/**
1. Let, Const --> ok
2. Template Literals --> ok
3. Multi-line String --> ok
4. Arrow function --> ok 
5. Classes --> ok
6. Default parameter values  --> ok
7. Destructuring --> ok
8. Rest parameters ( ... ) --> bổ sung --> ok
9. Spread ( ... ) --> ok
10. Enhanced object literals --> ok
11. Tagged template literal --> ok
12. Modules 
*/

// 12. Modules - Import / Export
// tư tưởng khi bóc tách thành phần xử lý nghiệp vụ
// ra một nơi riêng

// import logger
// báo lỗi: Uncaught SyntaxError: Cannot use import statement outside a module (at vid11.js:23:1)
// -> bản thân vid11.js cũng phải là moodule mới có thể hoạt động
// -> viết sang html
// export gì thì import chính là giá trị đó
// khi sử dụng phải import

// sử dụng destructuring để import
// import logger from "./vid11Logger.js";
// import logger, { TYPE_LOG, TYPE_WARN, TYPE_ERROR } from "./vid11Logger.js";

// import logger from "./logger/index.js";
import logger from "./logger/vid11Logger.js";
import { newLogger } from "./logger/index.js";

// import kiểu destructuring
//import { TYPE_LOG, TYPE_WARN, TYPE_ERROR } from "./vid11Constants.js";

// import cái nó ddnag export default
// *: tất cả
// as - gọi nó với 1 alias khác
import * as constants from "./vid11Constants.js";

console.log(constants);

newLogger("Test message...", constants.TYPE_WARN);
