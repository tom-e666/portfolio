$(document).ready(function() {
  $('.nav-list a').on('click', function(e) {
    e.preventDefault();
    var targetId = $(this).attr('href'); // Get target section ID
    var offsetTop = $(targetId).offset().top; // Get the top offset of the target section
    $('html, body').animate({
      scrollTop: offsetTop
    }, 800); // Adjust the animation speed as needed
  });
});
