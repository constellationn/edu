// Mobile menu component
export class MobileMenu {
    constructor(buttonSelector, menuSelector) {
        this.button = document.querySelector(buttonSelector);
        this.menu = document.querySelector(menuSelector);
        this.init();
    }

    init() {
        this.button.addEventListener('click', () => this.toggle());
    }

    toggle() {
        this.menu.classList.toggle('active');
        this.button.textContent = this.menu.classList.contains('active') ? '✕' : '☰';
    }

    close() {
        this.menu.classList.remove('active');
        this.button.textContent = '☰';
    }
}