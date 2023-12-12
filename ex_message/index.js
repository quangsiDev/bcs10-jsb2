//  classList => thêm class bằng js

// add toggle

// innerText , innerHTML

// w3school
function sendMessage() {
  var resultTag = document.getElementById("result");
  resultTag.innerText = "Em chưa ăn";
  resultTag.classList.add("text-danger");
  resultTag.classList.add("display-1");
}
