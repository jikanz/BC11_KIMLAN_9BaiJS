document.getElementById("btnTimKhoangCach").onclick = function () {
    var toaDoX1 = document.getElementById("toaDoX1").value ;
    var toaDoX2 = document.getElementById("toaDoX2").value ;
    var toaDoX3 = document.getElementById("toaDoX3").value ;
    var toaDoY1 = document.getElementById("toaDoY1").value ;
    var toaDoY2 = document.getElementById("toaDoY2").value ;
    var toaDoY3 = document.getElementById("toaDoY3").value ;
    var sinhVien1 = document.getElementById("txtSinhVien1").value;
    var sinhVien2 = document.getElementById("txtSinhVien2").value;
    var sinhVien3 = document.getElementById("txtSinhVien3").value;
    var dapAn = "vì có khoảng cách của 2 nhà hoặc cả 3 bằng nhau nên k có kết quả xa nhất"
    var khoangCach1 = Math.sqrt(Math.pow((toaDoX1),2)+Math.pow((toaDoY1),2)) 
    var khoangCach2 = Math.sqrt(Math.pow((toaDoX2),2)+Math.pow((toaDoY2),2)) 
    var khoangCach3 = Math.sqrt(Math.pow((toaDoX3),2)+Math.pow((toaDoY3),2)) 
    if (khoangCach1 > khoangCach2 && khoangCach1 > khoangCach3 ){
        dapAn = sinhVien1}
       else if (khoangCach2 > khoangCach1 && khoangCach2 > khoangCach3) {
        dapAn = sinhVien2 }
           else if (khoangCach3 > khoangCach1 && khoangCach3 > khoangCach2){
               dapAn = sinhVien3
           }
             var info = "<div>nhà xa nhất là nhà của " + dapAn +"</div>";
             document.getElementById("footerCard7").innerHTML= info;
       }
    
