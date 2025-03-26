document.addEventListener("DOMContentLoaded", function() {
    let userName = localStorage.getItem("userName") || "Kamu";
    document.getElementById("sehatMessage").innerHTML = `
        ALHAMDULILLAH SEHAT <br>
        JAGA KESEHATAN, <br>
        JANGAN BANYAK BANYAK BEGADANG, <br>
        JANGAN KESERINGAN MAKAN YANG MANIS-MANIS DAN YANG ASIN-ASIN, <br>
        SOALNYA KALO GINJAL UDAH RUSAK NANTI RIBET HIDUP MU HARUS CUCI DARAH 2× DALAM SEM>
        INTINYA JAGA KESEHATAN KAMU YAAA ${userName.toUpperCase()}
    `;
});