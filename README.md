# Sakshi Web Studio

> **Design. Develop. Launch.**  
> *Professional Websites for Small Businesses*

A modern, production-ready React SPA built for **Sakshi Web Studio** — a boutique web development brand helping local businesses (salons, cafes, restaurants, event decorators, photographers, boutiques, gyms, coaching classes, hotels, and consultants) establish a trustworthy, central online presence.

---

## 🚀 Tech Stack

- **React.js** (v18.3)
- **Vite** (v5.4)
- **Tailwind CSS** (v3.4)
- **Framer Motion** (v11.5)
- **React Router DOM** (v6.26)
- **React Hook Form** (v7.53)
- **Lucide React** (icons)
- **Vercel** compatible SPA architecture

---

## 📁 Project Structure

```text
├── public/
│   ├── favicon.svg              # Custom studio monogram favicon
│   └── robots.txt               # SEO crawler directives
├── src/
│   ├── config/
│   │   └── siteConfig.js        # ★ CENTRAL CONFIG: All contact info, links, placeholders
│   ├── data/
│   │   ├── categories.js        # Business categories for Who We Help
│   │   ├── pricing.js           # Starting packages & pricing disclaimer
│   │   ├── process.js           # 6-step project delivery timeline
│   │   ├── projects.js          # Real projects (Mudra Event, Hotel Tejas, Smart Mock Interview)
│   │   ├── services.js          # 6 core web services
│   │   └── whyUs.js             # 6 value principles
│   ├── components/
│   │   ├── BrowserMockup.jsx    # Hero desktop browser window demo preview
│   │   ├── Button.jsx           # Polymorphic accessible button with variants
│   │   ├── CaseStudyModal.jsx   # Quick-view case study modal
│   │   ├── DynamicIcon.jsx      # Tree-shaken icon mapper
│   │   ├── Footer.jsx           # Studio footer with navigation & social links
│   │   ├── Navbar.jsx           # Fixed responsive navbar with active spy & mobile drawer
│   │   ├── PricingCard.jsx      # Package card with feature checkmarks
│   │   ├── ProjectCard.jsx      # Project card with preview & links
│   │   ├── ProjectPreviewMockup.jsx # Custom SVG/CSS preview mockups for real projects
│   │   ├── SectionHeading.jsx   # Standardized section headings
│   │   ├── ServiceCard.jsx      # Service card with deliverables list
│   │   └── WhatsAppButton.jsx   # Floating WhatsApp button with pre-filled message
│   ├── sections/
│   │   ├── Hero.jsx             # Hero section with headline and demo browser
│   │   ├── TrustStrip.jsx       # Value strip (Mobile Friendly, Fast Deployment...)
│   │   ├── Services.jsx         # What I Can Build For Your Business
│   │   ├── WhoWeHelp.jsx        # Built for Small Businesses & social comparison
│   │   ├── WhyChooseUs.jsx      # 6 honest reasons to choose the studio
│   │   ├── Process.jsx          # How It Works horizontal/vertical timeline
│   │   ├── Portfolio.jsx        # Selected Work showcase
│   │   ├── Pricing.jsx          # Transparent Starting From packages
│   │   ├── CTA.jsx              # High-contrast action banner
│   │   ├── About.jsx            # Founder story & honest tech stack
│   │   └── Contact.jsx          # React Hook Form with validation & WhatsApp backup
│   ├── pages/
│   │   ├── Home.jsx             # Main single-page application
│   │   ├── ProjectDetails.jsx   # Dedicated deep-dive Case Study route (/project/:slug)
│   │   └── NotFound.jsx         # 404 handler
│   ├── App.jsx                  # Main app with routing & accessibility skip link
│   ├── main.jsx                 # Entry point
│   └── index.css                # Tailwind directives & base styles
├── tailwind.config.js           # Theme colors (navy, brand, charcoal, surface)
├── vite.config.js               # Rollup code-splitting chunks
├── vercel.json                  # Vercel rewrite rules for React Router SPA
└── package.json
```

---

## 🛠️ Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```
Creates an optimized, tree-shaken production build in `dist/`.

### 4. Preview the Production Build
```bash
npm run preview
```

---

## ⚙️ How to Update Business Information

All business details, contact information, and social links are centralized in a single file:
**`src/config/siteConfig.js`**

Open `src/config/siteConfig.js` and replace the placeholders:
```javascript
export const siteConfig = {
  // Replace these with your real details:
  contact: {
    whatsapp: "919876543210",       // Your phone number without + or spaces
    whatsappDisplay: "+91 98765 43210",
    email: "contact@sakshiwebstudio.com",
    location: "Pune, Maharashtra, India",

    instagram: "https://instagram.com/your_handle",
    linkedin: "https://linkedin.com/in/your_profile",
    github: "https://github.com/your_username",
  },
  
  // Optional: Connect free email forwarding for the contact form
  // Sign up free at https://web3forms.com or https://formspree.io
  formEndpoint: "https://api.web3forms.com/submit",
};
```

---

## 🌐 Deploying to Vercel

The repository is already configured with `vercel.json` for React Router client-side rewrites.

### Method 1: Via GitHub (Recommended)
1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "Update studio configuration"
   git remote add origin https://github.com/YOUR_USERNAME/sakshi-web-studio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **Add New** → **Project**.
4. Import your `sakshi-web-studio` GitHub repository.
5. Framework Preset will automatically detect **Vite**.
6. Click **Deploy**. Your website will be live in ~30 seconds with automatic SSL and continuous deployment!

### Method 2: Via Vercel CLI
```bash
npx vercel
```
Follow the interactive prompt to deploy immediately.

---

## 📄 License
© 2026 Sakshi Web Studio. All rights reserved.
