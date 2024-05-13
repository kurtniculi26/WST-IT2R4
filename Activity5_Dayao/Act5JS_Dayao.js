document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('toggle-panel');
  const closeButton = document.getElementById('toggle-close-panel');
  const panel = document.querySelector('.panel');
  const submitButton = document.querySelector('.submit-btn');

  // Toggle the panel when the toggle button is clicked
  button.addEventListener('click', function() {
    panel.classList.toggle('active');
  });

  // Close the panel when the close button is clicked
  closeButton.addEventListener('click', function() {
    panel.classList.remove('active');
  });

  // Display a message when the submit button is clicked
  submitButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    alert('Your inquiry has been successfully sent!'); // Display an alert message
    // You can add additional code here to handle form submission via AJAX, etc.
  });
});
