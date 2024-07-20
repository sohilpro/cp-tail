let tabs = document.querySelectorAll("#tabs div");
let tabsArray = Array.from(tabs);
let divs = document.querySelectorAll("#content > div");
let divsArray = Array.from(divs);

// Select specific SVG elements
const transactionsSVG = document.querySelector("#transactions > svg");
const customersSVG = document.querySelector("#customers > svg");
const walletSVG = document.querySelector("#wallet > svg");
const accountingSVG = document.querySelector("#accounting > svg");

// Array of all SVG elements to remove 'active' class from them
const allSVGs = [
  transactionsSVG,
  customersSVG,
  walletSVG,
  accountingSVG,
];

tabsArray.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    // Remove 'active' class from all tabs
    tabsArray.forEach((ele) => {
      ele.classList.remove("active");
      console.log(ele);
    });

    // Add 'active' class to the clicked tab
    e.currentTarget.classList.add("active");

    // Remove 'active' class from all SVGs
    allSVGs.forEach((svg) => {
      if (svg) {
        svg.classList.remove("active")
        svg.classList.remove("actived")
      };
    });

    // Add 'active' class to the specific SVG element if it exists
    switch (e.currentTarget.id) {
      case "transactions":
        if (transactionsSVG) transactionsSVG.classList.add("actived");
        break;
      case "customers":
        if (customersSVG) customersSVG.classList.add("active");
        break;
      case "wallet":
        if (walletSVG) walletSVG.classList.add("active");
        break;
      case "accounting":
        if (accountingSVG) accountingSVG.classList.add("actived");
        break;
    }

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
