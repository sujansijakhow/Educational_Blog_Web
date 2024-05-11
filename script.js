
function validation() {
  var fullName = document.getElementById('fullName').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  var gender = document.querySelector('input[name="gender"]:checked');
  var contact = document.getElementById('contact').value;

  // Simple validation
  if (!fullName || !email || !message ||!gender || !contact) {
      alert('Please fill in all required fields.');
      event.preventDefault(); // Prevent form submission
  }
  else{
      alert("Your form has been submitted")
  }
};