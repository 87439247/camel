$(function() {
	if ($.browser.msie && parseInt($.browser.version, 10) <= 7) {
		$('.row div[class^="span"]:last-child').addClass('last-child');
        $('[class*="span"]').addClass('margin-left-20');
        $('[class*="span"][class*="offset"]').removeClass('margin-left-20');
        $(':button[class="btn"], :reset[class="btn"], :submit[class="btn"], input[type="button"]').addClass('button-reset');
        $(':checkbox').addClass('input-checkbox');
        $('[class^="icon-"], [class*=" icon-"]').addClass('icon-sprite');
        $('.pagination li:first-child a').addClass('pagination-first-child');
	}
	alert('您使用的浏览器版本低于IE8，我们软件不支持，建议您使用“猎豹双核浏览器，360极速浏览器，或者火狐，谷歌浏览器”！');
});