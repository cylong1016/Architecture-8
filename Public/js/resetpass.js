$(document).ready(function() {
    $('.btn-change-password').click(function() {
        var id = $(this).attr('data-id');
        var password = $('#password').val();
            $.ajax({
                type:'post',
                url:'ajax/resetpass.php',
                dataType:'json',
                data:'id='+id+'&password='+password,
                success:function(json){
                    if (json.state == 1) {
                        alert('修改密码成功');
                        history.go(-1);
                    } 
                }
            });

    });
    $('.btn-return').click(function() {
        history.go(-1);
    });
});
