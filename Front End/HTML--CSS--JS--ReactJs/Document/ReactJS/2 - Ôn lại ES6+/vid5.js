// JS modules

/*
1. let, const --> ok
2. template literals --> ok
3. multi-line string --> ok
4. arrow function --> ok
5. classes
6. default parameters values 
7. destructuring --> ok
8. rest parameters --> ok
9. spread --> ok
10. enhanced object literals --> ok
11. tagged template literal 
12. modules --> ok
*/

// modules
// import / export

import logger from "./logger/vid5Logger.js";
import { logger2 } from "./logger/index.js";
import { TYPE_LOG, TYPE_WARN, TYPE_ERROR } from "./vid5Constants.js";

// trường hợp không sử dụng destructuring
import * as constants from "./vid5Constants.js";

logger2(123, constants.TYPE_WARN);
