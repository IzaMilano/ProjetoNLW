import axios from "axios"
// biblioteca para conectar o back com com o front

export const server = axios.create({
  baseURL: "http://localhost:3333",
// baseURl é a parte do endereço que vai se repetir para todas as requisiçoes - endereço do nosso servidor

})
// criando a config do axios






