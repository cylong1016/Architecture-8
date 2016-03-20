$(document).ready(function() {
    $('.btn-change-password').click(function() {
        var id = $(this).attr('data-id');
        var password = $('#password').val();
        var newpassword = $('#newpassword').val();
        var newpassword2 = $('#newpassword2').val();
        if (newpassword != newpassword2) {
            alert('两次密码不一样');
            $('#newpassword2').focus();
        } else {
            $.ajax({
                type:'post',
                url:'ajax/change-password.php',
                dataType:'json',
                data:'id='+id+'&password='+password+'&newpassword='+newpassword,
                success:function(json){
                    if (json.state == 1) {
                        alert('修改密码成功');
                        history.go(-1);
                    } else {
                        alert('原密码输入不正确');
                        history.go(0);
                    }
                }
            });
        }
    });
    $('#newpassword2').keydown(function(e) {
        if(e.which==13) {
            $('.btn-change-password').click();
        }
    });
    $('.btn-return').click(function() {
        history.go(-1);
    });
});
