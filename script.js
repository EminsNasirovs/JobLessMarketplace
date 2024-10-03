const toggleButton = document.querySelector('.toggle-mode');
toggleButton.addEventListener('click', () => {
document.body.classList.toggle('dark-mode');
if (document.body.classList.contains('dark-mode')) {
    toggleButton.textContent = 'Light Mode';
} else {
    toggleButton.textContent = 'Dark Mode';
}
});
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }

  function togglePopup(popupId) {
    let popup = document.getElementById(popupId);
    popup.classList.add('active');  // Shows the popup by adding 'active' class
}

function closePopup(popupId) {
    let popup = document.getElementById(popupId);
    popup.classList.remove('active');  
}

const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
});
