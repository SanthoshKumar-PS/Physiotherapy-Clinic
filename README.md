# 🏥 Gayathri Physiotherapy Clinic Website

A modern, responsive physiotherapy clinic website built with **React + Vite** and deployed on **Vercel**.  
The project showcases the clinic’s services, patient testimonials, appointment booking, FAQs, and more — all in a clean and highly optimized UI.

Live Website: **https://gayathri-physiotherapy-clinic.vercel.app/**

---

## 🚀 Features

### ⭐ Hero Section  
A clean, welcoming hero banner that highlights the clinic’s mission and services.

### ⭐ About Section  
Information about the clinic, physiotherapists, and their trusted experience.

### ⭐ Services Section  
List of treatments offered, with clean cards and animations.

### ⭐ How It Works  
Explains the consultation and therapy process in simple steps.

### ⭐ Testimonials  
Real patient experiences displayed in a carousel/slider format.

### ⭐ FAQ  
A collapsible list answering common queries.

### ⭐ Contact + Appointment Booking  
Built using **EmailJS**:
- Users submit their name, email, phone, and message.
- An appointment request is delivered directly to the clinic email.
- Form includes validation + proper success/error UI.

### ⭐ Footer  
Social links, address, phone number, timings.

---

## 📂 Pages / Components

The homepage is built using the following components:

```
<Hero />
<About />
<Services />
<HowItWorks />
<Testimonials />
<Contact />
<FAQ />
<Footer />
```

Each component is structured for reusability, responsiveness, and SEO optimization.

---

## 🛠️ Tech Stack

| Category | Tools Used |
|---------|------------|
| Frontend | React, Vite, Tailwind CSS |
| Deployment | Vercel |
| Animations | Framer Motion |
| Form Handling | EmailJS |
| Icons | Lucide Icons |

---

## 📧 Appointment Booking (EmailJS)

The contact section uses **EmailJS** to send appointment requests instantly to the clinic:

### Steps:
1. Collect user details  
2. Validate fields  
3. Send the details to clinic email via EmailJS  
4. Show success / error toast message  

This improves communication speed and appointment workflow.

---

## ▶️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/SanthoshKumar-PS/Physiotherapy-Clinic.git
cd gayathri-physiotherapy-clinic
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup EmailJS
Create a `.env` file:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 4. Run Development Server

```bash
npm run dev
```

### 5. Build for Production

```bash
npm run build
```

---

## 📄 License  
This project is built for Gayathri Physiotherapy Clinic and is **not permitted** for redistribution without permission.

---

## 🙋 Author

**Santhosh Kumar P S**

-   Email: **santhoshkumarsakthi2003@gmail.com**
-   GitHub: **https://github.com/SanthoshKumar-PS**
---
