// Node properties

// element
// attribute
// text

// uri: domain hiên tại + path

// draggable: kéo thả

// kiến thức thêm
// giúp có thể chỉnh sử cho mọi thẻ không chỉ là input
{
  /* <div class="box" contenteditable="">
        <h1>New heading</h1>
    </div> */
}

// boxElement - thực chất là 1 element object -> phải có phương thức và thuộc tính
// tuy nhiên gg chorme hiểu đang console.log ra 1 element node
// nên nó trả về dạng <div....> dạng html của node đó

var boxElement = document.querySelector(".box");

console.log(boxElement);

// object
console.log(typeof boxElement);

// console log để tìm thuộc tính cần -> như 1 cuốn từ điển
console.log([boxElement]);

/// các node properties cần chú ý
/// attributes

/**
Attribute là một đặc tính hoặc đặc điểm bị gán cho một người/vật 
hoặc là đặc tính hay đặc điểm vốn có của người/vật. 
Property chỉ đặc tính nét đặc trưng của cái gì đó
*/
