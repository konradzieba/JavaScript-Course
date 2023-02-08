const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');

const URL = 'https://dog.ceo/api/breeds/image/random';

// fetch solution
fetch(URL)
	.then((response) => response.json())
	.then((response) => one.setAttribute('src', response.message))
	.catch((error) => console.error(error));

//axios globally
axios.get(URL).then((response) => {
	two.setAttribute('src', response.data.message);
});

// axios async&await
const showImage = async () => {
	const res = await axios.get(URL)
	three.setAttribute('src', res.data.message)
};

showImage();
