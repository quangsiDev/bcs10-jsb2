// global variable ~ có thể sử dụng ở mọi nơi
var imgTag = document.getElementById("light");
function batDen() {
  // local variable ~ những biến tạo trong function thì chỉ sử dụng được BÊN TRONG function đó
  //   var imgTag = document.getElementById("light");
  imgTag.src = "./BAT_TAT_DEN/pic_bulbon.gif";
}

function tatDen() {
  //   var imgTag = document.getElementById("light");
  imgTag.src = "./BAT_TAT_DEN/pic_bulboff.gif";
}

// scope ~ phạm vi hoạt động của biến

// global

// local
