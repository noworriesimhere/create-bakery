import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import DesktopMenu from './modules/DesktopMenu'
import 'lazysizes'

new MobileMenu();
new RevealOnScroll(document.querySelectorAll(".feature-item"), 0, .6);
new RevealOnScroll(document.querySelectorAll(".headline"), 0, .6);
new RevealOnScroll(document.querySelectorAll(".review"), 0, .6);

new DesktopMenu("my-beginning", 5, .3) //parameters: section, rootMargin, threshold
new DesktopMenu("features", -15, .3)
new DesktopMenu("reviews", -15, .4)

let modal;

document.querySelectorAll(".open-modal").forEach(button => {
    button.addEventListener("click", e => {
        e.preventDefault();
        if (typeof modal == "undefined") {
            import(/* webpackChunkName: "modal" */'./modules/Modal')
            .then(importedFile => {
                modal = new importedFile.default()
                setTimeout(() => modal.openTheModal(), 20)
            })
            .catch(() => {
                console.log("error!")
            })
        } else {
            modal.openTheModal()
        }
    })
})


if (module.hot) {
    module.hot.accept()
}