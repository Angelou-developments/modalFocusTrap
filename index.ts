import ModalFocusTrap from './classes/ModalFocusTrap';

/*
  ModalFocusTrap
*/

const ModalContainers = document.querySelectorAll('.js-popup-modal');

if (ModalContainers) {
  ModalContainers.forEach((ModalContainer: HTMLElement) => {
    new ModalFocusTrap(ModalContainer);
  })
}