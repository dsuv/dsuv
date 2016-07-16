$( document ).ready(function() {
  var circularNav = document.getElementsByClassName("nav-circle")[0];
  function clickSet() {
    circularNav.classList.toggle("closed")
    circularNav.classList.toggle("clicked");
    if (circularNav.classList.contains("closed")) {
      var navIcon = document.getElementsByClassName("nav-icon")[0];
      navIcon.innerHTML = '<i class="fa fa-bars"></i>';
    } else {
      var navIcon = document.getElementsByClassName("nav-icon")[0];
      navIcon.innerHTML = '<i class="fa fa-close"></i>';
    }
  }
  circularNav.addEventListener("click", clickSet, false);
  circularNav.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
      clickSet();
    }
  });
  function closeMenu(){
    circularNav.addClass("closed");
    circularNav.removeClass("clicked");
    var navIcon = document.getElementsByClassName("nav-icon")[0];
    navIcon.innerHTML = '<i class="fa fa-close"></i>';
  }

  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').stop(true).animate({
          scrollTop: target.offset().top
        }, 300);
        closeMenu();
        return false;
      }
    }
  });
});