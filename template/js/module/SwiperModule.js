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
            }
        }
    });
    var swiperHome = new Swiper(".home-slide-big-main .swiper", {
        navigation: {
            prevEl: ".home-slide-big-main .ctrl-prev",
            nextEl: ".home-slide-big-main .ctrl-next",
        },
        thumbs: {
            swiper: swiperHomeThumbs,
        }
    });

    const homeSm = document.querySelectorAll(".home-slide-sm")
    homeSm.forEach(items => {
        const homeSmSw = items.querySelector('.swiper')
        const pagi = items.querySelector('.home-slide-sm-pagi')
        var swiperHomeSm = new Swiper(homeSmSw, {
            pagination: {
                el: pagi,
                clickable: true,
            },
        });
    })


    const homeBrand = document.querySelectorAll(".home-brand-slide")
    homeBrand.forEach(items => {
        const homeBrs = items.querySelector('.swiper')
        const prev = items.querySelector('.ctrl-prev')
        const next = items.querySelector('.ctrl-next')
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
                }
            }
        });
    })

    const homeCerti = document.querySelectorAll(".home-cer-slide")
    homeCerti.forEach(items => {
        const homeBrs = items.querySelector('.swiper')
        const prev = items.querySelector('.ctrl-prev')
        const next = items.querySelector('.ctrl-next')
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
                }
            }
        });
    })


    const homeDeal = document.querySelectorAll(".home-deal-slide")
    homeDeal.forEach(items => {
        const homeBrs = items.querySelector('.swiper')
        const prev = items.querySelector('.ctrl-prev')
        const next = items.querySelector('.ctrl-next')
        var swiperHomeBr = new Swiper(homeBrs, {
            navigation: {
                prevEl: prev,
                nextEl: next,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                320: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                },
                450: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                },
                600: {
                    slidesPerView: 4,
                    spaceBetween: 0,
                },
                860: {
                    slidesPerView: 5,
                    spaceBetween: 0,
                },
                1020: {
                    slidesPerView: 6,
                    spaceBetween: 0,
                },
                1200: {
                    slidesPerView: 7,
                    spaceBetween: 0,
                }
            }
        });
    })

    const homeBtn = document.querySelectorAll(".home-deal-btn")
    homeBtn.forEach(items => {
        const homeBrs = items.querySelector('.swiper')
        const prev = items.querySelector('.ctrl-prev')
        const next = items.querySelector('.ctrl-next')
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
                }
            }
        });
    })


    const homeGrid = document.querySelectorAll(".home-grid-slide")
    homeGrid.forEach(items => {
        const homeBrs = items.querySelector('.swiper')
        const prev = items.querySelector('.ctrl-prev')
        const next = items.querySelector('.ctrl-next')
        var swiperHomeBr = new Swiper(homeBrs, {
            navigation: {
                prevEl: prev,
                nextEl: next,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                320: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                },
                450: {
                    slidesPerView: 2,
                    grid: {
                        rows: 2,
                    },
                },
                600: {
                    slidesPerView: 3,
                    grid: {
                        rows: 2,
                    },
                },
                800: {
                    slidesPerView: 4,
                    grid: {
                        rows: 2,
                    },
                },
                1200: {
                    slidesPerView: 5,
                    grid: {
                        rows: 2,
                    },
                }
            }
        });
    })


    const homeVid = document.querySelectorAll(".home-video-slide")
    homeVid.forEach(items => {
        const homeBrs = items.querySelector('.swiper')
        const prev = items.querySelector('.ctrl-prev')
        const next = items.querySelector('.ctrl-next')
        var swiperHomeBr = new Swiper(homeBrs, {
            navigation: {
                prevEl: prev,
                nextEl: next,
            },
        });
    })

    const homeVerti = document.querySelectorAll(".home-video-right-slide")
    homeVerti.forEach(items => {
        const homeBrs = items.querySelector('.swiper')
        const prev = items.querySelector('.ctrl-prev')
        const next = items.querySelector('.ctrl-next')
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
                }
            }
        });
    })


    const homeNews = document.querySelectorAll(".home-news-left-slide")
    homeNews.forEach(items => {
        const homeBrs = items.querySelector('.swiper')
        const prev = items.querySelector('.ctrl-prev')
        const next = items.querySelector('.ctrl-next')
        const pagi = items.querySelector('.pagi')
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
                }
            }
        });
    })

    const homeNewsVerti = document.querySelectorAll(".home-news-right-slide")
    homeNewsVerti.forEach(items => {
        const homeBrs = items.querySelector('.swiper')
        const prev = items.querySelector('.ctrl-prev')
        const next = items.querySelector('.ctrl-next')
        const pagi = items.querySelector('.pagi')
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
                }
            }
        });
    })
}