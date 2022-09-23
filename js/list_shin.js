let place_data_list = [];

fetch(`../sin.json`)
  .then((resp) => {
    return resp.json();
  })
  .then(({ place_list }) => {
    place_data_list = place_list;
    Object.entries(place_list).forEach((place) => {
      const id = place[0];
      const name = place[1].name;
      const address = place[1].address;
      const img = place[1].img;
      const hrefLink = place[1].href_link;

      const row = document.querySelector(".row");
      /** col div 생성 */
      const divCol = document.createElement("div");
      divCol.classList.add("col-lg-3");
      divCol.classList.add("col-sm-4");
      divCol.classList.add("col-12");

      /** card 생성 */
      const card = document.createElement("div");
      card.classList.add("card");
      card.classList.add("mb-3");
      /** card a tag 생성 */
      cardLink = document.createElement("a");

      /** card img 생성 */
      const cardImg = document.createElement("img");
      cardImg.src = img;
      cardImg.classList.add("card-img-top");
      cardImg.id = `card-img${id}`;
      cardImg.alt = `${name} 이미지`;
      // TODO: 해당 부분 원하는 위치로 수정 필요
      cardImg.onclick = function () {
        document.cookie = `pageId=${id}`;
        location.href = "./example_detail_place.html";
      };
      /** card-body 생성 */
      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");
      /** card-title 생성 */
      const cardTitle = document.createElement("h5");
      cardTitle.classList.add("card-title");
      cardTitle.innerText = name;

      /** card-text 생성 */
      const cardText = document.createElement("p");
      cardText.classList.add("card-text");
      cardText.classList.add("text-truncate");
      cardText.innerText = address;

      /** detail link button 생성 */
      const detailBtn = document.createElement("a");
      detailBtn.classList.add("btn");
      detailBtn.classList.add("btn-primary");
      detailBtn.innerText = "상세정보";
      detailBtn.href = `../${hrefLink}`;

      /** appendChild */
      cardLink.appendChild(cardImg);
      card.appendChild(cardLink);
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);
      cardBody.appendChild(detailBtn);
      card.appendChild(cardBody);
      divCol.appendChild(card);
      row.appendChild(divCol);
    });
  });

document.querySelector(".btn").addEventListener("click", () => {
  const ageCategory = document.getElementById("ageSelect");
  const themeCategory = document.getElementById("themeSelect");

  let pickPlaceList = [];

  if (ageCategory.value > 1) {
    Object.entries(place_data_list).forEach((place) => {
      if (place[1].age_category === parseInt(ageCategory.value)) {
        pickPlaceList.push(place[1].href_link);
      }
    });
  } else {
    // 이따 생각
  }

  if (themeCategory.value > 1) {
    Object.entries(place_data_list).forEach((place) => {
      if (place[1].age_category === parseInt(themeCategory.value)) {
        pickPlaceList.push(place[1].href_link);
      }
    });
  } else {
    // 이따 생각
  }

  const uniquePickPlaceList = [...new Set(pickPlaceList)];

  const pickIndex = Math.floor(Math.random() * uniquePickPlaceList.length);

  // class가 row로 준 애를 찾아서 row 변수에 담음
  const row = document.querySelector(".row");
  // class가 loading이라는 애를 찾아서 load 변수에 담음
  const load = document.querySelector(".loading");
  // row에 클래스 리스트에서 d-none이라는 애를 추가
  //  - 여기서 d-none은 bootstrap에서 제공하는 클래스 중 하나인데 display: none; -> 안보이게
  row.classList.add("d-none");
  // load에 클래스 리스트에서 d-none 제거
  // - d-none이 없다면 상관없음 / 있다면 없어짐 -> 보이게 됨
  load.classList.remove("d-none");

  // setTimeout(함수, 시간ms) -> 시간ms이후에 함수 실행 (여기서 1000ms는 1초)
  setTimeout(() => {
    row.classList.remove("d-none");
    load.classList.add("d-none");

    location.href = `${uniquePickPlaceList[pickIndex]}`; // 넘어갈 랜덤
  }, 2000);
});
