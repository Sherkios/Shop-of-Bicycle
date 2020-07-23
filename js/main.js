

$(document).ready(function(){
	$('.main-screen__menu-burger').click(function(){
		$('.main-screen__menu-burger,.main-screen__item-menu,.main-screen__menu-items').toggleClass('active')
	});

	$('.slider').slick({
		arrows:false,
		dots:true,
		infinite:false,
		autoplay:false,
		autoplaySpeed:5000,
		draggable:false,
		touchMove:false,
		waitForAnimate:true,
		accessibylity:false,
		fade:true,
		});
});

function ibg(){

let ibg=document.querySelectorAll('.ibg');
for (var i = 0; i < ibg.length; i++) {
if(ibg[i].querySelector('img')){
ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
}
}
}

ibg();
