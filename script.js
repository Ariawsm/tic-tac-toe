const boxes = document.querySelectorAll(".btn");
const newBtnGame = document.querySelector(".restart");
const reset = document.querySelector(".reset");
const msgCont = document.querySelector(".msg");
const show = document.querySelector(".winner");
const human = "O";
const aiPlay = "X";
const winCombo = [
  //This are the winning combos
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let turn0 = true; //To know which players turn

const resetGame = () => {
  turn0 = true;
  enableBox();
  msgCont.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = human;
      turn0 = false;
    } else {
      box.innerText = aiPlay;
      turn0 = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const disableBox = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBox = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (win) => {
  msgCont.innerText = `Congratulation the winner is ${win}`;
  show.classList.remove("hide");
  disableBox();
};

const checkWinner = () => {
  for (let patter of winCombo) {
    let post1Val = boxes[patter[0]].innerText;
    let post2Val = boxes[patter[1]].innerText;
    let post3Val = boxes[patter[2]].innerText;

    if (post1Val != "" && post2Val != "" && post3Val != "") {
      if (post1Val === post2Val && post2Val === post3Val) {
        console.log("winner", post1Val);
        showWinner(post1Val);
      }
    }
  }
};

newBtnGame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
