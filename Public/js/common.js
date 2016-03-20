$(document).ready(function(){
    $('.menu li').click(function(){
        if ($(this).attr('class') != 'menu-selected') {
            window.location.href = $(this).find('a').attr('href');
        }
    });
    $('.info').click(function(){
        window.location.href = $(this).find('a').attr('href');
    });
});
