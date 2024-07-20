// const flyParent = document.getElementById("fly_parent");
// const flyChild = document.getElementById("fly");
// const supportParent = document.getElementById("support_parent");
// const supportChild = document.getElementById("support");
// const companyParent = document.getElementById("company_parent");
// const companyChild = document.getElementById("company");
// const siteParent = document.getElementById("site_parent");
// const siteChild = document.getElementById("site");
// const userParent = document.getElementById("user_parent");
// const userChild = document.getElementById("user");
// const gatewayParent = document.getElementById("gateway_parent");
// const gatewayChild = document.getElementById("gateway");
// const supplierParent = document.getElementById("supplier_parent");
// const supplierChild = document.getElementById("supplier");
// const walletParent = document.getElementById("wallet_parent");
// const walletChild = document.getElementById("wallet");
// const marketingParent = document.getElementById("marketing_parent");
// const marketingChild = document.getElementById("marketing");
// const accountingParent = document.getElementById("accounting_parent");
// const accountingChild = document.getElementById("accounting");
// const receiveParent = document.getElementById("receive_parent");
// const receiveChild = document.getElementById("receive");

// const showChild = (element) => {
//   element.classList.toggle("hidden");
// };

// flyParent.addEventListener("click", () => showChild(flyChild));
// supportParent.addEventListener("click", () => showChild(supportChild));
// companyParent.addEventListener("click", () => showChild(companyChild));
// siteParent.addEventListener("click", () => showChild(siteChild));
// userParent.addEventListener("click", () => showChild(userChild));
// gatewayParent.addEventListener("click", () => showChild(gatewayChild));
// supplierParent.addEventListener("click", () => showChild(supplierChild));
// walletParent.addEventListener("click", () => showChild(walletChild));
// marketingParent.addEventListener("click", () => showChild(marketingChild));
// accountingParent.addEventListener("click", () => showChild(accountingChild));
// receiveParent.addEventListener("click", () => showChild(receiveChild));

const elements = [
  { parent: "fly_parent", child: "fly" },
  { parent: "support_parent", child: "support" },
  { parent: "company_parent", child: "company" },
  { parent: "site_parent", child: "site" },
  { parent: "user_parent", child: "user" },
  { parent: "gateway_parent", child: "gateway" },
  { parent: "supplier_parent", child: "supplier" },
  { parent: "wallet_parent", child: "wallet" },
  { parent: "marketing_parent", child: "marketing" },
  { parent: "accounting_parent", child: "accounting" },
  { parent: "receive_parent", child: "receive" },
];

const showChild = (element) => {
  element.classList.toggle("hidden");
};

elements.forEach(({ parent, child }) => {
  const parentElement = document.getElementById(parent);
  const childElement = document.getElementById(child);
  parentElement.addEventListener("click", () => showChild(childElement));
});
