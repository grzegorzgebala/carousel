'use strict';

$(function(){
	var carouselList = $('#carousel ul');

	changeSlide(function(){
		carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
	});

	setInterval(function(){
    	changeSlide();},3000);

	moveFirstSlide(function() { 
		var firstItem = carouselList.find('li:first');
		var lastItem = carouselList.find('li:last');
	    lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	});
});
/*
$('p').hide();
  $('button').click(function(){
    $('p').slideToggle();
  });
}
setInterval(function(){ alert("Hello"); }, 3000);
*/