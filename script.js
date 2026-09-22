// Get all input fields
const inputs = document.querySelectorAll('input, textarea, select');

// Add focus and blur event listeners
inputs.forEach(input => {
    input.addEventListener('focus', function() {
        document.body.classList.add('input-active');
    });
    
    input.addEventListener('blur', function() {
        document.body.classList.remove('input-active');
    });
});

