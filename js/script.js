document.addEventListener('DOMContentLoaded', () => {
    // Get elements
    const mainButtons = document.querySelectorAll('.main-btn');
    const formatOptions = document.querySelectorAll('.format-options');
    const formatButtons = document.querySelectorAll('.format-btn');
    const successMessage = document.querySelector('.success-message');
    
    // Function to handle download start
    const handleDownloadStart = (button, databaseName, format) => {
        // Add loading state
        button.classList.add('loading');
        
        // Show success message
        successMessage.textContent = `${databaseName} (.${format}) download started!`;
        successMessage.classList.add('show');
        
        // Remove loading state after 2 seconds
        setTimeout(() => {
            button.classList.remove('loading');
            
            // Hide the format options
            formatOptions.forEach(options => {
                options.classList.remove('show');
            });
            
            // Hide success message after 2.5 seconds
            setTimeout(() => {
                successMessage.classList.remove('show');
            }, 2500);
        }, 2000);
    };
    
    // Add click event listeners to main buttons
    mainButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // Get the database name
            const databaseName = this.getAttribute('data-name');
            
            // Find the corresponding format options
            const targetFormatOptions = document.getElementById('northwind-formats');
            
            // Toggle format options with animation
            formatOptions.forEach(options => {
                if (options === targetFormatOptions) {
                    if (options.classList.contains('show')) {
                        options.classList.remove('show');
                    } else {
                        // Hide other format options first
                        formatOptions.forEach(opt => {
                            if (opt !== options) {
                                opt.classList.remove('show');
                            }
                        });
                        // Show this format options after a small delay
                        setTimeout(() => {
                            options.classList.add('show');
                        }, 100);
                    }
                }
            });
        });
    });
    
    // Add click event listeners to format buttons
    formatButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Get database name and format
            const databaseName = this.getAttribute('data-name');
            const format = this.getAttribute('data-format');
            
            // Handle download start
            handleDownloadStart(this, databaseName, format);
        });
    });
    
    // Close format options when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.button-group')) {
            formatOptions.forEach(options => {
                if (options.classList.contains('show')) {
                    options.classList.remove('show');
                }
            });
        }
    });
});
