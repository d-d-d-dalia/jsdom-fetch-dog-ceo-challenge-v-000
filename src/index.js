document.addEventListener("DOMContentLoaded", function(){
  fetchDogs()
  getBreeds()
  filter()
})

function allBreeds() {
  
}

function fetchDogs() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
  .then((resp) => { return resp.json()})
  .then((data) => {
    data.message.forEach(element => addImage(element))
  })
}

function addImage(dogPicUrl) {
  let container = document.getElementById('dog-image-container');
  let newImageEl = document.createElement('img');
  newImageEl.src = dogPicUrl;
  container.appendChild(newImageEl);
}

function getBreeds() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl)
    .then((resp) => {return resp.json()})
    .then((data) => {
      breeds = Object.keys(data.message)
      breeds.forEach((breed) => addBreed(breed))
    })
}

function addBreed(breed) {
  let ul = document.getElementById('dog-breeds')
  let li = document.createElement('li')
  li.setAttribute('id', `${breed}`)
  li.innerHTML = breed
  ul.appendChild(li)
  hover(breed)
}

function hover(breed) {
  let dog = document.getElementById(`${breed}`)
  dog.addEventListener('click', function(e){
    dog.style.color = "#eb4034"
  })
}

// function dropdown(){
//   let dropdown = document.getElementById('breed-dropdown')
//   const breedUrl = 'https://dog.ceo/api/breeds/list/all'
//  dropdown.addEventListener('change', function(e){
//         fetch(breedUrl)
//           .then((resp) => {return resp.json()})
//           .then((data) => {
//           breeds = Object.keys(data.message)
//           return breeds
//           })
//   })
// }

function filter() {
  let dropdown = document.getElementById('breed-dropdown')
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  dropdown.addEventListener('change', function(e){
    if (dropdown['options'][0]["selected"] || dropdown['options'][1]["selected"] || dropdown['options'][2]["selected"] || dropdown['options'][3]["selected"]) {
      let ul = document.getElementById('dog-breeds')
      ul.innerHTML = ""
    }
    if (dropdown['options'][0]["selected"]) {
      fetch(breedUrl)
        .then((resp) => {return resp.json()})
        .then((data) => {
        breeds = Object.keys(data.message)
        breeds.filter(breed => breed.startsWith(dropdown['options'][0]['value'])).forEach((breed) => addBreed(breed))
        })
    }
    else if (dropdown['options'][1]["selected"]) {
      fetch(breedUrl)
        .then((resp) => {return resp.json()})
        .then((data) => {
        breeds = Object.keys(data.message)
        breeds.filter(breed => breed.startsWith(dropdown['options'][1]['value'])).forEach((breed) => addBreed(breed))
        })
    }
    else if (dropdown['options'][2]["selected"]) {
      fetch(breedUrl)
        .then((resp) => {return resp.json()})
        .then((data) => {
        breeds = Object.keys(data.message)
        breeds.filter(breed => breed.startsWith(dropdown['options'][2]['value'])).forEach((breed) => addBreed(breed))
        })
    }
    else if (dropdown['options'][3]["selected"]) {
      fetch(breedUrl)
        .then((resp) => {return resp.json()})
        .then((data) => {
        breeds = Object.keys(data.message)
        breeds.filter(breed => breed.startsWith(dropdown['options'][3]['value'])).forEach((breed) => addBreed(breed))
        })
    }
  })
}