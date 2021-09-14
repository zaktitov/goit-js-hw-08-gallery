import images from "../refs/app.js";
import objects from "../refs/dom.js";
// END OF IMPPORTED FILES ===========================================================================

const { list, lightbox, overlay, content, image, btn } = objects;
// console.log(list, lightbox, overlay, content, image, btn);

// create html element===========================================================================
function createItem(arr) {
  return arr
    .map((el) => {
      const { preview, original, description } = el;

      return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}

// insert html element in the list =================================================================
const markUp = createItem(images);
list.insertAdjacentHTML("afterbegin", markUp);

// // create Observer==================================================================================
// const options = {
//   root: content,
//   rootMargin: `0px`,
//   treshold: 1,
// };

// const observer = new IntersectionObserver(callback, options);
// function callback(entries) {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target
//     }
//   });
// }

// const items = [...list.children];
// console.log(items);
// items.forEach((item) => observer.observe(item));

// add eventListeners==================================================================================

list.addEventListener(`click`, openModal);
function openModal(e) {
  e.preventDefault();
  lightbox.classList.add(`is-open`);
  window.addEventListener(`keydown`, onEscClose);

  image.src = e.target.dataset.source;
  image.alt = e.target.alt;

  if (e.target === e.currentTarget) {
    onModalClose()
  }
}

btn.addEventListener(`click`, onModalClose);
function onModalClose(e) {
  lightbox.classList.remove(`is-open`);
  image.src = "";
  image.alt = "";
 
}

lightbox.addEventListener(`click`, onOverlayClose);
function onOverlayClose(e) {
  if (e.target.classList.contains(`lightbox__overlay`)) {
    lightbox.classList.remove(`is-open`);
  }
  
}

function onEscClose(e) {
  // const condition = e.code === `Escape`;
  if (e.code === `Escape`) {
    lightbox.classList.remove(`is-open`);
    window.removeEventListener(`keydown`, onEscClose);
  }
}



