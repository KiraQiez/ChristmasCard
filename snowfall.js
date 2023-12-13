function toggleSnow() {
    const snowfall = document.getElementById('snowfall');

    // Toggle the 'active' class on the snowfall container
    snowfall.classList.toggle('active');

    if (snowfall.classList.contains('active')) {
        // Add snowflakes dynamically
        for (let i = 0; i < 50; i++) {
            createSnowflake();
        }
    } else {
        // Remove existing snowflakes
        const existingSnowflakes = document.querySelectorAll('.snowflake');
        existingSnowflakes.forEach(snowflake => snowflake.remove());
    }
}

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    
    const size = Math.random() * 5;
    const duration = Math.random() * 2 + 3;

    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.animationDuration = `${duration}s`;

    const startPosition = Math.random() * window.innerWidth;
    snowflake.style.left = `${startPosition}px`;

    snowflake.addEventListener('animationiteration', () => {
        // Reset the snowflake to the top when it reaches the bottom
        snowflake.style.top = '-10px';
        snowflake.style.left = `${Math.random() * window.innerWidth}px`;
    });

    document.getElementById('snowfall').appendChild(snowflake);
}


