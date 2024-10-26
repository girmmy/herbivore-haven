document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById("header");
    const footer = document.getElementById("footer");

    // Include header.html file
    fetch("./header.html")
        .then(response => response.text())
        .then(html => {
            header.innerHTML = html;
            
            // Dropdown functionality for the menu button
            const menuBtn = document.querySelector('.menu-btn');
            const dropdown = document.querySelector('.dropdown');
            
            menuBtn.addEventListener('click', () => {
                dropdown.classList.toggle('active');
            });
        })
        .catch(error => console.error('Error loading header:', error));

    // Including footer.html file on each page
    fetch("./footer.html")
        .then(response => response.text())
        .then(html => {
            footer.innerHTML = html;
        })
        .catch(error => console.error('Error loading footer:', error));
});
