const $search = document.querySelector('.submenu__search');
const $searchInput = $search.querySelector('.search__input');
const $searchIcon = $search.querySelector('.search__material-icons');

$searchIcon.addEventListener('click', () => {
  $searchInput.focus();
});
$searchInput.addEventListener('focus', () => {
  $search.classList.add('focused');
  $searchInput.setAttribute('placeholder', '통합검색');
});
$searchInput.addEventListener('blur', () => {
  $search.classList.remove('focused');
  $searchInput.setAttribute('placeholder', '');
});

const $badgeContainer = document.querySelector('.badge-container');

window.addEventListener(
  'scroll',
  _.throttle(() => {
    if (window.scrollY > 500) {
      gsap.to($badgeContainer, 0.6, {
        display: 'none',
        opacity: 0,
      });
    } else {
      gsap.to($badgeContainer, 0.6, {
        display: 'block',
        opacity: 1,
      });
    }
  }, 300)
);

const $fadeIn = document.querySelectorAll('.visual--fade-in');

$fadeIn.forEach((element, index) => {
  gsap.to(element, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

const $promotion = document.querySelector('.notice__promotion');
const $promotionToggleButton = document.querySelector('.right__toggle');
let isPromotionHide = false;

$promotionToggleButton.addEventListener('click', () => {
  isPromotionHide = !isPromotionHide;
  if (isPromotionHide) {
    $promotion.classList.add('hide');
  } else {
    $promotion.classList.remove('hide');
  }
});

function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}
function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay),
  });
}
floatingObject('.image--floating1', 1, 15);
floatingObject('.image--floating2', 0.5, 15);
floatingObject('.image--floating3', 1.5, 20);

const $spyElements = document.querySelectorAll('section.scroll-spy');
$spyElements.forEach((spyElement) => {
  new ScrollMagic.Scene({
    triggerElement: spyElement,
    triggerHook: 0.8,
  })
    .setClassToggle(spyElement, 'show')
    .addTo(new ScrollMagic.Controller());
});

const $thisYear = document.querySelector('.copyright__this-year');
$thisYear.textContent = new Date().getFullYear();
