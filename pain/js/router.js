import { profilePage } from './pages/profilePage.js'
import { addTransaction } from "./pages/addTransaction.js";
import { settingPage } from "./pages/settingPage.js";
const content = document.querySelector("#content");

export function navigate(page, push = true) {

    if (push) {
        history.pushState({}, "", `/#${page}`);
    }

    if (page === "setting" || page === 'dashboard.html') {
        content.innerHTML = settingPage();
    }
    if(page === 'profile'){
        content.innerHTML = profilePage()
    }

    if (page === "add") {
        content.innerHTML = addTransaction();
    }
}

window.addEventListener("popstate", () => {
    const page =
        window.location.pathname.replace("/", "");

    navigate(page, false);
});