$(document).ready(function() {
    $('.btn-confirm-substitute').click(function() {
        var uid = $(this).parent().attr('data-uid');
        var lid = $(this).parent().attr('data-lid');
        var sender = $(this).parent().attr('data-sender');
        var senderid = $(this).parent().attr('data-senderid');
        $.post('ajax/confirm-substitute.php', {
                uid: uid,
                lid: lid,
                sender:sender,
                senderid:senderid
            },function() {
                history.go(0);
        });
    });
    $('.btn-refuse-substitute').click(function() {
        var uid = $(this).parent().attr('data-uid');
        var lid = $(this).parent().attr('data-lid');
        var sender = $(this).parent().attr('data-sender');
        var senderid = $(this).parent().attr('data-senderid');
        $.post('ajax/refuse-substitute.php', {
                uid: uid,
                lid: lid,
                sender: sender,
                senderid:senderid
            },function() {
                history.go(0);
        });
    });
});
