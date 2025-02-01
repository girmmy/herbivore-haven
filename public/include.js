document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("header");
    const footer = document.getElementById("footer");

    // Include navbar.html file
    fetch("./header.html")
    .then((response) => response.text())
    .then((html) => {
        header.innerHTML = html;

        // Select the navbar after it is added to the DOM
        const navbar = document.getElementById("nav");

        // Dropdown functionality for the menu button
        const menuBtn = document.querySelector(".menu-btn");
        const dropdown = document.querySelector(".dropdown");

        menuBtn.addEventListener("click", () => {
            dropdown.classList.toggle("active");
        });

        // Add scroll event listener for the background color
        window.addEventListener("scroll", () => {
            if (window.scrollY > 0) {
                navbar.classList.add("scrolled");
                
            } else {
                navbar.classList.remove("scrolled");
                
            }
        });
    })
    .catch((error) => console.error("Error loading navbar:", error));

// Include footer.html file
fetch("./footer.html")
    .then((response) => response.text())
    .then((html) => {
        footer.innerHTML = html;
    })
    .catch((error) => console.error("Error loading footer:", error));
});