$(document).ready(function () {
    // Đầu tiên là chưa có gì

    //$('.dangnhap').animate({opacity:0,marginLeft:-100}); // đăng nhập đi ra
    
    $('.dangky').animate({opacity:0,marginLeft:-100}); // đăng ký đi ra

    // áp dụng 3 phần tử của câu lệnh jquery
    $('.nutso2').click(function (e) { 
        e.preventDefault();

        // form đăng nhập đi ra
        $('.dangnhap').animate({opacity:0,marginLeft:-100});
        
         // form đăng ký đi vào
        $('.dangky').animate({opacity:1,marginLeft:0});
    });
   
    $('.nutso1').click(function (e) { 
        e.preventDefault();

        // form đăng ký đi ra
        $('.dangky').animate({opacity:0,marginLeft:-100});
        
         // form đăng nhập đi vào
        $('.dangnhap').animate({opacity:1,marginLeft:0});
    });
   
});