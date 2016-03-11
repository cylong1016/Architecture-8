$(document).ready(function (){

    //$('.collapse').collapse();
    displayCourseButtons(status);

    if (window.innerWidth >= 768) {
        var card = $('#course-card');
        var avatar = $('#course-card-left');
        var paddingTop = (card.height()-avatar.height())/2+24;
        avatar.height(card.height()+48);
        avatar.css('paddingTop', paddingTop);
    }

    const UNKNOWN_ERROR = -10000;
    const TOO_FAST = -2;
    const COURSE_NOT_EXIST = -1;
    const NOT_LOGIN = 0;
    function errorText(errorCode) {
        switch (errorCode) {
            case UNKNOWN_ERROR: return '未知错误';
            case NOT_LOGIN: return '还没登录喔';
            case COURSE_NOT_EXIST: return '课程不存在';
            case TOO_FAST: return '动作太快了亲~';
            default: return '';
        }
    }

    const HAD = 1;
    const HAVING = 2;
    const WANT = 3;
    const RATED = 4;
    const CANCEL = 5;

    const SUCCESS = 1;
    const VOTED = 2;

    const LIKE = 1;
    const DISLIKE = 0;

    var comments = $('#comments');


    var numOfScore = $(".score").length;
    var sixEm = '<img src="' + rootUrl + '/Public/img/starEm.png"/> \n';

    for(var i=0; i<numOfScore; i++){
        var score = $(".score").eq(i).children("span").text();
        var s = parseInt(Number(score) + 0.5);
        var deleteS = 5 - s;
        for(var j=deleteS-1; j>=0; j--){
            $(".score").eq(i).children("img").eq(j).remove();
            $(".score").eq(i).children("span").before(sixEm);

        }
    }

    function getUrlPara(name) {
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null)return  unescape(r[2]); return null;
    }

    function noticeNotLogin() {
        $.toaster({ title : '还没登录喔', priority : 'danger', message : '(' });
    }
    function noticeError(errCode) {
        $.toaster({ title : errorText(errCode), priority : 'danger', message : '(' });
    }

    function checkData(data) {
        //noticeInfo(data);
    }

    function noticeInfo(content) {
        $.toaster({ title : content, priority : 'info', message : ')' });
    }
    function noticeWarning(content) {
        $.toaster({ title : content, priority : 'warning', message : '(' });
    }

    function displayCourseButtons(status) {
        $('.course-buttons').css('display','inline-block');
        $('.course-buttons').hide();
        $('#course-buttons-' + status).show();
    }

    function handleCourse(status) {
        var data = 'courseId=' + courseId + '&status=' + status;
        checkData(data);
        $.ajax({
            type: 'post',
            url: rootUrl+'/course/favorite',
            dataType: 'json',
            data: data,
            success: function (status) {
                if (status == NOT_LOGIN) {
                    noticeNotLogin();
                } else {
                    if (status == CANCEL) {
                        displayCourseButtons(0);
                        noticeInfo('移除成功');
                    } else if (status == HAD) {
                        displayCourseButtons(HAD);
                        noticeInfo('收藏成功');
                        $('#modal-rate').modal('show');
                    } else {
                        displayCourseButtons(status);
                        noticeInfo('收藏成功');
                    }
                }
            }
        });
    }
    function rateCourse() {
        var rateValue = ['', '', '', ''];
        var rateType = ['star', 'stress', 'score', 'exam'];
        var rateCount = [5, 3, 6, 6];

        var data = {};
        for (var i = 0; i < 4; ++i) {
            for (var j = 0; j < rateCount[i]; ++j) {
                var $ele = $('#' + rateType[i] + '-' + j);
                if ($ele.is(':checked')) {
                    rateValue[i] = rateValue[i] + j.toString();
                }
            }
            data[rateType[i]] = rateValue[i];
        }

        data['comment'] = $('#comment-in').val();
        data['withRate'] = true;

        $.ajax({
            type: 'post',
            url: rootUrl+'/comment/'+courseId,
            data: data,
            success: function (res) {
                var status = Number(res);
                if (isNaN(status)||(status > 0)) {
                    displayCourseButtons(RATED);
                    noticeInfo('反馈成功');
                    if (isNaN(status)) {
                        comments.prepend(res);
                    }
                } else {
                    noticeError(status);
                }
            }
        });
    }

    $('.cancel_course').click(function () {
        handleCourse(CANCEL);
    });
    $('.want_course').click(function () {
        handleCourse(WANT);
    });
    $('.having_course').click(function () {
        handleCourse(HAVING);
    });
    $('.had_course').click(function () {
        handleCourse(HAD);
    });
    $('.rate_course').click(function () {
        rateCourse();
    });

    $('.collapse_description').click(function () {
        if ($(this).html() == '收起') {
            $(this).html('查看更多');
        } else {
            $(this).html('收起');
        }
    });

    $('.not_login').click(function () {
        noticeWarning('登录后才可以查看TA的个人主页喔~');
    });

    comments.delegate('.collapse_reply', 'click', function() {
        var count = $(this).attr('data-count');
        var html = $(this).html();
        html = (html.indexOf('收起') != -1)? ('回复 '+count): '收起回复';
        $(this).html(html);
    });

    // TODO 判断输入长度
    $('.comment_course').click(function () {
        var input = $('#input-comment');
        var comment = input.val();
        comment.trim();
        if (comment.length == 0) {
            noticeWarning('评论不能为空');
            return;
        }
        var data = {comment: comment};
        checkData(data);
        $.ajax({
            type: 'post',
            url: rootUrl+'/comment/'+courseId,
            data: data,
            success: function(res) {
                var status = Number(res);
                if (isNaN(status)||(status > 0)) {
                    if (isNaN(status)) {
                        comments.prepend(res);
                        input.val('');
                    }
                    noticeInfo('评论成功');
                } else {
                    noticeError(status);
                }
            }
        });
    });
    comments.delegate('.reply_to_reply', 'click', function() {
        var replyId = $(this).attr('data-id');
        var replyName = $(this).attr('data-name');
        var RootNode = $(this).parent().parent().parent().parent().parent();
        var button = RootNode.find('.reply_comment');
        button.attr('data-reply-id', replyId);
        var input = RootNode.find('.input-reply');
        input.val('回复 '+replyName+': ');
        input.focus();
    });
    comments.delegate('.reply_comment', 'click', function() {
        var commentId = $(this).attr('data-id');
        var replyToId = $(this).attr('data-reply-id');
        var input = $(this).parent().parent().find('.input-reply');
        var countNode = $(this).parent().parent().parent().parent().parent().find('.collapse_reply');
        var count = Number(countNode.attr('data-count'));
        var reply = input.val().trim();
        if (reply.length == 0) {
            noticeWarning('评论不能为空');
            return;
        }
        var data = {
            commentId: commentId,
            replyToId: replyToId,
            content: reply
        };
        $.ajax({
            type: 'post',
            url: rootUrl+'/comment/sub/id/'+courseId,
            data: data,
            success: function (res) {
                var status = Number(res);
                if (isNaN(status)||(status > 0)) {
                    noticeInfo('回复成功');
                    if (isNaN(status)) {
                        $('#comment-'+commentId+'-replies').append(res);
                        count++;
                        countNode.attr('data-count', count);
                        input.val('');
                    }
                } else {
                    noticeError(status);
                }
            }
        });
    });
    function vote(id, type, callback) {
        var data = 'commentId=' + id + '&type=' + type;

        checkData(data);
        $.ajax({
            type: 'post',
            url: rootUrl+'/comment/vote',
            dataType: 'json',
            data: data,
            success: function (status) {
                switch (status) {
                    case NOT_LOGIN:
                        noticeNotLogin();
                        break;
                    case VOTED:
                        noticeInfo('已经投过票啦~~');
                        break;
                    case SUCCESS:
                        noticeInfo('投票成功~~');
                        break;
                }
                callback(status);
            }
        });
    }

    comments.delegate('.like_comment', 'click', function() {
        var commentId = $(this).attr('data-id');
        var that = $(this);
        vote(commentId, LIKE, function(status) {
            if (status == 1) {
                var html = that.html();
                var match = html.match(/<\/span> (\d+)/);
                var count = Number(match? match[1]: 0)+1;
                that.html('已赞'+count);

            }
        });
    });

    comments.delegate('.dislike_comment', 'click', function() {
        var commentId = $(this).attr('data-id');
        var that = $(this);
        vote(commentId, DISLIKE, function(status) {
            if (status == 1) {
                var html = that.html();
                var match = html.match(/<\/span> (\d+)/);
                var count = Number(match? match[1]: 0)+1;
                that.html('已踩'+count);

            }
        });
    });
});
