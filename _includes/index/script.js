"use strict";

var bgUrls = [
  "https://images7.alphacoders.com/789/789589.png",
  "https://images8.alphacoders.com/789/789587.png",
  "https://images7.alphacoders.com/752/752730.png",
  "https://images8.alphacoders.com/796/796740.png",
  "https://images6.alphacoders.com/790/790833.png",
  "https://images5.alphacoders.com/752/752727.png",
  "https://images8.alphacoders.com/795/795879.png"
];

$(document).ready(function () {
  $("#soc-discord").tooltip();

  var bgUrl = bgUrls[Math.floor(Math.random() * bgUrls.length)];

  $(".parallax-bg").css("background-image", "url(" + bgUrl + ")");
  $(".parallax-bg.parallax-bg-blur").css("background-image", "url(" + bgUrl + ")");

  var $parallaxBgBlur = $(".parallax-bg.parallax-bg-blur");
  var $shadow = $(".shadow");

  // parallax effect
  function handleScroll() {
    var current = $(window).scrollTop();
    var opacity = Math.min(Math.max((current * 3) / $(window).height(), 0), 1);

    $parallaxBgBlur.css("opacity", opacity);
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