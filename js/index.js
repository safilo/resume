var s = new Swiper(".swiper-container", {
    loop: true,
    direction: 'vertical',
    onSlidePrevEnd: slideEnd,
    onSlideNextEnd: slideEnd



});

function slideEnd(swiper) {
    var n = swiper.activeIndex,
        slideAry = swiper.slides;
    [].forEach.call(slideAry, function(slide, index) {
        if (n === index) {
            switch (n) {
                case 0:
                    slide.id = "page7";
                    break;
                case 1:
                    slide.id = "cover";
                    break;
                case 2:
                    slide.id = "page1";
                    break;
                case 3:
                    slide.id = "page2";
                    break;
                case 4:
                    slide.id = "page3";
                    break;
                case 5:
                    slide.id = "page4";
                    break;
                case 6:
                    slide.id = "page5";
                    break;
                case 7:
                    slide.id = "page6";
                    break;
                case 8:
                    slide.id = "page7";
                    break;
                case 9:
                    slide.id = "cover";
                    break;

            }
            return;
        }
        slide.id = null;
    });
}
