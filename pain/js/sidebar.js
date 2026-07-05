export function renderSideBar() {
    return `
    <aside>
    <h2 class='app-name'>Tracker</h2>
    <nav class='sidebar-link'>
    <a data-path='dashboard.html' id='dash'>Dashboard</a>
    <a data-path='add' id='new'>New Transaction</a>
    <a data-path='history' id='history'>History</a>
    <a data-path='profile' id='profile'>Profile</a>
    <a data-path='updatebalance' id='balance'>Balance</a>

    </nav>
    </aside>
    `
}