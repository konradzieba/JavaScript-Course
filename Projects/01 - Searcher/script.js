const input = document.querySelector('.search')
const liList = document.querySelectorAll('li')

const searchEngine = (e) => {
    
    const text = e.target.value.toLowerCase();

    liList.forEach(el => {

        if(el.textContent.toLowerCase().indexOf(text) === -1){
            el.style.display = 'none'
        } else {
            el.style.display = 'block'
        }

    })
}


input.addEventListener('keyup', searchEngine)