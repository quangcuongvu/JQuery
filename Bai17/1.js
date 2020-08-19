$(document).ready(function () {
    console.log("hello");
    // xu ly viec click thay doi mau
    $('.tdkhoi').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('xanh');

        // khi click vao, cho noi dung hien ra
        $(this).next().slideToggle(900,"easeInOutExpo");
        $('html, body').animate({scrollTop: $(this).offset().top},900,"easeInOutExpo");
    });
    //code cho phan phong to anh
    $(".vaicaianh a").fancybox({
        openEffect  : 'elastic',
        closeEffect : 'none',

        prevEffect : 'none',
        nextEffect : 'none',

        closeBtn  : false,

        helpers : {
            title : {
                type : 'inside'
            },
            buttons	: {},
            thumbs : {
                width  : 0,
                height : 0,
            }
        },

        afterLoad : function() {
            this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
        }
    });

    // xu ly co dan noi dung accordion
    $('.ndkhoi').slideUp();
    

});