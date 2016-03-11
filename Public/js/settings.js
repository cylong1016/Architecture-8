$(document).ready(function(){
    $(document).on('change', '#file-avatar', function() {
        var input = $(this);
        var numFiles = input.get(0).files ? input.get(0).files.length : 1;
        var label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [numFiles, label]);
    });
    $('.btn-file :file').on('fileselect', function(event, numFiles, label) {
        var input = $('#file-avatar-name'),
            log = numFiles > 1 ? numFiles + ' files selected' : label;

        input.val(log);
    });
    $('.form-year').datetimepicker({
        language:  'zh-CN',
        weekStart: 0,
        todayBtn:  0,
        autoclose: 1,
        todayHighlight: 1,
        startView: 4,
        minView: 4,
        yearStart: 1902,
        yearEnd: 2015,
        pickerPosition: "top-left",
        forceParse: 0
    });
    $('.form-date').datetimepicker({
        language:  'zh-CN',
        weekStart: 0,
        todayBtn:  0,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        pickerPosition: "top-left",
        forceParse: 0
    });
    setDepartment();
    setSex();

});


function setDepartment(){

    var $dopt = $("#department-options");
    var $department = $("#department");
    $dopt.append($('<li class="default" style="display: none;">无匹配结果</li>)'));
    $department.focus(function(){
        var inputW = $("#department").width();
        //$dopt.css({"width":inputW+10});
        $dopt.css({"width":inputW+26});
        $dopt.slideDown();
    }).bind('keyup change', function() {
            $(this).next().children('.default').show();
            $(this).next().children().not('.default').each(function () {
                if (!$(this).text().match($(this).parent().prev().val().replace(/ /g, '').split('').join('.*')))
                    $(this).hide();
                else
                    $(this).show().nextAll('.default').hide();
            });
        });

    $('#department-options li').not('.default').click(function(){
        $('#int_department').val($(this).attr('id'));
        $("#department").val($(this).text());
    });

    $department.blur(function(){
        $dopt.slideUp();
    });

    $department.keyup(function(){
        var input = $(this).val();

    });


}

function setSex(){
    var sex = $("#sex").val();
    if(sex == '男'){
        $("#male").parent().addClass("active");
        $("#male").parent().siblings().removeClass("active");
        $("#post-sex").val("男");
    }
    else{
        $("#female").parent().addClass("active");
        $("#female").parent().siblings().removeClass("active");
        $("#post-sex").val("女");
    }

    $("#male").parent().click(function(){
        $("#post-sex").val("男");
    });

    $("#female").parent().click(function(){
        $("#post-sex").val("女");
    });
}
