var answerNumber = Math.floor(Math.random() * 100) + 1;
var guessHistory = document.querySelector('.guessHistory');
var yesOrNo = document.querySelector('.yesOrNo');
var highOrLow = document.querySelector('.highorLow');
var guessButton = document.querySelector('.guessButton');
var guessForm = document.querySelector('.guessForm');
var guessCount = 1;


function checkYourNumber()
{
    var userGuess = Number(guessForm.value);

    
    if(guessCount === 1)
    {
        guessHistory.textContent = '입력한 숫자들 : ';
 
    }
    
    if(guessForm.value == ""||guessForm.value == null || userGuess > 100 || userGuess < 1 || isNaN(userGuess) == true)
    {
        yesOrNo.textContent = "1과 100 사이의 숫자를 입력해주세요!";
        yesOrNo.getElementsByClassName.backgroundColor = 'red';
        highOrLow.textContent = '';
    }
    else
        {
        if(userGuess === answerNumber)
        {
            yesOrNo.textContent = '축하합니다! 정답입니다!';
            yesOrNo.getElementsByClassName.backgroundColor = 'green';
            highOrLow.textContent = '';
            setGameOver();
        }

        else if(guessCount === 10)
        {
            yesOrNo.textContent = '!!!게임오버!!!';
            highOrLow.textContent = '';
            setGameOver();
        }
        else
        {
            yesOrNo.textContent = '틀렸습니다!!!';
            yesOrNo.style.backgroundColor = 'red';
            if(userGuess < answerNumber)
            {
                highOrLow.textContent = '정답은 더 큽니다';
            }
            else if(userGuess > answerNumber)
            {
                highOrLow.textContent = '정답은 더 작습니다';
            }            
        }   
        guessCount++;
        guessHistory.textContent += userGuess + ' ';

    }

    

    guessForm.value = '';

}

guessButton.addEventListener('click', checkYourNumber);

var restartButton;

function setGameOver()
{
    guessForm.disabled = true;

    guessButton.disabled = true;
    restartButton = document.createElement('button');
    restartButton.textContent = '새 게임 시작하기';
    document.body.appendChild(restartButton);
    restartButton.addEventListener('click', restartGame);
}

function restartGame()
{
    guesscount = 1;
    var resetParas = document.querySelectorAll('.resultDiv p');
    for(var i = 0; i < resetParas.length; i++)
    {
        resetParas[i].textContent = ' ';
    }

    restartButton.parentNode.removeChild(restartButton);
    guessForm.disabled = false;
    guessButton.disabled = false;
    guessForm.value = ' ';
    guessForm.focus();
    yesOrNo.style.backgroundColor = 'white';
    answerNumber = Manth.floor(Math.random() * 100) + 1;

}