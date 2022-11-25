const filterBtn = document.querySelectorAll(".filter-btn");
const filterImg = document.querySelectorAll(".filter-image");
const closeBtn = document.querySelector(".ri-close-line");
const lightBox = document.querySelector(".light-box");
const overlay = document.querySelector(".overlay");
const categoryTxt = document.querySelector(".title p");

//======== tab and filtering function
const activeBtn = (e) => {
  const target = e.target;
  const selectedTabData = target.getAttribute("data-filter"); // 탭에 있는 data-filter 속성 값
  filterBtn.forEach((btn) => {
    btn.classList.remove("active");
  });
  target.classList.add("active");

  filterImg.forEach((image) => {
    image.classList.add("hide");
    const selectedImgData = image.getAttribute("data-filter"); // 이미지에 있는 data-filter 속성 값
    setTimeout(() => {
      if (selectedTabData === selectedImgData || selectedTabData === "all") {
        image.classList.add("show");
        image.classList.remove("hide");
      } else {
        image.classList.add("hide");
        image.classList.remove("show");
      }
    }, 100);
  });
};

//======== show light box function
const showLightBox = (e) => {
  const target = e.currentTarget;
  const selectedImg = target.children[0].children[0].getAttribute("src");
  const categoryNm = target.getAttribute("data-filter");
  const lightBoxImg = document.querySelector(".light-box-img img");

  lightBoxImg.setAttribute("src", selectedImg);
  categoryTxt.textContent = categoryNm;

  lightBox.classList.add("show");
  overlay.classList.add("show");
};

filterImg.forEach((image, idx) => {
  image.addEventListener("click", showLightBox);
});

filterBtn.forEach((btn) => {
  // console.log(btn);
  btn.addEventListener("click", activeBtn);
});

closeLightBox = () => {
  lightBox.classList.remove("show");
  overlay.classList.remove("show");
};

closeBtn.addEventListener("click", closeLightBox);
overlay.addEventListener("click", closeLightBox);
