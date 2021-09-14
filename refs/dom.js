export default {
  list: document.querySelector(`.gallery`),
  lightbox: document.querySelector(`.lightbox`),
  overlay: document.querySelector(`.lightbox__overlay`),
  content: document.querySelector(`.lightbox__content`),
  image: document.querySelector(`.lightbox__image`),
  btn: document.querySelector(`button[data-action="close-lightbox"]`),
};
