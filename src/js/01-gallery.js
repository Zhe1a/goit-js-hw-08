
import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const galleryRefs  = document.querySelector('.gallery');

const img = gallery(galleryItems);

function gallery(params) {
    return params.map(({preview, description, original})=>
    `<li><a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    </li>`
  ).join(" ")};


  galleryRefs.insertAdjacentHTML("beforeend",img);
new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

