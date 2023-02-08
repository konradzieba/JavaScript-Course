const btn = document.querySelector('button');
const img = document.querySelector('img');

const URL = 'https://dog.ceo/api/breeds/image/random';

btn.addEventListener(
	'click',
    () => {
	fetch(URL)
		.then((data) => data.json())
		.then((data) => img.setAttribute('src', data.message))
		.catch((err) => console.error(err))
    }
        );
