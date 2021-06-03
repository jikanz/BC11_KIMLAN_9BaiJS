document.getElementById("btnSau").onclick = function (){
    var ngay = document.getElementById("txtNgay").value ;
     var thang = document.getElementById("txtThang").value ;
      var nam = document.getElementById("txtNam").value ;
      if (ngay>=30 && thang>=12 ) {
          thang =1;
        ngay = 1;
        nam++;
      }else if (ngay >= 30)  {
          ngay =1;
          thang++;
    }else {
         ngay++;
    }
        var info = "<div>ngày :" + ngay +"</div>";
    info += "<div> tháng :" + thang +"</div>";
    info += "<div> năm :" + nam +"</div>";
   document.getElementById("footerCard4").innerHTML = "ngày tiếp theo là : " + info;


}
document.getElementById("btnTruoc").onclick = function (){
    var ngay = document.getElementById("txtNgay").value ;
     var thang = document.getElementById("txtThang").value ;
      var nam = document.getElementById("txtNam").value ;
      if (ngay==1 && thang==1 ) {
          thang =12;
        ngay = 30;
        nam--;
      }else if (ngay == 1)  {
          ngay =30;
          thang--;
    }else {
         ngay--;
    }
        var info = "<div>ngày :" + ngay +"</div>";
    info += "<div> tháng :" + thang +"</div>";
    info += "<div> năm :" + nam +"</div>";
   document.getElementById("footerCard4").innerHTML = "trước 1 ngày là : " + info;


}