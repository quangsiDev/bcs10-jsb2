var accountTag = document.getElementById("account");

var passwordTag = document.getElementById("password");

// tạo biến chứa value được nhập từ user

// update value (nội dung) của thẻ input

// event ~ sự kiện

// function ~ chỉ chạy khi user click button login, sẽ không chạy khi user load trang

function login() {
  var accountValue = accountTag.value;
  var passwordValue = passwordTag.value;
  //   show nội dung vào thẻ có id ="result"

  var content = `Tài khoản : ${accountValue}  --- Mật khẩu : ${passwordValue}`;
  document.getElementById("result").innerText = content;

  //   lay value input , show data #result
}
