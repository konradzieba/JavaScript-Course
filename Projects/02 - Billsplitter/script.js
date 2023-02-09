const price = document.querySelector('#price');
const people = document.querySelector('#people');
const tip = document.querySelector('#tip');
const countBtn = document.querySelector('.count');
const error = document.querySelector('.error');
const costInfo = document.querySelector('.cost-info');
const cost = document.querySelector('.cost');

const checkForm = () => {
	if (price.value == '' || people.value == '' || tip.value == 0) {
		error.textContent = 'Fill all fields!';
        costInfo.style.display = 'none';
        console.log('blad');
    } else {
        error.textContent = '';
        countBill();
    }
    };

const countBill = () => {
	const newPrice = Number(price.value);
	const newPeopleAmount = parseInt(people.value);
	const newTip = Number(tip.value);

	const billSum = (newPrice + newPrice * newTip) / newPeopleAmount;
	costInfo.style.display = 'block';
    cost.textContent = billSum.toFixed(2)
};

countBtn.addEventListener('click', checkForm);
