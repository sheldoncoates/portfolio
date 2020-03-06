//adding a shadow to nav-bar when scrolling
$(window).scroll(function () {
	var scroll = $(window).scrollTop();
	if (scroll > 0) {
		$("#nav").addClass("active");
	}
	else {
		$("#nav").removeClass("active");
	}
});
