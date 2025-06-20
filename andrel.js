/*=================================== toggle icon navbar ======================= */
let menuIcon = document.querySelector('#menu-icon');

let navbar = document.querySelector('.navbar');
const searchIcon = document.getElementById('search-icon');
const searchBarContainer = document.querySelector('.search-bar-container');

searchIcon.addEventListener('click', () => {
  searchBarContainer.classList.toggle('active');
});
document.addEventListener('click', (e) => {
    if (
      !searchBarContainer.contains(e.target) &&
      !searchIcon.contains(e.target)
    ) {
      searchBarContainer.classList.remove('active');
    }
  });
  
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}
const typed = new Typed('.multiple-text',{
    strings: ['Visual School Tour','Bustos Campus'],
    typeSpeed: 80,
    backSpeed: 30,
    backDelay: 1000,
    loop: true,
});