//Hamburger menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", openMenu);

function openMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

//Randomize spots on map

let places = document.getElementsByClassName('spot');

let wrapperWidth = document.getElementById('wrapper').clientWidth;
let wrapperHeight = document.getElementById('wrapper').clientHeight;

for ( let i = 0; i < places.length; i++) {
	places[i].style.left = Math.floor(Math.random() * wrapperWidth) + 'px';
	places[i].style.top = Math.floor(Math.random() * wrapperHeight) + 'px';
}

//Filter

function filterSelection(e) {
  const categories = document.querySelectorAll(".wrapper div");
  let filter = e.target.dataset.filter;
  if ( filter === 'all') {
    categories.forEach(category => category.classList.remove("hidden"));
  } else {
    categories.forEach(category => {
      category.classList.contains(filter)
      ? category.classList.remove("hidden")
      : category.classList.add("hidden")
    });
  }
}

// Add active class to the current button (highlight it)

let btnContainer = document.getElementById("tours-list");
let btns = btnContainer.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//Slider

let slider = tns({
    container: '.my-slider',
    slideBy: 2,
    autoplay: false,
    swipeAngle: false,
    gutter: 30,
    responsive: {
      320: {
        items: 1,
        mouseDrag: true
      },
      768: {
          items: 2,
          mouseDrag: true
      },
      1024: {
        items: 3,
        mouseDrag: true
      }
    }
  });
