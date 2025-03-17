document.addEventListener('DOMContentLoaded', () => {
    // Get elements
    const mainButtons = document.querySelectorAll('.main-btn');
    const formatOptions = document.querySelectorAll('.format-options');
    const formatButtons = document.querySelectorAll('.format-btn');
    const successMessage = document.querySelector('.success-message');
    
    // Add click event listeners to main buttons
    mainButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent event from bubbling up
            
            // Get the database name
            const databaseName = this.getAttribute('data-name');
            
            // Find the corresponding format options
            let targetFormatOptions;
            if (databaseName === 'Northwind') {
                targetFormatOptions = document.getElementById('northwind-formats');
            } else {
                targetFormatOptions = document.getElementById('extended-formats');
            }
            
            // Toggle format options visibility
            formatOptions.forEach(options => {
                if (options === targetFormatOptions) {
                    options.classList.toggle('show');
                } else {
                    options.classList.remove('show');
                }
            });
        });
    });
    
    // Add click event listeners to format buttons
    formatButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // We'll let the default action happen (following the href link)
            
            // Show download animation
            const indicator = this.querySelector('.indicator');
            indicator.style.width = '100%';
            
            // Get database name and format
            const databaseName = this.getAttribute('data-name');
            const format = this.getAttribute('data-format');
            
            // Show success message
            successMessage.textContent = `${databaseName} (.${format}) download started!`;
            successMessage.classList.add('show');
            
            // Reset the animation and hide success message after download starts
            setTimeout(() => {
                indicator.style.width = '0';
                
                // Hide the format options
                formatOptions.forEach(options => {
                    options.classList.remove('show');
                });
                
                setTimeout(() => {
                    successMessage.classList.remove('show');
                }, 2500);
            }, 500);
        });
    });
    
    // Close format options when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.button-group')) {
            formatOptions.forEach(options => {
                options.classList.remove('show');
            });
        }
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
