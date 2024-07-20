import "./profile";

const modal = document.querySelector(".modal");
const showModal = document.querySelector(".show-modal");
// const modalSearch = document.querySelector(".modal-search");
// const showModalSearch = document.querySelector(".show-modal-search");
// const modalFilter = document.querySelector(".modal-filter");
// const showModalFilter = document.querySelector(".show-modal-filter");

const openModal = (element) => {
  element.classList.remove("hidden");
  element.classList.add("flex");
};

const closeModal = (event, element, innerClass) => {
  if (event.target.closest(innerClass)) return;
  element.classList.add("hidden");
  element.classList.remove("flex");
};

showModal.addEventListener("click", () => openModal(modal));
modal.addEventListener("click", (event) =>
  closeModal(event, modal, ".inner-modal")
);

// showModalSearch.addEventListener("click", () => openModal(modalSearch));
// modalSearch.addEventListener("click", (event) => closeModal(event, modalSearch, ".inner-modal-search"));

// showModalFilter.addEventListener("click", () => openModal(modalFilter));
// modalFilter.addEventListener("click", (event) => closeModal(event, modalFilter, ".inner-modal-filter"));
