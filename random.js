const places = [
  ["주기", [1, 4]],
  ["구기", [3]],
  ["역전할머니맥주", [2, 3]],
  ["다사랑치킨", [4]],
  ["대장군막걸리", [5]],
];
document.querySelector(".btn").addEventListener("click", ({ target }) => {
  document.getElementById("pick-place").innerText = "";
  const selectList = [];
  const checkList = document.getElementsByName("category");
  checkList.forEach((check) => {
    if (check.checked) {
      selectList.push(parseInt(check.value));
    }
  });
  let suitablePlace = [];
  selectList.map((select) => {
    places.map((place) => {
      if (place[1].includes(select) === true) {
        suitablePlace.push(place);
      }
    });
  });
  const uniqueSuitablePlace = [...new Set(suitablePlace)];
  const loader = document.querySelector(".loader");
  loader.classList.remove("d-none");
  setTimeout(() => {
    const pickIndex = Math.floor(Math.random() * uniqueSuitablePlace.length);
    const pickPlace = uniqueSuitablePlace[pickIndex];
    loader.classList.add("d-none");
    document.getElementById("pick-place").innerText = pickPlace[0];
  }, 3000);
});
