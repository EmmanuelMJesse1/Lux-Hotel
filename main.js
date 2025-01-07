// Modal functionality
const modals = {
    foods: document.getElementById('foodsModal'),
    drinks: document.getElementById('drinksModal'),
    rooms: document.getElementById('roomsModal')
};

// Add click events for opening modals
Object.keys(modals).forEach(key => {
    document.getElementById(`${key}Link`).addEventListener('click', () => {
        modals[key].style.display = 'block';
    });
});

// Add click events for closing modals
document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.target.closest('.modal').style.display = 'none';
    });
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    Object.values(modals).forEach(modal => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Image slider
const sliderImages = [
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
    'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b',
    'https://images.unsplash.com/photo-1611892440504-42a792e24d32',
    'https://images.unsplash.com/photo-1473093295043-cdd812d0e601',
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
    'https://images.unsplash.com/photo-1590490360182-c33d57733427'
];

const slider = document.querySelector('.slider');

// Create initial slider images
function createSliderImages() {
    sliderImages.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Hotel Image';
        slider.appendChild(img);
    });
    
    // Clone first few images and append to end for smooth infinite scroll
    for (let i = 0; i < 3; i++) {
        const img = document.createElement('img');
        img.src = sliderImages[i];
        img.alt = 'Hotel Image';
        slider.appendChild(img);
    }
}

createSliderImages();

// Automatic slider animation
let scrollPosition = 0;
const scrollSpeed = 1;

function autoScroll() {
    scrollPosition -= scrollSpeed;
    slider.style.transform = `translateX(${scrollPosition}px)`;

    // Reset position when reaching end
    if (Math.abs(scrollPosition) >= (sliderImages.length * 300)) {
        scrollPosition = 0;
    }

    requestAnimationFrame(autoScroll);
}

autoScroll();