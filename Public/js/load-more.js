$(document).ready(function() {
    //传入加载到第几页(page), 以及当前列表的类型(type)
    //返回html的data
    var count = 0;
    var total = $('.btn-more').attr('data-total');
    var type = $('.btn-more').attr('data-type');
    //$('#list-more').load('ajax/load-more.php', {'page':count}, function() {count++;});
    $('.btn-more').click(function(e) {
        $(this).hide();
        $('.loader').show();

        if(count <= total) {
            $.post('ajax/load-more.php', {
                'page': count,
                'type': type
            }, function(data) {
                $('.btn-more').show();
                $('#list-more').append(data);
                $('html, body').animate({scrollTop: $('.btn-more:first').offset().top}, 500);
                $('.loader').hide();
                count++;
            }).fail(function(xhr, ajaxOptions, thrownError) {
                alert(thrownError);
                $('.btn-more').show();
                $('.loader').hide();
            });
            if(count >= total - 1) {
                $('.btn-more').hide();
            }
         }
    });
});
