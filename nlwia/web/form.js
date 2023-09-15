import { server } from "./server.js"

const form = document.querySelector("#form")
const input = document.querySelector("#url")
const content = document.querySelector("#content")
form.addEventListener("submit" , async (event) => {

event.preventDefault()
// prevenindo o comportamento padrão do navegador

content.classList.add("placeholder")

const videoURL = input.value
//  recuperando o valor do input na URL

if(!videoURL.includes("shorts")){
  // verificando se é um short
return (content.textContent = "Esse vídeo não parece ser um short")
}
const [_, params] = videoURL.split("/shorts/")
const [videoID] = params.split("?si")
// obtendo o ID do vídeo

content.textContent = "Obtendo o texto do áudio ..."

const transcription = await server.get("/summary/" + videoID)
// obtendo uma requisição

content.textContent = "realizando o resumo ..."

const summary = await server.post("/summary", {
  text: transcription.data.result,
})


content.textContent = summary.data.result
//  função assincrona - função que o codigo espera uma determinada etapa terminar
//  assync sinaliza que é uma função assincrona e await, sinaliza que é necessário aguardar determinada etapa terminar
content.classList.remove("placeholder")
})