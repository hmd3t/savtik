const axios = require("axios");

 async function tiktok_downloader(tiktok_link){
 try {
  const options = {
    method: 'GET',
    url: 'https://tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com/vid/index',
    params: {url: tiktok_link},
    headers: {
      'X-RapidAPI-Key': 'c6f0038f46msh6f721f615136011p157005jsnd5b49357bf54',
      'X-RapidAPI-Host': 'tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com'
        }
      };
      

    const response =await axios.request(options)
    const tiktokVideolink= await response.data.video[0]
    return tiktokVideolink
 } catch (error) {
  console.log(error+"")
 }
}

module.exports={
  tiktok_downloader
}