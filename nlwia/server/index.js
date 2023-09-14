import cors from  "cors"
// importando pra dentro do projeto a biblioteca "cors" que está dentro de cors. O from especifica que a pasta está dentro do node_modules
import express from "express"

import { download} from "./download.js"

const app = express()
// iniciando o express atraves do app
app.use(cors())
// usando o cors pra habilitar a conexão do backend com o frontend

app.get("/summary/:id", (request, response) =>  {
  // o .get é um método de ação e diz a ação que eu quero receber, ex: uma solicitação/requisição
  // O summary é o recurso
  // quando a solicitação for feita por nosso servidor em /summary utilizando o método get, vai executar uma função, o request (todas as info da requisição) e o response (devolvendo uma resposta pra quem fez a requisição)

download(request.params.id)
// metodo GET definindo o recurso da rota do backend com o parametro "id"
// criamos a função "download" para separar a responsabilidade e fazer o downloado do arquivo separadamente


response.json({result: "Download do vídeo realizado com sucesso!"})
})

app.listen(3333, () => console.log("Server is running on port 3333"));
// definindo o servidor com o endereço da porta
// o listen fica "escutando" as requisições com o número da porta que ele vai "atender",  pelas requisições que vão chegar pelo servidor
// () => arrow function = função anonima, auto executável. Quando o servidor iniciar, ela já será executada (nesse caso, essa função vai executar o comando console.log).
