$(document).ready(function() {
    $('.btn-import-excel').click(function() {
        $('#form-import').submit();
    });
    $('.btn-return').click(function() {
        history.go(-1);
    });
});
