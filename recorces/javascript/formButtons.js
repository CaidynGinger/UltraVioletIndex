$(document).ready(function () {
  console.log("js ready");

  $(".form-btn").click(function (e) {
    e.preventDefault();
    $(".form-btn").removeClass("selected");
    $(this).addClass("selected");
    if ($(".form-search").css("display") === "none") {
      $(".form-location").hide();
      $(".form-search").fadeIn();
    } else {
      $(".form-location").fadeIn();
      $(".form-search").hide();
    }
  });

  $('.search-btn').click(function (e) { 
      e.preventDefault();
      query = $('#city').val()
      searchCityLatAndLong(query)
  });
});
