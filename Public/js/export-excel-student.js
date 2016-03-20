$(document).ready(function(){
    $('.btn-export-excel-student').click(function(){
        var uid = $(this).attr('data-uid');
        $.ajax({
            type:'post',
            url:'ajax/export-excel-student.php',
            dataType:'json',
            data:'uid='+uid,
            success:function(json){
                window.open(json.pathName);
            }
        });
    });
});
