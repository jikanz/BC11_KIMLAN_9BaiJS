document.getElementById("btnHocLuc").onclick = function (event) {
    event.preventDefault();
    var name = document.getElementById("txtName").value ;
    var toan = document.getElementById("txtToan").value ;
    var ly = document.getElementById("txtLy").value ;
    var hoa = document.getElementById("txtHoa").value ;
   var diemTB= ((parseFloat(toan)+parseFloat(ly)+parseFloat(hoa))/3)
    console.log(toan,ly,hoa);
    console.log(diemTB);
    var hocLuc = "Yếu" ;
    if (diemTB >=8.5){
        hocLuc ="Giỏi"}
        else if (diemTB >=6.5) {
            hocLuc ="Khá"}
            else if (diemTB>5) {  
                hocLuc ="Trung Bình"
            }else{
                hocLuc = "Yếu"
                }
                
     var info = "<div>Tên Thí sinh :" + name +"</div>";
    info += "<div> xếp loại :" + hocLuc +"</div>";
    document.getElementById("footerCard8").innerHTML= info;
            }
        
    
