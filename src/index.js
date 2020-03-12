document.addEventListener("DOMContentLoaded", function(){
  fetchDogs()
  getBreeds()
  //hover()
})

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
  dog.addEventListener('click', function(){
    dog.style.color = "#eb4034"
  })
}


