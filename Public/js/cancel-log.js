$(document).ready(function() {
    $('.btn-cancel-log').click(function() {
        var lid = $(this).attr('data-lid');
        $.post('ajax/cancel-log.php', {
                lid: lid
            },function() {
                history.go(0);
        });
    });
});
