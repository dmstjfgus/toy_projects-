const filterBtn = document.querySelectorAll(".filter-btn");
// console.log(filterBtn);

const activeBtn = (e) => {
  // console.log(e.target);
  const target = e.target;
  filterBtn.forEach((btn) => {
    btn.classList.remove("active");
  });
  target.classList.add("active");
};

filterBtn.forEach((btn) => {
  // console.log(btn);
  btn.addEventListener("click", activeBtn);
});
