let request = new XMLHttpRequest();

request.open(
  "GET",
  "https://5ea431cf270de60016460131.mockapi.io/api/v1/players",
  true
);

request.onload = function () {
  const data = JSON.parse(this.response);
  document.querySelector("#player-one img").src = data[0].avatar;
  document.querySelector("#player-one figcaption").textContent = data[0].name;
  document.querySelector("#player-two img").src = data[1].avatar;
  document.querySelector("#player-two figcaption").textContent = data[1].name;
};

request.send();
