function submitName() {
    let name = document.getElementById('nameInput').value.trim();
    if (name === '') {
        alert("Masukkan nama terlebih dahulu!");
    } else {
        localStorage.setItem("userName", name); // Simpan nama pengguna
        window.location.href = "heart.html"; // Arahkan ke halaman heart.html
    }
}