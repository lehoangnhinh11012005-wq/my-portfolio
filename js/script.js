document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio đã load xong!');

    const fadeElements = document.querySelectorAll('.fade-in');

    const showOnScroll = () => {
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect().top;
            if (rect < window.innerHeight - 100) {
                el.classList.add('show');
            }
        });
    };

    window.addEventListener('scroll', showOnScroll);
    showOnScroll();
});
