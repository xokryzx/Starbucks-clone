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
