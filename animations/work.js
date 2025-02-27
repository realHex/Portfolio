console.log('Work JS file loaded');

// Execute initialization both on DOMContentLoaded and immediately
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded fired, initializing work cards...');
    setTimeout(initializeWorkCards, 100); // Short delay to ensure DOM is ready
});

// Also try initializing immediately in case the DOM is already loaded
setTimeout(initializeWorkCards, 100);

function initializeWorkCards() {
    console.log('Attempting to initialize work cards...');
    
    // Direct DOM element selection
    const workCards = document.querySelectorAll('.work-card');
    const backButtons = document.querySelectorAll('.back-btn');
    const workCardsContainer = document.querySelector('.work-cards');
    const youtubeDetails = document.querySelector('.youtube-details');
    const middlemanDetails = document.querySelector('.middleman-details');
    
    console.log(`Elements found: 
        - Work cards: ${workCards.length}
        - Back buttons: ${backButtons.length}
        - Cards container: ${workCardsContainer ? 'Yes' : 'No'}
        - YouTube details: ${youtubeDetails ? 'Yes' : 'No'}
        - Middleman details: ${middlemanDetails ? 'Yes' : 'No'}`);
    
    if (!workCards.length || !backButtons.length || !workCardsContainer) {
        console.warn('Some elements not found, retrying in 300ms...');
        setTimeout(initializeWorkCards, 300);
        return;
    }
    
    // Manually set up click handlers for each specific card
    const youtubeCard = document.querySelector('.work-card[data-target="youtube"]');
    const middlemanCard = document.querySelector('.work-card[data-target="middleman"]');
    
    if (youtubeCard) {
        console.log('Setting up YouTube card click handler');
        youtubeCard.onclick = function() {
            console.log('YouTube card clicked');
            workCardsContainer.classList.add('hidden');
            
            // Hide all details first
            document.querySelectorAll('.work-details').forEach(d => d.classList.add('hidden'));
            
            // Show YouTube details
            if (youtubeDetails) {
                youtubeDetails.classList.remove('hidden');
            }
        };
    }
    
    if (middlemanCard) {
        console.log('Setting up Middleman card click handler');
        middlemanCard.onclick = function() {
            console.log('Middleman card clicked');
            workCardsContainer.classList.add('hidden');
            
            // Hide all details first
            document.querySelectorAll('.work-details').forEach(d => d.classList.add('hidden'));
            
            // Show Middleman details
            if (middlemanDetails) {
                middlemanDetails.classList.remove('hidden');
            }
        };
    }
    
    // Set up back buttons
    backButtons.forEach(button => {
        console.log('Setting up back button handler');
        button.onclick = function() {
            console.log('Back button clicked');
            
            // Hide all details
            document.querySelectorAll('.work-details').forEach(d => d.classList.add('hidden'));
            
            // Show cards container
            workCardsContainer.classList.remove('hidden');
        };
    });
    
    console.log('Work cards initialization complete');
    
    // Add toggle functionality for the Middleman Simplified image
    const toggleSimplifiedBtn = document.getElementById('toggle-simplified');
    const simplifiedImageContainer = document.getElementById('simplified-image-container');
    
    if (toggleSimplifiedBtn && simplifiedImageContainer) {
        console.log('Setting up toggle button for Middleman Simplified image');
        toggleSimplifiedBtn.addEventListener('click', function() {
            const isHidden = simplifiedImageContainer.classList.contains('hidden');
            
            if (isHidden) {
                simplifiedImageContainer.classList.remove('hidden');
                toggleSimplifiedBtn.textContent = 'Hide Middleman Simplified';
            } else {
                simplifiedImageContainer.classList.add('hidden');
                toggleSimplifiedBtn.textContent = 'Show Middleman Simplified';
            }
        });
    }
}

// Ensure CSS is properly applied
document.addEventListener('DOMContentLoaded', () => {
    // Check if the hidden class is working properly
    const style = document.createElement('style');
    style.textContent = `
        .hidden { 
            display: none !important;
        }
    `;
    document.head.appendChild(style);
    console.log('Added important display:none to .hidden class');
});
