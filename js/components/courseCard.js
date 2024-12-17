// Course card component
export class CourseCard {
    constructor(data) {
        this.data = data;
    }

    render() {
        const card = document.createElement('div');
        card.className = 'course-card';
        card.innerHTML = `
            <img src="${this.data.image}" alt="${this.data.title}">
            <h3>${this.data.title}</h3>
            <p>${this.data.description}</p>
            <button class="enroll-btn">Enroll Now</button>
        `;
        return card;
    }
}