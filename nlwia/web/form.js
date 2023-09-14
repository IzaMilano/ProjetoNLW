const form = document.querySelector("#form")
const input = document.querySelector("#url")

form.addEventListener("submit" , (event) => {
event.preventDefault()

const videoURL = input.value
if(videoURL.includes("shorts")){
console.log("ISSO È UM SHORT")
}
})