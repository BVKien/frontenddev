# Tạo dự án với React + Webpack

# Documentation: https://webpack.js.org/

# Blog: https://fullstack.edu.vn/blog/phan-1-tao-du-an-reactjs-voi-webpack-va-babel.html

# Webpack để làm gì?

- Giúp modules hóa Front-end - chia nhỏ file - import - export -> quản lý file hiệu quả
- bundle JavaScript: gói, bó lại
- Thông thường được cài đặt đi kèm với các plugins -> minifile xuất ra

# Tạo dự án với React + Webpack

- Tạo folder react-webpack
- Mở terminal chỉ định đến folder này
- gõ lệnh npm init -> enter all
- gõ lệnh npm install webpack webpack-cli --save-dev -> tạo ra node modules
- gõ lệnh npm install react react-dom --save
- gõ lệnh npm install @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
- Tạo project như video
- npm install css-loader style-loader --save-dev
- Tạo webpack.config.js
- babel - babelrc - chuyển đổi code JavaScrript về dạng ES5

###

"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"start": "webpack --mode development --watch",
"build": "webpack --mode production"
},

# npm start -> nó sẽ tham chiếu đến dòng lệnh này

# npm run build -> tham chiếu tương tự

# Tiếp tục

- npm install html-webpack-plugin --save-dev

# - defer

- npm install webpack-dev-server --save-dev

# - ESLint
