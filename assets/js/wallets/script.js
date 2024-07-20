import "./profile";
const toggleModalVisibility = (modal, show) => {
  if (show) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  } else {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
};

const setupModal = (modalSelector, triggerSelector, innerModalSelector) => {
  const modal = document.querySelector(modalSelector);
  const trigger = document.querySelector(triggerSelector);

  const openModal = () => toggleModalVisibility(modal, true);
  const closeModal = (event) => {
    if (event.target.closest(innerModalSelector)) return;
    toggleModalVisibility(modal, false);
  };

  trigger.addEventListener("click", openModal);
  modal.addEventListener("click", closeModal);
};

setupModal(".modal", ".show-modal", ".inner-modal");
setupModal(".modal-withdraw", ".show-modal-withdraw", ".inner-modal-withdraw");