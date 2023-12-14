/**
 *  tổng tiền: 200$
 *  tip : 20%
 *  2 người
 *  output => 20$
 */

function tinhTien() {
  //   alert("yes");
  // s1 : lấy data từ layout  =>dom

  var tongTien = document.getElementById("tong-tien").value;
  var phanTraTip = document.getElementById("phan-tram-tip").value;
  var tongNguoi = document.getElementById("tong-nguoi").value;
  console.log({ tongTien, phanTraTip, tongNguoi });
  //   s2: tính toán ra kết quả
  var ketQua = (tongTien * phanTraTip) / tongNguoi;
  //   s3: hiển thị kết quả
  //   alert(ketQua);
  document.getElementById("result").innerText = `Số tiền cần thanh toán: ${ketQua} $`;
}
