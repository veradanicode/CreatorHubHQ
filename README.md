# CreatorHub 🚀  
**One link. All your creations.**  

CreatorHub is a **modern link-in-bio platform for content creators** — writers, YouTubers, streamers, podcasters, musicians, designers, and more.  
Built with **React.js (frontend)**, **Node.js/Express (backend)**, and **Storyblok CMS**, it gives creators a customizable hub to showcase everything they do in one place.  

---

## ✨ Features  
- 🎨 **Customizable Pages** – templates tailored for creators (bio, portfolio, project hub).  
- 🔗 **One-Link Sharing** – showcase socials, YouTube, Medium, Twitch, Substack, Spotify, etc.  
- ⚡ **Powered by Storyblok** – creators manage content visually, no coding required.  
- 📊 **Analytics (backend)** – track clicks and engagement for links.  
- 🔐 **User Accounts (backend)** – creators can sign up, log in, and manage their hub.  
- 🌍 **Fast & Responsive** – optimized for mobile and desktop.  

---

## 🛠 Tech Stack  

**Frontend**  
- [React.js](https://reactjs.org/)  
- [Tailwind CSS](https://tailwindcss.com/)  

**Backend**  
- [Node.js](https://nodejs.org/) + [Express](https://expressjs.com/)  
- [MongoDB](https://www.mongodb.com/) or Firebase (for creator accounts + analytics)  

**CMS**  
- [Storyblok](https://www.storyblok.com/) (content management)  

**Deployment**  
- Frontend: Vercel / Netlify  
- Backend: Render / Railway / Heroku  

---

## 🚀 Getting Started  

### 1️⃣ Clone the Repo  
```bash
git clone https://github.com/your-team/creatorhub.git
```
```bash
cd creatorhub
```
2️⃣ Setup Frontend
```bash
cd frontend
```
```bash
npm install
```
```bash
npm run dev
```

Frontend runs on http://localhost:3000

3️⃣ Setup Backend
```bash
cd backend
```
```bash
npm install
```
```bash
npm run dev
```
Backend runs on http://localhost:5000

4️⃣ Environment Variables
---
Create .env.local in frontend/:

env
```bash
STORYBLOK_API_TOKEN=your_token_here
NEXT_PUBLIC_API_URL=http://localhost:5000
```
Create .env in backend/:

env
```bash
MONGO_URI=your_database_url
JWT_SECRET=supersecret
PORT=500
```
📂 Project Structure
---
```bash
Copy code
creatorhub/
│── frontend/           # Next.js app
│   ├── src/
│   │   ├── components/ # UI components
│   │   ├── pages/      # routes
│   │   ├── utils/      # storyblok client
│   ├── package.json
│
│── backend/            # Express app
│   ├── src/
│   │   ├── routes/     # API endpoints (auth, analytics)
│   │   ├── models/     # database models
│   │   ├── controllers/
│   │   └── index.js
│   ├── package.json
│
│── docs/               # pitch deck, diagrams, hackathon notes
│── .env.example        # shared env variables
│── README.md 
```
👥 Team
---
```bash
Name	Role	GitHub
Vera Daniel	Backend Dev/Team Lead	@veradanicode
Akinola Bright	Frontend Dev	@Brightdotdev
Anyia Favour	mobile Dev	@favjoyce
```

🎯 Hackathon Vision
---
“CreatorHub empowers creators with a single, beautiful hub for all their work — backed by analytics and customization, making it easier for fans to discover, engage, and connect.”

