// Variable Initialization
let bgMusic = new Audio("music.mp3");
let turnMusic = new Audio("ting.mp3");
let goMusic = new Audio("gameover.mp3");
let turn = "X";
let gameOver = false;


onload.bgMusic.play();
//Function to change the turn
const changeTurn = ()=>{
    return turn === "X"? "0": "X";
}

//Function to check for a win
// Function to check for a win or draw
const checkWin = () => {
    let boxText = document.getElementsByClassName("boxText");
    let wins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  
    let isDraw = true;
  
    wins.forEach(e => {
      if (
        boxText[e[0]].innerText !== "" &&
        boxText[e[0]].innerText === boxText[e[1]].innerText &&
        boxText[e[1]].innerText === boxText[e[2]].innerText
      ) {
        document.querySelector('.turnText').innerText =
          boxText[e[0]].innerText + " won";
        gameOver = true;
        goMusic.play();
        isDraw = false;
        document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '25vw';
        autoReset();
      }
    });
  
    if (isDraw && Array.from(boxText).every(text => text.innerText !== "")) {
      document.querySelector('.turnText').innerText = "It's a draw!";
      gameOver = true;
    }
  };
  


//Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(Element =>{
    let boxText = Element.querySelector('.boxText');
    Element.addEventListener('click', ()=>{
        if(boxText.innerText === ''){
            boxText.innerText = turn;
            turn = changeTurn();
            turnMusic.play();
            checkWin();
            if(!gameOver){
                document.getElementsByClassName("turnText").innerText = "Turn for " + turn;
            }
        }
    })
})

//Add event listener to reset button
     reset.addEventListener('click', ()=>{
        let boxText =document.querySelectorAll('.boxText');
        Array.from(boxText).forEach(element =>{
            element.innerText = '';
        })
        document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '0';
    })

//Auto reset

// const autoReset = ()=>{
//         let boxText =document.querySelectorAll('.boxText');
//         Array.from(boxText).forEach(element =>{
//             element.innerText = '';
//         document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '0';
//     })
// }
