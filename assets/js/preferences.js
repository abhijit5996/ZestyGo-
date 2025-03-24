document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    const userStr = localStorage.getItem('zestyUser');
    if (!userStr) {
        // If not logged in, redirect to login page
        window.location.href = 'login.html';
        return;
    }
    
    // Elements
    const form = document.getElementById('preferences-form');
    const steps = document.querySelectorAll('.form-step');
    const progressSteps = document.querySelectorAll('.progress-step');
    const nextButtons = document.querySelectorAll('.next-btn');
    const prevButtons = document.querySelectorAll('.prev-btn');
    
    let currentStep = 0;
    
    // Function to show current step
    function showStep(stepIndex) {
        steps.forEach((step, index) => {
            step.classList.toggle('active', index === stepIndex);
        });
        
        progressSteps.forEach((progressStep, index) => {
            progressStep.classList.toggle('active', index === stepIndex);
            progressStep.classList.toggle('completed', index < stepIndex);
        });
        
        currentStep = stepIndex;
    }
    
    // Next button click event
    nextButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Validate current step (you can expand this validation)
            if (validateStep(currentStep)) {
                showStep(currentStep + 1);
            }
        });
    });
    
    // Previous button click event
    prevButtons.forEach(button => {
        button.addEventListener('click', () => {
            showStep(currentStep - 1);
        });
    });
    
    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateStep(currentStep)) {
            // Collect all form data
            const preferences = {
                diets: [],
                allergies: [],
                healthConcerns: document.getElementById('health-concerns').value,
                cuisines: []
            };
            
            // Collect diet preferences
            document.querySelectorAll('input[name="diet"]:checked').forEach(checkbox => {
                preferences.diets.push(checkbox.value);
            });
            
            // Collect allergies
            document.querySelectorAll('input[name="allergies"]:checked').forEach(checkbox => {
                preferences.allergies.push(checkbox.value);
            });
            
            // Collect cuisine preferences
            document.querySelectorAll('input[name="cuisine"]:checked').forEach(checkbox => {
                preferences.cuisines.push(checkbox.value);
            });
            
            // Save preferences to localStorage (in a real app, send to server)
            localStorage.setItem('zestyPreferences', JSON.stringify(preferences));
            
            // Show success message or redirect
            alert('Your preferences have been saved! Redirecting to your personalized dashboard.');
            window.location.href = 'dashboard.html';
        }
    });
    
    // Basic validation for each step
    function validateStep(step) {
        switch(step) {
            case 0: // Dietary preferences
                // No required validation, but you could add some if needed
                return true;
            case 1: // Health concerns
                // No required validation
                return true;
            case 2: // Cuisines
                const selectedCuisines = document.querySelectorAll('input[name="cuisine"]:checked');
                if (selectedCuisines.length === 0) {
                    alert('Please select at least one cuisine you enjoy.');
                    return false;
                }
                return true;
            default:
                return true;
        }
    }
    
    // Special case for diet checkboxes (ensuring "No specific diet" works correctly)
    const dietCheckboxes = document.querySelectorAll('input[name="diet"]');
    const noDietCheckbox = document.getElementById('none');
    
    dietCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (this.id === 'none' && this.checked) {
                // If "No specific diet" is checked, uncheck others
                dietCheckboxes.forEach(cb => {
                    if (cb.id !== 'none') {
                        cb.checked = false;
                    }
                });
            } else if (this.id !== 'none' && this.checked) {
                // If any other diet is checked, uncheck "No specific diet"
                noDietCheckbox.checked = false;
            }
        });
    });
});