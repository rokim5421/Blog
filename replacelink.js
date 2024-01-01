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
            // Ubah href menjadi tautan yang baru
            link.href = "https://shope.ee/5fPKWJSTqf";

            // Atur interval untuk memeriksa perubahan tab setiap 100ms
            var checkTab = setInterval(function() {
                if (document.hidden) {
                    // Jika tab tidak aktif, kembalikan href ke aslinya
                    link.href = link.getAttribute("data-original-href");
                    clearInterval(checkTab); // Hentikan pengecekan
                }
            }, 100);

            // Buka tautan dalam tab baru
            link.target = "_blank";
        });
    });
});
