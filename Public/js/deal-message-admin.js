$(document).ready(function() {
    $('.btn-confirm-cancel').click(function() {
        var uid = $(this).parent().attr('data-uid');
        var lid = $(this).parent().attr('data-lid');
        $.post('ajax/confirm-cancel.php', {
                uid: uid,
                lid: lid
            },function() {
                history.go(0);
        });
    });
    $('.btn-refuse-cancel').click(function() {
        var uid = $(this).parent().attr('data-uid');
        var lid = $(this).parent().attr('data-lid');
        $.post('ajax/refuse-cancel.php', {
                uid: uid,
                lid: lid
            },function() {
                history.go(0);
        });
    });
});
