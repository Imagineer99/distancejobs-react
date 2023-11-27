// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }
  
  // Function to open the registration modal
  function openRegisterModal() {
    document.getElementById('registerModal').style.display = 'block';
  }
  
  // Function to close the registration modal
  function closeRegisterModal() {
    document.getElementById('registerModal').style.display = 'none';
  }
  
  // Function to handle form submission (you can modify this as needed)
  function submitRegistration() {
    // Add your logic here to handle form submission
    // For now, let's just close the modal
    closeRegisterModal();
  }
  