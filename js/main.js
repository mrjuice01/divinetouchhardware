(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    document.addEventListener("DOMContentLoaded", function() {
  const belt = document.querySelector('.photo-belt');
  const items = document.querySelectorAll('.belt-item');

  function scaleItems() {
    const beltRect = belt.getBoundingClientRect();
    const centerX = beltRect.left + beltRect.width / 2;

    items.forEach(item => {
      const rect = item.getBoundingClientRect();
      const itemCenter = rect.left + rect.width / 2;
      const distance = Math.abs(centerX - itemCenter);

      // spotlight effect: closer to center = bigger
      const maxScale = 1.3;
      const minScale = 0.8;
      const scaleRange = maxScale - minScale;

      // normalize distance (0 at center, 1 at far edge)
      const normalized = Math.min(distance / (beltRect.width / 2), 1);
      const scale = maxScale - normalized * scaleRange;

      item.style.transform = `scale(${scale})`;
      item.style.opacity = scale; // fade edges a bit
    });
  }

  function animate() {
    scaleItems();
    requestAnimationFrame(animate);
  }

  animate();
});

    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        loop: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ]
    });
    
})(jQuery);

