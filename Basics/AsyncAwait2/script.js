const URL = 'https://dog.ceo/api/breeds/image/random'
const NOT_EXISTING_URL = 'https://o/api/breeds/image/random'

// then() and catch() used to handle the promise
fetch(URL)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))

//Try for not existing URL
    fetch(NOT_EXISTING_URL)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))

// async&await used to handle the promise
const handleFetch = async () => {
    try {
        const response = await fetch(URL)
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

const notExistingUrlHandleFetch = async () => {
    try {
        const response = await fetch(NOT_EXISTING_URL)
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

handleFetch()

//Try for not existing URL
notExistingUrlHandleFetch()