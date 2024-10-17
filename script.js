const toggleButtons = document.querySelectorAll('.toggle-mode');
toggleButtons.forEach((button) => {
  button.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode'); 
    if (document.body.classList.contains('dark-mode')) {
      button.textContent = 'Light Mode'; 
    } else {
      button.textContent = 'Dark Mode'; 
    }
  });
})

function myFunction() {
  const dropdowns = document.querySelectorAll(".dropdown-content");
  dropdowns.forEach(dropdown => {
      dropdown.classList.toggle("show");
  });
}

window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
      const dropdowns = document.querySelectorAll(".dropdown-content");
      dropdowns.forEach(dropdown => {
          if (dropdown.classList.contains('show')) {
              dropdown.classList.remove('show');
          }
      });
  }
}
  function togglePopup(popupId) {
    let popup = document.getElementById(popupId);
    popup.classList.add('active');  
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
