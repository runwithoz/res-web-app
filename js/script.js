//새로고침 시 스크롤 최상단으로
/* window.onload = function () {
  setTimeout(function () {
    scrollTo(0, 0);
  }, 100);

  
}; */

/* 스크롤 이벤트 */
/* 오퍼시티 */
let observer1 = new IntersectionObserver(
  (e) => {
    e.forEach((item) => {
      if (item.isIntersecting && item.intersectionRatio >= 0.5) {
        item.target.style.opacity = 1; // 50% 이상 보일 때
      } else {
        item.target.style.opacity = 0; // 50% 미만일 때
      }
    });
  },
  {
    threshold: 0.5, // 50% 보일 때 실행
  }
);

// 관찰할 요소 선택
const targets1 = document.querySelectorAll(".op1");
targets1.forEach((target) => observer1.observe(target));

/* 오퍼시티 처음 한번만 */
let observer2 = new IntersectionObserver(
  (e) => {
    e.forEach((item) => {
      if (item.isIntersecting && item.intersectionRatio >= 0.5) {
        item.target.style.opacity = 1; // 50% 이상 보일 때
      }
    });
  },
  {
    threshold: 0.5, // 50% 보일 때 실행
  }
);

// 관찰할 요소 선택
const targets2 = document.querySelectorAll(".op2");
targets2.forEach((target) => observer2.observe(target));

/* 메인화면 글자 차례대로 나타나게*/
let observer3 = new IntersectionObserver(
  (e) => {
    e.forEach((item, index) => {
      if (item.isIntersecting && item.intersectionRatio >= 0.5) {
        setTimeout(() => {
          item.target.style.opacity = 1; // 50% 이상 보일 때
        }, index * 700);
      }
    });
  },
  {
    threshold: 0.5, // 50% 보일 때 실행
  }
);

// 관찰할 요소 선택
const targets3 = document.querySelectorAll(".op3");
targets3.forEach((target) => observer3.observe(target));

/* 커서 커스텀 (한편의 편지 섹션) */
document.addEventListener("DOMContentLoaded", () => {
  const mouseEffect = document.querySelector(".works");
  const cursor = document.querySelector(".prize-cursor");

  if (mouseEffect && cursor) {
    let targetX = 0;
    let targetY = 0;
    let cursorX = 0;
    let cursorY = 0;
    const speed = 0.1; // 이동 속도 조절

    mouseEffect.addEventListener("mousemove", (e) => {
      targetX = e.pageX + 40;
      targetY = e.pageY + 40;
    });

    mouseEffect.addEventListener("mouseover", () => {
      cursor.classList.add("active");
    });

    mouseEffect.addEventListener("mouseout", () => {
      cursor.classList.remove("active");
    });

    function updateCursor() {
      cursorX += (targetX - cursorX) * speed;
      cursorY += (targetY - cursorY) * speed;

      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;

      requestAnimationFrame(updateCursor);
    }

    updateCursor(); // 애니메이션 루프 시작
  } else {
    console.error("Required elements not found in the document.");
  }
});

$(function () {
  //새로고침 시 스크롤 최상단으로
  /* $('body, html').stop().animate({'scrollTop': 0}, 1000, 'swing'); */
  //스크롤 내렸을때 배경색과 내비 글자색 변경
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".site-bg .site-bg-frame").css("opacity", 0);
    } else {
      $(".site-bg .site-bg-frame").css("opacity", 1);
    }

    /* if ($(window).scrollTop() + $(window).height() == $(document).height()) {
      // 페이지의 가장 밑에 도달했을 때 실행할 코드
      $("#footer").addClass("on");
    } else {
      $("#footer").removeClass("on");
    } */
  });

  //네비게이션 드롭다운
  $("#nav > ul > li").hover(
    function () {
      //$(this).find(".sub").show();
      $(this).addClass("hovered");
    },
    function () {
      //$(this).find(".sub").hide();

      $(this).removeClass("hovered");
    }
  );

  /* 전체 메뉴버튼 */
  let allMenuBtn = $("#all-menu-btn");
  let allMenuCon = $("#all-menu-content");

  allMenuBtn.hover(
    function () {
      $(this).addClass("hovered");
    },
    function () {
      $(this).removeClass("hovered");
    }
  );

  allMenuBtn.click(function () {
    $(this).toggleClass("clicked");
    allMenuCon.toggleClass("active");
    $("body").toggleClass("menu");
    $(".all-menu-bg").toggleClass("active");
  });

  /* 전체 메뉴 내비게이션 */
  //서브
  $("#side-nav > ul > li > a.has-sub").click(function () {
    $(this).toggleClass("active");
    $(this).parent().toggleClass("active");
  });
  // a호버 배경 효과
  $("#side-nav > ul > li > a").hover(
    function () {
      $(this).addClass("hovered");
    },
    function () {
      $(this).removeClass("hovered");
    }
  );

  //도서 슬라이드 배너

  let i = 0;
  let currentIndex = 0;

  var swiper1 = new Swiper(".swiper1", {
    slidesPerView: 3.25,
    spaceBetween: 0, // 슬라이드간 간격
    centeredSlides: true,
    loop: true, // 무한 반복
    navigation: {
      // 네비게이션
      nextEl: ".next1", // 다음 버튼 클래스명
      prevEl: ".prev1", // 이전 버튼 클래스명
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      1440: {
        slidesPerView: 3.25,
        spaceBetween: 50,
      },
    },
    /* simulateTouch: true, */
  });

  $(".swiper1 .prev1").hover(
    function () {
      $(this).addClass("hovered");
    },
    function () {
      $(this).removeClass("hovered");
    }
  );

  $(".swiper1 .next1").hover(
    function () {
      $(this).addClass("hovered");
    },
    function () {
      $(this).removeClass("hovered");
    }
  );

  /* 가로스크롤 */
  var scrollCooldown = false; // 쿨타임 상태 변수
  var cooldownTime = 500; // 쿨타임 시간 (밀리초 단위)

  $(".work").each(function () {
    var $postcard = $(this);

    $postcard.off("mousewheel DOMMouseScroll"); // 기존 이벤트 핸들러 제거
    $postcard.on("mousewheel DOMMouseScroll", function (e) {
      e.preventDefault();

      // 쿨타임이 활성화된 경우 이벤트 핸들러 실행 중지
      if (scrollCooldown) {
        return;
      }

      scrollCooldown = true; // 이벤트 핸들러 실행 시 쿨타임 활성화

      var delta = 0;
      var event = e.originalEvent;

      if (event.wheelDelta) {
        delta = event.wheelDelta / 120;
      } else if (event.detail) {
        delta = -event.detail / 3;
      }

      var moveDistance = 400; // 한 번의 스크롤 당 이동 거리
      var currentScrollLeft = $(".works").scrollLeft();
      var moveLeft = null;

      if (delta < 0) {
        // 마우스휠을 위에서 아래로
        moveLeft = currentScrollLeft + moveDistance;
      } else {
        // 마우스휠을 아래에서 위로
        moveLeft = currentScrollLeft - moveDistance;
      }

      $(".works")
        .stop(true, true) // 애니메이션 중첩 방지
        .animate(
          {
            scrollLeft: moveLeft,
          },
          {
            duration: 500,
          }
        );

      // 쿨타임 해제 타이머 설정
      setTimeout(function () {
        scrollCooldown = false; // 쿨타임 해제
      }, cooldownTime);
    });
  });

  //////////////////////////푸터/////////////////////////////

  //푸터 메뉴 호버 효과
  $(".f-m > ul > li > a").hover(
    function () {
      $(this).addClass("hovered");
    },
    function () {
      $(this).removeClass("hovered");
    }
  );

  // 셀렉트 메뉴
  const links = [
    {
      name: "황금가지",
      href: "http://goldenbough.minumsa.com/",
    },
    {
      name: "사이언스북스",
      href: "http://sciencebooks.minumsa.com/",
    },
    {
      name: "세미콜론",
      href: "http://semicolon.minumsa.com/",
    },
    {
      name: "민음인",
      href: "http://minumin.minumsa.com/",
    },
    {
      name: "판미동",
      href: "http://panmidong.minumsa.com/",
    },
    {
      name: "반비",
      href: "http://banbi.minumsa.com/",
    },
    {
      name: "펄프",
      href: "http://pulp.minumsa.com/",
    },
    {
      name: "비룡소",
      href: "http://bir.co.kr/",
    },
  ];
  const label = $(".f-r .family-site .f-select .label");
  const list = $(".f-r .family-site .f-select .option-list");
  const item = $(".f-r .family-site .f-select .option-list .option-item");
  const goBtn = $(".f-r .family-site a");

  label.click(function () {
    label.toggleClass("active");
  });

  item.click(function () {
    const selectedText = $(this).text().trim();

    for (let link of links) {
      if (link.name === selectedText) {
        goBtn.attr("href", link.href);
        break;
      }
    }

    label.text(selectedText); // label의 텍스트를 클릭한 항목의 텍스트로 설정합니다.
    label.toggleClass("active");
  });
});
