document.addEventListener('DOMContentLoaded', function () {
    // --- Swiper: Alle Galerien ---
    document.querySelectorAll('.gallery-swiper').forEach(swiperEl => {
        const swiper = new Swiper(swiperEl, {
            slidesPerView: 1,
            loop: true,
            loopedSlides: swiperEl.querySelectorAll('.swiper-slide').length,
            spaceBetween: 10,
            lazy: { loadPrevNext: true },
            pagination: {
                el: swiperEl.querySelector('.swiper-pagination'),
                clickable: true
            },
            navigation: {
                nextEl: swiperEl.querySelector('.swiper-button-next'),
                prevEl: swiperEl.querySelector('.swiper-button-prev')
            },
            observer: true,
            observeParents: true
        });

        swiper.on('slideChange', () => {
            swiper.pagination.update();
            swiperEl.querySelectorAll('video').forEach(v => v.pause());
        });
    });

    // --- GLightbox: Bilder initialisieren ---
    document.querySelectorAll('.post-content img').forEach(img => {
        // nur Bilder ohne Parent <a> verlinken
        if (!img.parentElement.matches('a')) {
            const link = document.createElement('a');
            link.href = img.src; // falls du Hugo absURL nutzt: {{ . | absURL }}

            if (img.closest('.gallery-swiper')) {
                link.className = 'glightbox-gallery';
            } else {
                link.className = 'glightbox-single';
            }

            img.parentNode.insertBefore(link, img);
            link.appendChild(img);
        }
    });

    // Einzelbilder
    GLightbox({
        selector: '.glightbox-single',
        touchNavigation: true,
        loop: false
    });

    // Galerie-Bilder
    GLightbox({
        selector: '.glightbox-gallery',
        touchNavigation: true,
        loop: true
    });


    // --- Share Buttons ---
    document.querySelectorAll('.share-copy').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const originalText = btn.innerHTML;
            navigator.clipboard.writeText(window.location.href)
                .then(() => {
                    btn.innerHTML = '<span ><i class="fas fa-check"></i></span>';

                    setTimeout(() => { btn.innerHTML = originalText; }, 1500);
                })
                .catch(err => console.error('Failed to copy: ', err));
        });
    });

    document.querySelectorAll('.share-print').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            window.print();
        });
    });
});