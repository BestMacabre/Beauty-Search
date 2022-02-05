let sm = 540;
let md = 768;

let mobileHeaderCss = {
  ul: {
    display: "block",
  },
  li: {
    marginLeft: "2em",
  },
  lastLi: {
    width: "80%",
  },
  toggler: {
    display: "block",
  },
};
let computerHeaderCss = {
  ul: {
    display: "flex",
  },
  li: {
    marginLeft: "0em",
  },
  lastLi: {
    width: "15%",
  },
  toggler: {
    display: "none",
  },
};

changeHeaderToWindoiwSize();

$(window).resize(changeHeaderToWindoiwSize);
$(".nav-toggler").click(hideHeader);

function changeHeaderToWindoiwSize() {
  if ($(window).width() <= md) {
    setHeaderElementsCss(mobileHeaderCss);
  } else {
    setHeaderElementsCss(computerHeaderCss);
  }
}
function setHeaderElementsCss(object) {
  $("header ul").css(object.ul);
  $("header li").css(object.li);
  $("header ul li:last-of-type").css(object.lastLi);
  $(".nav-toggler").css(object.toggler);
}
let checker = true;
function hideHeader() {
  $("header ul").slideToggle("slow");
  if ($("header ul").is(":hidden")) {
    $(".toggler-shape").toggleClass("opened");
  } else {
    $(".toggler-shape").toggleClass("closed");
  }
  checker = !checker;
}
