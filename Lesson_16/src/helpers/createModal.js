import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basiclightbox.min.css';

import { closeModal } from './closeModal';
function createModal(product) {
//   const option = {
//     onShow() {
//       console.log(this);
//       document.addEventListener('keydown', closeModal);
//     },

//     onClose() {},
//   };

  const instance = basicLightbox.create(`
	<div class="modal">
    <img src="${product.img}" alt="${product.name}" width="200">
    <h2>${product.name}</h2>
    <h3>${product.price} грн</h3>
    <p>${product.description}</p>
    <div>
        <button class="js-favorite">Add to favorite</button>
        <button class="js-basket">Add to basket</button>
      </div>
</div>
`,{
    handler: null,
    onShow(instance) {
      this.handler = closeModal.bind(instance)
      document.addEventListener('keydown', this.handler);
    },

    onClose() {
        document.removeEventListener('keydown', this.handler);
    },
  });
  instance.show();
}



export { createModal };
