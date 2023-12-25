let userS =0
let compS=0
let userS_span=document.getElementById("user-score")
let computerS_span=document.getElementById("computer-score")
let scoreBoard_d=document.querySelector('.score-board')
let result_p=document.querySelector('.result p')
let rock_d=document.getElementById("r")
let paper_d=document.getElementById("p")
let scissors_d=document.getElementById("s")
let smallUserw= "user".fontsize(3).sub()
let smallCompw= "comp".fontsize(3).sub()

//1- Get comp's choice
function getCompChoice() {
  let choices=['r','p','s']
  let randomIndex= Math.floor(Math.random()*3)
  return choices[randomIndex]

}



//2-compare user and comp's choice
function game(userChoice){
  let compChoice= getCompChoice()
  switch(userChoice +compChoice){
    case"rs":
    case "pr":
    case "sp":
      win(userChoice, compChoice);
      break;
      case"rp":
      case"ps":
      case"sr":
      lose(userChoice, compChoice);
      break;
      case"rr":
      case"pp":
      case"ss":
      draw(userChoice, compChoice);
      break;

  }

}

//3-show result

function win(userChoice, compChoice) {
  userS++
  userS_span.innerHTML= userS;
  // computerS_span.innerHTML=compS
  result_p.innerHTML= `${convertToWord(userChoice)}${smallUserw} beats ${convertToWord(compChoice)}${smallCompw}. You wins 🥳`
document.getElementById(userChoice).classList.add('green-glow')
setTimeout(e=>document.getElementById(userChoice).classList.remove('green-glow'), 800)
}
function lose(userChoice, compChoice) {
  compS++
  // userS_span.innerHTML= userS;
  computerS_span.innerHTML=compS
  result_p.innerHTML= `${convertToWord(userChoice)}${smallUserw} is defeated by ${convertToWord(compChoice)}${smallCompw}. You lost 🖕🖕🖕`
  document.getElementById(userChoice).classList.add('red-glow')
  setTimeout(e=>document.getElementById(userChoice).classList.remove('red-glow'), 800)

}
function draw(userChoice, compChoice) {
  result_p.innerHTML= `${convertToWord(userChoice)}${smallUserw} equals ${convertToWord(compChoice)}${smallCompw}. It's a draw 🤝🤸🏻‍♀️`
  document.getElementById(userChoice).classList.add('grey-glow')
  setTimeout(e=>document.getElementById(userChoice).classList.remove('grey-glow'), 800)
}

//4-convert"r","p","s" ve full name
function convertToWord(letter){
  if (letter ==='r') return "Rock"
  if (letter ==='p') return "Paper"
  if (letter ==='s') return "Scissors"
}

function main() {
rock_d.addEventListener('click',()=>{
  game("r")
})
paper_d.addEventListener('click',()=>{
  game("p")
})
scissors_d.addEventListener('click',()=>{
  game("s")
})}


main()
