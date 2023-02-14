const ball = document.querySelector('img');
const input = document.querySelector('input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');

const answersArr = ['Yes!', 'Nope.', 'Maybe...', 'Hard to say...', `You don't want to know the answer.`, 'I think yes.', 'Yes.. I hope.'];


const shakeBall = () => {

    ball.classList.add('shake-animation');
    setTimeout(checkInput, 1000)
}

const checkInput = () => {
    if (input.value !== '' && input.value.slice(-1) === '?') {
        generateAnswer();
        error.textContent = '';       
    } else if (input.value !== '' && input.value.slice(-1) !== '?') {
        error.textContent = 'Question must be ended by question mark ["?"].';
        answer.textContent = ''        
    } else {
        error.textContent = 'Ask a question first.';
        answer.textContent = '';
    }
    
    ball.classList.remove('shake-animation');      
}


const generateAnswer = () => {
    const number = Math.floor(Math.random() * answersArr.length);
    answer.innerHTML = `<span>Answer:</span> ${answersArr[number]}`
}


ball.addEventListener('click', shakeBall)