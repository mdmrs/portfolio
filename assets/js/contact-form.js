// C:\Users\HP\Downloads\portfolio\assets\js\contact-form.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const confirmationMessage = document.getElementById('confirmationMessage');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission
  
      if (form.checkValidity()) { // Client-side validation
        // Simulate successful email sending (replace with actual backend integration)
        console.log('Form submitted successfully (client-side validation passed)');
  
        // Hide form and show confirmation message
        form.style.display = 'none';
        confirmationMessage.style.display = 'block';
  
        // In a real application, you would use AJAX (fetch or XMLHttpRequest)
        // to send the form data to your server-side email sending script here.
        // Example (Placeholder - Replace with your actual backend endpoint):
        /*
        fetch('/api/send-email', { // Replace '/api/send-email' with your backend endpoint
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: document.getElementById('name').value,
            company: document.getElementById('company').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            hearAboutUs: document.getElementById('hearAboutUs').value,
            help: document.getElementById('help').value
          })
        })
        .then(response => {
          if (response.ok) {
            // Email sent successfully on server-side
            form.style.display = 'none';
            confirmationMessage.style.display = 'block';
          } else {
            // Handle server-side error (e.g., show error message to user)
            console.error('Server-side error sending email');
            alert('Error sending message. Please try again later.');
          }
        })
        .catch(error => {
          // Handle network error
          console.error('Network error:', error);
          alert('Network error. Please check your connection and try again.');
        });
        */
  
      } else {
        // Form validation failed, browser will show default error messages
        console.log('Form validation failed');
      }
    });
  });