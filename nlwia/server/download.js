import ytdl from "ytdl-core"
import fs from "fs"

export const download = (videoID) => {
  const videoURL = "https://www.youtube.com/shorts/" + videoID
  console.log("Realizando o download do vídeo:", videoID)

  ytdl(videoURL, { quality: "lowestaudio", filter: "audioonly" }).on(
    "info",
    (info) => {
      // console.log(info)
    }
  )
}
