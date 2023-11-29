let ramenData
let currentRamen

let ramenList = document.querySelector("div#ramen-menu") 

let ramenDetailImage = document.querySelector("img.detail-image")
let ramenDetailName = document.querySelector("h2.name")
let ramenDetailRestaurant = document.querySelector(".restaurant")
let ramenDetailRating = document.querySelector('span#rating-display')
let ramenDetailComment = document.querySelector('p#comment-display')

let ramenForm = document.querySelector("#new-ramen")

let newRamenName = document.querySelector("#new-name")
let newRamenRestaurant = document.querySelector("#new-restaurant")
let newRamenImage = document.querySelector("#new-image")
let newRamenRating = document.querySelector("#new-rating")
let newRamenComment = document.querySelector("#new-comment")

const url = `http://localhost:3000/ramens`

fetch(url)
.then(response => response.json())
.then(ramenData => {
        ramenData.map(eachRamen => {
        addRamenToPage(eachRamen)
    })
    ramenDetails(ramenData[0])

    newRamenForm()
})

function addRamenToPage(ramen) {
    let ramenImage = document.createElement("img")
    ramenImage.src = ramen.image 
    ramenList.append(ramenImage)

    ramenImage.addEventListener("click", () => {
        ramenDetails(ramen)
    })
}

function ramenDetails(ramen) {
    currentRamen = ramen
  
    ramenDetailImage.src = currentRamen.image 
    ramenDetailName.textContent = currentRamen.name 
    ramenDetailRestaurant.textContent = currentRamen.restaurant 
    ramenDetailRating.textContent = currentRamen.rating 
    ramenDetailComment.textContent = currentRamen.comment 
}

function newRamenForm(){
    ramenForm.addEventListener("submit", (event) => {
        event.preventDefault()

         let newRamen = {
            "name": newRamenName.value,
            "restaurant": newRamenRestaurant.value,
            "image": newRamenImage.value,
            "rating": newRamenRating.value,
            "comment": newRamenComment.value,
        }
        addRamenToPage(newRamen)

        event.target["new-name"].value = ""
        event.target["new-restaurant"].value = ""
        event.target["new-image"].value = ""
        event.target["new-rating"].value = ""
        event.target["new-comment"].value = ""

        event.target.reset()        

   })

}
