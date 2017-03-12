function showPopup(){
	var wrapWidth = document.querySelector('.wrapper').offsetWidth;
	var scrWidth = document.documentElement.clientWidth;
	var startPoint = (scrWidth - wrapWidth) / 2;
	document.querySelector('.modal').style.display = 'block';
	document.getElementsByTagName("html")[0].style.overflow = 'hidden';
	document.getElementsByTagName("body")[0].style.overflow = 'hidden';
	document.querySelector('.shadow').style.display = 'block';
	document.querySelector('.shadow').style.width = wrapWidth + 'px';
	document.querySelector('.shadow').style.left = startPoint + 'px';
}

function closePopup(){
	document.querySelector('.modal').style.display='none';
	document.getElementsByTagName("html")[0].style.overflow='auto';
	document.getElementsByTagName("body")[0].style.overflow='auto';
	document.querySelector('.shadow').style.display='none';
}