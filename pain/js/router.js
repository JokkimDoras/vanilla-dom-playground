import { profilePage } from "./pages/profilePage.js";
import { TransactionForm } from "./pages/addTransaction.js";
import { UpdateBalance } from "./pages/updateBalance.js";
// import { dashboardPage } from "./pages/dashboardPage.js";
// import { initNewTransaction } from "./pages/addTransaction.js";
import { dashboard } from "./dashboard.js";
const content = document.querySelector("#content");
const realContent = document.querySelector('.content-real')
const addTxPage = new TransactionForm();
const balancePage = new UpdateBalance();

export function navigate(page, push = true) {
  if (push) {
    history.pushState({}, "", `/#${page}`);
  }
  if (page === "dashboard.html") {
    history.pushState({}, "", `/${page}`);
    realContent.innerHTML = dashboard();
  }
  // if (page === "setting") {
  //   realContent.innerHTML = settingPage();
  // }
  if (page === "profile") {
    realContent.innerHTML = profilePage();
  }
  if(page === 'updatebalance'){
    realContent.innerHTML = balancePage.render();
    balancePage.initBalance()
  }

  if (page === "add") {
    realContent.innerHTML = addTxPage.render();
    addTxPage.init()
  }
}

window.addEventListener("popstate", () => {
  const page = window.location.pathname.replace("/", "");
  navigate(page, false);
});
