$(document).ready(function() {
    $('.btn-update-userinfo').click(function() {
        $('#form-update').submit();
    });
    $('.btn-return').click(function() {
        history.go(-1);
    });
});
