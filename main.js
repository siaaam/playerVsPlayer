(function(){ 
  const player1Score = document.querySelector('#player1Score')
  const player2Score = document.querySelector('#player2Score')
  const winningScoreDisplay = document.querySelector('p span')
  const inputScore = document.querySelector('#inputScore')
  const player1Btn = document.querySelector('#player1btn')
  const player2Btn = document.querySelector('#player2btn');
  const resetBtn = document.querySelector('#resetbtn');
  
  let p1Score = 0;
  let p2Score = 0;
  let winningScore = 5;
  let gameOver = false;
  
  player1Btn.addEventListener('click',() => {
    if(!gameOver){
      p1Score++;
      getWinner(p1Score,winningScore)
    }
    // show changed data
    player1Score.textContent = p1Score;
  })
  
  
  player2Btn.addEventListener('click',() => {
    if(!gameOver){
      p2Score++;
      getWinner(p2Score,winningScore)
    }
    player2Score.textContent = p2Score
  })
  
  
  inputScore.addEventListener('change',()=>{
    winningScore = Number(inputScore.value)
    winningScoreDisplay.textContent = winningScore
    inputScore.value = ''
    reset()
  })
  
  function getWinner(oldScore,winningScore){
    if(oldScore === winningScore){
      if(p1Score === winningScore){
      player1Score.classList.add('winner')
      } else{ 
      player2Score.classList.add('winner')
      }
      //game over
      gameOver = true
      player1Btn.setAttribute('disabled','disabled')
      player2Btn.setAttribute('disabled','disabled')
    }
  }
  
  
  resetBtn.addEventListener('click',reset)
  
  function reset(){
    p1Score = 0;
    p2Score = 0;
    gameOver = false;
    player1Score.textContent = 0;
    player2Score.textContent = 0;
    player1Btn.removeAttribute('disabled')
    player2Btn.removeAttribute('disabled')
    player1Score.classList.remove('winner')
    player2Score.classList.remove('winner')
  }
}())



