// 1. 요소의 선택
const imgs = document.querySelector(".imgs");
const img = document.querySelectorAll(".imgs img");
const slWrap = document.querySelector(".sl-wrap");
const navigators = document.querySelectorAll(".navigator a");

// 3. 초기화 변수
let currentIdx = 0;
let timer = null;

// 2. 슬라이드 실행 메인 함수 정의
const startSlider = (eq) => {
  imgs.style.left = -100 * eq + "%";
  currentIdx = eq;
};

// 4. 일저 시간 간격으로 슬라이드 이동
const startTimer = () => {
  // setInterva을 멈추려면 clearIntervel을 실행해야 한다.
  // 하지만 clearIntervel의 파라미터로 setIntervel 전체를 적용해야 하므로 setIntervel을 변수에 대입하여 전달한다.
  timer = setInterval(() => {
    const sliderLoopIdx = (currentIdx + 1) % img.length;
    // console.log(sliderLoopIdx);
    startSlider(sliderLoopIdx);
  }, 5000);
};

// 5. 슬라이드 요소에 마우스 올렸을 때 기능 멈춤
const stopTimer = () => {
  clearInterval(timer);
};

// 6. 마우스를 올렸을때 기능을 멈추고, 마우스를 아웃했을 때 기능이 다시 실행
slWrap.addEventListener("mouseover", () => {
  stopTimer();
});
slWrap.addEventListener("mouseout", () => {
  startTimer();
});

// 7. 네비게이터 클릭했을 때 슬라이드 기능 실행
navigators.forEach((navigator) => {
  navigator.addEventListener("click", function () {
    console.log(this);
  });
});

startTimer();
