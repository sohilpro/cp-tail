import "./profile";

const Modal = document.querySelector(".modal");
const showModal = document.querySelector(".show-modal");

const openModal = () => {
  Modal.classList.remove("hidden");
  Modal.classList.add("flex");
};
const closeModal = (event) => {
  if (event.target.closest(".inner-modal")) return;
  Modal.classList.add("hidden");
  Modal.classList.remove("flex");
};

showModal.addEventListener("click", openModal);
Modal.addEventListener("click", closeModal);
