$(document).ready(function(){
    $('.btn-find-teacher').click(function(){
        $('.table-result').empty();

        var bytype = 0;
        var bycontent = '';
        if($('#bynames').is(':checked')) {
            bytype = 0;
            bycontent = $('#names').val();
        } else if($('#bynumber').is(':checked')) {
            bytype = 1;
            bycontent = $('#number').val();
        }

        $.ajax({
            type:'post',
            url:'ajax/find-teacher.php',
            dataType:'html',
            data:'bytype='+bytype+'&bycontent='+bycontent,
            success:function(data){
                $('.table-result').append(data);
            }
        });
    });
    $('.btn-show-all').click(function(){
        $('.table-result').empty();
        var bytype = -1;
        var bycontent = 'all';
        $.ajax({
            type:'post',
            url:'ajax/find-teacher.php',
            dataType:'html',
            data:'bytype='+bytype+'&bycontent='+bycontent,
            success:function(data){
                $('.table-result').append(data);
            }
        });
    });

    $('.table-result').delegate('.add-authority','click',function(){
        var id = $(this).attr('data-id');
        $.ajax({
            type:'post',
            url:'ajax/add-authority.php',
            dataType:'json',
            data:'id='+id,
            success:function(json){
                $(this).parent().html('√有 <a class="cancel-authority" data-id="'+id+'">点击取消权限</a>');
            }
        });
    });
    $('.table-result').delegate('.cancel-authority','click',function(){
        var id = $(this).attr('data-id');
        $.ajax({
            type:'post',
            url:'ajax/cancel-authority.php',
            dataType:'json',
            data:'id='+id,
            success:function(json){
                $(this).parent().html('×无 <a class="add-authority" data-id="'+id+'">点击赋予权限</a>');
            }
        });
    });
    $('.detail-radio').find('label').find('input').click(function(){
        $(this).parent('label').click();
        $(this).focus();
    });
});
