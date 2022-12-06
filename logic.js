const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".navLinks");
    const navLinks = document.querySelectorAll(".navLinks li");
    const body = document.querySelector('body');
    const htmlEL = document.querySelector('html');

    burger.addEventListener("click", () => {
        nav.classList.toggle("navigationActive");
        body.classList.toggle("stuck");
        htmlEL.classList.toggle("stuck");

        // Animate
        navLinks.forEach((links, index) => {
            if (links.style.animation) {
                links.style.animation = '';
            } else {
                links.style.animation = `navLinkFade 0.7s ease  forwards ${index/7 + 0.5}s`;
            }
        });

        //Burger Anim
        burger.classList.toggle('toggle');
    });  
}

navSlide();


const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }else{
            entry.target.classList.remove("show");
        }
    });
});

const titleObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('titleShow');
        }else{
            entry.target.classList.remove('titleShow');

        }
    });
});

const hiddentELements = document.querySelectorAll(".hidden");
hiddentELements.forEach((el) => observer.observe(el));

const hiddenTitle = document.querySelectorAll('.titleHidden');
hiddenTitle.forEach((el) => titleObserver.observe(el));


