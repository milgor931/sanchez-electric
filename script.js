document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simulate sending the form data
    alert(`Message from ${name} (Email: ${email})\nMessage: ${message}`);

    // Reset the form
    document.getElementById("contact-form").reset();
});

document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const menuToggle = document.getElementById("menu-toggle");

    // Function to open sidebar
    menuToggle.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent click from being immediately registered on the document
        sidebar.classList.add("open");
    });

    // Close sidebar when clicking outside of it
    document.addEventListener("click", function (event) {
        if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
            sidebar.classList.remove("open");
        }
    });

    // Prevent clicks inside the sidebar from closing it
    sidebar.addEventListener("click", function (event) {
        event.stopPropagation();
    });
});


