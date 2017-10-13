var testpage = testpage || {};
$( document ).ready(function() {
	testpage.initMenu();
});

testpage.initMenu = function() {
	$(document.getElementById('menu')).on('click', function() {
		$( document.getElementById('sidebar') ).toggleClass( "hide" );
	});
};