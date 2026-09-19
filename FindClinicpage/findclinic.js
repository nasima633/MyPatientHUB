const menuButton = document.getElementById("menu-button");
const sidebar = document.getElementById("sidebar");

if (menuButton && sidebar) {
    menuButton.addEventListener("click", function () {
        sidebar.classList.toggle("open");
    });
}

const headerSearch = document.getElementById("header-search");
const navItems = document.querySelectorAll(".nav-item");

if (headerSearch) {
    headerSearch.addEventListener("input", function () {
        const searchText = headerSearch.value.trim().toLowerCase();

        navItems.forEach(function (item) {
            const label = item
                .querySelector(".nav-label")
                .textContent
                .toLowerCase();

            if (searchText === "") {
                item.style.display = "flex";
            } else if (label.includes(searchText)) {
                item.style.display = "flex";
            } else {
                item.style.display = "none";
            }
        });
    });
}

const clinicSearch = document.getElementById("clinic-search");
const locationFilter = document.getElementById("location-filter");
const searchClinicButton = document.getElementById("search-clinic-button");
const clinicCards = document.querySelectorAll(".clinic-card");
const resultsCount = document.getElementById("results-count");

function searchClinics() {
    const searchText = clinicSearch.value.trim().toLowerCase();
    const selectedLocation = locationFilter.value;
    let visibleClinics = 0;

    clinicCards.forEach(function (card) {
        const clinicName = card.dataset.clinic.toLowerCase();
        const clinicLocation = card.dataset.location;

        const nameMatches = clinicName.includes(searchText);
        const locationMatches =
            selectedLocation === "all" ||
            clinicLocation === selectedLocation;

        if (nameMatches && locationMatches) {
            card.style.display = "block";
            visibleClinics++;
        } else {
            card.style.display = "none";
        }
    });

    resultsCount.textContent = visibleClinics + " Clinics";
}

if (clinicSearch) {
    clinicSearch.addEventListener("input", searchClinics);
}

if (locationFilter) {
    locationFilter.addEventListener("change", searchClinics);
}

if (searchClinicButton) {
    searchClinicButton.addEventListener("click", searchClinics);
}

const viewClinicButtons = document.querySelectorAll(".view-clinic");

viewClinicButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        alert("Clinic details will be added in the future.");
    });
});

const settingsButton = document.getElementById("settings-button");

if (settingsButton) {
    settingsButton.addEventListener("click", function () {
        alert("Settings will be added in the future.");
    });
}

const notificationButton = document.getElementById("notification-button");

if (notificationButton) {
    notificationButton.addEventListener("click", function () {
        alert("Notifications will be added in the future.");
    });
}

const helpButton = document.getElementById("help-button");

if (helpButton) {
    helpButton.addEventListener("click", function () {
        alert("Help center will be added in the future.");
    });
}

const logoutButton = document.getElementById("logout-button");

if (logoutButton) {
    logoutButton.addEventListener("click", function (event) {
        event.preventDefault();

        const confirmLogout = confirm(
            "Are you sure you want to logout?"
        );

        if (confirmLogout) {
            window.location.href = "../LoginPage/logout.html";
        }
    });
}