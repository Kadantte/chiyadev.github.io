"use strict";

// enable tooltips
$("#social").children().tooltip();

var time = new Date().getHours();
var bgUrl;

// 10pm to 6am
if (time >= 22 || time < 6)
  bgUrl = "https://images8.alphacoders.com/789/789587.png";

// 6am to 2pm
else if (time < 14)
  bgUrl = "https://images5.alphacoders.com/752/752727.png";

// 2pm to 10pm
else if (time < 22)
  bgUrl = "https://images7.alphacoders.com/789/789589.png";

// set background image
$("#background").css("background-image", "url(" + bgUrl + ")");

var $shadow = $(".shadow");

// social media fading
$("#social").children().each(function () {
  $(this).hover(function () {
    $(this).stop(true).css("opacity", 1);
  }, function () {
    $(this).stop(true).fadeTo("fast", 0.5);
  });
});