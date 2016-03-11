$(document).ready(function(){

    ////var score = $(".score span").text();
    ////alert(score);
    //
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



    $('.login').click(function() {
        var email = $('#login-email').val();
        var password = $('#login-password').val();
        var remember = $('#login-remember').is(':checked') ? true : false;
        var checkEmail= /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
        if (!checkEmail.test(email)) {
            var text = "邮箱格式错误，请重新输入";
            $('#login-info').show();
            $('#login-info').html(text);
            $('#login-email').focus();
            return;
        }
        $.ajax({
            type: 'post',
            url: 'login',
            dataType: 'json',
            data: 'email=' + email + '&password=' + password + '&remember=' + remember,
            success: function(json) {
                switch (json.status) {
                    case 0: // 登录成功
                        var text = "登录成功";
                        $.toaster({ title : text, priority : 'success', message : '' });
                        $('.log-or-sign').hide();
                        setTimeout(function() {
                            window.location.reload()
                        },1200);
                        break;
                    case 1: // 密码错误
                        var text = "密码错误，请重新输入";
                        $('#login-info').show();
                        $('#login-info').html(text);
                        $('#login-password').focus();
                        break;
                    case 2: // 用户不存在
                        var text = "用户不存在，请重新输入或注册新用户";
                        $('#login-info').show();
                        $('#login-info').html(text);
                        $('#login-email').focus();
                        break
                    case 3: // 邮箱未验证
                        var text = "邮箱未验证，请验证邮箱后登录";
                        $('#login-info').show();
                        $('#login-info').html(text);
                        $('#login-email').focus();
                        break;
                }
            }
        });
    });

    function sendEmail() {
        $.ajax({
            type: 'post',
            url: 'register/sendEmail',
            dataType: 'json',
            data: '',
            success: function(json) {
                //$.toaster({ title : 'Hey, there. ', priority : 'success', message : ')' });
            }
        });
    }

    $('.register').click(function() {
        var email = $('#register-email').val();
        var password = $('#register-password').val();
        var checkEmail= /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
        if (!checkEmail.test(email)) {
            var text = "邮箱格式错误，请重新输入";
            $('#register-info').show();
            $('#register-info').html(text);
            $('#register-email').focus();
            return;
        }
        if (password.length < 6) {
            var text = "密码需要至少为6位";
            $('#register-info').show();
            $('#register-info').html(text);
            $('#register-password').focus();
            return;
        }
        $.ajax({
            type: 'post',
            url: 'register',
            dataType: 'json',
            data: 'email=' + email + '&password=' + password,
            success: function(json) {
                switch (json.status) {
                    case 0: // 注册成功
                        sendEmail();
                        var text = "注册成功，请验证邮箱后登录";
                        $('#login-info').show();
                        $('#login-info').html(text);
                        //$('.log-or-sign').hide();
                        $('#tab-sl a[href="#login"]').tab('show');
                        $('#login-email').val(email);
                        $('#register-email').val();
                        $('#register-password').val();
                        $('#login-password').focus();
                        break;
                    case 1: // 用户已存在
                        var text = "用户已存在，请重新输入或登录已有用户";
                        $('#register-info').show();
                        $('#register-info').html(text);
                        $('#register-email').focus();
                        break;
                    case 2: // 内部错误
                        var text = "发生内部错误，请稍后尝试";
                        $.toaster({ title : text, priority : 'danger', message : '' });
                        break;
                }
            }
        });
    });

});