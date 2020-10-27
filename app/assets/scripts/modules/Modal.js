class Modal {
    constructor() {
        this.injectHTML()
        this.modal = document.querySelector(".modal")
        this.closeIcon = document.querySelector(".modal__close")
        this.events()
    }

    events() {
        // listen for close click
        this.closeIcon.addEventListener("click", () => this.closeTheModal())
        // listen for keys
        document.addEventListener("keyup", e => this.keyPressHandler(e))
    }

    keyPressHandler(e) {
        if (e.keyCode == 27) {
            this.closeTheModal();
        }
    }

    openTheModal() {
        this.modal.classList.add("modal--is-visible")
    }

    closeTheModal() {
        this.modal.classList.remove("modal--is-visible")
    }

    injectHTML() {
        document.body.insertAdjacentHTML("beforeend", `
        <div class="modal">
        <div class="modal__inner">
          <h2 class="section-title section-title--brown section-title--no-b-padding">Get in <strong>Touch</strong></h2>
          <div class="wrapper">
            <p class="modal__description">Online order system coming soon</p>
            <p class="modal__description">Until then, check out my instagram or shoot me an email :)</p>
          </div>
    
          <div class="social-icons">
            <a href="mailto:gailolivis@gmail.com?subject=Cake Idea Inquiry" class="social-icons__icon"><img src="assets/images/icons/mail.svg" alt="Gmail""></a>
            <a href="https://www.instagram.com/createbakery/" target=”_blank” class="social-icons__icon"><img src="assets/images/icons/instagram.svg" alt="Instagram"></a>
          </div>
        </div>
        <div><img class="modal__close" src="assets/images/icons/cancel.svg"></div>
      </div>
        `)
    }
}

export default Modal