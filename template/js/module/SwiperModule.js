export default function SwiperModule() {
  var swiperHomeThumbs = new Swiper(".home-slide-big-thumb .swiper", {
    slidesPerView: 4,
    spaceBetween: 24,
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 8,
      },
      400: {
        slidesPerView: 3,
        spaceBetween: 8,
      },
      601: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      700: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      1020: {
        slidesPerView: 4,
        spaceBetween: 16,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
  });
  var swiperHome = new Swiper(".home-slide-big-main .swiper", {
    navigation: {
      prevEl: ".home-slide-big-main .ctrl-prev",
      nextEl: ".home-slide-big-main .ctrl-next",
    },
    thumbs: {
      swiper: swiperHomeThumbs,
    },
  });

  const homeSm = document.querySelectorAll(".home-slide-sm");
  homeSm.forEach((items) => {
    const homeSmSw = items.querySelector(".swiper");
    const pagi = items.querySelector(".home-slide-sm-pagi");
    var swiperHomeSm = new Swiper(homeSmSw, {
      pagination: {
        el: pagi,
        clickable: true,
      },
    });
  });

  const homeBrand = document.querySelectorAll(".home-brand-slide");
  homeBrand.forEach((items) => {
    const homeBrs = items.querySelector(".swiper");
    const prev = items.querySelector(".ctrl-prev");
    const next = items.querySelector(".ctrl-next");
    var swiperHomeBr = new Swiper(homeBrs, {
      navigation: {
        prevEl: prev,
        nextEl: next,
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 8,
        },
        460: {
          slidesPerView: 3,
          spaceBetween: 8,
        },
        650: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
        800: {
          slidesPerView: 5,
          spaceBetween: 16,
        },
        1200: {
          slidesPerView: 6,
          spaceBetween: 24,
        },
      },
    });
  });

  const homeCerti = document.querySelectorAll(".home-cer-slide");
  homeCerti.forEach((items) => {
    const homeBrs = items.querySelector(".swiper");
    const prev = items.querySelector(".ctrl-prev");
    const next = items.querySelector(".ctrl-next");
    var swiperHomeBr = new Swiper(homeBrs, {
      navigation: {
        prevEl: prev,
        nextEl: next,
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 8,
        },
        500: {
          slidesPerView: 3,
          spaceBetween: 8,
        },
        800: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      },
    });
  });

  const homeDeal = document.querySelectorAll(".home-deal-slide");
  homeDeal.forEach((items) => {
    const homeBrs = items.querySelector(".swiper");
    const prev = items.querySelector(".ctrl-prev");
    const next = items.querySelector(".ctrl-next");
    var swiperHomeBr = new Swiper(homeBrs, {
      navigation: {
        prevEl: prev,
        nextEl: next,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        450: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        600: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        860: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
        1020: {
          slidesPerView: 6,
          spaceBetween: 10,
        },
        1200: {
          slidesPerView: 7,
          spaceBetween: 10,
        },
      },
    });
  });

  const homeBtn = document.querySelectorAll(".home-deal-btn");
  homeBtn.forEach((items) => {
    const homeBrs = items.querySelector(".swiper");
    const prev = items.querySelector(".ctrl-prev");
    const next = items.querySelector(".ctrl-next");
    var swiperHomeBr = new Swiper(homeBrs, {
      navigation: {
        prevEl: prev,
        nextEl: next,
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        380: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        500: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        600: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        860: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1020: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
        1200: {
          slidesPerView: 6,
          spaceBetween: 10,
        },
      },
    });
  });

  const homeGrid = document.querySelectorAll(".home-grid-slide");
  homeGrid.forEach((items) => {
    const homeBrs = items.querySelector(".swiper");
    const prev = items.querySelector(".ctrl-prev");
    const next = items.querySelector(".ctrl-next");
    var swiperHomeBr = new Swiper(homeBrs, {
      slidesPerView: 1,
      spaceBetween: 8,
      navigation: {
        prevEl: prev,
        nextEl: next,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 8,
        },
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        450: {
          slidesPerView: 2,
          spaceBetween: 10,

          grid: {
            rows: 2,
            fill: 'row',
          },
        },
        600: {
          slidesPerView: 3,
          spaceBetween: 10,

          grid: {
            rows: 2,
            fill: 'row',
          },
        },
        800: {
          slidesPerView: 4,
          spaceBetween: 16,

          grid: {
            rows: 2,
            fill: 'row',
          },
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 16,
          grid: {
            rows: 2,
            fill: 'row',
          },
        },
      },
    });
  });

  const homeVid = document.querySelectorAll(".home-video-slide");
  homeVid.forEach((items) => {
    const homeBrs = items.querySelector(".swiper");
    const prev = items.querySelector(".ctrl-prev");
    const next = items.querySelector(".ctrl-next");
    var swiperHomeBr = new Swiper(homeBrs, {
      navigation: {
        prevEl: prev,
        nextEl: next,
      },
    });
  });

  const homeVerti = document.querySelectorAll(".home-video-right-slide");
  homeVerti.forEach((items) => {
    const homeBrs = items.querySelector(".swiper");
    const prev = items.querySelector(".ctrl-prev");
    const next = items.querySelector(".ctrl-next");
    var swiperHomeBr = new Swiper(homeBrs, {
      grabCursor: true,
      navigation: {
        prevEl: prev,
        nextEl: next,
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 8,
        },
        500: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        850: {
          direction: "vertical",
          slidesPerView: "auto",
          spaceBetween: 24,
        },
      },
    });
  });

  const homeNews = document.querySelectorAll(".home-news-left-slide");
  homeNews.forEach((items) => {
    const homeBrs = items.querySelector(".swiper");
    const prev = items.querySelector(".ctrl-prev");
    const next = items.querySelector(".ctrl-next");
    const pagi = items.querySelector(".pagi");
    var swiperHomeBr = new Swiper(homeBrs, {
      navigation: {
        prevEl: prev,
        nextEl: next,
      },
      pagination: {
        el: pagi,
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 24,
        },
        800: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
      },
    });
  });

  const homeNewsVerti = document.querySelectorAll(".home-news-right-slide");
  homeNewsVerti.forEach((items) => {
    const homeBrs = items.querySelector(".swiper");
    const prev = items.querySelector(".ctrl-prev");
    const next = items.querySelector(".ctrl-next");
    const pagi = items.querySelector(".pagi");
    var swiperHomeBr = new Swiper(homeBrs, {
      grabCursor: true,
      navigation: {
        prevEl: prev,
        nextEl: next,
      },
      pagination: {
        el: pagi,
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 8,
        },
        401: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        551: {
          direction: "vertical",
          slidesPerView: "auto",
          spaceBetween: 0,
        },
      },
    });
  });

  //slide hình ảnh
  var slideimg = new Swiper(".system-img-list", {
    direction: "vertical",
    slidesPerView: 1.5,
    spaceBetween: 30,
    mousewheel: true,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      767: {
        slidesPerView: 1.5,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 1.5,
        spaceBetween: 24,
      },
    },
  });
  //slide video
  var slidevideo = new Swiper(".system-video-list", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".pagi-video .pagi-prev",
      prevEl: ".pagi-video .pagi-next",
    },
  });

  //slide product tax
  var swipertax = new Swiper(".slide-tax", {
    spaceBetween: 24,
    navigation: {
      nextEl: ".product-archive .ctrl-next",
      prevEl: "product-archive .ctrl-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      410: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      800: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
  });


  const homeDetail = document.querySelectorAll(".home-detail-slide");
  homeDetail.forEach((items) => {
    const homeBrs = items.querySelector(".swiper");
    const prev = items.querySelector(".ctrl-prev");
    const next = items.querySelector(".ctrl-next");
    var swiperHomeBr = new Swiper(homeBrs, {
      navigation: {
        prevEl: prev,
        nextEl: next,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 8,
        },
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        450: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        600: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        800: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 16,
        },
      },
    });
  });


  const homeOne = document.querySelectorAll(".home-one-slide");
  homeOne.forEach((items) => {
    const homeBrs = items.querySelector(".swiper");
    const prev = items.querySelector(".ctrl-prev");
    const next = items.querySelector(".ctrl-next");
    var swiperHomeBr = new Swiper(homeBrs, {
      navigation: {
        prevEl: prev,
        nextEl: next,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 8,
        },
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        450: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        600: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        800: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 16,
        },
      },
    });
  });

  var swiperThumbs = new Swiper('.about-vision__right-bottom .swiper', {
    slidesPerView: 2,
    navigation: {
      prevEl: '.about-vision__right-bottom .ctrl-prev',
      nextEl: '.about-vision__right-bottom .ctrl-next',
    },
  });
  var swiperMains = new Swiper('.about-vision__left .swiper', {
    navigation: {
      prevEl: '.about-vision__right-bottom .ctrl-prev',
      nextEl: '.about-vision__right-bottom .ctrl-next',
    },
    thumbs: {
      swiper: swiperThumbs,
    }
  });
  var swiperContents = new Swiper('.about-vision__right-top .swiper', {
    effect: "fade",
  });

  swiperMains.controller.control = swiperContents;
  swiperContents.controller.control = swiperMains;



  var swiperTops = new Swiper(".swiper-top", {
    slidesPerView: 3,
    spaceBetween: 12,
    loop: true,
    breakpoints: {
      '480': {
        slidesPerView: 3,
        spaceBetween: 12,
      },
      '1024': {
        slidesPerView: 3,
        spaceBetween: 12,
      },
      '1200': {
        slidesPerView: 4,
        spaceBetween: 12,
      },
    },
  });
  var swiperBottoms = new Swiper(".swiper-bottom", {
    slidesPerView: 3,
    spaceBetween: 12,
    loop: true,
    pagination: {
      el: ".slider-bottom .pagi",
      clickable: true,
      type: 'bullets',
    },
    navigation: {
      prevEl: ".about-image__current .ctrl-prev",
      nextEl: ".about-image__current .ctrl-next"
    },
    breakpoints: {
      '480': {
        slidesPerView: 3,
        spaceBetween: 12,
      },
      '1024': {
        slidesPerView: 3,
        spaceBetween: 12,
      },
      '1200': {
        slidesPerView: 4,
        spaceBetween: 12,
      },
    },
  });

  swiperBottoms.controller.control = swiperTops;
  swiperTops.controller.control = swiperBottoms;

  // 



  //slide product tax
  var swiperCerti = new Swiper(".about-certi .swiper", {
    spaceBetween: 24,
    navigation: {
      nextEl: ".about-certi .ctrl-next",
      prevEl: ".about-certi .ctrl-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      410: {
        slidesPerView: 2,
        spaceBetween: 8,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      800: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });

  // 
  var swiperFooter = new Swiper(".footer-commit-slider .swiper", {
    navigation: {
      nextEl: ".footer-commit-slider .ctrl-next",
      prevEl: ".footer-commit-slider .ctrl-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      410: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
    },
  });

  // 
  var swiperAward = new Swiper(".about-award-slide .swiper", {
    navigation: {
      nextEl: ".about-award-slide .ctrl-next",
      prevEl: ".about-award-slide .ctrl-prev",
    },
    pagination: {
      el: ".about-award-slide .pagi",
      clickable: true,
      type: 'bullets',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 8,
      },
      410: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      700: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
  });
}
