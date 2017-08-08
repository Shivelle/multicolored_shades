console.log('Ready for scripty stuff'); 

const scrollLine = document.querySelector('.scroll-line');

function fillScrollLine() {
  const windowHeight    = window.innerHeight;
  const fullHeight      = document.body.clientHeight;
  const scrolled        = window.scrollY;
  const percentScrolled = (scrolled / (fullHeight - windowHeight)) * 100;
  scrollLine.style.width = `${percentScrolled}%`;
}


window.addEventListener('scroll', debounce(fillScrollLine));

function debounce(func, wait = 15, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }


/* typed.js functionality */ 
const typed = new Typed('#subtitle', {
    strings: [" Mit professioneller <strong>Sprach- und Kulutrbegleitung</strong>.", "Mit helfender Hand durchs Neuland."], 
    stringsElement: null,
    typeSpeed: 65,
    backSpeed: 25,
    startDelay: 100, 
    shuffle: false, 
    showCursor: false, 
    backDelay: 800,
    loop: true
});