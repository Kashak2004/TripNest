🏡 TripNest

TripNest is a full-stack web application inspired by Airbnb that allows users to explore, list, and manage rental properties.  
The application is built using the **MERN stack (MongoDB, Express.js, Node.js)** with **EJS** for server-side rendering and follows the **MVC (Model–View–Controller)** architecture.  
It is fully responsive and deployed on **Render**.

 
🔗 Live Demo:👉 https://tripnest-630x.onrender.com

 ✨ Key Features

- 🔐 **User Authentication**  :Secure sign-up, login, and logout using Passport.js.

- 🏠 **Property Listings (CRUD)**  :Users can create, view, edit, and delete property listings.

- 📝 **Reviews System**  :Logged-in users can add and delete reviews for listings.

- 🔒 **Authorization**  :Only the owner of a listing or review can edit or delete it.

- ☁️ **Image Uploads**  :Property images are uploaded using Multer and stored securely on Cloudinary.

- 📱 **Responsive UI**  :Clean and responsive interface built with Bootstrap.

- ⚡ **Flash Messages**  :User-friendly notifications for login, logout, and listing actions.

- 🛑 **Error Handling**  : Custom middleware for async error handling and 404 (Page Not Found).


🛠️ Tech Stack

- **Frontend:** HTML, CSS, Bootstrap, JavaScript  
- **Backend:** Node.js, Express.js  
- **Templating Engine:** EJS  
- **Database:** MongoDB  
- **Authentication:** Passport.js,Express-Session 
- **Image Storage:** Cloudinary  
- **Deployment:** Render  

📂 Project Architecture

This project follows the MVC Architecture:
Models → User, Listing, Review
Views → EJS templates
Controllers → Business logic
Routes → Express routes
Middleware → Authentication, authorization, error handling.


