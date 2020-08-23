"use strict"

// enable tooltips
$("#social").children().tooltip()

var time = new Date().getHours()
var bgUrl

// 10pm to 6am
if (time >= 22 || time < 6)
  bgUrl = "/assets/images/night.jpg"

// 6am to 2pm
else if (time < 14)
  bgUrl = "/assets/images/morning.jpg"

// 2pm to 10pm
else if (time < 22)
  bgUrl = "/assets/images/noon.jpg"

// load background image
$("<img/>").attr("src", bgUrl).on("load", function () {
  $(this).remove()

  // fade in background
  $("#background")
    .css("background-image", "url(" + bgUrl + ")")
    .fadeIn("slow")

  // fade in logo
  $("#logo")
    .on("load", function () {
      $(this).delay(300).fadeIn()
      $("#social").delay(300).fadeIn()
    }).each(function () {
      if (this.complete)
        $(this).trigger("load")
    })
})

// load logo
$("#logo")
  .attr("src", "/assets/images/chiya-logo.png")

// social media fading
$("#social")
  .children("a").each(function () {
    $(this).hover(function () {
      $(this).stop(true).css("opacity", 1)
    }, function () {
      $(this).stop(true).fadeTo("fast", 0.5)
    })
  })
