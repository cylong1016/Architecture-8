/**
 * Created by cpc on 12/27/15.
 */

function noticeInfo(content) {
  $.toaster({ title : content, priority : 'info', message : ')' });
}
function noticeWarning(content) {
  $.toaster({ title : content, priority : 'warning', message : '(' });
}

function sendEmail() {
  $.ajax({
    type: 'post',
    url: rootUrl+'/feedback/sendEmail',
    success: function() {}
  });
}

$(document).ready(function() {
  $('#send-feedback').click(function() {
    var content = $('#feedback-content').val().trim();
    if (content == '') {
      noticeWarning('反馈不能为空');
      return;
    }
    var data = {
      content: content
    };
    $.ajax({
      type: 'post',
      url: rootUrl+'/feedback',
      data: data,
      success: function(status) {
        if (status > 0) {
          sendEmail();
          noticeInfo('反馈成功');
          $('#modal-feedback').modal('hide');
        } else if (status == 0) {
          $.toaster({ title : '还没登录喔~', priority : 'danger', message : '(' });
        } else {
          $.toaster({ title : '出错啦,请稍候再试~', priority : 'danger', message : '(' });
        }
      }
    });
  });
});