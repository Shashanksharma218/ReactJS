  

# Feasto 🍴

  

A React.js based web application built for learning and experimenting with core React concepts like **components, hooks, context, routing, and state management**.

  

---

  

## 📂 Project Structure

  

```

  

.

├── README.md

├── index.html

├── package-lock.json

├── package.json

├── style.css

├── src

│   ├── app.js               # Root React application entry

│   ├── components           # UI components

│   │   ├── About.js

│   │   ├── AccordianItems.js

│   │   ├── Body.js

│   │   ├── Card.js

│   │   ├── Cart.js

│   │   ├── CategoryItem.js

│   │   ├── Contact.js

│   │   ├── Error.js

│   │   ├── Header.js

│   │   ├── Loader.js

│   │   ├── RestaurantMenu.js

│   │   ├── SkeletonCard.js

│   │   ├── Toggle.js

│   │   └── withPromotedLabel.js

│   └── utils                # Utilities and shared logic

│       ├── UserContext.js   # Context API for global state

│       ├── appStore.js      # Redux/State store setup

│       ├── constants.js     # Global constants

│       ├── resDataArray.js  # Static mock data

│       └── useOnlineStatus.js # Custom hook to check online status

  

````

  

---

  

## 🚀 Features

  

- **Component-based architecture** with reusable UI elements.  

- **React Router** for navigation (About, Contact, Menu, etc.).  

- **State Management** using Context API and a central store (`appStore.js`).  

- **Custom Hooks** like `useOnlineStatus` to track connectivity.  

- **Error Handling** with fallback `Error.js` component.  

- **HOC (Higher Order Component)** pattern with `withPromotedLabel.js`.  

- **Skeleton Loader & Shimmer UI** with `Loader.js` and `SkeletonCard.js`.  

  

---

  

## 🌐 API Integration  

  

This project fetches **live restaurant and menu data** from **Swiggy’s API** (publicly accessible endpoints).  

  

- **Restaurant Listing** → Displayed on the homepage using Swiggy’s API.  

- **Restaurant Menu** → Dynamic data rendered inside `RestaurantMenu.js`.  

- **Fallback** → Uses `resDataArray.js` (static mock data) in case API fetch fails.  

  

⚠️ **Note**: Since Swiggy’s APIs are not officially public, availability may vary depending on location or CORS restrictions.  

  

---

  

## 🛠️ Tech Stack

  

- **React 18+**  

- **JavaScript (ES6+)**  

- **Parcel** (bundler & dev server)  

- **CSS3** (global styles via `style.css`)  

- **Context API & Custom Hooks**  

  

---

  

## 📦 Installation & Setup

  

1. **Clone the repo**

```bash

git clone https://github.com/Shashanksharma218/ReactJS.git

cd ReactJS

````

  

2. **Install dependencies**

  

```bash

npm install

```

  

3. **Start development server**

  

```bash

npm start

```

  

The app will be available at **[http://localhost:1234](http://localhost:1234)** (Parcel default).

  

4. **Build for production**

  

```bash

npm run build

```

  

The optimized output will be inside the `dist/` folder.

  

---

  

## 📜 Available Scripts

  

```json

{

  "scripts": {

    "test": "jest",

    "start": "parcel index.html"

  }

}

```

  

---

  

## ⚙️ Environment Variables

  

If you connect this to an API, create a `.env` file and configure values like:

  

```

API_BASE_URL=https://api.example.com

```

  

Access inside your code via:

  

```js

process.env.API_BASE_URL;

```

  

---

  

## 📖 Learning Concepts in This Project

  

* React Component Architecture

* React Router for SPA navigation

* Context API for state sharing

* Custom Hooks for reusable logic

* Error boundaries and fallback UI

* Higher Order Components (HOCs)

* Shimmer/Skeleton loading effects

  

---

  

## 🤝 Contributing

  

Contributions are welcome!

  

1. Fork the repository.

2. Create a feature branch: `git checkout -b feature-name`.

3. Commit changes: `git commit -m 'feat: add new feature'`.

4. Push branch: `git push origin feature-name`.

5. Open a Pull Request.

  

---

  

## 📄 License

  

Currently, this project does **not** have a license. If you plan to make it open source, consider adding one (MIT, Apache-2.0, GPL, etc.).

  

---