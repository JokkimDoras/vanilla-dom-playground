import { profilePage } from "./pages/profilePage.js";
import { addTransaction } from "./pages/addTransaction.js";
import { settingPage } from "./pages/settingPage.js";
// import { dashboardPage } from "./pages/dashboardPage.js";
import { dashboard } from "./dashboard.js";
const content = document.querySelector("#content");

export function navigate(page, push = true) {
  if (push) {
    history.pushState({}, "", `/#${page}`);
  }
  if (page === "dashboard.html") {
    history.pushState({}, "", `/${page}`);
    console.log("render the dashboard now");
    content.innerHTML = dashboard();
  }
  if (page === "setting") {
    content.innerHTML = settingPage();
  }
  if (page === "profile") {
    content.innerHTML = profilePage();
  }

  if (page === "add") {
    content.innerHTML = addTransaction();
  }
}

window.addEventListener("popstate", () => {
  const page = window.location.pathname.replace("/", "");
  console.log(page);
  navigate(page, false);
});
