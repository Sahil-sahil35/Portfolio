// This function runs when the entire page is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Fetch the data from our JSON file
    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Once we have the data, we call functions to populate each section
            populatePersonalInfo(data.personalInfo);
            populateStats(data.stats);
            populateServices(data.services);
            populateWorks(data.works);
            populateExperience(data.experience);
            populateEducation(data.education);
            populateSkills(data.skills);
            populateTestimonials(data.testimonials);
            populateBlog(data.blog);
            populateSocials(data.personalInfo.socials);
        })
        .catch(error => console.error('Error loading portfolio data:', error));
});

// --- Population Functions ---

function populatePersonalInfo(info) {
    // Simple text replacement
    const heroGreeting = document.getElementById('hero-greeting');
    if (heroGreeting) heroGreeting.textContent = `I am ${info.name}`;
    
    const logoInitial = document.getElementById('logo-initial');
    if (logoInitial) logoInitial.textContent = info.logoInitial;
    
    const heroTitle = document.getElementById('hero-title');
    if (heroTitle) heroTitle.innerHTML = `${info.jobTitle1} <span class="text-secondary">+</span> <span class="gradient-text">${info.jobTitle2}</span>`;
    
    const heroDescription = document.getElementById('hero-description');
    if (heroDescription) heroDescription.textContent = info.description;
    
    // Contact info
    const contactEmail = document.getElementById('contact-email');
    if (contactEmail) contactEmail.textContent = info.contact.email;
    
    const contactPhone = document.getElementById('contact-phone');
    if (contactPhone) contactPhone.textContent = info.contact.phone;
    
    const contactLocation = document.getElementById('contact-location');
    if (contactLocation) contactLocation.textContent = info.contact.location;

    // Footer name
    const footerName = document.getElementById('footer-name');
    if (footerName) footerName.textContent = info.name;

    // Set hero image
    const heroImageContainer = document.getElementById('hero-image-container');
    if (heroImageContainer) {
        heroImageContainer.innerHTML = `<img src="${info.heroImage}" alt="${info.name}'s portrait" class="w-full h-full object-cover" onerror="this.style.display='none'; this.parentElement.style.background='linear-gradient(135deg, #8B5CF6, #6366F1)';">`;
    }
}

function populateStats(stats) {
    const container = document.getElementById('stats-container');
    if (!container) return;
    
    container.innerHTML = ''; // Clear existing
    stats.forEach(stat => {
        const statElement = document.createElement('span');
        statElement.className = 'text-tertiary text-sm';
        statElement.textContent = `${stat.value} ${stat.label}`;
        container.appendChild(statElement);
    });
}

function populateServices(services) {
    const container = document.getElementById('services-container');
    if (!container) return;
    
    container.innerHTML = ''; // Clear existing
    services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'card-hover bg-surface-dark rounded-2xl p-8 border border-light';
        serviceCard.innerHTML = `
            <div class="flex items-start justify-between">
                <span class="text-xs font-medium px-3 py-1 rounded-full bg-surface-light text-accent-from">${service.id}</span>
            </div>
            <h3 class="text-xl font-bold mt-6 mb-3">${service.title}</h3>
            <p class="text-secondary">${service.description}</p>
        `;
        container.appendChild(serviceCard);
    });
}

function populateWorks(works) {
    const container = document.getElementById('works-seq');
    if (!container) return;
    
    container.innerHTML = ''; // Clear existing
    works.forEach((work, originalIndex) => {
        if (originalIndex < 7) {
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
        } 
    });

    // Re-initialize the scroller script after adding the cards
    initializeWorkScroller(); 
}

function populateExperience(experience) {
    const container = document.getElementById('experience-container');
    if (!container) return;
    
    container.innerHTML = '';
    experience.forEach(exp => {
        const expItem = document.createElement('div');
        expItem.className = 'flex items-start space-x-4';
        expItem.innerHTML = `
            <div class="w-3 h-3 rounded-full gradient-bg mt-2 flex-shrink-0"></div>
            <div>
                <h3 class="font-bold text-lg">${exp.role}</h3>
                <p class="text-secondary">${exp.period}</p>
            </div>
        `;
        container.appendChild(expItem);
    });
}

function populateEducation(education) {
    const container = document.getElementById('education-container');
    if (!container) return;
    
    container.innerHTML = '';
    education.forEach(edu => {
        const eduItem = document.createElement('div');
        eduItem.className = 'flex items-start space-x-4';
        eduItem.innerHTML = `
            <div class="w-3 h-3 rounded-full gradient-bg mt-2 flex-shrink-0"></div>
            <div>
                <h3 class="font-bold text-lg">${edu.course}</h3>
                <p class="text-secondary">${edu.period}</p>
            </div>
        `;
        container.appendChild(eduItem);
    });
}

function populateSkills(skills) {
    const container = document.getElementById('skills-container');
    if (!container) return;
    
    container.innerHTML = '';
    skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'bg-surface-light rounded-xl p-4 text-center border border-light';
        skillItem.innerHTML = `<span class="font-medium">${skill}</span>`;
        container.appendChild(skillItem);
    });
}

function populateTestimonials(testimonials) {
    const container = document.getElementById('testimonials-container');
    if (!container) return;
    
    container.innerHTML = '';
    testimonials.forEach(testimonial => {
        const testimonialCard = document.createElement('div');
        testimonialCard.className = 'card-hover bg-surface-dark rounded-2xl p-8 border border-light';
        testimonialCard.innerHTML = `
            <div class="mb-6">
                <svg class="w-8 h-8 text-accent-from mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p class="text-secondary mb-6">"${testimonial.quote}"</p>
            </div>
            <div>
                <p class="font-bold">${testimonial.author}</p>
                <p class="text-tertiary text-sm">${testimonial.company}</p>
            </div>
        `;
        container.appendChild(testimonialCard);
    });
}

function populateBlog(blog) {
    const container = document.getElementById('blog-seq');
    if (!container) return;
    
    container.innerHTML = '';
    blog.forEach(article => {
        const blogCard = document.createElement('a');
        blogCard.href = article.link;
        blogCard.className = 'blog-card card-hover group rounded-2xl bg-surface-light border border-light overflow-hidden';
        blogCard.innerHTML = `
            <div class="relative h-48 bg-surface-dark bg-cover bg-center" style="background-image: url('${article.image}');" onerror="this.style.background='linear-gradient(135deg, #8B5CF6, #6366F1)';"></div>
            <div class="p-6">
                <h3 class="font-bold text-lg mb-2 group-hover:text-accent-from transition-colors">${article.title}</h3>
                <p class="text-secondary text-sm">${article.description}</p>
            </div>
        `;
        container.appendChild(blogCard);
    });

    // Re-initialize the blog scroller script after adding the cards
    initializeBlogScroller(); 
}

function populateSocials(socials) {
    const contactContainer = document.getElementById('socials-container-contact');
    const footerContainer = document.getElementById('socials-container-footer');

    const socialIcons = {
        twitter: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>`,
        linkedin: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
        instagram: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z"/></svg>`,
        github: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`
    };

    for (const platform in socials) {
        if (socials[platform] && socialIcons[platform]) {
            const link = document.createElement('a');
            link.href = socials[platform];
            link.className = 'w-10 h-10 rounded-full bg-surface-light border border-light flex items-center justify-center hover:border-accent-from transition-colors';
            link.innerHTML = socialIcons[platform];
            if (contactContainer) contactContainer.appendChild(link);

            const footerLink = document.createElement('a');
            footerLink.href = socials[platform];
            footerLink.className = 'text-tertiary hover:text-white transition-colors';
            footerLink.innerHTML = socialIcons[platform];
            if (footerContainer) footerContainer.appendChild(footerLink);
        }
    }
}

// Work scroller initialization function
function initializeWorkScroller() {
    const scroller = document.querySelector('.works-scroller');
    const track = scroller?.querySelector('.works-track');
    const seq = track?.querySelector('.works-seq');
    
    if (!scroller || !track || !seq || seq.childElementCount === 0) return;

    // Clear any old clones before re-initializing
    const clones = track.querySelectorAll('.clone');
    clones.forEach(c => c.remove());

    const clone = seq.cloneNode(true);
    clone.classList.add('clone');
    
    
    let gapValue = getComputedStyle(seq).gap || getComputedStyle(seq).columnGap || "2.5rem";
    clone.style.marginLeft = `calc(${gapValue} * 9)`;

    track.appendChild(clone);


    const pxPerSecond = 85;
    let gap = parseFloat(getComputedStyle(seq).columnGap || getComputedStyle(seq).gap);
    if (isNaN(gap)) gap = 0;
    const totalWidth = seq.scrollWidth + gap * (seq.childElementCount - 1);
    track.style.setProperty('--works-speed', (totalWidth / pxPerSecond) + 's');

    const cards = [...track.querySelectorAll('.works-card')];
    let animationFrameId;

    function updateCenterScaling() {
        const scrollerRect = scroller.getBoundingClientRect();
        const scrollerCenter = scrollerRect.left + scrollerRect.width / 2;

        cards.forEach(card => {
            const cardRect = card.getBoundingClientRect();
            const cardCenter = cardRect.left + cardRect.width / 2;
            const distanceFromCenter = Math.abs(cardCenter - scrollerCenter);
            const maxDistance = scrollerRect.width / 2 + cardRect.width / 2;
            const normalizedDistance = Math.min(distanceFromCenter / maxDistance, 1);
            
            if (normalizedDistance < 0.3) {
                card.classList.add('is-center');
            } else {
                card.classList.remove('is-center');
            }
        });
        
        animationFrameId = requestAnimationFrame(updateCenterScaling);
    }
    
    // Cancel any existing animation frame before starting a new one
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }
    updateCenterScaling();
}

// Blog scroller initialization function
function initializeBlogScroller() {
    const scroller = document.querySelector('.blog-scroller');
    const track = scroller?.querySelector('.blog-track');
    const seq = track?.querySelector('.blog-seq');
    
    if (!scroller || !track || !seq || seq.childElementCount === 0) return;

    // Clear any old clones before re-initializing
    const clones = track.querySelectorAll('.clone');
    clones.forEach(c => c.remove());

    const clone = seq.cloneNode(true);
    clone.classList.add('clone');
    
    
    let gapValue = getComputedStyle(seq).gap || getComputedStyle(seq).columnGap || "2.5rem";
    clone.style.marginLeft = `calc(${gapValue} * 3)`;

    track.appendChild(clone);

    const pxPerSecond = 85;
    let gap = parseFloat(getComputedStyle(seq).columnGap || getComputedStyle(seq).gap);
    if (isNaN(gap)) gap = 0;
    const totalWidth = seq.scrollWidth + gap * (seq.childElementCount - 1);    track.style.setProperty('--blog-speed', (totalWidth / pxPerSecond) + 's');
    const cards = [...track.querySelectorAll('.blog-card')];
    let animationFrameId;

    function updateCenterScaling() {
        const scrollerRect = scroller.getBoundingClientRect();
        const scrollerCenter = scrollerRect.left + scrollerRect.width / 2;

        cards.forEach(card => {
            const cardRect = card.getBoundingClientRect();
            const cardCenter = cardRect.left + cardRect.width / 2;
            const distanceFromCenter = Math.abs(cardCenter - scrollerCenter);
            const maxDistance = scrollerRect.width / 2 + cardRect.width / 2;
            const normalizedDistance = Math.min(distanceFromCenter / maxDistance, 1);
            
            if (normalizedDistance < 0.3) {
                card.classList.add('is-center');
            } else {
                card.classList.remove('is-center');
            }
        });
        
        animationFrameId = requestAnimationFrame(updateCenterScaling);
    }
    
    // Cancel any existing animation frame before starting a new one
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }
    updateCenterScaling();
}

