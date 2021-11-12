import { galleryItems } from './gallery-items.js';
// Change code below this line



const galleryImages = document.querySelector('.gallery');
const murkupGallery = createGalleryImages(galleryItems);
galleryImages.insertAdjacentHTML('beforeend', murkupGallery);
galleryImages.addEventListener('click', onImageClick)


function createGalleryImages(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>`;
    }).join("");
}

function onImageClick(event) {
    event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
        return;
    }
    
    const instance = basicLightbox.create(`
    <div class="modal">
        <img src="${event.target.dataset.source}">
    </div>
    `)
    instance.show()
    const modal = document.querySelector('.modal');
    modal.addEventListener('click', () => instance.close())
    
}
    