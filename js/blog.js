
//多行文本省略
$(".page-contents").each(function() {
    if ($(this).text().length > 20) {
        $(this).html($(this).text().replace(/\s+/g, "").substr(0, 500) + "...<a class='alink' onclick='presecontent()'>阅读全文</a>")
    }
});

function presecontent() {
    window.location.href = "detalis.html";
}

//tab选项卡
$(document).ready(function () {
    $(".header li").click(function () {
        $(".header li").eq($(this).index()).addClass("ontabs").siblings().removeClass('ontabs');
        $(".qh-page").hide().eq($(this).index()).show();
        //另一种方法: $("div").eq($(".tab li").index(this)).addClass("on").siblings().removeClass('on');
    });
});