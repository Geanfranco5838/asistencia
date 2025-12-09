function login() {
    document.getElementById("login").classList.remove("active");
    document.getElementById("dashboard").classList.add("active");
}

function goTo(screen) {
    const screens = document.querySelectorAll(".screen");
    screens.forEach(s => s.classList.remove("active"));
    document.getElementById(screen).classList.add("active");
}
// Renderizar gráfico de asistencia
document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("chartAsistencia");

    if (ctx) {
        new Chart(ctx, {
            type: "bar",
            data: {
                labels: ["Lun", "Mar", "Mié", "Jue", "Vie"],
                datasets: [{
                    label: "Asistencias",
                    data: [28, 30, 31, 29, 32],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: { legend: { display: false } }
            }
        });
    }
});

