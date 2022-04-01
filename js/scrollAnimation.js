let animatedSelectors = [
  "header",
  "footer *",
  "h1",
  ".gallery",
  ".category",
  ".banner-block",
  ".salon-card",
  "iframe",
];
let animatedObjects = [];

let viewportTop = 0;
let viewportBottom = 0;

checkScroll();
function checkScroll() {
  viewportTop = $(window).scrollTop();
  viewportBottom = $(window).scrollTop() + $(window).height();
  setInterval(checkScroll, 100);
}

if ($(window).width() > md) {
  setUpAnimationObjects();
}

function setUpAnimationObjects() {
  for (let i = 0; i < animatedSelectors.length; i++) {
    for (let j = 0; j < $(animatedSelectors[i]).length; j++) {
      animatedObjects.push({
        object: $(animatedSelectors[i])[j],
        distanceTop: $($(animatedSelectors[i])[j]).offset().top,
        distanceBottom:
          $($(animatedSelectors[i])[j]).offset().top +
          $($(animatedSelectors[i])[j]).innerHeight(),
      });
    }
  }
  for (let i = 0; i < animatedObjects.length; i++) {
    $(animatedObjects[i].object).addClass("not-active");
  }
  //  setInterval( function(){$(window).scrollTop( 1 );}, 1000);
  //$(window).scrollTop( 1 );
  //  setTimeout( function(){$(window).scrollTop( 1 );}, 3000);
}
$(window).scroll(launchAnimations);
function launchAnimations() {
  for (let i = 0; i < animatedObjects.length; i++) {
    if (
      animatedObjects[i].distanceBottom > viewportTop &&
      animatedObjects[i].distanceTop < viewportBottom &&
      $(animatedObjects[i].object).hasClass("not-active")
    ) {
      $(animatedObjects[i].object).removeClass("not-active");
    }
  }
}
