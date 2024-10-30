document.addEventListener("DOMContentLoaded", () => {
const body = document.body;
body.classList.add("fade-in");

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetUrl = link.href;
    body.classList.remove("fade-in");
    body.classList.add("fade-out");

    setTimeout(() => {
        window.location.href = targetUrl;
    }, 500); // Match with fade-out animation duration
    });
});
});