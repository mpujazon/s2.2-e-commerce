# Sprint 2.2 - E-Commerce

## 📄 Description

ShopNow is a functional e-commerce web application built with vanilla JavaScript. This project demonstrates modern web development practices including DOM manipulation, shopping cart management, form validation, and discount promotions. Users can browse products across different categories (grocery, beauty, and clothes), add items to their cart, and complete checkout with form validation.

![Demo](./images/screenshot.webp)
## 📁 Project Structure

```
s2.2-e-commerce/
├── index.html           # Main shop page
├── checkout.html        # Checkout and form validation page
├── css/
│   └── styles.css       # Bootstrap styles
├── js/
│   ├── data.js          # Product data and catalog
│   ├── index.js         # Manager
│   ├── logic.js         # Logic Functions
│   ├── ui.js            # UI Functions
│   └── checkout.js      # Order summary and form validation
├── images/              # Product images and assets
└── README.md
```

## 💻 Technologies

- HTML5
- CSS3
- JavaScript (ES6+)
- Bootstrap 5.3.0

## 📋 Requirements

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Code editor (VS Code recommended)

## 🛠️ Installation

Clone this repository:
```bash
git clone https://github.com/mpujazon/s2.2-e-commerce.git
```

Navigate to the project directory:
```bash
cd s2.2-e-commerce
```

## ▶️ Execution

Use a local development server:
```bash
# Using Node.js (http-server)
npx http-server
```

Then navigate to `http://localhost:8080` in your browser.

## ✨ Features

- **Product Catalog**: Browse products organized by categories (Grocery, Beauty, Clothes)
- **Shopping Cart**: Add/remove products with quantity management
- **Promotions**: Automatic discount application based on quantity
- **Cart Modal**: Real-time cart updates with product details
- **Checkout**: Complete form validation for customer information
- **Responsive Design**: Mobile-friendly interface with Bootstrap
- **Cart Button State Management**: Automatically disable or enable cart buttons based on whether the cart is empty

## 🧠 What I've Learned

- **DOM Manipulation**: Dynamic content updates and event handling
- **Array Methods**: Using `find()`, `filter()`, `forEach()` for data management
- **ES6 Modules**: Importing/exporting data between files
- **Form Validation**: Using regex patterns for input validation
- **Shopping Cart Logic**: Managing product quantities and calculating totals
- **Promotional Discounts**: Implementing business logic for special offers
- **Conditional UI Updates**: Managing button states dynamically based on application state

## 🤝 Contributions

Contributions are welcome! Please follow these steps to contribute:

- Fork the repository
- Create a new branch: `git checkout -b feature/NewFeature`
- Make your changes and commit them: `git commit -m 'Add New Feature'`
- Push the changes to your branch: `git push origin feature/NewFeature`
- Create a pull request