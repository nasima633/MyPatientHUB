document.addEventListener("DOMContentLoaded", function () {

    const menuButton = document.getElementById("menu-button");
    const sidebar = document.getElementById("sidebar-navigation");

    const navItems = document.querySelectorAll(".nav-item");

    const searchInput = document.getElementById("search-input");

    const logoutButton = document.getElementById("logout-button");

    const settingsButton = document.getElementById("header-settings-button");

    const notificationsButton = document.getElementById("notifications-button");

    const helpButton = document.getElementById("help-button");

    const brandLink = document.getElementById("brand-link");

    const footerHomeLink = document.getElementById("footer-home-link");


    menuButton.addEventListener("click", function () {
        sidebar.classList.toggle("active");
    });


    navItems.forEach(function (item) {

        item.addEventListener("click", function () {

            navItems.forEach(function (nav) {
                nav.classList.remove("active");
            });

            item.classList.add("active");

            if (window.innerWidth <= 768) {
                sidebar.classList.remove("active");
            }

            const selectedPage = item.dataset.page;

            console.log("Selected page:", selectedPage);
        });

    });


    searchInput.addEventListener("input", function () {

        const searchValue = searchInput.value.trim().toLowerCase();

        if (searchValue === "") {
            return;
        }

        navItems.forEach(function (item) {

            const label = item
                .querySelector(".nav-label")
                .textContent
                .toLowerCase();

            if (label.includes(searchValue)) {
                item.style.display = "flex";
            } else {
                item.style.display = "none";
            }

        });

    });


    searchInput.addEventListener("search", function () {

        if (searchInput.value === "") {

            navItems.forEach(function (item) {
                item.style.display = "flex";
            });

        }

    });


    logoutButton.addEventListener("click", function () {

        const logoutConfirm = confirm("Are you sure you want to log out?");

        if (logoutConfirm) {
            alert("You have been logged out.");
        }

    });


    settingsButton.addEventListener("click", function () {
        alert("Settings page will open here.");
    });


    notificationsButton.addEventListener("click", function () {
        alert("You have no new notifications.");
    });


    helpButton.addEventListener("click", function () {
        alert("Welcome to MyPatientHUB Help Center.");
    });


    brandLink.addEventListener("click", function (event) {

        event.preventDefault();

        navItems.forEach(function (nav) {
            nav.classList.remove("active");
        });

        const dashboardItem = document.getElementById("nav-dashboard");

        dashboardItem.classList.add("active");

        window.location.hash = "dashboard-section";

    });


    footerHomeLink.addEventListener("click", function (event) {

        event.preventDefault();

        navItems.forEach(function (nav) {
            nav.classList.remove("active");
        });

        document
            .getElementById("nav-dashboard")
            .classList.add("active");

        document
            .getElementById("dashboard-section")
            .scrollIntoView({
                behavior: "smooth"
            });

    });


    window.addEventListener("resize", function () {

        if (window.innerWidth > 768) {
            sidebar.classList.remove("active");
        }

    });

});