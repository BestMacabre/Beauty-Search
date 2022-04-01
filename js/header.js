const md = 768;

changeHeaderToWindoiwSize();

$(window).resize(changeHeaderToWindoiwSize);
$("header .toggler").click(hideHeader);

function changeHeaderToWindoiwSize() {
  if ($(window).width() <= md) {
    $("header .hiddable-part").slideUp(1);
    $("header .toggler-shape").removeClass("closed");
    $("header").addClass("mobile");
  } else {
    $("header .hiddable-part").slideDown(1);
    $("header").removeClass("mobile");
  }
}
function hideHeader() {
  $("header .hiddable-part").slideToggle("slow");
  // if (!$("header .hiddable-part").is(":hidden")) {
  //   $("header .toggler-shape").toggleClass("closed");
  // }
}
