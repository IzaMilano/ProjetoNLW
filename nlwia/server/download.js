import ytdl from "ytdl-core"
import fs from "fs"

export const download = (videoID) => {
  const videoURL = "https://www.youtube.com/shorts/" + videoID
  console.log("Realizando o download do vídeo:", videoID)
  // pegando o id do vídeo, formatando a URL

  ytdl(videoURL, { quality: "lowestaudio", filter: "audioonly" })
    // definindo parametros de qualidade do vídeo
    .on(
      "info",
      (info) => {
        const seconds = info.formats[0].approxDurationMs / 1000
        // pegando informações do vídeo e abaixo, está validando se o vídeo é maior que 60s
        if (seconds > 60) {
          throw new Error(" A duração desse vídeo é maior que 60 segundos.")
        }
      }
      //  o vídeo sendo menor que 60s, ele vem pra essa função
    )
    .on("end", () => {
      console.log("Download do video finalizado.")
    })
//  se caso ocorrer um erro, entra aqui
    .on("error", (error) => {
      console.log(
        "Não foi possível fazer o download do vídeo. Detalhes do erro:",
        error
      )
    })
    .pipe(fs.createWriteStream("./tmp/audio.mp4"))
    // definindo aonde o arquivo vai ser salvo
}
