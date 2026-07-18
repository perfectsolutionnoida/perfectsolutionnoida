// Mobile Menu Toggle Logic
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
});

// WhatsApp Booking Logic
function sendToWhatsApp(event) {
    event.preventDefault();
    
    const name = document.getElementById('customerName').value;
    const device = document.getElementById('deviceType').value;
    const issue = document.getElementById('issueDesc').value;
    
    // Official Business Number
    const waNumber = "919810207643";
    
    const waText = `Hello Perfect Solution! 👋%0A%0A*Customer Name:* ${name}%0A*Device:* ${device}%0A*Issue:* ${issue}%0A%0AI would like to book a repair service.`;
    
    window.open(`https://wa.me/${waNumber}?text=${waText}`, '_blank');
}

// SMOOTHER Premium Scroll Animations Initialization
document.addEventListener('DOMContentLoaded', () => {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,           // Increased duration for a more elegant, slower fade
            easing: 'ease-out-cubic', // Added custom easing for a buttery smooth glide-to-stop effect
            once: true,               // Whether animation should happen only once while scrolling down
            offset: 50,               // Triggers slightly earlier so it feels more natural
        });
    }
});