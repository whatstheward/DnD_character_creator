const BASE_URL = `http://www.dnd5eapi.co/api/`
const CHAR_URL = `http://localhost:3000/characters/`

document.addEventListener('DOMContentLoaded', function(){
    console.log('The DOM is loaded!')
    
    fetchCharacters()
    fetchClasses()
    


})

function fetchClasses(){
    fetch(BASE_URL+`classes`)
    .then(res => res.json())
    .then(data => console.log(data))
}

function fetchCharacters(){
    fetch(CHAR_URL)
    .then(res => res.json())
    .then(characters => characters.forEach(character =>{let charObj = new Character(character.id, character.name, character.race, character.characterClass, character.abilities, character.skills, character.bio, character.image)
    charObj.renderCharacterList()}))
}

function handleClick(e){

    let id = e.target.dataset.id
    fetch(CHAR_URL+`${id}`)
    .then(res => res.json())
    .then(character => renderCharacterPage(character))
}

function renderCharacterPage(character){

    let abilities = character.abilities 

    let div = document.querySelector('#character-page')
    let img = document.querySelector('#character-image')
    img.src = character.image

    let h2 = document.querySelector('#character-name')
    h2.innerText = character.name

    let ul = document.querySelector('#character-abilities')
    for(const ability in abilities){
        let li = document.createElement('li')
        li.innerText = ability[1].value
        ul.appendChild(li)
    }

    

    div.appendChild(img)
}