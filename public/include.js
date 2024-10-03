document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById("header");
    const footer = document.getElementById("footer");

    //including header.html file on each page
    fetch("header.html")
    .then(response => response.text())
    .then(html => {
        header.html = html;
    });

    //same thing but footer
    fetch("footer.html")
    .then(response => response.text())
    .then(html => {
        footer.innerHTML = html;
    })
})