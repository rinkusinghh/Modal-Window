'use strict';
const openModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const openModalBtn = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
for (let i = 0; i < openModal.length; i++) {
  openModal[i].addEventListener('click', openModalBtn);
}

const closeModalBtn = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

closeModal.addEventListener('click', closeModalBtn);
overlay.addEventListener('click', closeModalBtn);

// Enter escape key to hide popup window!
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModalBtn();
  }
});
