var next = document.getElementById("next");
var previous = document.getElementById("previus");
var sliderCount = 0;
var img1 = document.getElementById("slide1");
var img2 = document.getElementById("slide2");
var img3 = document.getElementById("slide3");
var imgArray = [img1, img2, img3];

next.onclick = function() {
	if(sliderCount < 2) {
		imgArray[sliderCount].style.display = "none";
		sliderCount++;
		imgArray[sliderCount].style.display = "block";
	}
	else {
		imgArray[sliderCount].style.display = "none";
		sliderCount = 0;
		imgArray[sliderCount].style.display = "block";
	}
}
previous.onclick = function(){
	if(sliderCount > 0){
		imgArray[sliderCount].style.display = "none";
		sliderCount--;
		imgArray[sliderCount].style.display = "block";
	}
	else{
		imgArray[sliderCount].style.display = "none";
		sliderCount = 2;
		imgArray[sliderCount].style.display = "block";
	}
}