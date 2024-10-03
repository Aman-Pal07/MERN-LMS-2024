# Learning Management System (LMS)

## Project Overview

This Learning Management System (LMS) is a web-based platform designed to facilitate the administration, documentation, tracking, reporting, and delivery of educational courses, training programs, and learning development programs. The system allows instructors to create courses, manage content, enroll students, and track their progress, while students can access learning materials, submit assignments, and view their grades.

---

## Features

- **User Authentication:** Sign-up, login, and logout functionality for both students and instructors.
- **Instructor Dashboard:**
  - Create, update, and delete courses.
  - Upload course materials (videos, PDFs, presentations, etc.).
  - Assign and grade assignments.
  - View students enrolled in courses.
- **Student Dashboard:**
  - View and enroll in available courses.
  - Access course materials.
  - Submit assignments.
  - Track progress and view grades.
- **Responsive Design:** Fully responsive, works on desktop and mobile devices.
- **Search and Filter Courses:** Easily find courses using the search and filter functionality.
  
---

## Technologies Used

- **Frontend:**
  - HTML5, CSS3, JavaScript (ES6+)
  - React.js for UI components
  - Redux for state management
  - Tailwind CSS for styling
- **Backend:**
  - Node.js with Express.js for API
  - MongoDB for database
  - JWT (JSON Web Tokens) for authentication
- **Other Tools:**
  - Vite for project bundling
  - Nodemailer for email notifications
  - Cloudinary for file uploads (if supporting media)

---

## Installation & Setup

### Prerequisites

Before running the project, make sure you have the following installed:

- [Node.js](https://nodejs.org/en/download/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [Git](https://git-scm.com/)

### Steps to Install

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/lms.git
   cd lms
   ```

2. **Install Dependencies:**

   For both frontend and backend, run:

   ```bash
   npm install
   ```

3. **Environment Variables:**

   Create a `.env` file in the root directory and set the following variables:

   ```
   MONGO_URI=your_mongo_connection_string
   JWT_SECRET=your_jwt_secret_key
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   CLOUDINARY_NAME=your_cloudinary_name
   ```

4. **Run the Project:**

   Start the backend server:

   ```bash
   npm run server
   ```

   Start the frontend development server:

   ```bash
   npm run client
   ```

   The project should now be running on:

   - Frontend: wait for deploy
   - Backend:  wait for deploy

---

## Usage

- **Instructor**:
  - Sign up or log in as an instructor.
  - Create a new course and upload content.
  - Track student progress and manage submissions.
  
- **Student**:
  - Sign up or log in as a student.
  - Browse available courses and enroll.
  - Access learning materials and submit assignments.
  


---

## Folder Structure

```bash
LMS/
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── .env
│   └── server.js
├── client/
│   ├── public/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── App.js
│   └── index.js


```

---

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Please make sure to follow the code standards and include detailed commit messages.

---

## Contact

For any inquiries or suggestions, please contact the project maintainer:

- **Email**: amannathpal@gmail.com
- **GitHub**: [@Aman-Pal07](https://github.com/your-username)
