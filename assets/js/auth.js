document.addEventListener('DOMContentLoaded', function() {
    // Handle login form submission
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // In a real application, you would send this data to your server
            // For this example, we'll simulate a successful login
            console.log('Logging in with:', email, password);
            
            // Simple validation
            if (!email || !password) {
                alert('Please fill in all fields');
                return;
            }
            
            // Simulate server authentication
            simulateLogin(email, password);
        });
    }
    
    // Handle signup form submission
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            const termsAgreed = document.getElementById('terms').checked;
            
            // Simple validation
            if (!name || !email || !password || !confirmPassword) {
                alert('Please fill in all fields');
                return;
            }
            
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            
            if (!termsAgreed) {
                alert('You must agree to the Terms of Service and Privacy Policy');
                return;
            }
            
            // In a real application, you would send this data to your server
            console.log('Signing up with:', name, email, password);
            
            // Simulate account creation and redirect to preferences form
            simulateSignup(name, email, password);
        });
    }
    
    // Google button functionality
    const googleButtons = document.querySelectorAll('.btn-google');
    googleButtons.forEach(button => {
        button.addEventListener('click', function() {
            // In a real app, this would trigger OAuth with Google
            alert('Google authentication would be implemented with a proper backend.');
            
            // For demo purposes, simulate successful Google login
            setTimeout(() => {
                window.location.href = 'preferences-form.html';
            }, 1000);
        });
    });
    
    // Simulate backend authentication
    function simulateLogin(email, password) {
        // For demo purposes, we'll accept any login
        // In a real app, this would validate against a backend
        
        // Store user info in localStorage (not secure, just for demo)
        const user = {
            email: email,
            name: email.split('@')[0], // Extract name from email for demo
            loggedIn: true
        };
        
        localStorage.setItem('zestyUser', JSON.stringify(user));
        
        // Check if user has filled preferences before
        const hasPreferences = localStorage.getItem('zestyPreferences');
        
        if (hasPreferences) {
            // User already has preferences, go to dashboard
            window.location.href = 'dashboard.html';
        } else {
            // First time login, go to preferences form
            window.location.href = 'preferences-form.html';
        }
    }
    
    function simulateSignup(name, email, password) {
        // Store user info in localStorage (not secure, just for demo)
        const user = {
            name: name,
            email: email,
            loggedIn: true
        };
        
        localStorage.setItem('zestyUser', JSON.stringify(user));
        
        // Redirect to preferences form
        window.location.href = 'preferences-form.html';
    }
});