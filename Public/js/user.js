/**
 * Created by lenovo on 2015/12/24.
 */

$(function(){
    setApplyFriend();

    deleteFriend();
});
var msg = {
  success: ')',
  info: ')',
  danger: '(',
  warning: ')'
};

function setApplyFriend(){
    $("#apply-friend").click(function(){
        var uid = $("#user-id").val();
        $.post(
            rootUrl+"/user/applyFriend",
            { friendid : uid},
            function(data){
                $.toaster({ title : data['text'], priority : data['type'], message : msg[data['type']] });
            }

        )
    })
}

function deleteFriend(){
   $(".delete-friend").click(function(){
       var uid = $(this).parent().parent().siblings("input").val();
       $.post(
           rootUrl+"/user/deleteFriend",
           {friendid : uid},
           function(data){
               $.toaster({ title : data['text'], priority : data['type'], message : msg[data['type']] });
               if(data['type'] == 'success'){
                   setTimeout(function() {
                     window.location.hash = '#friends';
                     window.location.reload();
                   }, 1200);
               }
           }
       )
   })
}

function sendMessage($obj){
    var fid = $obj.siblings("input").val();
    $.post(
        rootUrl+"/Message/isFriendMyself",
        {friendid: fid},
        function(data){
            if(data['type'] == 'danger'){
                $.toaster({ title : data['text'], priority : data['type'], message : msg[data['type']] });
            }
            else{
                window.location.href= rootUrl + "/Message/" + fid;
            }
        }
    )
}
$(document).ready(function() {
  if (window.location.hash == '#friends') {
    $('#friends-tab').tab('show');
  } else if (window.location.hash == '#courses') {
    $('#courses-tab').tab('show');
  } else if (window.location.hash == '#news') {
    $('#news-tab').tab('show');
  }

  var scores = $('.score');
    var numOfScore = scores.length;
    var sixEm = '<img src="' + rootUrl + '/Public/img/starEm.png"/> \n';

    for (var i = 0; i < numOfScore; i++) {
        var score = scores.eq(i).children("span").text().match(/(\d\.\d)/)[1];
        var s = parseInt(Number(score) + 0.5);
        var deleteS = 5 - s;
        for (var j = deleteS - 1; j >= 0; j--) {
            scores.eq(i).children("img").eq(j).remove();
            scores.eq(i).children("span").before(sixEm);
        }
    }

});