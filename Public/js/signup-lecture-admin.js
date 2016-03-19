$(document).ready(function() {
    $('.btn-signup-lecture-admin').click(function() {
        var number = $('#number').val();
        var lid = $(this).attr('data-lid');
        $.ajax({
            type:'post',
            url:'ajax/signup-lecture-admin.php',
            dataType:'json',
            data:'number='+number+'&lid='+lid,
            success:function(json){
                if (json.state == 0) {
                    alert('学号不存在，请重新输入。');
                    $('#number').focus();
                } else if (json.state == 1) {
                    alert('该学生已报名。');
                    $('#number').focus();
                } else {
                    alert('报名成功。');
                    history.go(-1);
                }
            }
        });
    });
    $('.btn-return').click(function() {
        history.go(-1);
    });
});
