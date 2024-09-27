$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {

      $("body").css("background", "var(--white_color)");
      $("#nav > ul > li > a").css("color", "var(--black_color)");
    } else {

      $("body").css("background", "var(--green_color)");
      $("#nav > ul > li > a").css("color", "var(--white_color)");
    }
  });

  //메인 자동 배너
  let interval;
  let isPaused = false;

  function showNext() {
    const current = $(".carousel p.active");
    const next = current.next("p").length
      ? current.next("p")
      : $(".carousel>p").first();
    current.fadeOut(1000).removeClass("active");
    next.fadeIn(1000).addClass("active");
  }

  function showPrev() {
    const current = $(".carousel p.active");
    const prev = current.prev("p").length
      ? current.prev("p")
      : $(".carousel>p").last();
    current.fadeOut(1000).removeClass("active");
    prev.fadeIn(1000).addClass("active");
  }

  function startCarousel() {
    if (!interval) {
      interval = setInterval(showNext, 3000);
    }
  }

  function stopCarousel() {
    clearInterval(interval);
    interval = null;
  }

  $(".next").click(showNext);
  $(".prev").click(showPrev);

  $(".play-pause").click(function () {
    if (isPaused) {
      $(this).text("Pause");
      startCarousel();
    } else {
      $(this).text("Play");
      stopCarousel();
    }
    isPaused = !isPaused;
  });

  $(".carousel, .controls button").hover(stopCarousel, function () {
    if (!isPaused) startCarousel();
  });

  startCarousel();
});
