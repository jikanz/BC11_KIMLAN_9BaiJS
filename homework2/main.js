document.getElementById('btnChao').onclick = function () {
    var select= document.getElementById("select").value;
    var loiChao ="";
          if (select == 1) {
             loiChao = "Con Chào Bố Ạ";
   }
   else if (select == 2) { 
      loiChao = "Con Chào Mẹ Ạ";
   }
   else if(select == 3) {
      loiChao ="Em Chào Anh ạ";
   }
   else {
    loiChao ="Mau chào Anh đi em";

   }
document.getElementById("footercard1").innerHTML = "Chào : " + loiChao;
}
