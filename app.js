let inputElem = document.querySelector('input')
let mainDiv = document.getElementById('main')
let btn = document.querySelector('.btn')
let worldELl = document.querySelector('.title')
let audio = document.getElementById('audio')

const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

const fetchHndeler = () => {
    let inputValue = inputElem.value

    fetch(`${url}${inputValue}`)
        .then(res => res.json())
        .then(data => {

            let datas = data[0]
            console.log(datas);
            main.innerHTML = `
                <div class="voice">
                    <h1 class="title">${datas.word}</h1>
                    <button class="btn-vouis" onclick="playsound()">
                        <i class='bx bx-user-voice'></i>
                    </button>
                </div>
                <div>
                <p class="meaning">${datas.meanings[0].partOfSpeech}    <span style="color:blueviolet;">${datas.phonetics[0].text}</span></p>
                <div class="contant">
                <p class="example">
                ${datas.meanings[0].definitions[0].definition}
                    </p>
                    <p class="example-wrold">...</p>
                </div>
            </div>
                `
                audio.setAttribute('src', datas.phonetics[0].audio)
        })
        .catch(()=>{
            main.innerHTML = `<h1 style="color:red;">noting find the word</h1>`
        })

}


btn.addEventListener('click', () => {
    fetchHndeler()
})

function playsound () {
    audio.play()
}










// -----------------> https://github.com/abasSolver/dictionary-application <-------------------
//https://api.dictionaryapi.dev/api/v2/entries/en/