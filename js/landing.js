
setInterval(onWindowChange, 1000);
$(window).resize(onWindowChange);
// $(document).ready(onWindowChange);
function onWindowChange(){
$(".category .shadow").css({height:$(".category .img-fluid").innerHeight(),width:$(".category .img-fluid").innerWidth()});
}