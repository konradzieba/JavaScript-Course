const incomeSection = document.querySelector('.income-area');
const expenseSection = document.querySelector('.expenses-area');
const availableMoney = document.querySelector('.available-money');
const addTransactionPanel = document.querySelector('.add-transaction-panel');
const nameInput = document.querySelector('#name');
const amountInput = document.querySelector('#amount');
const categorySelect = document.querySelector('#category');

const addTransactionBtn = document.querySelector('.add-transaction');
const saveBtn = document.querySelector('.save');
const cancelBtn = document.querySelector('.cancel');
const deleteBtn = document.querySelector('.delete');
const deleteAllBtn = document.querySelector('.delete-all');

const lightThemeBtn = document.querySelector('.light');
const darkThemeBtn = document.querySelector('.dark');


let root = document.documentElement;
let ID = 0;
let categoryIcon;
let selectedCategory;
let moneyArr = [0];

const showPanel = () => {
	addTransactionPanel.style.display = 'flex';
};

const closePanel = () => {
	addTransactionPanel.style.display = 'none';
	clearInputs();
};

const checkForm = () => {
	if (
		nameInput.value !== '' &&
		amountInput.value !== '' &&
		categorySelect.value !== 'none'
	) {
		createNewTransaction();
	} else {
		alert('Please fill all the fields');
	}
};

const createNewTransaction = () => {
	const newTransaction = document.createElement('div');
	newTransaction.classList.add('transaction');
	newTransaction.setAttribute('id', ID);

	checkCategory(selectedCategory);

	newTransaction.innerHTML = `
    <p class="transaction-name">${categoryIcon} ${nameInput.value}</p>
    <p class="transaction-amount">${amountInput.value}
    <button class="delete" onclick="deleteTransaction(${ID})"><i class="fas fa-times"></i></button>
    </p>
    `;

	amountInput.value > 0
		? incomeSection.appendChild(newTransaction) &&
		  newTransaction.classList.add('income')
		: expenseSection.appendChild(newTransaction) &&
		  newTransaction.classList.add('expense');

	moneyArr.push(parseFloat(amountInput.value));
	countMoney(moneyArr);
	closePanel();
	ID++;
	clearInputs();
};

const selectCategory = () => {
	selectedCategory = categorySelect.options[categorySelect.selectedIndex].text;
};

const checkCategory = (transaction) => {
	switch (transaction) {
		case '[ + ] Income':
			categoryIcon = '<i class="fas fa-money-bill-wave"></i>';
			break;
		case '[ - ] Shopping':
			categoryIcon = '<i class="fas fa-cart-arrow-down"></i>';
			break;
		case '[ - ] Food':
			categoryIcon = '<i class="fas fa-hamburger"></i>';
			break;
		case '[ - ] Cinema':
			categoryIcon = '<i class="fas fa-film"></i>';
			break;
	}
};

const clearInputs = () => {
	nameInput.value = '';
	amountInput.value = '';
	categorySelect.selectedIndex = 0;
};

const countMoney = (money) => {
	const newMoney = moneyArr.reduce((a, b) => a + b);
	availableMoney.textContent = `${newMoney.toFixed(2)}`;
};

const deleteTransaction = (id) => {
	const transactionToDelete = document.getElementById(id);

	const transactionAmount = parseFloat(
		transactionToDelete.childNodes[3].innerText
	);
	const indexOfTransaction = moneyArr.indexOf(transactionAmount);
	moneyArr.splice(indexOfTransaction, 1);

    transactionToDelete.classList.contains('income') ? incomeSection.removeChild(transactionToDelete) : expenseSection.removeChild(transactionToDelete);
	countMoney();
};

const deleteAllTransactions = () => {
    incomeSection.innerHTML = '<h3>Income:</h3>';
    expenseSection.innerHTML = '<h3>Expenses:</h3>';
    availableMoney.textContent = '0.00'
    moneyArr = [0];
}

const changeThemeToLight = () => {
    root.style.setProperty('--first-color', '#f9f9f9');
    root.style.setProperty('--second-color', '#14161f');
    root.style.setProperty('--border-color', 'rgba(0,0,0,.2)');
}
const changeThemeToDark = () => {
    root.style.setProperty('--first-color', '#14161f');
    root.style.setProperty('--second-color', '#f9f9f9');
    root.style.setProperty('--border-color', 'rgba(255,255,255,.4)');
}

addTransactionBtn.addEventListener('click', showPanel);
cancelBtn.addEventListener('click', closePanel);
saveBtn.addEventListener('click', checkForm);
deleteAllBtn.addEventListener('click', deleteAllTransactions);
lightThemeBtn.addEventListener('click', changeThemeToLight);
darkThemeBtn.addEventListener('click', changeThemeToDark);


