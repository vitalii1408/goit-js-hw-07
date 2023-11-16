import { galleryItems } from './gallery-items.js';
document.addEventListener('DOMContentLoaded', () => {
	const galleryItems = [
	  { small: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
		large: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg'},  
		{
		small: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
		large: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg'},	  
	  { small: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
		large: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg'},	  
	  {small: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
		large: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg'},	  
	  {small: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
		large: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg'},
	  {small: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
	   large: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg'},
	  {small:'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
	   large: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg'
		},
	  {small: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
	   large: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg'},
	 {small: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
	  large: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg'} 
  ];
  const gallery = document.getElementById('gallery');
  function renderGallery(items) {
    const galleryMarkup = items.map(item => `
      <li class="gallery__item">
        <a class="gallery__link" href="${item.large}" onclick="openModal(event, '${item.large}')">
          <img
            class="gallery__image"
            src="${item.small}"
            data-source="${item.large}"
            alt="Image description"
          />
        </a>
      </li>
    `).join('');
   gallery.innerHTML = galleryMarkup;
  }
  renderGallery(galleryItems);
  function handleImageClick(event) {
    event.preventDefault();
    if (event.target.classList.contains('gallery__image')) {
      const source = event.target.getAttribute('data-source');
      openModal(source);
    }
  }
  gallery.addEventListener('click', handleImageClick);
  function openModal(source) {
    const instance = basicLightbox.create(`
      <img src="${source}" alt="Image description" />
    `, {
	onShow: (instance) => {document.addEventListener('keydown', closeModalOnEscape);},
	/*
	 * Function that gets executed before the lightbox closes.
	 * Returning false will prevent the lightbox from closing.
	 */
	onClose: (instance) => { document.removeEventListener('keydown', closeModalOnEscape);}
});
    instance.show();
    const closeModalOnEscape = (e) => {
      if (e.key === 'Escape') {
        instance.close();
      }
    };
  }
});
console.log(galleryItems);
