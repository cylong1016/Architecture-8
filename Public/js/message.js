/**
 * Created by lenovo on 2015/12/24.
 */

var msg = {
  success: ')',
  info: ')',
  danger: '(',
  warning: ')'
};
$(function(){

    //$('ul.menu li:first-child').addClass('active');

    $('ul.menu li').click(function(){
        $(this).siblings("li").removeClass("active");
        $(this).addClass("active");
    })

    setReply();
    setDelete();

    $("#message-content").focus();

})

function receiveFriend($obj){
    var uid = $obj.siblings("input").val();
    $.post(
        rootUrl+ "/message/passApply",
        {friendid: uid},
        function(data){
            $.toaster({ title : data['text'], priority : data['type'], message : msg[data['type']] });
            if(data['type'] == 'success'){
                var isFriendBtn = '<button type="button" class="receive-friend btn btn-sm btn-primary">已为好友</button>';
                $obj.siblings("button").remove();
                $obj.parent().prepend(isFriendBtn);
                $obj.remove();
            }
        }
    )
}

function refuseFriend($obj){
    var uid = $obj.siblings("input").val();
    $.post(
        rootUrl+"/message/rejectApply",
        {friendid: uid},
        function(data){
            $.toaster({ title : data['text'], priority : data['type'], message : msg[data['type']] });
            if(data['type'] == 'success'){
                var isFriendBtn = '<button type="button" class="refuse-friend btn btn-sm btn-default">已经拒绝</button>';
                $obj.siblings("button").remove();
                $obj.parent().append(isFriendBtn);
                $obj.remove();
            }
        }
    )
}

function sendMessage($obj){
    var uid = $obj.siblings("input").val();
    var content = $("#message-content").val();
    $.post(
        rootUrl+"/message/sendMessage",
        {friendid : uid,
         message : content},
        function(data){
            $.toaster({ title : data['text'], priority : data['type'], message : msg[data['type']] });
            if(data['type'] == 'success'){
                window.location.reload();
            }
        }
    )
}

function setReply(){
    $(".mes-reply").click(function(){
        $('html, body').animate({scrollTop:0}, 'slow');
        $("#message-content").focus();
    })

}

function setDelete(){
    $(".mes-delete").click(function(){

    })
}