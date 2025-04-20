
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const hostcode = document.getElementById("hostcode").value.trim();
    const message = document.getElementById("message");

    if (username && hostcode === "Joy_manna") {
        localStorage.setItem("username", username);
        window.location.href = "dashboard.html";
    } else {
        message.textContent = "Invalid hostcode or missing input.";
        message.style.color = "red";
    }
});
