const input = document.querySelector('input')
const button = document.querySelector('button')
const cityName = document.querySelector('.city-name')
const warning = document.querySelector('.warning')
const photo = document.querySelector('.photo')
const weather = document.querySelector('.weather')
const temperature = document.querySelector('.temperature')
const humidity = document.querySelector('.humidity')

const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q='
const API_KEY = '&appid=fcf2bb52dfe5e9a7787bfb1e0f6befee'
const API_UNITS = '&units=metric'

const getWeather = () => {
    const city = input.value || 'Warsaw'
    const URL = API_LINK + city + API_KEY + API_UNITS
    
    axios.get(URL)
        .then(response => {
            console.log(response.data.weather[0].main);
            const temp = response.data.main.temp.toFixed(0)
            const hum = response.data.main.humidity
            const weath = response.data.weather[0].main
            cityName.textContent = response.data.name

            weather.textContent = weath
            temperature.textContent = temp + ' ℃'
            humidity.textContent = hum + '%'

            const weatherIdFirstDigit = String(response.data.weather[0].id)[0]
            const weatherCode = Number(weatherIdFirstDigit)

            // console.log(weatherIdFirstDigit);
            // // if()
        })
        .catch(err => console.error(err))
}


getWeather()

button.addEventListener('click', ()=> {
    getWeather()
    input.value = ''
})

input.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        getWeather()
        input.value = ''
    }
    })
