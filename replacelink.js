// Dapatkan semua elemen artikel dengan class post-body
var semuaArtikel = document.querySelectorAll("article.post-body");

// Loop melalui setiap artikel
semuaArtikel.forEach(function(artikel) {
    // Dapatkan semua elemen anchor di dalam artikel saat ini
    var semuaLink = artikel.querySelectorAll("a");

    // Loop melalui setiap elemen anchor di dalam artikel dan ubah atribut href
    semuaLink.forEach(function(link) {
        link.href = "https://shope.ee/5fPKWJSTqf";
    });
});
