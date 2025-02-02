class PetCard {
    constructor(src, alt, name, parentSelector, ...classes) {
        this.src = src;
        this.alt = alt;
        this.name = name;
        this.classes = classes;
        this.parent = document.querySelector(parentSelector);
    }

    render() {
        const slide = document.createElement("li");
        if (!this.classes.length) {
            const defaultClass = "splide__slide";
            slide.classList.add(defaultClass);
        } else {
            this.classes.forEach(className => slide.classList.add(className));
        }

        slide.innerHTML =
            `
                <div class="splide__slide__photo">
                    <img src="${this.src}" alt="${this.alt}">
                </div>
                <div class="splide__slide__descr">
                    <h3 class="heading heading_item">${this.name}</h3>
                    <button class="button button_item button_popup">Learn more</button>
                </div>
        `;
        this.parent.append(slide);
    }
}

export default PetCard ;