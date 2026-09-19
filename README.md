MyPatientHUB
MyPatientHUB is a responsive healthcare web interface designed to provide users with a simple and organized way to access healthcare-related services through a modern web dashboard.
The project was developed as part of the HBC Web Development Program and focuses on frontend development using HTML, CSS, and JavaScript.
Project Overview
MyPatientHUB provides a healthcare dashboard where users can navigate between different services such as finding doctors, finding clinics, appointments, pharmacy, marketplace, dependents, account settings, and more.
The interface is designed to be responsive and user-friendly across desktop, tablet, and mobile screen sizes.
Features
Dashboard
Responsive sidebar navigation
Responsive hamburger menu
Dashboard welcome section
Healthcare charts and promotional cards
Header search functionality
Sidebar navigation search/filter
Settings notification
Notifications alert
Logout confirmation
Responsive footer
Find Doctor
Doctor search interface
Doctor name search
Location search
Current location option
Search functionality
Service selection
Specialty selection
Responsive layout
Find Clinic
Clinic search interface
Clinic name search
Location filtering
Location options: 
All
Kabul
Herat
Mazar-e-Sharif
Kandahar
Clinic information cards
Responsive layout
Login
Login interface
Social login icons
Responsive design
Navigation between authentication pages
Technologies Used
HTML5 — Structure and page content
CSS3 — Styling, layout, responsiveness, and animations
JavaScript — Interactivity and page functionality
Git — Version control
GitHub — Source code management
Project Structure
MyPatientHUB/ │ ├── index.html ├── script.js │ ├── css/ │ └── style.css │ ├── assets/ │ ├── icon/ │ │ └── favicon.ico │ │ │ ├── icons/ │ │ ├── facbook.png │ │ └── google.png │ │ │ └── images/ │ ├── promotion_by_clinics.png │ ├── promotion_by_pharmacies.png │ ├── smart_market_usage_by_app.png │ └── health_index.png │ ├── login/ │ ├── login.html │ ├── login.css │ └── login.js │ ├── FindDoctorpage/ │ ├── finddoctor.html │ ├── finddoctor.css │ └── finddoctor.js │ └── FindClinicpage/ ├── findclinic.html ├── findclinic.css └── findclinic.js 
Dashboard Navigation
The dashboard sidebar contains the following sections:
Dashboard
Appointments
Find Doctor
Find Clinic
Chat
Find MarketPlace
Find Pharmacy
My Dependents
My Account
Settings
The navigation is designed to work responsively on smaller screens.
Responsive Design
MyPatientHUB supports different screen sizes using CSS media queries.
Desktop
The dashboard displays:
Fixed sidebar
Fixed header
Main dashboard content
Footer
Mobile
The interface changes to:
Hidden sidebar by default
Hamburger menu
Mobile-friendly header
Full-width dashboard cards
Responsive footer
Sidebar closes after selecting a navigation item
JavaScript Functionality
JavaScript is used to provide interactive features throughout the project.
Dashboard Search
The dashboard search field filters navigation items based on their labels.
For example:
doctor 
displays:
Find Doctor 
And:
find 
displays:
Find Doctor Find Clinic Find MarketPlace Find Pharmacy 
Hamburger Menu
On smaller screens, users can open the sidebar using the hamburger button.
Selecting a navigation item closes the sidebar again.
Settings
Clicking the settings button displays:
This feature will be added in the future. 
Notifications
The notifications button provides a notification message.
Logout
When the logout button is clicked, the user receives a confirmation message before leaving the dashboard.
Design
The project uses a clean healthcare dashboard design with:
White backgrounds
Light gray borders
Dark blue typography
Pink and purple gradients
Rounded cards
Responsive layouts
Simple navigation icons
The primary dashboard gradient uses:
#B000A8 → #E40078 
How to Run the Project
Option 1 — Open Directly
Download or clone the project and open:
index.html 
in a web browser.
Option 2 — Using a Local Development Server
If you have a local development server available, open the project folder and run the project through the server.
Then open the local URL provided by the development server.
GitHub
This project is maintained using Git and GitHub for version control.
Typical workflow:
git add . git commit -m "Update project" git push 
Project Goals
The main goals of MyPatientHUB are to:
Practice frontend web development
Build a responsive healthcare interface
Practice HTML structure
Practice CSS layouts and responsive design
Practice JavaScript DOM manipulation
Create reusable navigation patterns
Develop functional multi-page websites
Improve Git and GitHub workflow
Future Improvements
Possible future improvements include:
Backend integration
Real user authentication
Database integration
Real doctor and clinic data
Appointment booking
Real-time chat
Pharmacy and marketplace functionality
Interactive maps
User profiles
Notifications system
Search API integration
Advanced accessibility improvements
Project Status
Frontend development in progress
The main dashboard interface and core frontend pages have been developed as part of the HBC Web Development project.
Author
Nasima Alizada
Web Development Student
HBC Web Development Program
Note
This project is currently a frontend implementation. Some healthcare services and interactions are represented through interface elements and JavaScript functionality and are intended for future backend/API integration.
