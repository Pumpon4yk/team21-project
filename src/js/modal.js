(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-p]"),
    openModalBtnP: document.querySelector("[data-modal-open-pp]"),
    openModalBtnPP: document.querySelector("[data-modal-open-ppp]"),
    closeModalBtn: document.querySelector("[data-modal-close-p]"),
    modal: document.querySelector("[data-modal-p]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.openModalBtnP.addEventListener("click", toggleModal);
  refs.openModalBtnPP.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
