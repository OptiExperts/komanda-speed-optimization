const store = Vue.reactive({
    state: {
        cartState: []
    },

    getCart(){
        axios.get('/cart.js')
        .then(response => {
            this.state.cartState.unshift(response.data)
        })
        .catch(error => {
            console.log(error)
        }  )
    }
})

const miniCartState = Vue.reactive({
    hidden: true
})

const toggleMiniCart = {
    openCart(){
        miniCartState.hidden = !miniCartState.hidden
        menuState.hidden = true
    }
}

const menuState = Vue.reactive ({
    hidden: true
})

const toggleMenu = {
    openMenu() {
        menuState.hidden = !menuState.hidden
        miniCartState.hidden = true
    }
}

const toggleClose = {
    closeAll (){
        miniCartState.hidden = true
        menuState.hidden = true
    }
}


function backButton() {

    window.history.back();
    
    }


document.addEventListener("DOMContentLoaded", () => {
        initSliders();
      });
      
// Slider right 
function initSliders(){
const slider1 = document.querySelector('.main-collection-circles');
const slider2 = document.querySelector('#rooms');
let isDown = false;
let startX;
let scrollLeft;
let currentSlider;

if (slider1 && slider2) {
  function handleSliderEvents(e) {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - currentSlider.offsetLeft;
    const walk = (x - startX) * 3;
    currentSlider.scrollLeft = scrollLeft - walk;
  }

  slider1.addEventListener('mousedown', (e) => {
    isDown = true;
    currentSlider = slider1;
    currentSlider.classList.toggle('active');
    startX = e.pageX - currentSlider.offsetLeft;
    scrollLeft = currentSlider.scrollLeft;
  });

  slider1.addEventListener('mouseleave', () => {
    isDown = false;
    currentSlider.classList.toggle('active');
  });

  slider1.addEventListener('mouseup', () => {
    isDown = false;
    currentSlider.classList.toggle('active');
  });

  slider1.addEventListener('mousemove', handleSliderEvents);

  slider2.addEventListener('mousedown', (e) => {
    isDown = true;
    currentSlider = slider2;
    currentSlider.classList.toggle('active');
    startX = e.pageX - currentSlider.offsetLeft;
    scrollLeft = currentSlider.scrollLeft;
  });

  slider2.addEventListener('mouseleave', () => {
    isDown = false;
    currentSlider.classList.toggle('active');
  });

  slider2.addEventListener('mouseup', () => {
    isDown = false;
    currentSlider.classList.toggle('active');
  });

  slider2.addEventListener('mousemove', handleSliderEvents);
}
}
requestAnimationFrame(() => {
    initSliders();
  });