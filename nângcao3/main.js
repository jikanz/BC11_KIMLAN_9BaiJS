document.getElementById("btnCachDoc").onclick = function (event) {
    event.preventDefault();
    var so = document.getElementById("txt3KySo1").value ;
    var soHangTram = Math.floor(so/100);
    var soChuc = Math.floor(so%100/10);
    var soDonVi =Math .floor (so%100%10);
   
    switch (soHangTram) {
    case 1 : 
    soHangTram= "Một trăm "
        break;
    case 2    :
    soHangTram = "Hai trăm "
        break;
  
    case 3 :
    soHangTram=" Ba trăm "
        break;
    case 4 :
    soHangTram="Bốn trăm "
        break;
    case 5 :    
    soHangTram="Năm trăm "
        break;
    case 6 :
    soHangTram="Sáu trăm "
        break;
    case 7 :
    soHangTram="Bảy trăm "
        break;
    case 8 :
    soHangTram="Tám trăm "
        break;
    case 9 :
    soHangTram="Chín trăm "
        break;     
}
    switch (soChuc) {
    case 0 : if(soDonVi ==0) soChuc= "" 
    else soChuc= "linh "
    break ;
    case 1 :  
    soChuc= "mười "
        break;
    case 2    :
    soChuc = " hai mươi"
        break;
  
    case 3 :
    soChuc=" ba mươi"
        break;
    case 4 :
    soChuc="bốn mươi"
        break;
    case 5 :    
    soChuc="năm mươi"
        break;
    case 6 :
    soChuc="sáu mươi"
        break;
    case 7 :
    soChuc="bảy mươi"
        break;
    case 8 :
    soChuc="tám mươi"
        break;
    case 9 :
    soChuc="chín mươi"
        break;     
}
 switch (soDonVi) {
     case 0 : 
     soDonVi= ""
        break ;
    case 1 : 
    soDonVi= " một "
        break;
    case 2    :
    soDonVi = " hai "
        break;
  
    case 3 :
    soDonVi=" ba "
        break;
    case 4 :
    soDonVi=" bốn "
        break;
    case 5 :    
    soDonVi=" lăm "
        break;
    case 6 :
    soDonVi=" sáu "
        break;
    case 7 :
    soDonVi=" bảy "
        break;
    case 8 :
    soDonVi=" tám "
        break;
    case 9 :
    soDonVi=" chín "
        break;     
} 
    var info = "<div class='alert alert-warning'>"+ soHangTram+soChuc+soDonVi +"</div>";
document.getElementById("footerCard6").innerHTML= info;
}