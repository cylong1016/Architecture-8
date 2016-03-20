$(document).ready(function() {
    $('.btn-send-cancel').click(function() {
        var uid = $(this).attr('data-uid');
        var lid = $(this).attr('data-lid');
        if(document.getElementById("admin-confirm").checked == true) {
            var number = 0;
        } else if(document.getElementById("substitute-confirm").checked == true) {
            var number = $('#number').val();
        }
        $.ajax({
            type:'post',
            url:'ajax/send-cancel.php',
            dataType:'json',
            data:'uid='+uid+'&lid='+lid+'&number='+number,
            success:function(json){
                if (json.state == 0) {
                    alert('学号不存在，请重新输入。');
                    $('#number').focus();
                } else {
                    window.location.href = 'lecturelist-student.php';
                }
            }
        });
    });
    $('.btn-return').click(function() {
        history.go(-1);
    });
});
