lightGallery(document.getElementById("gallery-container"), {
  speed: 500,
  plugins: [lgVideo]
});

$('#lg-close-1').click(()=> {
    $('body').removeClass("body-hidden")
    $(".footer-wrapper").removeClass("footer-z")
});
$(".img-responsive").click(()=>{
    $('body').addClass("body-hidden")
    $(".footer-wrapper").addClass("footer-z")
})