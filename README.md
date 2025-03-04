# Shopify Ad Uploader

## Overview
Shopify Ad Uploader is a web application that allows users to submit Shopify product URLs and images for advertisement purposes. The frontend is built using **React (TypeScript)** and **Material UI**, while the backend is powered by **FastAPI**.

## Features
- **User Authentication**: Users must log in before accessing the uploader.
- **Secure Session Management**: Uses `sessionStorage` to manage authentication.
- **Product Upload**: Users can upload a Shopify product URL along with an image.
- **Responsive UI**: Designed with Material UI for a clean, modern look.
- **API Integration**: Communicates with a FastAPI backend to store product details.

---

## 🚀 Setup Guide

### 1. Clone the Repository
```sh
  git clone https://github.com/yourusername/shopify-ad-uploader.git
  cd shopify-ad-uploader
```

### 2. Install Dependencies
Ensure you have **Node.js** installed (recommended version `>=16.x.x`).
```sh
  npm install
```

### 3. Start the Frontend
```sh
  npm start
```
The application will be available at `http://localhost:3000`.

### 4. Start the Backend (FastAPI)
Ensure **Python** (`>=3.8`) is installed. Navigate to the backend directory:
```sh
  cd backend
  pip install -r requirements.txt
  uvicorn main:app --reload
```
The API will be available at `http://localhost:8000`.

---

## 🔥 Usage Guide

### 1. Login
- Visit `http://localhost:3000`.
- Enter your credentials and click **Sign In**.
- Upon successful login, you will be redirected to `/upload`.

### 2. Upload a Product
- Enter a **Shopify product URL**.
- Click **Upload Image** and select a product image.
- Click **Submit** to send the data to the backend.
- A success notification will appear upon completion.

### 3. Logout
- Click the **Logout** button to remove session data and return to the login page.

---

## 📡 API Documentation

### **1. User Authentication**
**POST** `/api/v1/auth/login`
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```
**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI..."
}
```

### **2. Submit a Product**
**POST** `/api/v1/save-product`
```json
{
  "user_id": "12345",
  "url": "https://shopify.com/products/example",
  "image": "data:image/png;base64,iVBORw0KGg..."
}
```
**Response:**
```json
{
  "message": "Product saved successfully",
  "data": {
    "user_id": "12345",
    "url": "https://shopify.com/products/example",
    "image": "uploaded_image_url"
  }
}
```

---

## 💡 Contributing
We welcome contributions!

---

## 📜 License
This project is licensed under the **MIT License**.

