$(document).ready(function () {
    $('.wrap').marquee();
});

$(document).ready(function () {
    $('.wrap').marquee({
        speed: 100, // 속도
        gap: 5000, // 간격
        delayBeforeStart: 0, // 시작 delay값
        // direction: 'left', // 방향
        duplicated: true, // 선택 영역 복제
        pauseOnHover: true // hover시 일시중지 여부
    });
});