$(document).ready(function () {
  //variables
  $surface = $(".surface");
  $car = $(".car");

  //Keypress event

  $(document).on("keypress", function (e) {
    if (e.which == 13) {
      $($surface).toggleClass("moveRight");
      $($car).toggleClass("suspension");
    }
  });
});
