// router.js

import { dashboardPage } from "./pages/dashboardPage.js";
import { addTransaction } from "./pages/addTransaction.js";

const content = document.querySelector("#content");

export function navigate(page, push = true) {

    if (push) {
        history.pushState({}, "", `/${page}`);
    }

    if (page === "dashboard" || page === 'dashboard.html') {
        content.innerHTML = dashboardPage();
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