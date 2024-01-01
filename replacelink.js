// Dapatkan semua elemen artikel dengan class post-body
var semuaArtikel = document.querySelectorAll("article.post-body");

// Loop melalui setiap artikel
semuaArtikel.forEach(function(artikel) {
    // Dapatkan semua elemen anchor di dalam artikel saat ini
    var semuaLink = artikel.querySelectorAll("a");

    // Loop melalui setiap elemen anchor di dalam artikel
    semuaLink.forEach(function(link) {
        // Simpan href asli ke dalam atribut data
        link.setAttribute("data-original-href", link.href);

        // Tambahkan event listener untuk klik
        link.addEventListener("click", function(event) {
            // Ambil href asli dari atribut data
            var originalHref = link.getAttribute("data-original-href");

            // Ubah href menjadi tautan yang baru
            link.href = "https://shope.ee/5fPKWJSTqf";

            // Atur timeout untuk mengembalikan href setelah 1 detik
            setTimeout(function() {
                link.href = originalHref;
            }, 1000);

            // Hentikan perilaku default dari tautan
            event.preventDefault();
        });
    });
});
