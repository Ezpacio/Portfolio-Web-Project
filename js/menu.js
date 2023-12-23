let sideBarIcon = document.getElementById('sideBarIcon');
let sideBarMenu = document.getElementById('sideBarMenu');
let sideBarInner = document.querySelector('.overlay');
let links = document.getElementsByClassName('menuLinks');

sideBarIcon.addEventListener('click', () => {
    let visibility = sideBarMenu.classList;

    if (visibility.contains('menubar-avtive')) {
        visibility.remove('menubar-avtive');
    } else {
        visibility.add('menubar-avtive');
    }
});
sideBarInner.addEventListener('click', () =>{
    let visibility = sideBarMenu.classList;

    if (visibility.contains('menubar-avtive')) {
        visibility.remove('menubar-avtive');
    } else {
        visibility.add('menubar-avtive');
    }
});

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function() {
    let visibility = sideBarMenu.classList;
    visibility.contains('menubar-avtive') ? visibility.remove('menubar-avtive') : null;
  });
}

let menuLinks = document.querySelectorAll('.menuLinks');

window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;

    menuLinks.forEach(function(element) {
        let targetId = element.getAttribute('href').substring(1);
        let targetOffset = document.getElementById(targetId).offsetTop;
        
        if (scrollPosition >= targetOffset && scrollPosition < targetOffset + document.getElementById(targetId).offsetHeight) {
            menuLinks.forEach(function(item) {
                item.classList.remove('active');
            });
            element.classList.add('active');
        }
    });
});

menuLinks.forEach(function(element) {
    element.addEventListener('click', function(event) {
        event.preventDefault();
        let targetId = element.getAttribute('href').substring(1);
        let targetOffset = document.getElementById(targetId).offsetTop;
        window.scrollTo({
            top: targetOffset,
            behavior: 'smooth'
        });
    });
});



