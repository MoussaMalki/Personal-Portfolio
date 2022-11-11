let doc = document;
let log = console.log;

// ========> Changing Icons

var audio = new Audio("hittingBlock.mp3");

let icons = document.querySelectorAll(`.icon`);

icons.forEach((e) => {
  e.addEventListener(`click`, () => {
    if (e.getAttribute(`id`) === `link`) {
      e.children[0].setAttribute(`src`, `images/link.png`);
      audio.play();
      setTimeout(() => {
        e.setAttribute(`id`, `linkIcon`);
      }, 10);
    }
    if (e.getAttribute(`id`) === `linkIcon`) {
      window.location.href = "https://www.facebook.com/moussa.em.18";
    }

    if (e.getAttribute(`id`) === `insta`) {
      e.children[0].setAttribute(`src`, `images/insta.png`);
      audio.play();
      setTimeout(() => {
        e.setAttribute(`id`, `instaIcon`);
      }, 10);
    }
    if (e.getAttribute(`id`) === `instaIcon`) {
      window.location.href = "https://www.instagram.com/moussa_malki21/?hl=en";
    }
    if (e.getAttribute(`id`) === `twitter`) {
      e.children[0].setAttribute(`src`, `images/twitter.png`);
      audio.play();
      setTimeout(() => {
        e.setAttribute(`id`, `twitterIcon`);
      }, 10);
    }
    if (e.getAttribute(`id`) === `twitterIcon`) {
      window.location.href = "https://twitter.com/MalkiRave";
    }
  });
});

//// ====> Character related

// ====> 1. tracking mouse cursor
let Character = doc.querySelector(`#character`);
let CharacterSheild = doc.querySelector(`.sheild`);
let map = doc.querySelector(`.Map`);
var pointerX = -1;
var pointerY = -1;
var pointerGap = 0;

let rect = parseInt(Character.getBoundingClientRect().x); // character current position X

document.onmousemove = function (event) {
  pointerX = event.pageX;
}; //cursor current position X

var acc = 0;
var oneClick = 0;
var bottomValue = 0;

doc.querySelector(`#Home`).onclick = () => {
  oneClick += 1;

  if (oneClick === 1) {
    let jump = setInterval(() => {
      acc += 1;

      localStorage.setItem(`btmValue`, acc);

      if (acc === 20) {
        clearInterval(jump);
        goDown = setInterval(() => {
          acc -= 1;
          localStorage.setItem(`btmValue`, acc);

          if (acc === 0) {
            clearInterval(goDown);
          }
        }, 10);
      }
    }, 2);
    setTimeout(() => {
      oneClick = 0;
    }, 500);
  }
};

setInterval(pointerCheck, 1);
function pointerCheck() {
  let mapLeft = parseInt(map.getBoundingClientRect().left);
  let mapRight = parseInt(map.getBoundingClientRect().right);

  // ===> moving character
  if (pointerX > mapLeft + 20 && pointerX < mapRight - 25) {
    Character.style.cssText = `left: ${
      pointerX - (mapLeft + 20)
    }px; bottom: ${localStorage.getItem(`btmValue`)}vh`;
  }
}

///// =====> Animations

const sr = ScrollReveal({
  distance: `20px`,
  duration: 2500,
  delay: 400,
  reset: true,
  mobile: true,
});

sr.reveal(`.cloud1, .cloud3, .cloud2, .cloud4`, { delay: 400, origin: `top` });
sr.reveal(`.home-pic`, { delay: 500, origin: `right` });
sr.reveal(`.home-text`, { delay: 400, origin: `left` });
sr.reveal(`.secTitle`, { delay: 400, origin: `left` });
sr.reveal(`.Map`, { delay: 600, origin: `bottom` });
sr.reveal(`.about-img`, { delay: 200, origin: `top` });
sr.reveal(`.project-container`, { delay: 200, origin: `top` });
sr.reveal(`.about-text`, { delay: 200, origin: `top` });

////// =========> Work Section / changing pics

let changeBtn = doc.querySelector(`.visitSiteBtn`);
let pcContainer = doc.querySelector(`.pcContainer`).children[0];
let phoneContainer = doc.querySelector(`.phoneContainer`).children[0];

var turn = 0;

setInterval(() => {
  if (turn === 0) {
    pcContainer.setAttribute(`src`, `images/carSite1.png`);
    phoneContainer.setAttribute(`src`, `images/carSite2.png`);
    changeBtn.setAttribute(`href`, `https://dusseldolf.com`);
    setTimeout(() => {
      turn = 1;
    }, 100);
  }
  if (turn === 1) {
    pcContainer.setAttribute(`src`, `images/habitSite1.png`);
    phoneContainer.setAttribute(`src`, `images/habitSite2.png`);
    changeBtn.setAttribute(`href`, `https://merry-liger-1c2ce2.netlify.app`);
    setTimeout(() => {
      turn = 2;
    }, 100);
  }
  if (turn === 2) {
    pcContainer.setAttribute(`src`, `images/langSite1.png`);
    phoneContainer.setAttribute(`src`, `images/langSite2.png`);
    changeBtn.setAttribute(`href`, `https://moussatutoring.netlify.app/`);
    setTimeout(() => {
      turn = 3;
    }, 100);
  }

  if (turn === 3) {
    pcContainer.setAttribute(`src`, `images/gym1.png`);
    phoneContainer.setAttribute(`src`, `images/gym2.png`);
    changeBtn.setAttribute(`href`, `https://fitness-gymwebsite.netlify.app`);
    setTimeout(() => {
      turn = 0;
    }, 100);
  }
}, 3000);

/// =====> nav bar

let openBtn = doc.querySelector(`#menu-icon`);
let closeBtn = doc.querySelector(`#clBtn`);

openBtn.onclick = () => {
  doc.querySelector(`.sideNav`).style.cssText = `display: flex`;
};

closeBtn.onclick = () => {
  doc.querySelector(`.sideNav`).style.cssText = `display: none`;
};
