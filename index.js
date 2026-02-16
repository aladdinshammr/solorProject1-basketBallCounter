const labelHome = document.getElementById("home");
const labelGuest = document.getElementById("guest");

const homeBtns = document.getElementsByClassName("btn-home");
const homeBtnsArray = Array.from(homeBtns);

const guestBtns = document.getElementsByClassName("btn-guest");
const guestBtnsArray = Array.from(guestBtns);

let homeTeam = 0;
let guestTeam = 0;

homeBtnsArray.forEach((btn) => {
  btn.addEventListener("click", function () {
    homeTeam += Number(btn.textContent);
    render();
  });
});

guestBtnsArray.forEach((btn) => {
  btn.addEventListener("click", function () {
    guestTeam += Number(btn.textContent);
    render();
  });
});

function render() {
  labelHome.textContent = homeTeam;
  labelGuest.textContent = guestTeam;
}
