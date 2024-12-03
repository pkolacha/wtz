const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
const mobileLinks = document.querySelectorAll('.navbar-links-mobile a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navbar.classList.toggle('active');
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navbar.classList.remove('active');
    });
});



let lastScrollTop = 0;
const navbarSticky = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        navbarSticky.style.top = "-9vh";
    } else {
        navbarSticky.style.top = "0";
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//OGOLNIE TO TROCHE DZIALA TROCHE NIE DZIALA ALE MASZ MNIEJ ROBOTY NAPEWNO CHYBA ZE STWIERDZISZ ZE OD 0 TRZEBA
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!




// kontrast
const body = document.body;
const toggler = document.getElementById('contrast-toggler');

const contrastModes = ['default-contrast', 'low-contrast', 'high-contrast'];
let currentContrastIndex = 0;

window.addEventListener('load', () => {
    const savedContrast = localStorage.getItem('contrastMode');
    if (savedContrast) {
        currentContrastIndex = contrastModes.indexOf(savedContrast);
        if (currentContrastIndex === -1) currentContrastIndex = 0;
        applyContrastMode(contrastModes[currentContrastIndex]);
    }
});

const applyContrastMode = (mode) => {
    contrastModes.forEach(m => body.classList.remove(m));
    body.classList.add(mode);
    localStorage.setItem('contrastMode', mode);
};

toggler.addEventListener('click', () => {
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

    links.forEach(link => {
        if (isHighlighted) {
            link.classList.add("highlight"); 
        } else {
            link.classList.remove("highlight"); 
        }
    });

    titleLink.textContent = isHighlighted ? "Wyłącz podświetlenie" : "Podświetlanie linków";
});


//czcionka NIE DZIALA!!!!!!!!!!!!!!!!!!!! jak usune all to dziala tylko 1 p a jak jest all to wcale
const sizeToggler = document.getElementById("fontSizeToggler");
const textElement = document.querySelectorAll("p");
const iconSize = document.querySelector(".icon-size");

const fontSizes = ["1.2em", "1.5em", "1.8em"];
let currentFontSizeIndex = 0;

const savedFontSizeIndex = localStorage.getItem("fontSizeIndex");

if (savedFontSizeIndex !== null) {
    currentFontSizeIndex = parseInt(savedFontSizeIndex, 10);
    textElement.style.fontSize = fontSizes[currentFontSizeIndex];
}

sizeToggler.addEventListener("click", () => {
    currentFontSizeIndex = (currentFontSizeIndex + 1) % fontSizes.length;
    textElement.style.fontSize = fontSizes[currentFontSizeIndex];
    localStorage.setItem("fontSizeIndex", currentFontSizeIndex);

// IKONKA DO PODMIANKI !!!!!!!!!!!!!!!
});


//Odstepy NIE DZIAŁA !!!!!! CHUJ WIE CZEMU
let currentOption = 0;

function toggleSpacing() {
  const bodyElement = document.body;
  const button = document.getElementById('togglerSpacing');

  currentOption = (currentOption + 1) % 3;

  switch (currentOption) {
    case 0:
      bodyElement.style.wordSpacing = '0.25em';
      bodyElement.style.letterSpacing = '2px';
      break;
    case 1:
      bodyElement.style.wordSpacing = '8px';
      bodyElement.style.letterSpacing = '3px';
      break;
    case 2:
      bodyElement.style.wordSpacing = '13px';
      bodyElement.style.letterSpacing = '4px';
      break;
  }
}


//WYROWNANIE TEKSTU
function toggleAlignment() {
  let currentAlignment = 0;
  const bodyElement = document.body;
  const iconAlign = document.querySelector('.icon-align');

  currentAlignment = (currentAlignment + 1) % 5; //!!!!!!!!! Tylko raz dziala

  switch (currentAlignment) {
    case 0:
      bodyElement.style.textAlign = 'justify';
      iconAlign.textContent = 'Justify'; //!!!!!!!!!!!!!!!!!!!!!!!!! zmien mi to na ikonki masz w htmlu pod tym przyciskiem
      break;
    case 1:
      bodyElement.style.textAlign = 'left';
      iconAlign.textContent = 'Left';
      break;
    case 2:
      bodyElement.style.textAlign = 'right';
      iconAlign.textContent = 'Right'
      break;
    case 3:
      bodyElement.style.textAlign = 'center';
      iconAlign.textContent = 'Center';
      break;
    default:
      break;
  }
}



//line height !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! TEZ NIE DZIALA
let currentLineHeight = 0;

function toggleLineHeight() {
  const bodyElement = document.body;

  currentLineHeight = (currentLineHeight + 1) % 3;

  switch (currentLineHeight) {
    case 0:
      bodyElement.style.lineHeight = '1.5'; 
      break;
    case 1:
      bodyElement.style.lineHeight = '1.75'; 
      break;
    case 2:
      bodyElement.style.lineHeight = '2';
      break;
    default:
      break;
  }
}

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//
//DOBRA, WIECEJ NIE ROBIE BO SIE OKAZE ZE INACZEJ TO BEDZIESZ ROBIC I CI ROBOTY DODALEM BY SPRAWDZIC TO I USUWAC. WIESZ CO MASZ ROBIC
// WSZEDZIE MASZ INSTRUKCJE
// KC <333

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!









const slides = document.querySelector('.slides');
const slideCount = 2; 
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
let currentIndex = 0;

let slideInterval = setInterval(() => {
    nextSlide();
}, 5000); 

function nextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    updateSlidePosition();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    updateSlidePosition();
}

function updateSlidePosition() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

arrowLeft.addEventListener('click', () => {
    clearInterval(slideInterval);
    prevSlide();
});

arrowRight.addEventListener('click', () => {
    clearInterval(slideInterval);
    nextSlide();
});