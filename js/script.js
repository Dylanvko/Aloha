$('document').ready(function(){

  $('#emailfill').on('submit', function(event) {
    event.preventDefault();
    if ( !$('#email').val() == '') { 
      alert('Thank you for subscribing!');
    } else {
        alert('Please enter a valid email address.');
      }
  });

  var button = 
  document.getElementById('output'),
    count = 0;
  button.onclick = function() {
    count += 1;
    button.innerHTML = "output: " + count;
  };

  var count = 0;
  $('.add-to-cart').click(function() {
    $('.counter').show();
    count ++;
    $('#output').html(+count);
  });

  $('.main-carousel').flickity({
    // options
    wrapAround: true,
    cellAlign: 'left',
    contain: true,
    freeScroll: true,
    prevNextButtons: false,
  });

  //Smooth-Scrolling from css-tricks

  // Select all links with hashes
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top -80
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
});