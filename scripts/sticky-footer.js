window.onresize = resize;
document.onload = setTimeout(resize, 1000);

function resize() {
	var pageHeight = window.screen.height;
	var contentHeight = document.body.clientHeight;

	if (pageHeight > contentHeight) {
		document.getElementsByTagName("main")[0].classList.add("flex-grow-1");
	}
	else if (document.getElementsByTagName("main")[0].classList.contains("flex-grow-1")) {
		document.getElementsByTagName("main")[0].classList.remove("flex-grow-1");
	}
}