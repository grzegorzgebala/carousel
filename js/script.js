'use strict';

$(function(){
	var carouselList = $('#carousel ul');
	$(document).changeSlide(function(){
    carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
  });
	setInterval(changeSlide, 3000);

	var firstItem = carouselList.find('li:first');
	var lastItem = carouselList.find('li:last');

	lastItem.after(firstItem);
	carouselList.css({marginLeft:0});
});