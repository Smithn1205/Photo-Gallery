const gallery = document.querySelectorAll('.gallery a');
const lightbox = document.getElementById('lightbox');
const lightboxContent = document.getElementById('lightbox-content');
const closeButton = document.getElementById('close-button');

gallery.forEach(thumbnail => {
    thumbnail.addEventListener('click', function (e) {
        e.preventDefault();
        const imgPath = this.getAttribute('href');
        lightboxContent.setAttribute('src', imgPath);
        lightbox.style.display = 'block';
    });
});

closeButton.addEventListener('click', function () {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});
