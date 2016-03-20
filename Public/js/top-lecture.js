$(document).ready(function() {
    $('.btn-top-lecture').click(function() {
        var lid = $(this).attr('data-lid');
        $.post('ajax/top-lecture.php', {
                lid: lid
            },function() {
                history.go(0);
        });
    });
    $('.btn-untop-lecture').click(function() {
        var lid = $(this).attr('data-lid');
        $.post('ajax/untop-lecture.php', {
                lid: lid
            },function() {
                history.go(0);
        });
    });
});
