$(function () {
  //스크롤 내렸을때 배경색과 내비 글자색 변경
  $(window).scroll(function () {
    if ($(this).scrollTop() > 750) {
      $("body").css("background", "var(--white_color)");
      $("#nav > ul > li > a").css("color", "var(--black_color)");
    } else {
      $("body").css("background", "var(--green_color)");
      $("#nav > ul > li > a").css("color", "var(--white_color)");
    }
  });

  // 메인 배너
  let interval;
  let isPaused = false;

  function showNext() {
    const current = $(".carousel p.active");
    const next = current.next("p").length
      ? current.next("p")
      : $(".carousel > p").first();
    current
      .css({ "z-index": "100" })
      .stop()
      .animate({ width: "0" }, 500, "linear", function () {
        $(this).css("display", "none");
      });
    $(".carousel p").removeClass("active");
    next
      .css({ width: "700px", "z-index": "0", display: "block" })
      .hide()
      .fadeIn(1000)
      .addClass("active");
  }

  function showPrev() {
    const current = $(".carousel p.active");
    const prev = current.prev("p").length
      ? current.prev("p")
      : $(".carousel > p").last();
    current.css({ "z-index": "0", display: "block", width: "700px" });
    $(".carousel p").removeClass("active");
    prev
      .css({ width: "0", "z-index": "100", display: "block" })
      .hide()
      .fadeIn(1000)
      .addClass("active")
      .stop()
      .animate({ width: "700px" }, 500, "linear");
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

  //도서 슬라이드 배너

  var $status = $(".paging-info");
  var $slickElement = $(".slideshow");

  $slickElement.on(
    "init reInit afterChange",
    function (event, slick, currentSlide, nextSlide) {
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      var i = (currentSlide ? currentSlide : 0) + 1;
      $status.text(i + "/" + slick.slideCount);
    }
  );

  $slickElement.slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
  });
});
