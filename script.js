// Load the header and ensure that event listeners are added after it's loaded
document.addEventListener("DOMContentLoaded", function(){
  fetch('header.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Header file not found');
      }
      return response.text();
    })
    .then(data => {
      document.querySelector('header').innerHTML = data;

      // Add event listeners for dark mode toggle buttons AFTER the header is loaded
      const toggleButtons = document.querySelectorAll('.toggle-mode');
      toggleButtons.forEach((button) => {
        button.addEventListener("click", () => {
          console.log('Button clicked'); // Log when the button is clicked
          document.body.classList.toggle('dark-mode');
          if (document.body.classList.contains('dark-mode')) {
            button.textContent = 'Light Mode';
          } else {
            button.textContent = 'Dark Mode';
          }
        });
      });

      // Add event listeners for the hamburger menu AFTER the header is loaded
      const hamMenu = document.querySelector(".ham-menu");
      const offScreenMenu = document.querySelector(".off-screen-menu");

      if (hamMenu && offScreenMenu) {
        hamMenu.addEventListener("click", () => {
          hamMenu.classList.toggle("active");
          offScreenMenu.classList.toggle("active");
        });
      }
    })
    .catch(error => {
      console.error('Header not loaded', error);
    });
});

// Function for dropdowns
function myFunction() {
  const dropdowns = document.querySelectorAll(".dropdown-content");
  dropdowns.forEach(dropdown => {
      dropdown.classList.toggle("show");
  });
}

// Close the dropdown when clicking outside
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    const dropdowns = document.querySelectorAll(".dropdown-content");
    dropdowns.forEach(dropdown => {
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    });
  }
};

// Popup functions
function togglePopup(popupId) {
  let popup = document.getElementById(popupId);
  popup.classList.add('active');
}

function closePopup(popupId) {
  let popup = document.getElementById(popupId);
  popup.classList.remove('active');
}