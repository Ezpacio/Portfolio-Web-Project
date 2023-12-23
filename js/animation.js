// scroll tranform animation =>
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // isIntersecting yerine => intersectionRatio
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
let scrollAnimation = document.querySelectorAll('.scroll-animation');
scrollAnimation.forEach((el) => observer.observe(el));
// scroll tranform animation =>


let scrollTo = document.querySelectorAll('.scrollTo');

// scroll olduğunda
window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;

    scrollTo.forEach(function(element) {
        let targetId = element.getAttribute('href').substring(1);

        // Hedef bölümün offset değerini al
        let targetOffset = document.getElementById(targetId).offsetTop;

        // Eğer scroll pozisyonu, hedef bölümün offset değerine yakınsa
        if (scrollPosition >= targetOffset && scrollPosition < targetOffset + document.getElementById(targetId).offsetHeight) {
            scrollTo.forEach(function(item) {
                item.classList.remove('active');
            });

            element.classList.add('active');
        }
    });
});

scrollTo.forEach(function(element) {
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


