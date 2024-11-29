let boxes = document.querySelectorAll(".col");
let button = document.querySelector(".btn");
boxes = Array.from(boxes);

let currentPlayer = "X";

const winner = (boxes) => {
  if (
    (boxes[0].textContent !== "" &&
      boxes[0].textContent == boxes[1].textContent &&
      boxes[1].textContent == boxes[2].textContent) ||
    (boxes[3].textContent !== "" &&
      boxes[3].textContent == boxes[4].textContent &&
      boxes[4].textContent == boxes[5].textContent) ||
    (boxes[6].textContent !== "" &&
      boxes[6].textContent == boxes[7].textContent &&
      boxes[7].textContent == boxes[8].textContent) ||
    (boxes[0].textContent !== "" &&
      boxes[0].textContent == boxes[3].textContent &&
      boxes[3].textContent == boxes[6].textContent) ||
    (boxes[3].textContent !== "" &&
      boxes[3].textContent == boxes[4].textContent &&
      boxes[4].textContent == boxes[5].textContent) ||
    (boxes[1].textContent !== "" &&
      boxes[1].textContent == boxes[4].textContent &&
      boxes[4].textContent == boxes[7].textContent) ||
    (boxes[2].textContent !== "" &&
      boxes[2].textContent == boxes[5].textContent &&
      boxes[5].textContent == boxes[8].textContent) ||
    (boxes[0].textContent !== "" &&
      boxes[0].textContent == boxes[4].textContent &&
      boxes[4].textContent == boxes[8].textContent) ||
    (boxes[2].textContent !== "" &&
      boxes[2].textContent == boxes[4].textContent &&
      boxes[4].textContent == boxes[6].textContent)
  ) {
    setTimeout(() => {
      alert(`${currentPlayer} is winner`), reset();
    }, 50);
  } else if (boxes.every((box) => box.textContent !== "")) {
    setTimeout(() => {
      alert("It's a draw!"), reset();
    }, 50);
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    box.textContent == ""
      ? ((currentPlayer = currentPlayer == "X" ? "O" : "X"),
        (box.textContent = currentPlayer))
      : "";

    winner(boxes);
  });
});

const reset = () => {
  boxes.forEach((box) => (box.textContent = ""));
};

button.addEventListener("click", reset);
