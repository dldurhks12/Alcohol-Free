function click1(num) {
  //사용하고자 하는 함수
  alert(`click ${num}`);
}
function click2() {
  //사용하고자 하는 함수
  alert("click 2 ");
}

function click3() {
  //사용하고자 하는 함수
  alert("click 3 ");
}

document.getElementById("random-btn").addEventListener("click", () => {
  const row = document.querySelector(".row");
  const load = document.querySelector(".loader");
  row.classList.add("d-none");
  load.classList.remove("d-none");

  // TODO: 조건에 맞는 랜덤인지 확인하게

  setTimeout(() => {
    row.classList.remove("d-none");

    location.href = ""; // 넘어갈 랜덤
  }, 7000);
});
