class MobileMenu {
    constructor() {
        this.menuIcon = document.querySelector(".site-header__menu-icon");
        this.menuContent = document.querySelector(".primary-nav__right");
        this.events();
        this.resize();
    }

    events() {
        this.menuIcon.addEventListener("click", () => this.toggleTheMenu());
    }

    toggleTheMenu() {
        this.menuContent.classList.toggle("primary-nav__right--is-visible");
        this.menuIcon.classList.toggle("site-header__menu-icon--close-x")
        if (!this.menuContent.classList.contains('primary-nav__right--is-visible')) {
            this.menuContent.classList.add("primary-nav__right--is-invisible");
            setTimeout(()=> {
                this.menuContent.classList.remove("primary-nav__right--is-invisible");
            }, 500);
        }
    }

    resize() {
        window.addEventListener('resize', () => {
            if (window.innerWidth > 930 && this.menuContent.classList.contains('primary-nav__right--is-visible')) {
                this.menuContent.classList.remove("primary-nav__right--is-visible");
                console.log("gone!")
            }
        })
    }

}




export default MobileMenu;