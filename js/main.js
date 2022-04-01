$(document).ready(function () {
  setInterval(function () {
    $(".loader").fadeOut(1000);
    launchAnimations()
  }, 1000);
});

changeHeaderToWindoiwSize();

$(window).resize(changeHeaderToWindoiwSize);

function changeHeaderToWindoiwSize() {
  if ($(window).width() <= md) {
    changeToMobile();
  } else {
    changeToComputer();
  }
}
function changeToMobile() {
  $(".row > h1").css({ textAlign: "center" });
}
function changeToComputer() {
  $(".row > h1").css({ textAlign: "left" });
}
// $(".loader").fadeOut(1000);
