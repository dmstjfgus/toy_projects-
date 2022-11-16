$(function () {
  //   const btn = $(".btn");
  //   console.log(btn);
  $(".btn").click(function () {
    $(".btn").removeClass("actitve");
    $(this).addClass("active");
  });
});
