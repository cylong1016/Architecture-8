/**
 * Created by soujing on 12/23/15.
 */


var msg = {
    success: ')',
    info: ')',
    danger: '(',
    warning: ')'
};
$(function(){
    profileNotice();
});

function profileNotice(){
    $('#profile').submit(function(){
        $(this).ajaxSubmit(profile_options);
        return false;
    });
    $('#account').submit(function(){
        $(this).ajaxSubmit(password_change);
        return false;
    });
    $('#recover').submit(function(){
        $(this).ajaxSubmit(profile_options);
        return false;
    });

    var profile_options = {
        success:	function (data) {
            $.toaster({ title : data['text'], priority : data['type'], message : msg[data['type']] });
        },
        error:	function (data) {
            $.toaster({ title : data['text'], priority : data['type'], message : msg[data['type']] });
        },
        type: 	'post',
        dataType: 'json',
        timeout:	10000,
    }

    var password_change = {
        success:	function (data) {
            $.toaster({ title : data['text'], priority : data['type'], message : '' });
            if(data['type'] == 'success'){
                $("#account").children().children("input").val("");
            }
        },
        error:	function (data) {
            $.toaster({ title : data['text'], priority : data['type'], message : '' });
        },
        type: 	'post',
        dataType: 'json',
        timeout:	10000,
    }
}