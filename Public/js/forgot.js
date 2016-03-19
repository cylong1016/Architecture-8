$(document).ready(function() {
    $('#newpassword2').keydown(function(e) {
        if(e.which==13) {
            $('.btn-reset-password').click();
        }
    });
    $("#password").keydown(function(e) {
        if(e.which==13) {
            if($("#password").val()!="") {
                $("#form-login").submit();
            } else {
                history.go(0);
            }
        }
    });
    $('.btn-return').click(function() {
        history.go(-1);
    });
});
