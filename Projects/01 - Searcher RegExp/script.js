const input = document.querySelector('.search');
const liList = document.querySelectorAll('li');

const searchEngine = (e) => {
	liList.forEach((el) => {
		const match = new RegExp(input.value, 'i').test(el.textContent);
		if (!match) 
			el.style.display = 'none';
        else
			el.style.display = 'block';
	});
};

input.addEventListener('keyup', searchEngine);
