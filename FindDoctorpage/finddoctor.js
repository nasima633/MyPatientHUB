document.addEventListener("DOMContentLoaded", function(){

  const menuButton = document.getElementById("menu-button");
  const sidebar = document.getElementById("sidebar-navigation");
  const settingsButton = document.getElementById("header-settings-button");
  const headerSearch = document.getElementById("search-input");
  const navItems = document.querySelectorAll(".sidebar-navigation .nav-item");
  const logoutButton = document.getElementById("logout-button");
  const notificationButton = document.getElementById("notifications-button");
  const helpButton = document.getElementById("help-button");

  if (menuButton && sidebar) {
    menuButton.addEventListener("click", function () {
      sidebar.classList.toggle("open");
    });
  }  /*SIDEBAR SEARCH */

  if (headerSearch) {
    headerSearch.addEventListener("input", function () {
      const searchText = headerSearch.value.trim().toLowerCase();

      navItems.forEach(function (item) {
        const labelElement = item.querySelector(".nav-label");
        if (!labelElement) {
          return;
        }

        const label = labelElement.textContent.trim().toLowerCase();

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
/*CLOSE SIDEBAR AFTER CLICKING NAVIGATION ON MOBILE*/
  navItems.forEach(function (item) {
    item.addEventListener("click", function () {
      if (window.innerWidth <= 768) {
        sidebar.classList.remove("open");
        }
    });

  if (logoutButton) {
    logoutButton.addEventListener("click", function () {
      const confirmLogout = confirm("Are you sure you want to logout?");
      if (confirmLogout) {
        window.location.href = "../LoginPage/logout.html";
      } else {
               return;
      }
    });
  }

  if (settingsButton) {
    settingsButton.addEventListener("click", function () {
      alert("Settings will be added in the future.");
    });
  }

  if (notificationButton) {
    notificationButton.addEventListener("click", function () {
      alert("Notifications will be added in the future.");
    });
  }

  if (helpButton) {
    helpButton.addEventListener("click", function () {
      alert("Help center will be added in the future.");
    });
  }
/*Main page of find doctor ❤️*/ 
 
  const serviceItems = document.querySelectorAll(".service-item");
  const otherButton = otherItem.querySelector(".dropdown-button");
  const specialtyItems = document.querySelectorAll(".specialty-item");
  const currentButton = document.getElementById("current-button");
  const doctorNameSearch = document.getElementById("doctor-name-search");
  const locationSearch = document.getElementById("location-search");
  const doctorSearchButton = document.getElementById("doctor-search-button");

  serviceItems.forEach(function (item) {
    const button = item.querySelector(".dropdown-button");

    if (!button) {
      return;
    }

    button.addEventListener("click", function () {
      const isOpen = item.classList.contains("open");
/*Close all other service dropdowns.*/
      serviceItems.forEach(function (otherItem) {
        otherItem.classList.remove("open");
      });
/*Open the selected dropdown if it was previously closed. */
      if (!isOpen) {
        item.classList.add("open");}
    });
  });
/* SPECIALTY DROPDOWNS */
  specialtyItems.forEach(function (item) {
    const button = item.querySelector(".specialty-button");
    if (!button) {
      return;
    }
    button.addEventListener("click", function () {
      const isOpen = item.classList.contains("open");
 /*Close all other specialty dropdowns*/
      specialtyItems.forEach(function (otherItem) {
        otherItem.classList.remove("open");
      });
/*Open selected specialty. */
      if (!isOpen) {
        item.classList.add("open");
      }
    });
  });
/* CURRENT BUTTON Opens Google Maps */
  if (currentButton) {
    currentButton.addEventListener("click", function () {
     alert("google maps will be add in the future!! 😊")
    });
  }
/* DOCTOR SEARCH */  
  if (doctorSearchButton) {
    doctorSearchButton.addEventListener("click", function () {
      const doctorName = doctorNameSearch ? doctorNameSearch.value.trim() : "";
      const location = locationSearch ? locationSearch.value.trim() : "";

      if (doctorName === "" && location === "") {
        alert("Please enter a doctor name, speciality, or location.");
        return;
      }

      if (doctorName !== "" && location !== "") {
        alert("Searching for " + doctorName + " near " + location + ".");
      } else if (doctorName !== "") {
        alert("Searching for " + doctorName + ".");
      } else {
        alert("Searching near " + location + ".");
      }
    });
  }
  /*  RESPONSIVE SIDEBAR RESET */
  window.addEventListener("resize", function () {
    /* On desktop, make sure the sidebar is not stuck in the mobile open state. */
    if (window.innerWidth > 768 && sidebar) {
      sidebar.classList.remove("open");
    }
  });

});

