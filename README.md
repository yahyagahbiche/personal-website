# Yahya Gahbiche | Front-End Software Engineer Portfolio

Personal portfolio site built with React, Vite, and plain CSS.

---

## 🌟 Features

- **Dark Mode Toggle** – Switch between light and dark themes, preference saved to Local Storage.
- **Component-based sections** – Hero, Journey, Why, Now, About, and Contact, each its own React component.
- **Contact Form** – Users can send messages via Formspree integration.

---

## 🛠️ Tech Stack

- **Frontend:** React 19, Vite
- **Styling:** Plain CSS with CSS variables (light/dark theming)
- **Fonts:** Fraunces, Public Sans (Google Fonts)
- **Hosting:** GitHub Pages, deployed automatically via GitHub Actions

---

## 📂 Project Structure

```
public/                 # Static assets (favicon, portrait image)
src/
  components/           # Header, Hero, Journey, Why, Now, About, Contact, Footer
  hooks/useTheme.js      # Dark/light theme hook
  App.jsx               # Top-level layout
  main.jsx              # React entry point
index.html              # Vite entry HTML
vite.config.js          # Vite config (GitHub Pages base path)
```

---

## 🖥️ Live Demo

[https://yahyagahbiche.github.io/personal-website/](https://yahyagahbiche.github.io/personal-website/)

---

## ⚡ Usage

1. Clone the repository:

```bash
git clone https://github.com/yahyagahbiche/personal-website.git
```

2. Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

3. Build for production:

```bash
npm run build
```

Pushing to `main` automatically builds and deploys to GitHub Pages via the workflow in `.github/workflows/deploy.yml`.

---

## 💡 Notes

Dark mode preferences are saved to Local Storage.

Contact form uses Formspree for backend-less form submission.

---

## 📬 Contact Me

Feel free to reach out via:

LinkedIn: [linkedin.com/in/yahyagahbiche](https://www.linkedin.com/in/yahyagahbiche)

GitHub: [github.com/yahyagahbiche](https://github.com/yahyagahbiche)
