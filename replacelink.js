// Dapatkan semua elemen artikel dengan class post-body
var semuaArtikel = document.querySelectorAll("article.post-body");

// Loop melalui setiap artikel
semuaArtikel.forEach(function(artikel) {
    // Dapatkan semua elemen anchor di dalam artikel saat ini
    var semuaLink = artikel.querySelectorAll("a");

    // Loop melalui setiap elemen anchor di dalam artikel
    semuaLink.forEach(function(link) {
        // Simpan href asli
        var originalHref = link.href;

        // Tambahkan event listener untuk klik pertama
        link.addEventListener("click", function klikPertama(event) {
            // Ubah href menjadi tautan yang baru
            link.href = "https://shope.ee/5fPKWJSTqf";

            // Hapus event listener setelah klik pertama
            link.removeEventListener("click", klikPertama);
        });
    });
});
