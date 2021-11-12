import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryImages = document.querySelector('.gallery');
const murkupGallery = createGalleryImages(galleryItems);
galleryImages.insertAdjacentHTML('beforeend', murkupGallery);
galleryImages.addEventListener('click', onImageClick)


function createGalleryImages(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}"/>
        </a>
    `;
    }).join("");
}

function onImageClick(event) {
    event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
        return;
    }
    
   var lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt',captionDelay: 250,});
}
