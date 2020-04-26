const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
let fragment = document.createDocumentFragment();

let parser = new RSSParser();
parser.parseURL(CORS_PROXY + "https://www.chess.com/rss/news", function (err,feed) {
  if (err) throw err;
  feed.items.forEach(function (entry) {
    let temp = document.importNode(document.querySelector("template").content, true);
    let t = temp.querySelector.bind(temp);
    console.log(entry);
    t("h2").textContent = entry.title ? entry.title : "";
    t("p").textContent = entry.contentSnippet ? entry.contentSnippet : "";
    t("a").textContent = t("a").href =  entry.link ? entry.link: "#";
    t("h3").textContent = entry.pubDate ? entry.pubDate : "";;
    fragment.appendChild(temp);
  });
  document.querySelector('output').textContent = ''; 
  document.querySelector("output").appendChild(fragment);
});
