let tabs = document.querySelectorAll("#tabs div");
let tabsArray = Array.from(tabs);
let divs = document.querySelectorAll("#content > div");
let divsArray = Array.from(divs);

tabsArray.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    // Remove 'active' class from all tabs
    tabsArray.forEach((ele) => {
      ele.classList.remove("active");
    });

    // Add 'active' class to the clicked tab
    e.currentTarget.classList.add("active");

    // Hide all content divs
    divsArray.forEach((div) => {
      div.style.display = "none";
    });

    // Check if the selector exists before displaying it
    const contentToShow = document.querySelector(e.currentTarget.dataset.cont);
    if (contentToShow) {
      contentToShow.style.display = "block";
    }
  });
});