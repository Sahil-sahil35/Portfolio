document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(res => res.json())
        .then(data => {
            populateAllWorks(data.works);
        })
        .catch(err => console.error('Error loading works:', err));

    document.getElementById('currentYear').textContent = new Date().getFullYear();
});

function populateAllWorks(works) {
    const container = document.getElementById('all-works-container');
    container.innerHTML = '';

        works.forEach((work, originalIndex) => {
        const workCard = document.createElement('a');
        workCard.href = "work-details.html?id=" + originalIndex;
        workCard.className = 'works-card card-hover group rounded-2xl bg-surface-light border border-light overflow-hidden';
        workCard.innerHTML = `
            <div class="relative h-60 bg-surface-dark bg-cover bg-center" style="background-image: url('${work.image}');">
                <span class="absolute top-4 left-4 text-xs font-medium px-3 py-1 rounded-full bg-surface-dark text-white">${work.category}</span>
            </div>
            <div class="p-6 flex items-center justify-between">
                <h3 class="font-bold text-lg">${work.title}</h3>
                <span class="arrow-hover">
                    <svg class="arrow w-5 h-5 text-tertiary group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                    </svg>
                </span>
            </div>
        `;
        container.appendChild(workCard);
    });
}
