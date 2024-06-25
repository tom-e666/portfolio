;(function($) {
  $(function() {
    // Dropdown menu handling
    $('nav ul li > a:not(:only-child)').click(function(e) {
      $(this)
        .siblings('.nav-dropdown')
        .slideToggle(); // Toggle visibility of the sibling .nav-dropdown
      $('.nav-dropdown')
        .not($(this).siblings())
        .hide(); // Hide other .nav-dropdown elements
      e.stopPropagation(); // Prevents the event from bubbling up the DOM tree
    });

    // Hide dropdown menus when clicking outside
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });

    // Toggle open and close nav styles on click (for mobile toggle button)
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle(); // Toggle visibility of nav ul (menu items)
    });

    // Toggle active class on the nav-toggle button for styling
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active'); // Toggle the 'active' class on #nav-toggle
    });
  });
})(jQuery);


