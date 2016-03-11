/**
 * Created by soujing on 12/27/15.
 */


$(document).ready(function() {
  function clearRedPoint() {
    $.get(rootUrl + "/announcement");
    $(".red-point").remove();
  }
  $("#nav-recruit").click(clearRedPoint);
  $("#xs-nav-recruit").click(clearRedPoint);

    $.get(
        rootUrl + "/Index/checkLogin",
        {},
        function(data){
            if(data){
                loginNav();
            }
            else{
                $(".logout").parent().remove();
            }
        }
    )

})

function loginNav(){
    $.get(
        rootUrl + "/User/getLoginInit",
        {},
        function(data){
            var mesNum = data['mes_num'];
            var userName = data['name'];
            var userIcon = data['icon'];
            var isRead = data['read'];
            if(mesNum != 0){
                var mesSpan = ' <span class="badge"> '+ mesNum + '</span>';
                $("#nav-messages").append(mesSpan);
            }
            if(!isRead){
                var redPoint = '<div class="red-point"></div>';
                $("#nav-recruit").children("a").append(redPoint);
                $("#xs-nav-recruit").children("a").append(redPoint);
            }
        }
    )
}