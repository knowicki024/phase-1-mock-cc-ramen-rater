let currentRamen
let ramenData 

const ramenList = document.querySelector("#ramen-menu")

const ramenDetailImage = document.querySelector(".detail-image")
const ramenDetailName = document.querySelector(".name")
const ramenDetailRestaurant = document.querySelector(".restaurant")
const ramenDetailRating = document.querySelector("#rating-display")
const ramenDetailComment = document.querySelector("#comment-display")

const ramenForm = document.querySelector("#new-ramen")

let newRamenName = document.querySelector("#new-name")
let newRamenRestaurant = document.querySelector("#new-restaurant")
let newRamenImage = document.querySelector("#new-image")
let newRamenRating = document.querySelector("#new-rating")
let newRamenComment = document.querySelector("#new-comment")


fetch("http://localhost:3000/ramens")
.then(response => response.json())
.then(ramenData => {
    ramenData.map(eachRamen => {
        addRamenToPage(eachRamen)
    })
        ramenDetails(ramenData[0])

        newRamenForm()
    
})

 function addRamenToPage(ramen) {
    const ramenImage = document.createElement("img")
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
            "comment": newRamenComment.value  
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