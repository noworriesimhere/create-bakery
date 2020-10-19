class RevealOnScroll {
    constructor(els, threshold) {
        this.itemsToReveal = document.querySelectorAll(".feature-item")
        this.hideInitially();
        let observer = new IntersectionObserver((entry) => {
            if(entry[0].isIntersecting) {
                entry[0].target.classList.add("reveal-item--is-visible")
            } else {
                entry[0].target.classList.remove("reveal-item--is-visible")
            }
        }, {rootMargin: '0px', threshold: .9});

        let entries = document.querySelectorAll(".feature-item");

        entries.forEach(entry => {
            observer.observe(entry);
        })
    }
    hideInitially() {
        this.itemsToReveal.forEach(item => item.classList.add("reveal-item"))
    }
}







export default RevealOnScroll;