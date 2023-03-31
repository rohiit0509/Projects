const axios = require('axios');
const { parse } = require("node-html-parser");

const instagramPostLink = "https://www.instagram.com/p/CD5um-vHA33/";

async function getPostLink(url) {
  url = url + 'embed' + '/captioned';
  let res = axios.get(url).then(async (response) => {
    const root = parse(response.data);

    let link = "";
    if (response.data.search("video_url") != -1)
      link = getVideoLinkFromHtml(response.data);
    else
      link = root.querySelector('img.EmbeddedMediaImage').getAttribute("src");
  });

  return res;

}

function getVideoLinkFromHtml(html) {
  let crop = "{\"" + html.substring(html.search("video_url"), html.search("video_url") + 1000);

  crop = crop.substring(0, crop.search(",")) + "}";

  return JSON.parse(crop).video_url;
}

(async ()=>{
    await getPostLink(instagramPostLink);
})();