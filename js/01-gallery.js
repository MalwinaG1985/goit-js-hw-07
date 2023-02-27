import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = galleryItems;
const galleryList = document.querySelector('.gallery');

const newGallery = gallery.map(({ preview, original, description }) => {
    return `<a class="gallery__link" href="${original}">
    <img src = "${preview}"
    data-source = "${original}"
    alt = "${description}"
    class = "gallery__image" 
    />
    </a>`
}).join('');

galleryList.insertAdjacentHTML('beforeend', newGallery)
galleryList.addEventListener('click', urlImages)

function urlImages(e) {
    e.preventDefault();

    const url = e.target.dataset.source;
    if (!url) return;

    console.log(url);

    const instance = basicLightbox.create(
        `<img src = "${url}" width = "800" height = "600">`);

    instance.show(() => console.log('lightboxvisible'));
}

