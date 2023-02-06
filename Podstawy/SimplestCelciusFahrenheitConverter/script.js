const converter = document.querySelector('#converter')
const result = document.querySelector('.result')
const convBtn = document.querySelector('.conv')
const resetBtn = document.querySelector('.reset')
const changeBtn = document.querySelector('.change')
const one = document.querySelector('.one')
const two = document.querySelector('.two')

const swapText = () => {
	if (one.textContent === '°C') {
		one.textContent = '°F'
		two.textContent = '°C'
	}
	else {
		one.textContent = '°C'
		two.textContent = '°F'
	}
}

const reset = () => {
	result.textContent = ''
	converter.value = ''
}

const convert = () => {
	one.textContent === '°C' ? result.textContent = 'Wynik: ' + (converter.value *1.8 + 32).toFixed(1) + ' °F' : result.textContent = 'Wynik: ' + ((converter.value - 32) * 5/9).toFixed(1) + ' °C'
	converter.value = ''
}

changeBtn.addEventListener('click', swapText)
resetBtn.addEventListener('click', reset)
convBtn.addEventListener('click', convert)