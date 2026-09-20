
document.addEventListener("DOMContentLoaded", function () {

    const menuButton = document.getElementById("menu-button");
    const sidebar = document.getElementById("sidebar-navigation");
    const searchInput = document.getElementById("search-input");
    const notificationsButton = document.getElementById("notifications-button");
    const settingsButton = document.getElementById("header-settings-button");
    const logoutButton = document.getElementById("logout-button");
    const navItems = document.querySelectorAll(".nav-item");


    menuButton.addEventListener("click", function () {
        sidebar.classList.toggle("open");
    });

    navItems.forEach(function (navItem) {
        navItem.addEventListener("click", function () {
            if (window.innerWidth <= 900) {
                sidebar.classList.remove("open");
            }
        });
    });

    searchInput.addEventListener("input", function () {
        const searchInput = searchInput.value.trim().toLowerCase();

            navItems.forEach(function (navItem) {
            const navLabel = navItem.querySelector(".nav-label");
            if (!navLabel) {
                return;
            }

            const navText = navLabel.textContent.trim().toLowerCase();

            if (searchInput === "") {
                navItem.style.display = "flex";

            } else if (navText.includes(searchInput)) {
                navItem.style.display = "flex";

            } else {
                navItem.style.display = "none";
            }
        });
    });

    notificationsButton.addEventListener("click",function () {
            alert(
                "This feature will be added in the future.");}
    );

    settingsButton.addEventListener("click", function(){

        alert("this feuture will be added in future!");}
    );


    logoutButton.addEventListener("click", function(){
         const confirmLogOut= confirm("ARE YOU SURE TO LOG OUT ?");

         if(confirmLogOut){
            window.location.href="LoginPage/login.html";
         }
    });
});


