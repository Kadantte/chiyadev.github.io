"use strict";

var time = new Date().getHours();
var bgUrl;

if (time < 6)
  bgUrl = "https://images8.alphacoders.com/796/796740.png";
else if (time < 12)
  bgUrl = "https://images8.alphacoders.com/789/789587.png";
else if (time < 18)
  bgUrl = "https://images7.alphacoders.com/789/789589.png";
else
  bgUrl = "https://images5.alphacoders.com/752/752727.png";

$(document).ready(function () {
  $("#soc-discord").tooltip();

  $(".background").css("background-image", "url(" + bgUrl + ")");
  $(".background.background-blurred").css("background-image", "url(" + bgUrl + ")");

  var backgroundBlurred = $(".background.background-blurred");
  var $shadow = $(".shadow");

  // parallax effect
  function handleScroll() {
    var current = $(window).scrollTop();
    var opacity = Math.min(Math.max((current * 3) / $(window).height(), 0), 1);

    backgroundBlurred.css("opacity", opacity);
    $shadow.css("opacity", 1 - opacity);
  }
  handleScroll();
  $(window).scroll(handleScroll);

  // social media fading
  $("#social").children().each(function () {
    $(this).hover(function () {
      $(this).stop(true).css("opacity", 1);
    }, function () {
      $(this).stop(true).fadeTo("fast", 0.5);
    });
  });
});