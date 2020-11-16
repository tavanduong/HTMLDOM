// có 4 nhóm button
//Nhóm 1: số (bao gồm phím . và +/-) 
// Nhóm 2: Phép tính 
// nhóm 3: Xóa (< reset) 
//Nhóm 4 : Dấu =
// có 2 phím đặc biết % =
/**
 * Qui ước nhập phép tính : Khi bấm +mà ngay sau đó bấm - thì tính là -
 * Khi bấm % thì trước đó là phép tính a/b
 * quy tắc ưu tiên: Nhân chia trước cộng trừ sau 
 * ưu tiên tính bên trái sang phải
 * Bước 1: Tính các giá trị của nhân hoặc chia có tỏng biểu thức. sau đó
 * lưu lại bên trong 2 mảng
 * 
 */

// Dổi dấu
var doi_dau = false;
// object kết quả
var ketqua = document.getElementById('ketqua');
 // số phép tính ưu tiên tìm thấy
 var uu_tien = 0;

 // mảng ghi nhớ các số hạng
 var mang_so_index = 0;
 var mang_so =new Array();

 // mảng ghi nhớ phép tính
 var mang_pt_index = 0;
 var mang_pt =new Array();

 
// Nội dung đang có
var str_ketqua = '';

 // Phím mới
 var phim_moi ="";

 // Cài Đặt sự kiện

 
 
  function ClickButton(obj) {
   
    if(str_ketqua=='' && phim_moi =='') {
        str_ketqua = ketqua.value;
    }


   if (str_ketqua=='0') {
       str_ketqua = '';
   }
   
    // HTML cỉa phím bấm
      var type = obj.innerHTML;

      //NHóm số
      if (type =="0" ||
          type =="1" ||
          type =="2" ||
          type =="3" ||
          type =="4" ||
          type =="5" ||
          type =="6" ||
          type =="7" ||
          type =="8" ||
          type =="9" ||
          type =="+/-"||
          type =="." ) 
          {
           // đổi dấu
           if (type =="+/-"){
               //đổi từ trừ thành cộng
               if(doi_dau) {
                   doi_dau = false;
                   phim_moi = phim_moi.substring(1);
               } 
               // đổi từ cộng thành trừ
               else {
                   doi_dau = true;
                   phim_moi = "-"+ phim_moi
               }
           }  
           else {
               phim_moi += type;
           } 
           // Thay đổi hiển thị
           ketqua.innerHTML = str_ketqua + phim_moi
          }
  }