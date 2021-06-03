document.getElementById("btnSoNgay").onclick = function () {
    var  mont = Number(document.getElementById("txtThang1").value);
    var nam = document.getElementById("txtNam1").value;
    switch (mont) {
    case 1 : 
   mont= "Jan : có 31 ngày"
        break;
    case 2    :
   if(nam%4 == 0 && nam%100 !=0 || nam % 400 == 0)  mont ="Feb : 29 ngay";
     else mont = "Feb : 28 ngay"
        break;
    case 3 :
    mont="Mar : có 31 ngày"
        break;
    case 4 :
    mont="Apr : có 30 ngày"
        break;
    case 5 :    
    mont="May : có 31 ngày"
        break;
    case 6 :
    mont="Jun : có 30 ngày"
        break;
    case 7 :
    mont="Jul : có 31 ngày"
        break;
    case 8 :
    mont="Aug : có 31 ngày"
        break;
    case 9 :
    mont="Sep : có 30 ngày"
        break;
    case 10 :
    mont="Oct : có 31 ngày"
        break;       
    case 11 :
    mont="Nov : có 30 ngày"
        break;
    case 12 :
    mont="Dec : có 31 ngày"
        break;    
}
       document.getElementById("footerCard5").innerHTML = "Tháng: " + mont;
}