import "./sale";

const ModalAccount = document.querySelector(".modal-account");
const ModalFactor = document.querySelector(".modal-factor");
const showModal = document.querySelector(".show-modal");
const showModalFactor = document.querySelector(".show-modal-factor");
const closeBtnModal = document.querySelectorAll("#close-modal");

const openModal = (element) => {
  element.classList.remove("hidden");
  element.classList.add("flex");
};

const closedModal = (element) => {
  element.classList.add("hidden");
  element.classList.remove("flex");
};

const closeModal = (event, element, innerClass) => {
  if (event.target.closest(innerClass)) return;
  element.classList.add("hidden");
  element.classList.remove("flex");
};

showModal.addEventListener("click", () => openModal(ModalAccount));
// showModalFactor.addEventListener("click", () => openModal(ModalFactor));
ModalAccount.addEventListener("click", (event) =>
  closeModal(event, ModalAccount, ".inner-modal-account")
);
// ModalFactor.addEventListener("click", (event) =>
//   closeModal(event, ModalFactor, ".inner-modal-factor")
// );

closeBtnModal.forEach((i) => {
  i.addEventListener("click", () => closedModal(ModalAccount));
  // i.addEventListener("click", () => closedModal(ModalFactor));
});