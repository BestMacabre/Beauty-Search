"use strict";

let imageIndex = 0;

onWindowChange();
changeActiveSlide();
$(window).resize(onWindowChange);
function onWindowChange() {
  changeToWindowSize();
}

function changeToWindowSize() {
  $(".gallery img").css({ width: $(".gallery").css("width") });
  $(".gallery .slider-inner").css({ width: $(".gallery").css("width") });
  // $(".gallery .buttons").css({
  //   top:
  //     parseInt(
  //       parseInt($(".gallery").innerHeight) / 2 -
  //         parseInt($(".gallery #next").innerHeight) / 2
  //     ) + "px",
  // });
}

$("#next").click(next);
$("#prev").click(prev);

function next() {
  imageIndexChange(1);
  let right = imageIndex * (4.5 + $(".gallery").innerWidth());
  $("#slider").css({ transform: `translateX(-${right}px)` });
  changeActiveSlide();
}
function prev() {
  imageIndexChange(-1);
  let left = imageIndex * (4.5 + $(".gallery").innerWidth());
  $("#slider").css({ transform: `translateX(-${left}px)` });
  changeActiveSlide();
}

function changeActiveSlide() {
  // console.log(imageIndex);
  $(".slider-inner").removeClass("active");
  let arrayPos = imageIndex + 1;
  $(`.slider-inner:nth-of-type(${arrayPos})`).addClass("active");
}
function imageIndexChange(direction){
  if(direction == 1){
    if (imageIndex < $(".slider-inner").length - 1) {
      imageIndex++;
    } else {
      imageIndex = 0;
    }
  }
  else if(direction == -1){
    if (imageIndex > 0) {
      imageIndex--;
    } else {
      imageIndex = $(".slider-inner").length-1;
    }
  }
}
