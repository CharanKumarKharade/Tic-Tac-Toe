let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let turn0 = true; //X or O
let newgame = document.querySelector("#new-btn");
let messagecontainer = document.querySelector(".msg");
let msg = document.querySelector("#message");
const win = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetgame = () => {
  turn0 = true;
  enable();
  messagecontainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turn0) {
      //player O
      box.innerText = "O";
      turn0 = false;
    } else {
      //player X
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;

    checkWin();
  });
});
const diasble = () => {
  for (box of boxes) {
    box.disabled = true;
  }
};

const enable = () => {
  for (box of boxes) {
    box.innerText = "";
    box.disabled = false;
  }
};

const showwinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;

  messagecontainer.classList.remove("hide");
  diasble();
};

const checkWin = () => {
  for (let pattern of win) {
    let p1 = boxes[pattern[0]].innerText;
    let p2 = boxes[pattern[1]].innerText;
    let p3 = boxes[pattern[2]].innerText;
    if (p1 != "" && p2 != "" && p3 != "") {
      if (p1 === p2 && p2 == p3) {
        showwinner(p1);
      }
    }
  }
};

newgame.addEventListener("click", resetgame);
resetBtn.addEventListener("click", resetgame);
