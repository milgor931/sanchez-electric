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

// Toggle the sidebar
const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("close-btn");

menuToggle.addEventListener("click", function() {
    sidebar.classList.add("open");
});

closeBtn.addEventListener("click", function() {
    sidebar.classList.remove("open");
});

