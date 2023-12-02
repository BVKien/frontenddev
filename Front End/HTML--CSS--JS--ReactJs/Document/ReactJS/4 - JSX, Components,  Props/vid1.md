# JSX là gì? Tại sao cần JSX?

// React@18
// React-DOM
const listReactDOM = React.createElement(
"ul",
null,
React.createElement("li", null, "JavaScript"),
React.createElement("li", null, "ReactJS")
);

// Get id in DOM
const rootId = document.getElementById("root");

// Get root element
const root = ReactDOM.createRoot(rootId);

// render element listReactDOM bằng root
root.render(listReactDOM);

// luồng
// const và gán nó = id trong HTML
// tạo root chính là cái được khởi tạo với id để render
// dùng root render nó với elements đã tạo
