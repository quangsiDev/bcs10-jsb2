console.log("yes");

// lấy thẻ h1 có id = "title" từ layout

var h1Tag = document.getElementById("title");
console.log("😀 - h1Tag", h1Tag);
// style
h1Tag.style.color = "red";
h1Tag.style.background = "black";

// nội dung

h1Tag.innerText = "Xin chào lớp BCS10";
