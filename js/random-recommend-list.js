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

// 랜덤 버튼에 id값을 주고 해당 버튼에 click 이벤트를 줌

// 가게 데이터 변수화
// 주의) 보통은 서버와 DB로 연동하지 이렇게 변수화해서 처리하지 않습니다.
const places = [
  ["주기", [1, 4]],
  ["구기", [3]],
  ["역전할머니맥주", [2, 3]],
  ["다사랑치킨", [4]],
  ["대장군막걸리", [5]],
];

document.querySelector(".btn").addEventListener("click", ({ target }) => {
  console.log("확인");
  // // DOM에서 id값이 pick-place라는 애를 찾아서 text값을 ""빈값을 넣어라
  // document.getElementById("pick-place").innerText = "";
  // // selectList라는 빈 배열 생성 -> 선택한 요소(=체크박스)들을 넣기 위한 배열
  // const selectList = [];
  // // Name이 category라고 되어 있는 애들을 찾아서(여기에 elements라고 되어 있음 -> 복수)
  // // checkList변수에 넣어라
  // const checkList = document.getElementsByName("category");
  // // checkList 요소들을 개별적으로 보는데(반복) 그 요소를 check라고 해서 살펴보기
  // checkList.forEach((check) => {
  //   // 만약에 check가 checked되었다면 (checkbox에 체크가 되었다면)
  //   if (check.checked) {
  //     // selectList 배열 변수에 check.value를 정수화(=parseInt)해서 넣어라(=push)
  //     selectList.push(parseInt(check.value));
  //   }
  // });
  // // suitablePlace 빈 배열 생성 -> 선택한 요소와 카테고리가 맞는 장소를 찾아서 담기 위한 배열
  // let suitablePlace = [];
  // // selectList를 살펴보는데 그 요소를 select라고 해서 살펴본다.
  // selectList.map((select) => {
  //   // places를 살펴보는데 그 요소를 place라고 해서 살펴본다.
  //   places.map((place) => {
  //     // place의 첫번째 요소(배열에서는 0이 첫번째기에 엄연히 말하면 두번째)가 select값을 포함하고 있으면
  //     if (place[1].includes(select) === true) {
  //       // suitablePlace에 place를 넣어라
  //       suitablePlace.push(place);
  //     }
  //   });
  // });
  // // uniqueSuitablePlace 배열 생성 -> 깊은 복사로 suitablePlace를 넣으면서 new Set으로 중복 제거
  // const uniqueSuitablePlace = [...new Set(suitablePlace)];
  // const loader = document.querySelector(".loader");
  // loader.classList.remove("d-none");
  // setTimeout(() => {
  //   // 랜덤을 돌리는데 0 <= Math.random < 1(?)이니 uniqueSuitablePlace 배열의 길이만큼 곱해서
  //   // 실수값을 버려주면 index값이 나옴
  //   // 그 값을 pickIndex에 넣어줌
  //   const pickIndex = Math.floor(Math.random() * uniqueSuitablePlace.length);
  //   // pickPlace 변수에 랜덤으로 선택된 장소를 넣어줌
  //   const pickPlace = uniqueSuitablePlace[pickIndex];
  //   loader.classList.add("d-none");
  //   document.getElementById("pick-place").innerText = pickPlace[1];
  // }, 3000);
});
