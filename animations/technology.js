const wrappers = document.querySelectorAll('.tech-row-wrapper');

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation()  {
    wrappers.forEach(wrapper => {
        wrapper.setAttribute('data-animated', true);

        const innerWrapper = wrapper.querySelector('.tech-row');
        const scrollerContent = Array.from(innerWrapper.children);

        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute('aria-hidden', true);
            innerWrapper.appendChild(duplicatedItem);
        })
    });
}


