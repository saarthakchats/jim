$(document).ready(function () {
    $('#map').addClass('scrolloff'); // set the mouse events to none when doc is ready

    $('#overlay').on("mouseup", function () { // lock it when mouse up
        $('#map').addClass('scrolloff');
        //somehow the mouseup event doesn't get call...
    });
    $('#overlay').on("mousedown", function () { // when mouse down, set the mouse events free
        $('#map').removeClass('scrolloff');
    });
    $("#map").mouseleave(function () { // becuase the mouse up doesn't work...
        $('#map').addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
        // or you can do it on some other event
    });

    // disable mouse control on map unless clicked
    $('.maps').click(function () {
        $('.maps iframe').css("pointer-events", "auto");
    });
    $(".maps").mouseleave(function () {
        $('.maps iframe').css("pointer-events", "none");
    });
});
$('.map-holder').click(function () {
    $(this).removeClass('zoom-off');
});

function readMore(number) {
  if (number == 1) {
    var dots = document.getElementById("dots1");
    var moreText = document.getElementById("more1");
    var btnText = document.getElementById("myBtn1");

  } else if (number == 2) {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");

  } else if (number == 3) {
    var dots = document.getElementById("dots3");
    var moreText = document.getElementById("more3");
    var btnText = document.getElementById("myBtn3");
  }else if (number == 4) {
    var dots = document.getElementById("dots4");
    var moreText = document.getElementById("more4");
    var btnText = document.getElementById("myBtn4");
  }
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
