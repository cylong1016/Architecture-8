/**
 * Created by soujing on 12/22/15.
 */

$(function(){
  $('ul.menu li:first-child').addClass('active');

  $('ul.menu li').click(function(){
    $(this).siblings("li").removeClass("active");
    $(this).addClass("active");
  });


  $('body').delegate('.a-title', 'click', function() {
    $("#modal-notice .modal-body").text('');
    var aid = $(this).attr('data-id');
    $.get(
      "Announcement/getContent",
      {aid: aid},
      function(data){
        $("#modal-notice #modal-title-notice").text(data["title"]);
        $("#modal-notice .modal-header span").text(data["date"]);
        $("#modal-notice .modal-body").append(data["content"]);
      }
    );
  })
});
