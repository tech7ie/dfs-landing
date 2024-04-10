window.onscroll = function() {
  var header = document.querySelector('header');
  if (window.scrollY > 350) {
      header.style.backgroundColor = '#1d1b2d';
  } else {
      header.style.backgroundColor = 'transparent';
  }
};




document.querySelectorAll('.scroll-link').forEach((link) => {
  link.addEventListener('click', function(e) {
      e.preventDefault();
      let target = document.querySelector(this.getAttribute('href'));
      window.scrollTo({
          top: target.offsetTop - 72,
          behavior: 'smooth'
      });
  });
});

var scrollEdges = document.querySelectorAll('.scroll-edge');
scrollEdges.forEach(function(edge) {
  edge.addEventListener('click', function(e) {
    e.preventDefault();
    let target = document.querySelector('#edge-screen');
    window.scrollTo({
        top: target.offsetTop - 45,
        behavior: 'smooth'
    });
  });
});
var scrollHowWork = document.querySelectorAll('.scroll-howWork');
scrollHowWork.forEach(function(howWork) {
  howWork.addEventListener('click', function(e) {
    e.preventDefault();
    let target = document.querySelector('#how-work');
    window.scrollTo({
        top: target.offsetTop -150,
        behavior: 'smooth'
    });
  });
});
// ----------------------------burger menu modal------------------------

var modal = document.getElementById("myModal");
var btn = document.getElementById("modal-button");
var img = document.getElementById("button-image");
var a = document.getElementsByClassName("close");


function closeModal() {
  document.body.style.overflow = "auto";
  modal.style.display = "none";
  img.src = "src/ion_menu.svg";
}

btn.onclick = function() {
  if (modal.style.display === "none" || modal.style.display === "") {
    modal.style.display = "block";
    img.src = "src/icon-park_close.svg";
    document.body.style.overflow = "hidden";
  } else {
    closeModal()
  }
}


// ---------------------mobile warn modal-------------------------------------------

var warnModalDiv = document.getElementById("modal-screen");
var warnModalFlex = document.getElementById("#warnModal");
var loginBtn = document.getElementById("understandBtn");

function warnModal() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    warnModalDiv.style.display = "block";
    document.body.style.overflow = "hidden";


  } else {

  }
};

// function isMobileDevice() {
//   return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
// };

loginBtn.onclick = function() {
  warnModalDiv.style.display = "none";
  document.body.style.overflow = "auto";
}



// ----------------------------------language selector-----------------------------------------------

let selectedLang = document.getElementById('selected-lang');
let buttonLang = document.getElementById('langs');
let langOptions = document.getElementById('lang-options');

buttonLang.addEventListener('click', function(e) {
  e.stopPropagation();
  langOptions.classList.toggle('select-hide');
});

langOptions.addEventListener('click', function(e) {
  if (e.target.nodeName.toUpperCase() === 'DIV') {
    // langOptions.classList.add('select-hide');
    selectedLang.innerHTML = e.target.innerHTML;
    
  }
});

document.addEventListener('click', function(e) {
  langOptions.classList.add('select-hide');
});




// -----------------------------------------video selection---------------------------

window.onload = function() {
  var items = document.querySelectorAll('.video-item');
  var videoContainer = document.querySelector('.video-mobile-resize');
  var videos = [
      'https://www.youtube.com/embed/dQw4w9WgXcQ?si=KrWdcAljdRHSibXU',
      'https://www.youtube.com/embed/dQw4w9WgXcQ?si=KrWdcAljdRHSibXU',
      'https://www.youtube.com/embed/dQw4w9WgXcQ?si=KrWdcAljdRHSibXU',
      'https://www.youtube.com/embed/dQw4w9WgXcQ?si=KrWdcAljdRHSibXU',
      'https://www.youtube.com/embed/dQw4w9WgXcQ?si=KrWdcAljdRHSibXU',
  ];
  
  items.forEach(function(item, index) {
      item.addEventListener('click', function() {
      items.forEach(function(i) {
          i.classList.remove('active');
      });
      this.classList.add('active');
      var videoUrl = videos[index];
      var iframe = '<iframe width="100%" height="100%" src="' + videoUrl + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
      videoContainer.innerHTML = iframe;
      });
  });
  
  
  items[0].classList.add('active');
  var firstVideoUrl = videos[0];
  var firstIframe = '<iframe width="100%" height="100%" src="' + firstVideoUrl + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
  videoContainer.innerHTML = firstIframe;
  };






// ------------------------------------- reviews scroll----------------------------------


let reviews = document.querySelectorAll('#card-review');
let reviewsContainer = document.querySelector('#reviews');


var arrow10 = "src/arrow1-0.svg";
var arrow11 = "src/arrow1-1.svg";
var arrow20 = "src/arrow2-0.svg";
var arrow21 = "src/arrow2-1.svg";


var prevArrow = document.getElementById("prevReviewButton");
var nextArrow = document.getElementById("nextReviewButton");
var prevArrow2 = document.getElementById("prevReviewButton2");
var nextArrow2 = document.getElementById("nextReviewButton2");

var reviewScroll = document.getElementById("reviews");

function changeArrow() {
  // Если отзывы прокручены до конца влево
  if (reviewScroll.scrollLeft < 10) {
      prevArrow.src = arrow10;
      prevArrow2.src = arrow10;
      prevArrow.classList.add('disabled');
      prevArrow2.classList.add('disabled');
  } else {
      prevArrow.src = arrow11;
      prevArrow2.src = arrow11;
      prevArrow.classList.remove('disabled');
      prevArrow2.classList.remove('disabled');
  }

  // Если отзывы прокручены до конца вправо
  if (reviewScroll.scrollLeft + reviewScroll.clientWidth >= reviewScroll.scrollWidth - 10) {
    nextArrow.src = arrow20;
    nextArrow2.src = arrow20;
    nextArrow.classList.add('disabled');
    nextArrow2.classList.add('disabled');
  } else {
      nextArrow.src = arrow21;
      nextArrow2.src = arrow21;
      nextArrow.classList.remove('disabled');
      nextArrow2.classList.remove('disabled');
  }
}


reviewScroll.onscroll = changeArrow;


changeArrow();


function getCenterReview() {
  let center = reviewsContainer.scrollLeft + reviewsContainer.offsetWidth / 2;
  let closestIndex = 0;
  let closestDistance = Math.abs(reviews[0].offsetLeft + reviews[0].offsetWidth / 2 - center);

  for (let i = 1; i < reviews.length; i++) {
      let distance = Math.abs(reviews[i].offsetLeft + reviews[i].offsetWidth / 2 - center);
      if (distance < closestDistance) {
          closestIndex = i;
          closestDistance = distance;
      }
  }

  return closestIndex;
}


function scrollToReview(index) {
    let review = reviews[index];
    let scrollPosition = review.offsetLeft - (reviewsContainer.offsetWidth / 2) + (review.offsetWidth / 2);
    reviewsContainer.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
    });
}

// Кнопки "Вперед"
document.querySelectorAll('.nextReviewButton').forEach(function(button) {
  button.addEventListener('click', function() {
      let currentIndex = getCenterReview();
      let nextIndex = currentIndex + 1;
      if (nextIndex < reviews.length) {
          scrollToReview(nextIndex);
      }
  });
});

// Кнопки "Назад"
document.querySelectorAll('.prevReviewButton').forEach(function(button) {
  button.addEventListener('click', function() {
      let currentIndex = getCenterReview();
      let prevIndex = currentIndex - 1;
      if (prevIndex >= 0) {
          scrollToReview(prevIndex);
      }
  });
});

// Добавляем слушатель событий на прокрутку блока отзывов
reviewsContainer.addEventListener('scroll', function() {
  let currentIndex = getCenterReview();
  // updateDotHighlight(currentIndex)
});
















let contentList = [

  `<h1 class="text-32-18">1DFS: Ваш быстрый и безопасный<br>путь к правильной декларации!</h1><br>
  <h2 class="text-gray text-14-16">Наша система - это ваш быстрый и безопасный путь к правильной декларации!<br>Мы предлагаем простой и эффективный способ составления декларации без лишних хлопот.</h2><br>
  <div class="y-center">
      <button id="login-button" onclick="warnModal()" class="xy-center" style="padding: 20px;">Вход в систему DFS
          <img src="src/vector.svg" style="margin-left: 10px;"/>
      </button>
      <h2 id="how-use" class="display-none-mobile text-gray text-18-16" style="margin-left: 20px; font-weight: 200;">Как начать пользоваться?</h2>
  </div>`,
  `<h1 class="text-32-18">2DFS: Ваш быстрый и безопасный<br>путь к правильной декларации!</h1><br>
  <h2 class="text-gray text-14-16">Наша система - это ваш быстрый и безопасный путь к правильной декларации!<br>Мы предлагаем простой и эффективный способ составления декларации без лишних хлопот.</h2><br>
  <div class="y-center">
      <button id="login-button" onclick="warnModal()" class="xy-center" style="padding: 20px;">Вход в систему DFS
          <img src="src/vector.svg" style="margin-left: 10px;"/>
      </button>
      <h2 id="how-use" class="display-none-mobile text-gray text-18-16" style="margin-left: 20px; font-weight: 200;">Как начать пользоваться?</h2>
  </div>`,
  `<h1 class="text-32-18">3DFS: Ваш быстрый и безопасный<br>путь к правильной декларации!</h1><br>
  <h2 class="text-gray text-14-16">Наша система - это ваш быстрый и безопасный путь к правильной декларации!<br>Мы предлагаем простой и эффективный способ составления декларации без лишних хлопот.</h2><br>
  <div class="y-center">
      <button id="login-button" onclick="warnModal()" class="xy-center" style="padding: 20px;">Вход в систему DFS
          <img src="src/vector.svg" style="margin-left: 10px;"/>
      </button>
      <h2 id="how-use" class="display-none-mobile text-gray text-18-16" style="margin-left: 20px; font-weight: 200;">Как начать пользоваться?</h2>
  </div>`,
  `<h1 class="text-32-18">4DFS: Ваш быстрый и безопасный<br>путь к правильной декларации!</h1><br>
  <h2 class="text-gray text-14-16">Наша система - это ваш быстрый и безопасный путь к правильной декларации!<br>Мы предлагаем простой и эффективный способ составления декларации без лишних хлопот.</h2><br>
  <div class="y-center">
      <button id="login-button" onclick="warnModal()" class="xy-center" style="padding: 20px;">Вход в систему DFS
          <img src="src/vector.svg" style="margin-left: 10px;"/>
      </button>
      <h2 id="how-use" class="display-none-mobile text-gray text-18-16" style="margin-left: 20px; font-weight: 200;">Как начать пользоваться?</h2>
  </div>`,
  `<h1 class="text-32-18">5DFS: Ваш быстрый и безопасный<br>путь к правильной декларации!</h1><br>
  <h2 class="text-gray text-14-16">Наша система - это ваш быстрый и безопасный путь к правильной декларации!<br>Мы предлагаем простой и эффективный способ составления декларации без лишних хлопот.</h2><br>
  <div class="y-center">
      <button id="login-button" onclick="warnModal()" class="xy-center" style="padding: 20px;">Вход в систему DFS
          <img src="src/vector.svg" style="margin-left: 10px;"/>
      </button>
      <h2 id="how-use" class="display-none-mobile text-gray text-18-16" style="margin-left: 20px; font-weight: 200;">Как начать пользоваться?</h2>
  </div>`
];


let cards = document.querySelectorAll('#card');
let dotsContainerCards = document.querySelector('#dotsContainerCards');


for (let i = 0; i < contentList.length; i++) {
  let dotDivCard = document.createElement('div');
  dotDivCard.classList.add('dot-div-card');

  let dotCard = document.createElement('div');
  dotCard.classList.add('dot-card');
  dotDivCard.appendChild(dotCard)

  dotsContainerCards.appendChild(dotDivCard);
}

let dotsCards = document.querySelectorAll('.dot-div-card');

dotsCards[0].style.border = '3px solid #77767f';
dotsCards[0].querySelector('.dot-card').style.display = 'none';
dotsCards[0].classList.add('active-dot');


function updateDot(index) {
  for (let dot of dotsCards) {
    dot.style.border = 'none';
    dot.querySelector('.dot-card').style.display = 'block';
    dot.classList.remove('active-dot');
  }
  dotsCards[index].style.border = '3px solid #77767f';
  dotsCards[index].querySelector('.dot-card').style.display = 'none';
  dotsCards[index].classList.add('active-dot');
}



function changeCardContent(index) {
  let card = document.querySelector('#card');
  card.innerHTML = contentList[index];
}


for (let i = 0; i < dotsCards.length; i++) {
  dotsCards[i].onclick = function() {
    changeCardContent(i);
    updateDot(i)
  }
}

