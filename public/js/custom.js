/*========== NAVBAR TRANSPARENT TO SOLID ==========*/

$(document).ready(function() {
  //when document(DOM) loads completely.
  // Transition effect for navbar
  $(window).scroll(function() {
    //function is called while you scrolls
    // checks if window is scrolled more than 300px, adds/removes solid class
    if ($(this).scrollTop() > 300) {
      $(".navbar").addClass("solid"); //add class 'solid' in any element which has class 'navbar'
    } else {
      $(".navbar").removeClass("solid"); //remove class 'solid' in any element which has class 'navbar'
    }
  });
});

/*========== CLOSE MOBILE NAV ON CLICK ==========*/

$(document).ready(function() {
  $(document).click(function(event) {
    var clickover = $(event.target);
    var _opened = $(".navbar-collapse").hasClass("show");
    if ((_opened = true && !clickover.hasClass("navbar-toggler"))) {
      $(".navbar-toggler").click();
    }
  });
});
