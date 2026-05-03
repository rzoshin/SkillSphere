# SkillSphere

SkillSphere is a near full-stack online learning platform where users can explore and enroll in industry-focused courses across Web Development, Design, Data Science, and more. The backend is powered by MongoDB for data storage, with Next.js API routes handling server-side logic. The project was built entirely from scratch with no provided Figma design — every layout decision, color choice, and UI pattern was brainstormed and implemented independently, making it a fully self-directed design and development effort.

## 🔗 Links

- **Live Site:** [https://skill-sphere-amber.vercel.app](https://skill-sphere-amber.vercel.app)
- **GitHub Repo:** [https://github.com/rzoshin/SkillSphere](https://github.com/rzoshin/SkillSphere)

## ✨ Key Features

### 🔐 Authentication (Email & Google)
SkillSphere supports full user authentication powered by BetterAuth. Users can register and log in with their email and password, or sign in instantly using their Google account via OAuth. Sessions are managed securely, and the auth flow is smooth and user-friendly with proper error handling throughout.

### 🛡️ Protected Routes
Certain pages are only accessible to logged-in users. If an unauthenticated user tries to visit a protected route, they are automatically redirected to the login page. This was implemented to ensure a secure and logical user experience across the app.

### 🔍 Course Search
Users can search for courses by name or keyword using a built-in search feature. This makes it easy to find relevant content quickly without having to manually scroll through the entire catalog. The search is wired to the MongoDB backend, so results are pulled from real data.

### 🗄️ MongoDB Backend
SkillSphere uses MongoDB as its database to store and serve course data. Next.js API routes act as the backend layer, handling data fetching between the database and the frontend. This makes SkillSphere a near full-stack application — not just a static frontend.

### 📚 Course Browsing
Users can explore a catalog of courses across multiple categories. The homepage highlights popular courses and gives users a quick entry point to start learning. The course listing is clean, organized, and easy to navigate.

### 🎠 Interactive Course Carousel
The homepage features a dynamic course carousel built with Swiper.js, allowing users to scroll through featured or popular courses in a smooth, touch-friendly slider. This adds an engaging, app-like feel to the browsing experience.

### 🔔 Toast Notifications
User actions like logging in, logging out, or errors are communicated through clean toast notifications powered by React Toastify. This gives the app a polished, responsive feel without interrupting the user's flow.

### 🚫 Custom 404 Page
Any invalid or non-existent URL renders a custom Not Found page instead of a generic browser error. This keeps the experience consistent and on-brand even when something goes wrong.

### ⏳ Loading Spinner
While data is being fetched, a loading spinner is shown to the user. This prevents blank screens and gives clear visual feedback that the app is working in the background.

### 📱 Fully Responsive Design
The entire UI is built with Tailwind CSS and is fully responsive across mobile, tablet, and desktop screen sizes. No Figma file was provided — the design was conceptualized and built from scratch, with careful attention to layout, spacing, and visual hierarchy.

## 🛠️ Tech Stack

- **Framework:** Next.js
- **Database:** MongoDB
- **Styling:** Tailwind CSS
- **UI Libraries:** DaisyUI, HeroUI
- **Authentication:** BetterAuth
- **Other Packages:** Swiper.js, React Toastify
