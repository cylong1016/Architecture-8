$(document).ready(function(){
    $('.btn-find').click(function(){
        $('.table-result').empty();

        var bytype = 0;
        var bycontent = '';
        if($('#bytimes').is(':checked')) {
            bytype = 0;
            bycontent = $('#times').val();
        } else if($('#byname').is(':checked')) {
            bytype = 1;
            bycontent = $('#name').val();
        } else if($('#bynumber').is(':checked')) {
            bytype = 2;
            bycontent = $('#number').val();
        }

        $.ajax({
            type:'post',
            url:'ajax/find.php',
            dataType:'html',
            data:'bytype='+bytype+'&bycontent='+bycontent,
            success:function(data){
                $('.table-result').append(data);
            }
        });
    });
    $('.btn-export-excel').click(function(){
        var times = $('#times').val();
        $.ajax({
            type:'post',
            url:'ajax/export-excel-studentlist.php',
            dataType:'json',
            data:'times='+times,
            success:function(json){
                window.open(json.pathName);
            }
        });
    });
    $('.detail-radio').find('label').find('input').click(function(){
        $(this).parent('label').click();
        $(this).focus();
    });
});
