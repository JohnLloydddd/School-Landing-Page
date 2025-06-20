/*=================================== toggle icon navbar ======================= */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

/*=================================== Scroll Section Active link ======================= */
let Sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

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
window.onscroll = () => {
    Sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    /*=================================== sticky nav bar ======================= */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*=================================== remove toggle icon and navbar ======================= */
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};


/*=================================== Scroll reveal ======================= */
ScrollReveal({
    distance:'80px',
    duration: 2000,
    delay: 200,
 });

 ScrollReveal().reveal('.tree li,.tree ul ', { origin:'top' });
 ScrollReveal().reveal('.tree, .tree li::before, .tree li::after, .tree li::after, ..tree li:only-child::after, .tree li:only-child::before', { origin:'bottom' });
 ScrollReveal().reveal('.tree li:only-child::after, .tree li:only-child::before, .tree li:only-child', { origin: 'left' });
 ScrollReveal().reveal('..tree li:first-child::before, .tree li:last-child::after, .tree li:last-child::before t', { origin:'right' });

/*=================================== TYPE JS ======================= */
const typed = new Typed('.multiple-text',{
    strings: ['Organizational Chart',' Engineering Department'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

document.addEventListener('DOMContentLoaded', () => {
    const nodes = document.querySelectorAll('.tree li');

    nodes.forEach(node => {
        node.addEventListener('mouseenter', () => {
            const extraInfo = node.querySelector('.extra-info');
            if (extraInfo) extraInfo.style.display = 'block';
        });

        node.addEventListener('mouseleave', () => {
            const extraInfo = node.querySelector('.extra-info');
            if (extraInfo) extraInfo.style.display = 'none';
        });
    });
});
