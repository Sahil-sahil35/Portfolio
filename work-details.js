document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const workId = parseInt(params.get('id'), 10);

    fetch('data.json')
        .then(res => res.json())
        .then(data => {
            const work = data.works && data.works[workId] ? data.works[workId] : null;

            if (!work) {
                document.querySelector('main').innerHTML = "<p class='text-center text-secondary'>Work not found.</p>";
                return;
            }

            loadWorkDetails(work);
        })
        .catch(err => {
            console.error("Error loading data.json", err);
            document.querySelector('main').innerHTML = "<p class='text-center text-secondary'>Error loading work details.</p>";
        });

    document.getElementById('currentYear').textContent = new Date().getFullYear();
});


function loadWorkDetails(work) {
    // Populate title, description, links
    document.getElementById('work-title').textContent = work.title;
    document.getElementById('work-description').textContent = work.description || "No description available.";
    document.getElementById('buy-link').setAttribute('href', work.buy || "#");
    document.getElementById('buy-link').setAttribute('target', '_blank');
    document.getElementById('buy-link').setAttribute('rel', 'noopener noreferrer');

    const viewLink = document.getElementById('view-link');
    viewLink.setAttribute('href', work.link || "#");
    viewLink.setAttribute('target', '_blank');
    viewLink.setAttribute('rel', 'noopener noreferrer');

    // Carousel images
    const carousel = document.getElementById('carousel-images');
    carousel.innerHTML = '';
    let currentIndex = 0;

    if (work.images && work.images.length > 0) {
        work.images.forEach((img, idx) => {
            const imgEl = document.createElement('img');
            imgEl.src = img;
            imgEl.className = `${idx === 0 ? '' : 'hidden'}`;
            imgEl.style.width = "100%";
            imgEl.style.height = "100%";
            imgEl.style.objectFit = "contain";

            carousel.appendChild(imgEl);
        });

        const imgs = carousel.querySelectorAll('img');
        document.getElementById('prev-btn').addEventListener('click', () => {
            imgs[currentIndex].classList.add('hidden');
            currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
            imgs[currentIndex].classList.remove('hidden');
        });
        document.getElementById('next-btn').addEventListener('click', () => {
            imgs[currentIndex].classList.add('hidden');
            currentIndex = (currentIndex + 1) % imgs.length;
            imgs[currentIndex].classList.remove('hidden');
        });
    }
}
