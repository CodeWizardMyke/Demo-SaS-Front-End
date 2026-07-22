# 🚀 Manager.IO ERP

A modern, modular ERP (Enterprise Resource Planning) system built to demonstrate real-world Full Stack development skills. This project serves as my main portfolio application, showcasing scalable architecture, clean code practices, REST API development, authentication, file management, and a responsive user interface.

> **Status:** 🚧 Active Development

---

# 📖 About the Project

Manager.IO ERP is designed as a complete business management platform that can be adapted to different types of companies.

The current focus is on product management, inventory organization, categories, brands, and media management, but the architecture was planned to support future modules such as sales, customers, suppliers, financial management, reports, and analytics.

The project prioritizes:

* Clean and maintainable architecture
* Reusable components
* Scalable backend structure
* Responsive interface
* Performance
* Security
* Modern UI/UX

---

# ✨ Current Features

## Authentication

* Secure JWT authentication
* Login system
* Session validation
* Protected routes

---

## Dashboard

* Product overview
* Statistics cards
* Recent activity
* Category distribution
* Quick access actions
* Dashboard cache

---

## Product Management

* Create products
* Update products
* Delete products
* Product search
* Pagination
* Product status
* Detailed product information

---

## Product Media

* Multiple image uploads
* Thumbnail management
* Marketing images
* Image preview
* Image removal
* Product gallery
* Future support for videos

---

## Category Management

* Create categories
* Update categories
* Delete categories
* SVG icon selection
* Validation before deletion

---

## Brand Management

* Brand CRUD
* Brand association with products

---

## Dynamic Specifications

Products support dynamic JSON specifications, allowing each category to have different attributes without changing the database schema.

Example:

```json
{
  "screen": "6.7 inches",
  "processor": "Snapdragon 8 Gen 3",
  "memory": "12GB",
  "storage": "512GB"
}
```

This makes the ERP flexible enough to manage electronics, furniture, clothing, industrial products, and many other categories.

---

# 🏗 Architecture

The project follows a modular architecture to keep the codebase organized and scalable.

```
Frontend
│
├── Components
├── Context API
├── Hooks
├── Services
├── Utils
├── Cache
├── Layouts
└── Pages

Backend
│
├── Controllers
├── Models
├── Routes
├── Middlewares
├── Services
├── Helpers
├── Uploads
└── Database
```

---

# 🛠 Tech Stack

## Frontend

* React.js
* React Router DOM
* Axios
* Context API
* CSS3
* React Icons

## Backend

* Node.js
* Express.js
* Sequelize ORM
* MySQL
* JWT Authentication
* Multer

---

# 📂 Database

Current entities include:

* Users
* Products
* Categories
* Brands
* Product Images
* Hidden Products

The database was designed to support future expansion without requiring major structural changes.

---

# 🔒 Security

* JWT authentication
* Protected endpoints
* Request validation
* File upload validation
* Error handling
* SQL injection protection through Sequelize

---

# 🎨 User Interface

The interface follows a clean dashboard style inspired by modern management systems.

Features include:

* Responsive layout
* Workspace navigation
* Sidebar modules
* Dashboard cards
* Image gallery
* Product previews
* Modal components
* Reusable forms

---

# 🚀 Planned Features

### Inventory

* Stock control
* Product movement
* Purchase entries
* Inventory adjustments

### Sales

* Orders
* Invoices
* Customer management
* Discounts
* Promotions

### Financial

* Cash flow
* Accounts payable
* Accounts receivable
* Financial reports

### Reports

* Sales reports
* Product reports
* Category reports
* Revenue analysis

### AI Features

Future versions will include AI-powered tools such as:

* Sales insights
* Inventory forecasting
* Product recommendations
* Intelligent dashboard analytics

---

# 📸 Screenshots

Screenshots and GIF demonstrations will be added as development progresses.

---

# ⚙ Installation

Clone the repository:

```bash
git clone https://github.com/CodeWizardMyke/manager-io.git
```

Install dependencies:

Frontend

```bash
npm install
```

Backend

```bash
npm install
```

Run the project:

Frontend

```bash
npm start
```

Backend

```bash
npm run dev
```

---

# 🤝 Contributing

Contributions, suggestions, and feedback are always welcome.

Feel free to open an Issue or submit a Pull Request.

---

# 👨‍💻 Author

**Myke William**

Dev Full Stack Web Developer

* GitHub: https://github.com/CodeWizardMyke
* LinkedIn: https://linkedin.com/in/codewizardmyke
* Portfolio: https://portfolio-web-omega-mauve.vercel.app

---

# ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub. It helps support the project and motivates future development.
