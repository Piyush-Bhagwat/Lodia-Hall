const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".navLinks");
    const navLinks = document.querySelectorAll(".navLinks li");

    burger.addEventListener("click", () => {
        nav.classList.toggle("navActive");

        // Animate
        navLinks.forEach((links, index) => {
            if (links.style.animation) {
                links.style.animation = '';
            } else {
                links.style.animation = `navLinkFade 0.5s ease  forwards ${index/7 + 0.2}s`;
            }
        });

        //Burger Anim
        burger.classList.toggle('toggle');
    });  
}

navSlide();
