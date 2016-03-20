$(document).ready(function() {
    $("#date").datetimepicker({
        lang:'ch',
        format:'Y-m-d H:i',
        yearStart:2015,
        minDate:0,                  //today
        step:30
    });
    $('.btn-add-lecture').click(function() {
        $('#form-new').submit();
    });
    // $('.btn-add-lecture').click(function() {
    //     var name = $('#name').val();
    //     var lecturer = $('#lecturer').val();
    //     var date = $('#date').val();
    //     var address = $('#address').val();
    //     var limit = $('#limit').val();
    //     var detail = $('#detail').val();
    //     if($('#top').is(':checked')) {
    //         var top = 1;
    //     } else {
    //         var top = 0;
    //     }
    //     $.post('ajax/add-lecture.php', {
    //             name:name,
    //             lecturer:lecturer,
    //             date:date,
    //             address:address,
    //             limit:limit,
    //             detail:detail,
    //             top:top
    //         }, function() {
    //             window.location.href = 'lecturelist-admin.php';
    //     });
    // });
    $('.btn-return').click(function() {
        history.go(-1);
    });
});
