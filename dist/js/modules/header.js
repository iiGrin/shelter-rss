function header(hamburgerSelector, navMenuSelector, menuListSelector) {
    const
        hamburger = document.querySelector(hamburgerSelector),
        navMenu = document.querySelector(navMenuSelector),
        navMenuLinks = navMenu.querySelectorAll(menuListSelector);

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("hamburger_active");
        navMenu.classList.toggle("nav-menu_active");
    });

    navMenuLinks.forEach((item) => {
        item.addEventListener("click", () => {
            hamburger.classList.remove("hamburger_active");
            navMenu.classList.remove("nav-menu_active");
        });
    });
}

export default header;