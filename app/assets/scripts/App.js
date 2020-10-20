import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import DesktopMenu from './modules/DesktopMenu'

let mobileMenu = new MobileMenu();
new RevealOnScroll(document.querySelectorAll(".feature-item"), 0, .9);
new RevealOnScroll(document.querySelectorAll(".headline"), 0, .9);
new RevealOnScroll(document.querySelectorAll(".review"), 0, .9);

new DesktopMenu("my-beginning", 5, .3) //parameters: section, rootMargin, threshold
new DesktopMenu("features", -15, .3)
new DesktopMenu("reviews", -15, .4)

if (module.hot) {
    module.hot.accept()
}