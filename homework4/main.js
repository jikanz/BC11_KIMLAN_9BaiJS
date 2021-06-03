document.getElementById("btnTinh").onclick = function () {
 var canh1 = document.getElementById("txtCanh1").value ;
  var canh2 = document.getElementById("txtCanh2").value ;
   var canh3 = document.getElementById("txtCanh3").value ;
   var tamGiac = "";
   console.log(canh1,canh2,canh3)
   if ((canh1==canh2) && (canh2==canh3) && (canh1==canh3 )) {
        tamGiac = "Tam giác Đều" 
   }
   else if ((canh1==canh2) || (canh2==canh3) || (canh1==canh3 )) {
        tamGiac = "Tam giác Cân"
   }
   else if((canh1*canh1)==(canh2*canh2)+(canh3*canh3) || (canh2*canh2)==(canh1*canh1)+(canh3*canh3) || (canh3*canh3)==(canh2*canh2)+(canh1*canh1) ) {
      tamGiac = "Tam giác Vuông"
    }
    else {
        tamGiac = "có thành tam giác hay không thì vẽ thử xem được k"
   }
   document.getElementById("footerCard3").innerHTML = "ĐÓ chính là : " + tamGiac;
}
