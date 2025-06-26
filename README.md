# 🏡 Cozynest – Roommate Finder Website

**Live Site:** [https://cozynest-code.web.app/](https://cozynest-code.web.app/)

Cozynest is a web platform that helps individuals find compatible roommates based on location, budget, lifestyle preferences, and interests. The platform offers a clean UI, secure authentication, and full CRUD functionalities for users to manage their listings with ease.

---

## 🚀 Key Features

-   📝 **Add & Manage Listings**  
    Logged-in users can create, update, and delete roommate listings. Only the listing owner can modify their posts.

-   🔍 **Browse Listings**  
    View all roommate search posts in a searchable and organized table format.

-   ❤️ **Like & Reveal Contact**  
    Users can express interest by liking posts (except their own). Contact info appears upon liking.

-   🌗 **Dark/Light Theme Toggle**  
    Switch between dark and light modes with a persistent UI setting.

---

## 🔧 Tech Stack

-   ⚛️ **React** – Frontend framework
-   🛠 **React Router DOM** – Client-side routing
-   🌐 **Firebase Auth & Hosting** – Authentication and deployment
-   ☁️ **MongoDB & Express.js** – Backend & database (on Vercel)
-   💅 **Tailwind CSS + DaisyUI** – Styling & UI components
-   🌙 **Dark Mode** – Tailwind `dark:` class-based theme
-   🎨 **react-icons** – Icon set
-   🎥 **react-typewriter** – Typing animation for text
-   🪄 **Lottie React** – Engaging vector animations
-   ✨ **react-awesome-reveal** – Beautiful scroll animations

---

## 🔐 Environment Variables

Environment-sensitive values are stored securely using `.env` files and are **not** exposed in the public repo.

-   `VITE_FIREBASE_API_KEY`
-   `VITE_FIREBASE_AUTH_DOMAIN`
-   `VITE_FIREBASE_PROJECT_ID`
-   `VITE_FIREBASE_STORAGE_BUCKET`
-   `VITE_FIREBASE_MESSAGING_SENDER_ID`
-   `VITE_FIREBASE_APP_ID`
-   `VITE_BACKEND_URL`

---

## 📁 Pages Overview

| Page                     | Description                           |
| ------------------------ | ------------------------------------- |
| **Home**                 | Slider + featured posts + extras      |
| **Login / Register**     | Email/Password & Google login         |
| **Add to Find Roommate** | Protected form to add listings        |
| **Browse Listings**      | Table of all roommate listings        |
| **My Listings**          | User-only listings with update/delete |
| **Details Page**         | Full post view + like/contact reveal  |
| **404 Not Found**        | Catch-all route for invalid URLs      |

---

## 📦 Installation & Setup

1. Clone this repo  
   `git clone https://github.com/code-shams/cozynest.git`

2. Install dependencies  
   `npm install`

3. Create a `.env` file with Firebase & backend credentials

4. Run development server  
   `npm run dev`

---

## 🌐 Server-side Repository

**Repository Link:** [https://github.com/code-shams/cozyNest-server-A10PH.git](https://github.com/code-shams/cozyNest-server-A10PH.git)

---

## 📝 Credits

This project is part of a web development assignment by **Programming Hero**. It was built with love, coffee ☕, and many late nights.

---
