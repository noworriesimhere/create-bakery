class RevealOnScroll {
    constructor(els, rootMargin, threshold) {
        this.itemsToReveal = els;
        this.hideInitially();
        let observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.classList.add("reveal-item--is-visible")
                } 
            });
            }, {rootMargin: `${rootMargin}px`, threshold: threshold});

        this.itemsToReveal.forEach(item => {
            observer.observe(item);
        })
    }
    hideInitially() {
        this.itemsToReveal.forEach(item => item.classList.add("reveal-item"))
    }
}



export default RevealOnScroll;