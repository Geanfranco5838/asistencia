function login() {
    document.getElementById("login").classList.remove("active");
    document.getElementById("dashboard").classList.add("active");
}

function goTo(screen) {
    const screens = document.querySelectorAll(".screen");
    screens.forEach(s => s.classList.remove("active"));
    document.getElementById(screen).classList.add("active");
}
