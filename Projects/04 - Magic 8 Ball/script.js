const img = document.querySelector('img')
const input = document.querySelector('.question-area input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')

const answers = ['I think yes.', 'Maybe...', 'Yes!', 'Of course.', `I'm not sure.`, 'Maybe will...', `I think you don't want to know the answer.`]

const chooseAnswer = () => {
    const answerIndex = Math.floor(Math.random(answer)*answers.length);
    const result = answers[answerIndex];
    answer.innerHTML = `<span>Answer:</span> ${result}`;
}

const shakeBall = () => {
    img.classList.add('shake-animation');
    setTimeout(checkInput, 1000)  
}

const checkInput = () => {
    if(input.value !== '' && input.value.slice(-1) === '?') {
        chooseAnswer();
        error.textContent = ''
    } else if (input.value !== '' && input.value.slice(-1) !== '?') {
        error.textContent = 'Question must be ended by question mark.';
        answer.textContent = ''
    } else {
        error.textContent = 'Ask a question first.'
        answer.textContent = ''
    }
    img.classList.remove('shake-animation')
}




img.addEventListener('click', shakeBall)


