const input = document.querySelector('input');
const button = document.querySelector('button');
const cityName = document.querySelector('.city-name');
const warning = document.querySelector('.warning');
const photo = document.querySelector('.photo');
const weather = document.querySelector('.weather');
const temperature = document.querySelector('.temperature');
const humidity = document.querySelector('.humidity');

const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = '&appid=fcf2bb52dfe5e9a7787bfb1e0f6befee';
const API_UNITS = '&units=metric';

const getWeather = () => {
	const city = input.value || 'Warsaw';
	const URL = API_LINK + city + API_KEY + API_UNITS;

	axios
		.get(URL)
		.then((response) => {
			const temp = response.data.main.temp.toFixed(0);
			const hum = response.data.main.humidity;
			const weath = response.data.weather[0].main;
			const weatherId = response.data.weather[0].id;

			cityName.textContent = response.data.name;

			weather.textContent = weath;
			temperature.textContent = temp + ' ℃';
			humidity.textContent = hum + '%';

            warning.textContent = ''
            input.value = ''

			if (weatherId >= 200 && weatherId < 300)
				photo.setAttribute('src', './img/thunderstorm.png');
			else if (weatherId >= 300 && weatherId < 400)
				photo.setAttribute('src', './img/drizzle.png');
			else if (weatherId >= 500 && weatherId < 600)
				photo.setAttribute('src', './img/rain.png');
			else if (weatherId >= 600 && weatherId < 700)
				photo.setAttribute('src', './img/ice.png');
			else if (weatherId >= 700 && weatherId < 800)
				photo.setAttribute('src', './img/fog.png');
			else if (weatherId === 800) photo.setAttribute('src', './img/sun.png');
			else if (weatherId > 800 && weatherId < 810)
				photo.setAttribute('src', './img/cloud.png');
			else photo.setAttribute('src', './img/unknown.png');
		})
		.catch(() => warning.textContent = 'Enter valid town name!');
};

getWeather();

button.addEventListener('click', () => {
	getWeather();
});

input.addEventListener('keyup', (e) => {
	if (e.key === 'Enter') {
		getWeather();
	}
});
