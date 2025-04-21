document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('.image-container');

    let index = 0;
    const timeInterval = 9000;

    const scrollToNext = () => {
        index++;

        if(index >= containers.length) {
            index = -1;
            clearInterval(slideInterval)
        }

        containers.forEach((container) => {
            container.style.transform = `translateX(-${index * 100}%)`;
        })
    };

    const slideInterval = setInterval(scrollToNext, timeInterval);
})
