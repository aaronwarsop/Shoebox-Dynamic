// Opening and closing menu icon when screen is displayed on smaller devices
const menu = document.querySelector("#menu-responsive");
const navbar = document.querySelector(".navbar");
const functionalNav = document.querySelector(".functional-header");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
  navbar.classList.toggle("small-font-size-nav");
  navbar.classList.toggle("large-font-size-nav");
  functionalNav.classList.toggle("small-font-size-nav");
  functionalNav.classList.toggle("large-font-size-nav");
  functionalNav.classList.toggle("active");
}

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
  functionalNav.classList.remove("active");
}

window.onload = function() {
  document.body.style.color = localStorage.getItem("fontColour");
  document.body.style.background = localStorage.getItem("backgroundColour");
  header.style.background = localStorage.getItem("headerBackdropColour");
  navbar.classList.add(localStorage.getItem("fontSizeNav"));
  functionalNav.classList.add(localStorage.getItem("fontSizeNav"));

  const savedLinkColour = localStorage.getItem("linkColour");
  const savedIconColour = localStorage.getItem("iconColour");

  if (savedLinkColour) {
    for (let i = 0; i < linkColours.length; i++) {
      linkColours[i].style.color = savedLinkColour;
    }
  }

  if (savedIconColour) {
    for (let i = 0; i < iconColours.length; i++) {
      iconColours[i].style.color = savedIconColour;
    }
  }
}

// Opening and closing settings window and restoring to default
const settingsPopup = document.querySelector(".settings-popup");
const settingsBtn = document.querySelector("#settings-button");
const closeSettings = document.querySelector("#close-button");
const restoreBtn = document.querySelector(".restore-button");
const smallFontBtn = document.querySelector(".small-font");
const mediumFontBtn = document.querySelector(".medium-font");
const largeFontBtn = document.querySelector(".large-font");

settingsBtn.addEventListener("click", () => {
  settingsPopup.showModal();
});

closeSettings.addEventListener("click", () => {
  settingsPopup.close();
});

restoreBtn.addEventListener("click", () => {
  localStorage.removeItem("fontColour");
  localStorage.removeItem("backgroundColour");
  localStorage.removeItem("linkColour");
  localStorage.removeItem("iconColour");
  localStorage.removeItem("headerBackdropColour");
  document.body.style.color = localStorage.getItem("fontColour");
  document.body.style.background = "";
  header.style.background = "";
  mediumFont();

  for (let i = 0; i < linkColours.length; i++) {
    linkColours[i].style.color = "black";
  }

  for (let i = 0; i < iconColours.length; i++) {
    iconColours[i].style.color = "black";
  }
});

function smallFont() {
  localStorage.setItem("fontSizeHeader", "small-font-size-header");
  localStorage.setItem("fontSizeNav", "small-font-size-nav");
  navbar.classList.add(localStorage.getItem("fontSizeNav"));
  navbar.classList.remove("large-font-size-nav");
  navbar.classList.remove("medium-font-size-nav");
  functionalNav.classList.add(localStorage.getItem("fontSizeNav"));
  functionalNav.classList.remove("large-font-size-nav");
  functionalNav.classList.remove("medium-font-size-nav");
 
}

function mediumFont() {
  localStorage.setItem("fontSizeHeader", "medium-font-size-header");
  localStorage.setItem("fontSizeNav", "medium-font-size-nav");
  navbar.classList.add(localStorage.getItem("fontSizeNav"));
  navbar.classList.remove("small-font-size-nav");
  navbar.classList.remove("large-font-size-nav");
  functionalNav.classList.add(localStorage.getItem("fontSizeNav"));
  functionalNav.classList.remove("small-font-size-nav");
  functionalNav.classList.remove("large-font-size-nav");
}

function largeFont() {
  localStorage.setItem("fontSizeHeader", "large-font-size-header");
  localStorage.setItem("fontSizeNav", "large-font-size-nav");
  navbar.classList.add(localStorage.getItem("fontSizeNav"));
  navbar.classList.remove("small-font-size-nav");
  navbar.classList.remove("medium-font-size-nav");
  functionalNav.classList.add(localStorage.getItem("fontSizeNav"));
  functionalNav.classList.remove("small-font-size-nav");
  functionalNav.classList.remove("medium-font-size-nav");
}

smallFontBtn.addEventListener("click", () => {
  smallFont();
});

mediumFontBtn.addEventListener("click", () => {
  mediumFont();
});

largeFontBtn.addEventListener("click", () => {
  largeFont();
});



// Customise options
const fontColourSelecter = document.querySelector("#font-colour-input");
const backgroundColourSelecter = document.querySelector("#background-colour-input");
const applyFontColourBtn = document.querySelector("#font-colour-apply-btn");
const applyBackgroundColourBtn = document.querySelector("#background-colour-apply-btn");
const applyHeaderColourBtn = document.querySelector("#header-backdrop-apply-btn");
const headerBackdropColourSelector = document.querySelector("#header-backdrop-colour-input");
const header = document.querySelector("header");
const linkColours = document.getElementsByTagName("a");
const iconColours = document.getElementsByTagName("i");


applyFontColourBtn.addEventListener("click", () => {
  localStorage.setItem("fontColour", document.body.style.color = fontColourSelecter.value);
  for (let i = 0; i < linkColours.length; i++) {
    linkColours[i].style.color = fontColourSelecter.value;
  }
  localStorage.setItem("linkColour", fontColourSelecter.value);
  for (let i =0; i < iconColours.length; i++) {
    iconColours[i].style.color = fontColourSelecter.value;
  }
  localStorage.setItem("iconColour", fontColourSelecter.value);
});

applyBackgroundColourBtn.addEventListener("click", () => {
  localStorage.setItem("backgroundColour", document.body.style.background = backgroundColourSelecter.value);
});

applyHeaderColourBtn.addEventListener("click", () => {
  localStorage.setItem("headerBackdropColour", header.style.background = headerBackdropColourSelector.value);
})