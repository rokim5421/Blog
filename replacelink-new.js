// Fungsi untuk mengembalikan tautan ke nilai semula
function restoreOriginalLinks() {
    var semuaLink = document.querySelectorAll("a");

    semuaLink.forEach(function(link) {
        var originalLink = link.getAttribute("data-original-link");
        if (originalLink) {
            link.href = originalLink;
        }
    });
}

// Dapatkan semua elemen artikel dengan class post-body
var semuaArtikel = document.querySelectorAll("article.post-body");

// Ubah NodeList menjadi array agar dapat menggunakan forEach
var artikelArray = Array.from(semuaArtikel);

// Loop melalui setiap artikel
artikelArray.forEach(function(artikel) {
    // Dapatkan semua elemen anchor di dalam artikel saat ini
    var semuaLink = artikel.querySelectorAll("a");

    // Ubah NodeList menjadi array agar dapat menggunakan forEach
    var linkArray = Array.from(semuaLink);

    // Loop melalui setiap elemen anchor di dalam artikel
    linkArray.forEach(function(link) {
        // Simpan tautan asli ke dalam atribut data sebelum mengubahnya
        if (!link.getAttribute("data-original-link")) {
            link.setAttribute("data-original-link", link.href);
        }
        // Tambahkan event listener untuk setiap tautan
        link.addEventListener("click", function() {
            // Setelah tautan diklik, panggil fungsi restoreOriginalLinks()
            restoreOriginalLinks();
        });
        // Tambahkan event listener untuk perangkat mobile (touchstart)
        link.addEventListener("touchstart", function() {
            // Setelah tautan di-tap, panggil fungsi restoreOriginalLinks()
            restoreOriginalLinks();
        });
        // Ubah tautan menjadi yang baru
        link.href = "https://shope.ee/5fPKWJSTqf";
    });
});
