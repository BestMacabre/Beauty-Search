// Enter in this list just a name part of class without '-modal'or '-btn'
// let modaSelectors = ["subscribe", "site-comment"];

$(".subscribe-btn").click(function () {
  $(".subscribe-modal").addClass("active");
});
$(".site-comment-btn").click(function () {
  $(".site-comment-modal").addClass("active");
});
$(".modal-background").click(function () {
  $currentModal = $(this).parent();
  $($currentModal).addClass("closing");
});

// setInterval(closeModal, 1);
$(window).scroll(closeModal);
// $(window).click(closeModal);
$(window).mousemove(closeModal);

function closeModal() {
  if (!$(".closing .modal-background").is(":animated") && $(".closing .modal-background").length != 0) {
    $($currentModal).removeClass("active").removeClass("closing");
  }
}
