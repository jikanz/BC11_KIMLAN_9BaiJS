document.getElementById("btnsoLeChan").onclick = function (event) {
    event.preventDefault() ;
    var soA = document.getElementById("txtSoNguyen4").value ;
    var soB = document.getElementById("txtSoNguyen5").value ;
    var soC = document.getElementById("txtSoNguyen6").value ;
    console.log(soA,soB,soC);
     var tongSoChan =0;
     var tongSoLe = 0;
  if (soA % 2 == 0) {
  ++tongSoChan;
} else {
    ++tongSoLe;
}
   if (soB % 2 == 0) {
   ++tongSoChan;
} else {
    ++tongSoLe;
}
  if (soC % 2 == 0) {
    ++tongSoChan;
} else {
   ++tongSoLe;
}
 
  var info = "<div>Tổng số chẵn là :" + tongSoChan +"</div>";
    info += "<div> Tổng số lẽ là :" + tongSoLe +"</div>";
    document.getElementById("footercard2").innerHTML= info;
}



 