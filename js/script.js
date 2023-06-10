const languageButtons = document.querySelectorAll(".button-wrapper button");

const title = document.querySelectorAll("h3");
const content = document.querySelectorAll(".text");
const links = document.querySelectorAll(".certificate-link");

changeLanguage("ru");

for (let languageButton of languageButtons) {
  let language = languageButton.classList[0];
  languageButton.addEventListener("click", () => {
    changeLanguage(language);
  });
}

function changeLanguage(lang) {
  fetch(`../json/${lang}.json`)
    .then((response) => response.json())
    .then((data) => {
      translate(title, data.titles);
      translate(content, data.content);
      translate(links, data.links);
    });
  buttonHighlight(lang);
}

function translate(target, text) {
  for (let i = 0; i < target.length; i++) {
    target[i].innerHTML = typeof text === "string" ? text : text[i];
  }
}

function buttonHighlight(lang) {
  languageButtons.forEach((btn) => {
    if (btn.classList.contains(lang)) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}
