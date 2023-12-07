const ramenMenu = document.querySelector("#ramen-menu")

let currentRamen 

const ramenDetailName = document.querySelector(".name")
const ramenDetailRestaurant = document.querySelector(".restaurant")
const ramenDetailImage = document.querySelector(".detail-image")
const ramenDetailRating = document.querySelector("#rating-display")
const ramenDetailComment = document.querySelector("#comment-display")



fetch("http://localhost:3000/ramens")
.then(response => response.json())
.then(ramenData => {
    ramenData.map(eachRamen => {
        addRamenToPage(eachRamen)
    })
    displayRamenDetails(ramenData[0])
    addRamenForm()
})

function addRamenToPage(ramen) {
    const ramenImage = document.createElement("img")
    ramenImage.src = ramen.image 
    ramenMenu.appendChild(ramenImage)

    ramenImage.addEventListener("click", () => {
        displayRamenDetails(ramen)
    })
}

function displayRamenDetails(ramen) {
    currentRamen = ramen


   ramenDetailName.textContent = currentRamen.name 
   ramenDetailRestaurant.textContent = currentRamen.restaurant 
   ramenDetailImage.src = currentRamen.image 
   ramenDetailRating.textContent = currentRamen.rating 
   ramenDetailComment.textContent = currentRamen.comment

}

function addRamenForm() {
    const newRamenForm = document.querySelector("#new-ramen")
    newRamenForm.addEventListener("submit", (event) => {
        event.preventDefault()

        const newRamenName = document.querySelector("#new-name")
        const newRamenRestaurant = document.querySelector("#new-restaurant")
        const newRamenImage = document.querySelector("#new-image")
        const newRamenRating = document.querySelector("#new-rating")
        const newRamenComment = document.querySelector("#new-comment")

        let newRamen = {
            "name" : newRamenName.value,
            "restaurant" : newRamenRestaurant.value,
            "image" : newRamenImage.value,
            "rating" : newRamenRating.value,
            "comment" : newRamenComment.value
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
