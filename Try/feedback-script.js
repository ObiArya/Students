// Form submission handler
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const category = document.getElementById('category').value;
    const description = document.getElementById('description').value;
    const anonymous = document.getElementById('anonymous').checked;
    
    // Simple validation
    if (!category || !description.trim()) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Simulate submission (in a real app, send to server)
    alert('Thank you! Your feedback has been submitted anonymously.');
    
    // Reset form
    this.reset();
});

// Add visible class for animation
document.addEventListener('DOMContentLoaded', function() {
    const formSection = document.querySelector('.form-section');
    formSection.classList.add('visible');
});