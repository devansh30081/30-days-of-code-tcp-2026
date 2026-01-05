let cells = document.querySelectorAll(".cell")
let statusText = document.getElementById("status")
let restart = document.getElementById("restart")
let boardElement = document.querySelector(".board")

let player = "X"
let board = ["", "", "", "", "", "", "", "", ""]
let active = true

let wins = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

cells.forEach(cell => {
  cell.addEventListener("click", () => {
    let i = cell.getAttribute("data-i")
    if (board[i] !== "" || !active) return

    board[i] = player
    cell.textContent = player
    check()
  })
})

function check() {
  for (let w of wins) {
    let a = w[0]
    let b = w[1]
    let c = w[2]

    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      cells[a].classList.add("win")
      cells[b].classList.add("win")
      cells[c].classList.add("win")
      statusText.textContent = "Player " + player + " Wins"
      active = false
      return
    }
  }

  if (!board.includes("")) {
    statusText.textContent = "Draw"
    cells.forEach(cell => cell.classList.add("draw"))
    boardElement.classList.add("draw-anim")
    active = false
    return
  }

  player = player === "X" ? "O" : "X"
  statusText.textContent = "Player " + player + " Turn"
}

restart.addEventListener("click", () => {
  board = ["", "", "", "", "", "", "", "", ""]
  player = "X"
  active = true
  statusText.textContent = "Player X Turn"
  boardElement.classList.remove("draw-anim")

  cells.forEach(cell => {
    cell.textContent = ""
    cell.classList.remove("win", "draw")
  })
})
