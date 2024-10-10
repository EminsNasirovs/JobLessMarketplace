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
    document.getElementById("myDropdown").classList.toggle("show");
  }
  

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
