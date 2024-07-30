// Function to save signup data to localStorage
function saveSignupData(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const userData = {
      name: name,
      email: email,
      password: password
    };
    
    localStorage.setItem('userData', JSON.stringify(userData));
    alert('Signup successful! You can now log in.');
    window.location.href = 'login.html';
  }
  
  // Function to handle login
  function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const storedUserData = JSON.parse(localStorage.getItem('userData'));
    
    if (storedUserData && storedUserData.email === email && storedUserData.password === password) {
      alert('Login successful!');
      localStorage.setItem('loggedInUser', storedUserData.name);
      window.location.href = 'cong.html';
    } else {
      alert('Invalid email or password. Please try again.');
    }
  }
  
  // Display welcome message on cong.html
  function displayWelcomeMessage() {
    const userName = localStorage.getItem('loggedInUser');
    if (userName) {
      const welcomeMessage = `Welcome, ${userName}!`;
      document.getElementById('welcome-message').textContent = welcomeMessage;
    }
  }
  
  // Event listeners for form submissions
  document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.querySelector('form[action="signup"]');
    const loginForm = document.querySelector('form[action="login"]');
    
    if (signupForm) {
      signupForm.addEventListener('submit', saveSignupData);
    }
    
    if (loginForm) {
      loginForm.addEventListener('submit', handleLogin);
    }
    
    if (window.location.pathname.endsWith('cong.html')) {
      displayWelcomeMessage();
    }
  });
  