$(document).ready(function(){
    $('.btn-export-excel').click(function(){
        var lid = $(this).attr('data-lid');
        $.ajax({
            type:'post',
            url:'ajax/export-excel.php',
            dataType:'json',
            data:'lid='+lid,
            success:function(json){
                window.open(json.pathName);
            }
        });
    });
});
