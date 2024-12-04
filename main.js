//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//STRZAŁKI W SLIDERZE NIE DZIAŁAJĄ (problem z frontem, najpewniej przez budowe strony, wywolywane przez queryselector wszystko dziala)
//NASYCENIE ZROB, W CSS W ROOT SIE ZNAJDUJA WLASCIWOSCI; UKRYWANIE OBRAZKOW ZROB (zrobione, tylko dodac aby ten div tak nie przeskakiwaol)
//SPRAWDZ CSS. WYSZUKAJ SE KONTRAST I TAM SA TYTUL KOLORU DO ZMIAN I SECONDARY BG I KOLOR TEKSTU DLA LOW KONTRAST
//TRZEBA DODAC POWIEKSZANIE TEKSTU DLA LISTY MA BYC 1.3EM 1.6EM I 1.9EM DLA NAGLOWKOW ORAZ KLASY SUBTITLE A DLA LISTY NORMALNIE 1.2EM 1.5EM 1.8EM
//W ZMIANIE ROZMIARU TEKSTU 2 RAZY PLUS POTEM RAZ MINUS I ZNOWU 2 RAZY PLUS : <i class="fas fa-minus"></i> . CZAISZE ZE JAK JEST JESZCZE OPCJA DO ZWIEKSZENIA TO PLUS A JAK MOZNA TYLKO ZMINNEJSZYC TO MINUS
//POWIEKSZANIE TEKSTU NIE POWIEKSZA TEKSTU W NAVBARZE I PRACOWNI
//W PRACOWNI TEZ NIE DZIALA ZMIANA KOLORU TEKSU PRZY ZMIANIE KOTRASTU

//JUTRO TO KONCZYMY (SIGMA)

//JAK MASZ JAKIES PYTANIA TO SMIALO ;)
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

let currentSaturation = 100; // Początkowe nasycenie w procentach

document.querySelector("body > section.access-menu > div.options > div:nth-child(7)").addEventListener("click", () => {
  currentSaturation += 20;
  if (currentSaturation > 200) {
    currentSaturation = 100;
  }
  document.body.style.filter = `saturate(${currentSaturation}%)`;
  document.querySelector("body > section.access-menu > div.options > div:nth-child(7) > div.icon > i").innerText = `${currentSaturation}%`;
});




const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const mobileLinks = document.querySelectorAll(".navbar-links-mobile a");

// funkcja do zmiany widocznosci menu
const toggleMenu = (displayMenu, displayIcon) => {
  document.querySelector("body > section.access-menu").style.display =
    displayMenu;
  document.querySelector("body > a.access > i").style.display = displayIcon;
};

document.querySelector(".fas.fa-times").addEventListener("click", () => {
  toggleMenu("none", "block");
});

document.querySelector("body > a.access > i").addEventListener("click", () => {
  toggleMenu("block", "none");
});

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navbar.classList.toggle("active");
});

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navbar.classList.remove("active");
  });
});

let lastScrollY = window.scrollY;

const navOptions = (navbar, option) => {
  if (option === "show") {
    navbar.style.top = "0";
    navbar.style.position = "sticky";
  } else {
    navbar.style.top = "-100vh";
    navbar.style.position = "sticky";
  }
};

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  const currentScrollY = window.scrollY;

  if (currentScrollY < lastScrollY) {
    navOptions(navbar, "show");
  } else {
    navOptions(navbar, "hide");
  }

  lastScrollY = currentScrollY;
});

// kontrast
const body = document.body;
const toggler = document.getElementById("contrast-toggler");

const contrastModes = ["default-contrast", "low-contrast", "high-contrast"];
let currentContrastIndex = 0;

// window.addEventListener("load", () => {
//   const savedContrast = localStorage.getItem("contrastMode");
//   if (savedContrast) {
//     currentContrastIndex = contrastModes.indexOf(savedContrast);
//     if (currentContrastIndex === -1) currentContrastIndex = 0;
//     applyContrastMode(contrastModes[currentContrastIndex]);
//   }
// });

const applyContrastMode = (mode) => {
  contrastModes.forEach((m) => body.classList.remove(m));
  body.classList.add(mode);
  localStorage.setItem("contrastMode", mode);
};

toggler.addEventListener("click", () => {
  currentContrastIndex = (currentContrastIndex + 1) % contrastModes.length;
  applyContrastMode(contrastModes[currentContrastIndex]);
});

// linki
const toggleButton = document.getElementById("toggleHighlight");
const titleLink = document.querySelector(".title-link");
const links = document.querySelectorAll("a");
let isHighlighted = false;

toggleButton.addEventListener("click", () => {
  isHighlighted = !isHighlighted;

  links.forEach((link) => {
    if (isHighlighted) {
      link.classList.add("highlight");
    } else {
      link.classList.remove("highlight");
    }
  });

  titleLink.textContent = isHighlighted
    ? "Wyłącz podświetlenie"
    : "Podświetlanie linków";
});

const sizeToggler = document.getElementById("fontSizeToggler");
const textElement = document.querySelectorAll("p");
const iconSize = document.querySelector(".icon-size");

const fontSizes = ["1.2em", "1.5em", "1.8em"];
const listSizes = ["1.3em", "1.6em", "1.9em"];
let currentFontSizeIndex = 0;
let currentListSizeIndex = 0;

sizeToggler.addEventListener("click", () => {
  currentFontSizeIndex = (currentFontSizeIndex + 1) % fontSizes.length;
  currentListSizeIndex = (currentListSizeIndex + 1) % listSizes.length;

  textElement.forEach((paragraph) => {
    paragraph.style.fontSize = fontSizes[currentFontSizeIndex];
  });

  document.querySelectorAll("li").forEach((li) => {
    li.style.fontSize = listSizes[currentListSizeIndex];
  });

  document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((header) => {
    header.style.fontSize = listSizes[currentListSizeIndex];
  });

  document.querySelectorAll(".subtitle").forEach((subtitle) => {
    subtitle.style.fontSize = listSizes[currentListSizeIndex];
  });
});

let currentOption = 0;

function toggleSpacing() {
  const bodyElement = document.body;
  const button = document.getElementById("togglerSpacing");

  currentOption = (currentOption + 1) % 3;

  switch (currentOption) {
    case 0:
      bodyElement.style.wordSpacing = "0.25em";
      bodyElement.style.letterSpacing = "2px";
      break;
    case 1:
      bodyElement.style.wordSpacing = "8px";
      bodyElement.style.letterSpacing = "3px";
      break;
    case 2:
      bodyElement.style.wordSpacing = "13px";
      bodyElement.style.letterSpacing = "4px";
      break;
  }
}


let currentAlignment = 0;


function toggleAlignment() {
  const bodyElement = document.body;
  const iconAlign = document.querySelector(".icon-align");

  currentAlignment = (currentAlignment + 1) % 4; 

  switch (currentAlignment) {
    case 0:
      bodyElement.style.textAlign = "justify";
      iconAlign.innerHTML = '<i class="fas fa-align-justify"></i>';
      break;
    case 1:
      bodyElement.style.textAlign = "left";
      iconAlign.innerHTML = '<i class="fas fa-align-left"></i>';
      break;
    case 2:
      bodyElement.style.textAlign = "right";
      iconAlign.innerHTML = '<i class="fas fa-align-right"></i>';
      break;
    case 3:
      bodyElement.style.textAlign = "center";
      iconAlign.innerHTML = '<i class="fas fa-align-center"></i>';
      break;
    default:
      break;
  }
}

let currentLineHeight = 0;

function toggleLineHeight() {
  const bodyElement = document.body;

  currentLineHeight = (currentLineHeight + 1) % 3;

  switch (currentLineHeight) {
    case 0:
      bodyElement.style.lineHeight = "1.5";
      break;
    case 1:
      bodyElement.style.lineHeight = "1.75";
      break;
    case 2:
      bodyElement.style.lineHeight = "2";
      break;
    default:
      break;
  }
}


const slides = document.querySelector(".slides");
const slideCount = 2;
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
let currentIndex = 0;

let slideInterval = setInterval(() => {
  nextSlide();
}, 5000);

function nextSlide() {
  currentIndex = (currentIndex + 1) % slideCount;
  console.log(`currentIndex: ${currentIndex}`);
  updateSlidePosition();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slideCount) % slideCount;
  updateSlidePosition();
}

function updateSlidePosition() {
  slides.style.transform = `translateX(-${currentIndex * 50}%)`;
}

arrowLeft.addEventListener("click", () => {
  clearInterval(slideInterval);
  prevSlide();
});

arrowRight.addEventListener("click", () => {
  clearInterval(slideInterval);
  nextSlide();
});



const rodoLink = document.getElementById("rodo-link");
const rodoModal = document.getElementById("rodo-modal");
const closeRodoModal = document.getElementById("close-rodo-modal");

rodoLink.addEventListener("click", (e) => {
    e.preventDefault();
    rodoModal.classList.add("active");
});

closeRodoModal.addEventListener("click", () => {
    rodoModal.classList.remove("active");
});

rodoModal.addEventListener("click", (e) => {
    if (e.target === rodoModal) {
        rodoModal.classList.remove("active");
    }
});
