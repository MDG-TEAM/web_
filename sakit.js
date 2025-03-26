document.addEventListener("DOMContentLoaded", function() {
    let userName = localStorage.getItem("userName") || "Kamu";
    document.getElementById("sakitMessage").innerHTML = `
        KALO LAGI SAKIT DI MINUM YAAA OBAT NYA, SEBELUM MINUM OBAT MAKAN DULU,
        JANGAN BEGADANG DULU SOALNYA LAGI SAKIT, PERBANYAK ISTIRAHAT DAN TIDUR,
        JANGAN BANYAK AKTIVITAS YANG BERAT BERAT BIAR TUBUH BISA ISTIRAHAT,
        SEMOGA CEPAT SEMBUH YAAAA ${userName.toUpperCase()}
    `;
});