//Const para que sejam feitas as requisições da API
const BASE_URL = 'https://thatcopy.pw/catapi/rest/'

//Const responsável por selecionar os elementos HTML
const catBtn = document.getElementById('change-cat')
const catImg = document.getElementById('cat')

//Arrow function assincrona com os dados necessários
const getCats = async () => {
    const data = await fetch(BASE_URL)
        .then((res) => res.json())
        .catch((e) => console.log(e))

    return data.webpurl
    
    /*
    Sintaxe utilizando o try...catch

    try {
        const data = await fetch(BASE_URL)
        const json = await data.json()

        return json.webpurl
    } catch (e) {
        console.log(e.message)
    }
    */
}

const loadImg = async () => {
    catImg.src = await getCats()
}

catBtn.addEventListener('click' , loadImg)

loadImg()
