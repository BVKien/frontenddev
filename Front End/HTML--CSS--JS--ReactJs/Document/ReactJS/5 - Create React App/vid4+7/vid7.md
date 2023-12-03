# NPM, NPX và YARN là gì?

- NPM

  - Project scope - Cài vào một dự án cụ thể

    - npm install tên thư viện
    - npm install react react-dom =>
    - npm i react react-dom => dependencies

    - npm install --save-dev react react-dom => devDependencies
    - npm i -D react react-dom => devDependencies

    - Luồng install: khi install
      -> download trên npmjs
      -> lưu vào node_modules
      -> list vào dependencies hoặc devDependencies

    - Xóa thư viện khỏi dự án
    - npm uninstall react react-dom

    Luồng unInstall: ngược lại

    - Lý do sử dụng Project scope:
      - Vì project phụ thuộc vào các thư viện của npm
      - Các dòng import của code là hiểu
      - dependencies, devDependencies - sự phụ thuộc -> cần phải có các thư viện -> phải cài đặt

  - Global scope - Cài vào máy tính - thư mục user

    - npm i --global create-react-app
    - npm i -g create react-app

    - npm uninstall -g create-react-app

    - Lý do sử dụng Global scope:
      - Không phụ thuộc vào thư viện
      - Tức là không có import nào

- NPX

  - Tại sao dùng NPX?

    - Hỗ trợ thực thi các thư viện - file bin - npx các thứ - ncl thực thi phần npm global scope
    - Giúp không phải cài những thư viện npm global scope lên máy

  - Gặp lỗi khi đặt tên: npx create-react-app tiktok

- YARN & NPM

  - Documentation: https://www.sitepoint.com/yarn-vs-npm/
  - YARN và NPM đều là package manager

  - NPM

    - Node Package Manager
    - a website for managing various aspects of your npm experience
    - a registry for accessing an extensive public database of JavaScript packages
    - a command-line interface (CLI) for interacting with npm via the terminal

    - YARN

      - Yet Another Resource Negotator - Trình quản lý gói khác
      - Ra để thay thế NPM

    - Cài đặt thư viện
      - NPM tuần tự
      - YARN cùng lúc
        -> YARN có vẻ nhỉnh hơn
        nhưng cần phụ thuộc nhiều yếu tố, mạng, băng thông, ...
      - Cơ chế package
        - NPM không tốt như YARN
        - YARN nhanh hơn nhờ cơ chế download đồng bộ
        - Nhưng vì thế mà tốn dung lượng hơn

- YARN install

  - Chuyển đổi sang yarn: npm i -g yarn
  - npm install -g yarn

- Lưu ý
  - Luôn bật development server (npm start || yarn start)
