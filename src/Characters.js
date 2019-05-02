//STEP ONE:
// Characters have a 
    // -name
    // -race
    // -characterClass
    // -abilities list
    // -skills list

class Character{

    constructor(id, name, race, characterClass, abilities=[], skills=[], bio, image){
        this.id = id
        this.name = name
        this.characterClass = characterClass
        this.race = race
        this.abilities = abilities
        this.skills = skills
        this.bio = bio
        this.image = image
    }

    renderCharacterList(){
        let ul = document.querySelector('#character-list')
        let li = document.createElement('li')
        li.innerText = this.name
        li.dataset.id = this.id
        ul.appendChild(li)
        li.addEventListener('click', handleClick)
    }

    renderCharacterPage(character){
        

    }
}