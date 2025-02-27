class Carousel {
    constructor(container) {
        this.container = container;
        this.slides = container.querySelectorAll('.carousel-slide');
        this.currentSlide = 0;
        console.log('Carousel constructor called with', this.slides.length, 'slides');
        
        // Force display style for debugging
        this.slides.forEach((slide, index) => {
            slide.style.display = index === 0 ? 'block' : 'none';
            const img = slide.querySelector('img');
            if (img) {
                console.log(`Slide ${index} image src:`, img.src);
                img.onerror = () => console.error(`Failed to load image for slide ${index}`);
                img.onload = () => console.log(`Image loaded for slide ${index}`);
            }
        });
        
        // Add event listeners to buttons
        const prevButton = this.container.querySelector('.prev');
        const nextButton = this.container.querySelector('.next');
        
        if (prevButton && nextButton) {
            prevButton.addEventListener('click', () => this.prevSlide());
            nextButton.addEventListener('click', () => this.nextSlide());
        }
    }
    
    showSlide(index) {
        // Hide current slide
        this.slides[this.currentSlide].style.display = 'none';
        
        // Show new slide
        this.currentSlide = index;
        this.slides[this.currentSlide].style.display = 'block';
        console.log(`Showing slide ${index}`);
    }
    
    nextSlide() {
        const next = (this.currentSlide + 1) % this.slides.length;
        this.showSlide(next);
    }
    
    prevSlide() {
        const prev = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.showSlide(prev);
    }
}

// Don't auto-initialize - we'll do this in projects.html after content loads
