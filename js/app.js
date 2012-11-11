/*Makes background image change when refreshed*/
function changeImg(imgNumber) {
	var myImages = ["../img/background_tile.png", "../img/background_tile_blue.png", "../img/background_tile_green.png", "../img/background_tile_purple.png"]; 
	var myColors = ["#d1261e", "#6167e6", "#3db322", "#a12cbb"];
	var newImgNumber = Math.floor(Math.random()*myImages.length);
	var linkClasses = ['red', 'blue', 'green', 'purple'];

	document.body.style.backgroundImage = 'url('+myImages[newImgNumber]+')';
	document.body.style.backgroundColor = myColors[newImgNumber];

	$('a').addClass(linkClasses[newImgNumber]);
}
window.onload=changeImg;