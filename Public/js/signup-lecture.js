$(document).ready(function() {
    $('.btn-signup-lecture').click(function() {
        var uid = $(this).attr('data-uid');
        var lid = $(this).attr('data-lid');
        var tmp = $(this);
        $.ajax({
            type:'post',
            url:'ajax/signup-lecture.php',
            dataType:'json',
            data:'uid='+uid+'&lid='+lid,
            success:function(json){
                tmp.removeClass();
                tmp.addClass('btn-status');
                if (json.state == 1) {
                    tmp.text('已报名成功');
                } else {
                    tmp.text('人数已满');
                }
            }
        });
    });
});
