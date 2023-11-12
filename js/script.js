const languageButtons = document.querySelectorAll(".button-wrapper button");

const title = document.querySelectorAll("h3");
const about = document.querySelectorAll(".about");
const languages = document.querySelectorAll(".lang");
const educationTitles = document.querySelectorAll(".education-title");
const educationDates = document.querySelectorAll(".education-date");
const educationDescriptions = document.querySelectorAll(
  ".education-description"
);
const projects = document.querySelectorAll(".project-description");
const links = document.querySelectorAll(".certificate-link");
const address = document.querySelectorAll(".address");

changeLanguage("ru");

for (let languageButton of languageButtons) {
  let language = languageButton.classList[0];
  languageButton.addEventListener("click", () => {
    changeLanguage(language);
  });
}

function changeLanguage(lang) {
  fetch(`https://nebesnaya94.github.io/CV/json/${lang}.json`)
    .then((response) => response.json())
    .then((data) => {
      translate(title, data.titles);
      translate(about, data.about);
      translate(languages, data.languages);
      translate(educationTitles, data.education.titles);
      translate(educationDates, data.education.dates);
      translate(educationDescriptions, data.education.descriptions);
      translate(projects, data.projects);
      translate(links, data.education.links);
      translate(address, data.address);
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
