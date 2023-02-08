const btn = document.querySelector('button');
const p = document.querySelector('p');

const FLAG = true; //change to false to reject promise

const promise = new Promise((resolve, reject) => {
	if (FLAG) resolve('success');
	else reject('smth gone wrong! check flag');
});

btn.addEventListener('click', () => {
	promise
		.then(info => p.textContent = info)
		.catch(err => p.textContent = err);
});
