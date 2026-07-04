import { profilePage } from "./pages/profilePage.js";
import { addTransaction } from "./pages/addTransaction.js";
import { settingPage } from "./pages/settingPage.js";
// import { dashboardPage } from "./pages/dashboardPage.js";
import { dashboard } from "./dashboard.js";
const content = document.querySelector("#content");
const realContent = document.querySelector('.content-real')

export function navigate(page, push = true) {
  if (push) {
    history.pushState({}, "", `/#${page}`);
  }
  if (page === "dashboard.html") {
    history.pushState({}, "", `/${page}`);
    realContent.innerHTML = dashboard();
  }
  if (page === "setting") {
    realContent.innerHTML = settingPage();
  }
  if (page === "profile") {
    realContent.innerHTML = profilePage();
  }

  if (page === "add") {
    realContent.innerHTML = addTransaction();
  }
}

window.addEventListener("popstate", () => {
  const page = window.location.pathname.replace("/", "");
  navigate(page, false);
});
