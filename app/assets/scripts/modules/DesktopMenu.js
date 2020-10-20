class DesktopMenu {
    constructor (menuItem, rootMargin, threshold) {
        this.menuItem = document.getElementById(menuItem)
        let observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    document.querySelector(`.${menuItem}`).classList.add("primary-nav--brown")
                } else {
                    document.querySelector(`.${menuItem}`).classList.remove("primary-nav--brown")
                }
            });
            }, {rootMargin: `${rootMargin}px`, threshold: threshold});

        observer.observe(this.menuItem);
    }
}

export default DesktopMenu;