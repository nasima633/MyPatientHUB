document.addEventListener("DOMContentLoaded", function () {

const menuButton = document.getElementById("menu-button");
const sidebar = document.getElementById("sidebar-navigation");

if (menuButton && sidebar) {

    menuButton.addEventListener("click", function () {

        sidebar.classList.toggle("open");

        const isOpen = sidebar.classList.contains("open");

        menuButton.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

    });
}


/*SIDEBAR SEARCH */

const headerSearch =
    document.getElementById("search-input");

const navItems =
    document.querySelectorAll(".sidebar-navigation .nav-item");

if (headerSearch) {

    headerSearch.addEventListener("input", function () {

        const searchText =
            headerSearch.value
                .trim()
                .toLowerCase();


        navItems.forEach(function (item) {

            const labelElement =
                item.querySelector(".nav-label");

            if (!labelElement) {
                return;
            }


            const label =
                labelElement.textContent
                    .trim()
                    .toLowerCase();


            /*
                If search is empty:
                show every navigation item.
            */

            if (searchText === "") {

                item.style.display = "flex";

            }


            /*
                If search matches:
                show only the matching item.
            */

            else if (label.includes(searchText)) {

                item.style.display = "flex";

            }


            /*
                If search does not match:
                hide the item.
            */

            else {

                item.style.display = "none";

            }

        });

    });
}


/*CLOSE SIDEBAR AFTER CLICKING NAVIGATION
   ON MOBILE
*/

navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        if (window.innerWidth <= 768) {

            sidebar.classList.remove("open");

            if (menuButton) {

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        }

    });

});


/* LOGOUT*/

const logoutButton =
    document.getElementById("logout-button");

if (logoutButton) {

    logoutButton.addEventListener(
        "click",
        function () {

            const confirmLogout =
                confirm(
                    "Are you sure you want to logout?"
                );


            if (confirmLogout) {

                /*
                    Your current project structure uses
                    LoginPage, so logout.html is placed
                    inside that folder.
                */

                window.location.href =
                    "../LoginPage/logout.html";

            }

            else {

                /*
                    Cancel does nothing.
                    User stays on the current page.
                */

                return;

            }

        }
    );

}


/* sitting*/

const settingsButton =
    document.getElementById(
        "header-settings-button"
    );

if (settingsButton) {

    settingsButton.addEventListener(
        "click",
        function () {

            alert(
                "Settings will be added in the future."
            );

        }
    );

}


/*  NOTIFICATIONS */

const notificationButton =
    document.getElementById(
        "notifications-button"
    );

if (notificationButton) {

    notificationButton.addEventListener(
        "click",
        function () {

            alert(
                "Notifications will be added in the future."
            );

        }
    );

}


/*  HELP */

const helpButton =
    document.getElementById("help-button");

if (helpButton) {

    helpButton.addEventListener(
        "click",
        function () {

            alert(
                "Help center will be added in the future."
            );

        }
    );

}


/* SERVICE DROPDOWNS */

const serviceItems =
    document.querySelectorAll(".service-item");

serviceItems.forEach(function (item) {

    const button =
        item.querySelector(".dropdown-button");

    if (!button) {
        return;
    }


    button.addEventListener(
        "click",
        function () {

            const isOpen =
                item.classList.contains("open");


            /*
                Close all other service dropdowns.
            */

            serviceItems.forEach(
                function (otherItem) {

                    otherItem.classList.remove("open");

                    const otherButton =
                        otherItem.querySelector(
                            ".dropdown-button"
                        );

                    if (otherButton) {

                        otherButton.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }

                }
            );


            /*
                Open the selected dropdown
                if it was previously closed.
            */

            if (!isOpen) {

                item.classList.add("open");

                button.setAttribute(
                    "aria-expanded",
                    "true"
                );

            }

        }
    );

});


/* SPECIALTY DROPDOWNS */

const specialtyItems =
    document.querySelectorAll(".specialty-item");

specialtyItems.forEach(function (item) {

    const button =
        item.querySelector(".specialty-button");

    if (!button) {
        return;
    }


    button.addEventListener(
        "click",
        function () {

            const isOpen =
                item.classList.contains("open");


            /*
                Close all other specialty
                dropdowns.
            */

            specialtyItems.forEach(
                function (otherItem) {

                    otherItem.classList.remove("open");

                    const otherButton =
                        otherItem.querySelector(
                            ".specialty-button"
                        );

                    if (otherButton) {

                        otherButton.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }

                }
            );


            /*
                Open selected specialty.
            */

            if (!isOpen) {

                item.classList.add("open");

                button.setAttribute(
                    "aria-expanded",
                    "true"
                );

            }

        }
    );

});


/* CURRENT BUTTON
   Opens Google Maps */

const currentButton =
    document.getElementById("current-button");

if (currentButton) {

    currentButton.addEventListener(
        "click",
        function () {

            /*
                Open Google Maps in a new tab.
            */

            window.open(
                "https://www.google.com/maps",
                "_blank"
            );

        }
    );

}


/* 
   DOCTOR SEARCH */

const doctorNameSearch =
    document.getElementById(
        "doctor-name-search"
    );

const locationSearch =
    document.getElementById(
        "location-search"
    );

const doctorSearchButton =
    document.getElementById(
        "doctor-search-button"
    );


if (doctorSearchButton) {

    doctorSearchButton.addEventListener(
        "click",
        function () {

            const doctorName =
                doctorNameSearch
                    ? doctorNameSearch.value.trim()
                    : "";

            const location =
                locationSearch
                    ? locationSearch.value.trim()
                    : "";


            if (
                doctorName === "" &&
                location === ""
            ) {

                alert(
                    "Please enter a doctor name, speciality, or location."
                );

                return;

            }


            if (
                doctorName !== "" &&
                location !== ""
            ) {

                alert(
                    "Searching for " +
                    doctorName +
                    " near " +
                    location +
                    "."
                );

            }

            else if (doctorName !== "") {

                alert(
                    "Searching for " +
                    doctorName +
                    "."
                );

            }

            else {

                alert(
                    "Searching near " +
                    location +
                    "."
                );

            }

        }
    );

}


/* 
   DOCTOR SEARCH - ENTER KEY */

[doctorNameSearch, locationSearch].forEach(
    function (input) {

        if (!input) {
            return;
        }


        input.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Enter") {

                    if (doctorSearchButton) {

                        doctorSearchButton.click();

                    }

                }

            }
        );

    }
);


/*  RESPONSIVE SIDEBAR RESET */

window.addEventListener(
    "resize",
    function () {

        /*
            On desktop, make sure the sidebar
            is not stuck in the mobile open state.
        */

        if (
            window.innerWidth > 768 &&
            sidebar
        ) {

            sidebar.classList.remove("open");

            if (menuButton) {

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }

    }
);


});
