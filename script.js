document.addEventListener('DOMContentLoaded', () => {
    // Get all download buttons
    const downloadButtons = document.querySelectorAll('.download-btn');
    const successMessage = document.querySelector('.success-message');
    
    // Add click event listeners to each button
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Don't prevent default as we want the download to happen
            
            // Show download animation
            const indicator = this.querySelector('.indicator');
            indicator.style.width = '100%';
            
            // Show success message with the database name
            const databaseName = this.getAttribute('data-name');
            successMessage.textContent = `${databaseName} download started!`;
            successMessage.classList.add('show');
            
            // Reset the animation and hide success message after download starts
            setTimeout(() => {
                indicator.style.width = '0';
                setTimeout(() => {
                    successMessage.classList.remove('show');
                }, 2500);
            }, 500);
        });
    });
    
    // Theme toggle functionality (light/dark mode)
    const themeToggle = document.getElementById('theme-toggle');
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            
            // Save theme preference
            const isDarkTheme = document.body.classList.contains('dark-theme');
            localStorage.setItem('dark-theme', isDarkTheme);
            
            // Update toggle text
            themeToggle.textContent = isDarkTheme ? '☀️ Light Mode' : '🌙 Dark Mode';
        });
        
        // Set dark theme as default
        localStorage.setItem('dark-theme', 'true');
    }
});
