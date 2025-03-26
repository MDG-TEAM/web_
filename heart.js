setTimeout(() => {
    document.body.style.backgroundColor = "pink"; // Ubah warna latar belakang
    document.querySelector(".heart").style.display = "none"; // Sembunyikan hati

    const questionContainer = document.querySelector(".question-container");
    questionContainer.style.display = "flex";

    let userName = localStorage.getItem("userName") || "Kamu";
    document.getElementById("greeting").innerText = `Hai, ${userName} gimana hari ini, sehat?`;
}, 3000);

function response(answer) {
    if (answer === "sehat") {
        window.location.href = "sehat.html"; // Pindah ke halaman sehat
    } else {
        window.location.href = "sakit.html"; // Pindah ke halaman sakit
    }
}