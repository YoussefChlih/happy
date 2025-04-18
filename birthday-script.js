document.addEventListener('DOMContentLoaded', function() {
    const celebrateButton = document.getElementById('celebrate-btn');
    const nameHighlight = document.querySelector('.name-highlight');
    
    // Simplified letter animation
    const text = nameHighlight.textContent;
    nameHighlight.innerHTML = '';
    
    for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i];
        span.className = 'letter';
        span.style.animationDelay = (i * 0.1) + 's';
        nameHighlight.appendChild(span);
    }
    
    // Simple initial effect
    setTimeout(function() {
        simpleConfetti();
    }, 1000);

    // Button click effect with reduced animations
    celebrateButton.addEventListener('click', function() {
        // Play effects with breaks between each to avoid performance issues
        simpleConfetti();
        
        setTimeout(function() {
            animateText();
        }, 500);
        
        setTimeout(function() {
            createSimpleHearts();
        }, 1000);
    });

    function simpleConfetti() {
        // Use simpler confetti configuration
        confetti({
            particleCount: 50,
            spread: 70,
            origin: { x: 0.5, y: 0.5 }
        });
    }

    function animateText() {
        // Simple text animations
        const message = document.querySelector('.message');
        const wishes = document.querySelector('.wishes');
        
        message.style.animation = 'bounce 2s';
        wishes.style.color = '#FF5050';
        
        // Simple button effect
        celebrateButton.textContent = "Happy Birthday Chaimae!";
        celebrateButton.style.backgroundColor = '#FFD700';
    }
    
    function createSimpleHearts() {
        // Create a small number of hearts for better performance
        for (let i = 0; i < 5; i++) {
            setTimeout(function() {
                createHeart();
            }, i * 300);
        }
    }
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.className = 'floating-heart';
        heart.style.left = (Math.random() * 90 + 5) + '%';
        heart.style.fontSize = (Math.random() * 10 + 15) + 'px';
        document.body.appendChild(heart);
        
        // Remove after animation to prevent memory issues
        setTimeout(function() {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 5000);
    }
    
    // Simple CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .letter {
            display: inline-block;
            opacity: 0;
            animation: fade-in 0.5s forwards;
        }
        
        .floating-heart {
            position: fixed;
            top: 100%;
            animation: float-up 5s linear forwards;
            z-index: 100;
            pointer-events: none;
        }
        
        @keyframes fade-in {
            to { opacity: 1; }
        }
        
        @keyframes float-up {
            to { top: -5%; }
        }
    `;
    document.head.appendChild(style);
});
