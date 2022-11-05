const naAnim = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav__link");
    const navLinks = document.querySelectorAll(".nav__link li");


    burger.addEventListener("click", () => {
        nav.classList.toggle("nav__active");
        navLinks.forEach((link, index) => {
         if (link.style.animation) {
            link.style.animation = "";
         }else {
           link.style.animation = `navBar ${index / 4 + 0.7
         }s`;
         };
        });

        burger.classList.toggle("toggle");
        
    });
};
naAnim();   
