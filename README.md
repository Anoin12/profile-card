# 🧙‍♀️HNG 13 Frontend Wizards — Stage 0 Task: Build a Testable Profile Card

Welcome to my **Stage 0 submission** 🎉
This project is a **responsive, accessible, and testable Profile Card** built entirely with **semantic HTML, modern CSS, and vanilla JavaScript**.

The design goes beyond the basics it introduces subtle interactivity, animation, and accessibility improvements to make it stand out, while still meeting every testing and structure requirement.

---

## 🚀 Overview

The **Profile Card** component is designed to:

* Present a personal profile in a clean, professional layout.
* Demonstrate **HTML semantics**, **CSS responsiveness**, and **JavaScript interactivity**.
* Include specific `data-testid` attributes so automated tests can target and validate every part of the project.

It’s lightweight, mobile-first, and showcases creativity through motion, theme toggling, and elegant layout transitions.

---

## 🧩 Project Features

### ✅ Core Requirements Implemented

| Requirement                 | Implemented | Description                                                                       |
| --------------------------- | ----------- | --------------------------------------------------------------------------------- |
| `data-testid` attributes    | ✔️          | All visible elements include unique test IDs for automated tests.                 |
| Semantic HTML               | ✔️          | Uses `<article>`, `<header>`, `<figure>`, `<nav>`, and `<section>` appropriately. |
| Accessible content          | ✔️          | Includes `alt` text for images and keyboard-focusable links.                      |
| Real-time clock             | ✔️          | Displays accurate milliseconds using `Date.now()` that updates live.              |
| Responsive layout           | ✔️          | Mobile-first design that scales beautifully on tablets and desktops.              |
| Social links                | ✔️          | Open in new tabs with `rel="noopener noreferrer"`.                                |
| Avatar                      | ✔️          | Circular photo with dynamic glow animation and accessible alt text.               |
| Distinct hobbies & dislikes | ✔️          | Redesigned as animated chips for personality and readability.                     |

---

## 🎨 Design & User Experience

The card sits on a **red gradient background** that complements the user’s avatar (with hints of red) while the main layout remains on a **white base** for clarity.

Additional design perks:

* ✨ Animated floating glow around the avatar
* 🕒 Real-time live clock
* 💡 Responsive grid-to-flex layout
* 🖱️ Hover ripple effects on interactive elements
* 🔴 Theme toggle (light ↔ red accent)
* ♿ Accessible focus rings for keyboard users

---

## 🧠 Tech Stack

* **HTML5** (Semantic structure & accessibility)
* **CSS3** (Flexbox, Grid, transitions, animations)
* **Vanilla JavaScript (ES6)** for:

  * Time updates using `Date.now()`
  * Theme switching (light/dark)
  * Interactive animations

---

## 📁 Project Structure

```
📦 profile-card
 ┣ 📜 index.html          → Main structure and semantic layout
 ┣ 📜 style.css           → Responsive styling and animations
 ┣ 📜 script.js           → Time updates, theme toggle, interactivity
 ┗ 📜 README.md           → Documentation (this file)
```

---

## 🧪 Testing Notes

### Data Test IDs

Every testable component includes a `data-testid` attribute:

| Element                | data-testid                  |
| ---------------------- | ---------------------------- |
| Profile card           | `test-profile-card`          |
| Name                   | `test-user-name`             |
| Biography              | `test-user-bio`              |
| Current time           | `test-user-time`             |
| Avatar image           | `test-user-avatar`           |
| Social links container | `test-user-social-links`     |
| Each social network    | `test-user-social-<network>` |
| Hobbies list           | `test-user-hobbies`          |
| Dislikes list          | `test-user-dislikes`         |

Automated testing tools (like Jest + Testing Library) can easily query elements using these IDs.

---

## 💻 How to Run Locally

### Prerequisites

You only need a modern browser (no build tools required).

### Steps

1. Clone the repository

   ```bash
   git clone https://github.com/Blessing-Akanimoh-James/HNG---Stage-0-Task
   ```

2. Navigate into the project folder

   ```bash
   cd HNG---Stage-0-Task
   ```

3. Open the `index.html` file in your browser

   * On VS Code, you can right-click and select **“Open with Live Server”** (recommended).

4. That’s it 🎉 — your profile card should display with a live clock and responsive layout.

---

## 🌐 Live Demo

**Hosted on Netlify:**
🔗 [https://blessing-akanimoh-james.netlify.app/](https://blessing-akanimoh-james.netlify.app/)

**GitHub Repository:**
🔗 [https://github.com/Blessing-Akanimoh-James/HNG---Stage-0-Task](https://github.com/Blessing-Akanimoh-James/HNG---Stage-0-Task)

---

## 🧩 Accessibility & Responsiveness Testing

* ✅ Passed keyboard navigation test
* ✅ Focus visible on all interactive elements
* ✅ Responsive across breakpoints (360px → 1440px)
* ✅ Avatar has proper `alt` description
* ✅ Contrast ratio follows WCAG AA standards

---

## 🧠 Developer Notes

* The **JavaScript clock** updates every second to show current milliseconds dynamically.
* The **theme toggle** uses `localStorage` to remember the user’s preferred theme.
* Hobbies and dislikes are now represented as **animated “chips”** instead of static lists — for a modern, human-centered touch.
* All transitions are smooth and optimized for performance (no layout thrashing).

---

## 🧾 License

This project was built as part of the **HNG Frontend - Stage 0 Task**.
© 2025 Blessing James. All rights reserved.

---

> 💡 *"Design is not just what it looks like and feels like. Design is how it works."* — Steve Jobs