document.getElementById("btnsoLonNhat").onclick = function (event) {
    event.preventDefault();
    var soA = document.getElementById("txtSoNguyen").value ;
    var soB = document.getElementById("txtSoNguyen2").value ;
    var soC = document.getElementById("txtSoNguyen3").value ;
    var thuTuBeDenLon = "";
    soA=parseInt(soA );
    soB=parseInt(soB);
    soC=parseInt(soC);
        if (soA>soB && soA>soC && soB>soC) {
        thuTuBeDenLon = soC + "<"+ soB + "<" + soA ;
    }
    else if (soA>soB && soA>soC && soC>soB){
        thuTuBeDenLon = soB + "<" + soC + "<" + soA ;
    }
    else if (soB>soA && soB>soC && soA>soC){
         thuTuBeDenLon = soC + "<" +soA + "<" +soB;
    }
    else if (soB >soA && soB>soC && soC>soA){
        thuTuBeDenLon = soA+ "<" + soC+ "<" + soB ;
    }
     else if(soC>soA && soC>soB && soA>soB){
         thuTuBeDenLon = soB +"<"+soA+"<"+soC;
    }
    else if (soC>soA && soC>soB && soB>soA) {
        thuTuBeDenLon =soA+"<"+soB+"<" +soC ;
    }
    
    // console.log(soA,soB,soC)
    // var thuTuBeDenLon = Math.max(soA,soB,soC)
    // var score = [soA,soB,soC];
    // score.sort(function(a, b){return a - b})
    var info = "<div class='alert alert-warning'>"+ thuTuBeDenLon +"</div>";
        // info +="<div class='alert alert-warning'>"+ thuTuBeDenLon2 +"</div>";
        // info +="<div class='alert alert-warning'>"+ thuTuBeDenLon3 +"</div>";
document.getElementById("footercard").innerHTML= info;
}