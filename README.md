# MyPatientHUB Dashboard

## 📌 Project Overview

MyPatientHUB Dashboard is a responsive healthcare dashboard interface built using **HTML, CSS, and JavaScript**.

The project provides a clean dashboard layout with a sidebar navigation, header, search functionality, interactive buttons, dashboard charts, and a responsive mobile layout.

This project was created as a frontend development project to practice **HTML structure, CSS styling and responsive design, and JavaScript DOM manipulation and event handling**.

---

## ✨ Features

* 📊 Healthcare dashboard with chart images
* 🧭 Sidebar navigation
* 📱 Responsive design for desktop, tablet, and mobile devices
* ☰ Mobile sidebar toggle
* 🔎 Navigation search functionality
* 🖱️ Interactive navigation menu
* 🚪 Logout confirmation
* ⚙️ Settings button interaction
* 🔔 Notifications button interaction
* ❓ Help center button interaction
* 🏠 Dashboard navigation from the logo and footer
* 🎨 Clean and modern user interface
* 📐 CSS Grid layout for dashboard cards
* ♻️ Smooth scrolling between dashboard sections

---

## 🛠️ Technologies Used

### HTML5

Used to create the structure of the dashboard, including:

* Header
* Sidebar navigation
* Main dashboard
* Dashboard cards
* Footer
* Buttons and input fields

### CSS3

Used for:

* Dashboard layout
* Colors and typography
* Sidebar styling
* Cards and shadows
* Hover effects
* CSS Grid
* Responsive design
* Mobile navigation
* Tablet and mobile media queries
* Smooth scrolling

### JavaScript

Used to add interactivity through:

* `addEventListener()`
* `querySelectorAll()`
* `getElementById()`
* `classList.toggle()`
* `classList.add()`
* `classList.remove()`
* `forEach()`
* `dataset`
* `window.innerWidth`
* DOM manipulation
* Event handling

---

## 📂 Project Structure

```text
MyPatientHUB/
│
├── index.html
├── script.js
│
├── css/
│   └── style.css
│
└── assets/
    └── images/
        ├── promotion_by_clinics.png
        ├── promotion_by_pharmacies.png
        ├── smart_market_usage_by_app.png
        └── health_index.png
```

---

## 🎨 Dashboard Design

The dashboard uses a clean healthcare-oriented interface with:

* White sidebar and header
* Light gray page background
* Blue and dark gray text
* Pink/purple gradient for active elements
* Rounded dashboard cards
* Subtle shadows
* Responsive layouts

The dashboard displays four main chart cards:

1. Promotion by Clinics
2. Promotion by Pharmacies
3. Smart Market Usage by App
4. Health Index

---

## ⚙️ JavaScript Functionality

### Sidebar Toggle

On mobile devices, the menu button opens and closes the sidebar.

```javascript
menuButton.addEventListener("click", function () {
    sidebar.classList.toggle("active");
});
```

### Navigation

When a navigation item is clicked, the JavaScript:

* Removes the `active` class from other navigation items
* Adds the `active` class to the selected item
* Closes the sidebar on mobile
* Logs the selected page to the console

### Search

The search input allows users to search through the sidebar navigation items.

The entered text is converted to lowercase and compared with the navigation labels.

Matching items remain visible while non-matching items are hidden.

### Logout

Clicking the logout button displays a confirmation message before showing the logout alert.

### Settings

The settings button displays a message indicating that the settings page will open.

### Notifications

The notifications button displays a message when there are no new notifications.

### Help Center

The help button displays a welcome message for the MyPatientHUB Help Center.

 Logo and Footer Navigation

Clicking the MyPatientHUB logo or footer home link returns the user to the Dashboard section and updates the active navigation item.

---

📱 Responsive Design

The dashboard is designed to work across different screen sizes.

 Desktop

* Fixed sidebar
* Full dashboard layout
* Two-column chart grid
* Full search box and header controls

Tablet

* Smaller sidebar
* Adjusted spacing
* Smaller search box

Mobile

* Sidebar is hidden by default
* Menu button opens the sidebar
* Dashboard cards become a single-column layout
* Search input becomes a compact search button
* Logout button is hidden
* Some header buttons are hidden on very small screens

---

## 🚀 How to Run the Project

1. Download or clone the project.
2. Make sure the project folders and files keep the same structure.
3. Open the project folder in your code editor.
4. Open `index.html` in a web browser.

For the best development experience, you can use **Visual Studio Code with Live Server**.

---

## 🎯 Project Goals

The main goals of this project are to practice:

* Building semantic HTML layouts
* Creating responsive interfaces with CSS
* Using CSS Grid and Flexbox
* Creating mobile-friendly navigation
* Working with JavaScript DOM methods
* Handling user events
* Using JavaScript to change CSS classes
* Creating interactive frontend components

---

## 👩‍💻 Author

**Nasima Alizada**

Frontend Development Student

### Skills Used in This Project

* HTML5
* CSS3
* JavaScript
* Responsive Web Design
* DOM Manipulation
* Git & GitHub

---

## 📄 License

This project was created for educational and frontend development practice purposes.
