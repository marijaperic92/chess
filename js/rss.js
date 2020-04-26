const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
let fragment = document.createDocumentFragment();
let parser = new RSSParser();

parser.parseURL(CORS_PROXY + "https://www.chess.com/rss/news",(error, feed) => {
    if (error) throw error;
    feed.items.forEach((entry) => {
      let template = document.importNode(document.querySelector("template").content, true);
      let templateContent = template.querySelector.bind(template);
      templateContent("h2").textContent = getPropertyValue(entry.title);
      templateContent("p").textContent = getPropertyValue(entry.contentSnippet);
      templateContent("a").textContent = templateContent("a").href = entry.link ? entry.link : "#";
      templateContent("h3").textContent = getPropertyValue(entry.pubDate);
      fragment.appendChild(template);
    });
    document.querySelector("output").textContent = "";
    document.querySelector("output").appendChild(fragment);
  }
);

function getPropertyValue($property) {
  return $property ? $property : "";
}

