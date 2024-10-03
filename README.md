
# 📁 File Storage System with Express, Prisma, Passport.js, and Supabase

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=for-the-badge)
![Express](https://img.shields.io/badge/Express.js-404D59?logo=express&style=for-the-badge)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?logo=prisma&style=for-the-badge)
![Passport.js](https://img.shields.io/badge/Passport.js-34E27A?logo=passport&style=for-the-badge)
![Multer](https://img.shields.io/badge/Multer-FF6F61?logo=multer&style=for-the-badge)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?logo=supabase&style=for-the-badge)

## 🌟 Overview

The **File Storage System** is a web application built using **Express.js** and **Prisma** to allow authenticated users to securely upload, view, and manage files and folders. It leverages **Passport.js** for session-based authentication, and file uploads are managed using **Multer** middleware. Files are stored in the filesystem initially, but the app integrates with **Supabase** for storing files in the cloud.

This project demonstrates key features such as user authentication, session persistence, file uploads, folder management, and file viewing/downloading capabilities.

---

## 🚀 Key Features

### 🔐 Authentication and Session Management
- **Passport.js** handles session-based authentication.
- **Prisma Session Store** is used to persist sessions in the database, ensuring reliability even after server restarts.
  
### 📂 Folder Management
- Users can **create, update, and delete folders**.
- Files can be organized into these folders for easier management.

### 📤 File Upload and Management
- Files are uploaded through a simple form integrated with **Multer** middleware.
- Files are saved locally in the filesystem and later uploaded to **Supabase Storage**.
- Files are associated with their respective folders in the database.

### 🔍 File Details and Download
- Users can view specific file details such as:
  - **File name**
  - **Size**
  - **Upload time**
- Files can be **downloaded** via a dedicated button.

### ☁️ Cloud Storage (Supabase)
- Once all core features are working, files are uploaded to **Supabase**.
- File URLs are saved in the database for easy access and downloads.

---

## 🛠️ Tech Stack

### Backend
- **[Express.js](https://expressjs.com/)**: Fast, unopinionated, minimalist web framework for Node.js.
- **[Prisma](https://www.prisma.io/)**: Next-generation ORM for managing the database layer with ease.
- **[Passport.js](http://www.passportjs.org/)**: Simple and easy-to-use authentication middleware for Node.js.
- **[Multer](https://www.npmjs.com/package/multer)**: Middleware for handling `multipart/form-data`, primarily used for file uploads.
- **[Supabase](https://supabase.com/)**: Cloud storage service for scalable and secure file hosting.

### Database
- **Prisma ORM**: For managing database schemas and queries.
- **PostgreSQL**: Prisma supports PostgreSQL for database storage and session persistence.

### Frontend
- **EJS (Embedded JavaScript)**: A simple templating engine for rendering views.

---

## 🗂️ Folder Structure

```bash
file-storage/
│
├── prisma/                 # Prisma schema and migrations
├── views/                  # EJS templates for the frontend
├── routes/                 # Express routes for authentication, file, and folder management
├── controllers/            # Controllers for handling logic related to files, folders, etc.
├── middlewares/            # Middlewares like Multer for file uploads, authentication check
├── app.js                  # Main Express app setup
├── .env                    # Environment variables
├── README.md               # Project documentation
└── package.json            # Node dependencies and scripts
```

---

## ⚙️ Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Herimanjaka007/file-storage.git file-storage
   cd file-storage
   ```

2. **Install dependencies**:
   ```bash
   npm i
   ```

3. **Set up Prisma**:
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```

4. **Configure environment variables**:
   Create a `.env` file and add your database connection string, Supabase credentials, and other necessary environment variables:
   ```bash
   DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
   SUPABASE_URL="https://your-supabase-url"
   SUPABASE_KEY="your-supabase-key"
   SESSION_SECRET="your-session-secret"
   ```

5. **Run the development server**:
   ```bash
   npm run dev
   ```
---
