import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = galleryItems;
const galleryList = document.querySelector('.gallery');


const newGallery = gallery.map(({preview, original, description}) => {
    return `<a class="gallery__item" href="${original}">
  <img  src="${preview}" 
  alt="${description}" 
  class="gallery__image" 
  />
</a>`
}).join('');

galleryList.insertAdjacentHTML('beforeend', newGallery);

const lighbox = new SimpleLightbox('.gallery a', { 'captionsData': 'alt', 'captionDelay': '250' });
lighbox.on('show.SimpleLightbox');
