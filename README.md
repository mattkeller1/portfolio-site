# SEO Portfolio Site

A clean, professional portfolio site for showcasing SEO case studies. Built with React and Vite.

## 🚀 Quick Start

### Prerequisites

You need Node.js installed on your computer. Download it here: https://nodejs.org/
- Click "Download LTS" (the recommended version)
- Run the installer and follow the prompts
- To verify installation, open Terminal (Mac) or Command Prompt (Windows) and type: `node --version`

### Step 1: Download and Extract

1. Download this portfolio-site folder
2. Extract it somewhere easy to find (like your Desktop or Documents)

### Step 2: Install Dependencies

Open Terminal (Mac) or Command Prompt (Windows) and navigate to the folder:

```bash
cd path/to/portfolio-site
# Example: cd Desktop/portfolio-site
```

Then install the required packages:

```bash
npm install
```

This will take 1-2 minutes. It's downloading all the tools needed to run the site.

### Step 3: Run Locally (Preview Your Site)

Start the development server:

```bash
npm run dev
```

You'll see output like:
```
  VITE v5.0.8  ready in 500 ms

  ➜  Local:   http://localhost:5173/
```

Open http://localhost:5173/ in your browser to see your site!

The site will automatically reload when you make changes.

Press `Ctrl+C` to stop the server.

## ✏️ Customizing Your Content

### Files You'll Edit:

#### 1. **src/data.js** - Your Case Studies
This is where all your case study content lives. Replace the example case studies with your own.

Each case study has:
- `id`: URL-friendly name (like 'my-first-project')
- `title`: Project title
- `company`: Client/company name
- `year`: When you did this work
- `description`: Short summary (shows on homepage)
- `metrics`: Key results (3 numbers that show impact)
- `overview`, `challenge`, `approach`, `results`: Full case study content

#### 2. **src/pages/Home.jsx** - Homepage
- Line 8-13: Change the rotating text phrases to match your skills
- Line 20-26: Update your bio and introduction
- Line 28-36: Update your social links

#### 3. **src/pages/About.jsx** - About Page
Replace all the placeholder text with your actual background, experience, and skills.

#### 4. **src/components/Navigation.jsx** - Logo
- Line 9: Change "YN" to your initials

#### 5. **index.html** - Site Title
- Line 7: Change the page title that appears in browser tabs

### Adding Images

To add images to your case studies:

1. Put image files in the `public` folder
2. In `src/data.js`, change `image: null` to `image: '/your-image.png'`

Example:
```javascript
image: '/ecommerce-screenshot.png'
```

### Changing Colors

Edit `src/index.css`, lines 8-12:
```css
:root {
  --bg-color: #f5f5f0;        /* Page background */
  --text-primary: #1a1a1a;    /* Main text color */
  --text-secondary: #666666;  /* Secondary text */
  --accent: #000000;          /* Accent color */
}
```

## 🌐 Deploying to Vercel (Making It Live)

### Option A: Deploy via Command Line (Recommended)

1. Create a free Vercel account: https://vercel.com/signup

2. Install Vercel CLI:
```bash
npm install -g vercel
```

3. From your project folder, run:
```bash
vercel
```

4. Follow the prompts:
   - Log in to Vercel
   - Confirm project settings (just press Enter for defaults)
   - Your site will deploy!

You'll get a URL like: `your-project-name.vercel.app`

### Option B: Deploy via GitHub

1. Create a GitHub account (if you don't have one)
2. Create a new repository
3. Push your code to GitHub (you can use GitHub Desktop for this)
4. Go to https://vercel.com/
5. Click "New Project"
6. Import your GitHub repository
7. Click "Deploy"

Done! Vercel will give you a live URL.

### Adding Your Custom Domain

Once deployed to Vercel:

1. Buy your domain from:
   - Namecheap (recommended): https://www.namecheap.com/
   - Google Domains: https://domains.google/
   - Cloudflare: https://www.cloudflare.com/products/registrar/

2. In Vercel dashboard:
   - Go to your project
   - Click "Settings" → "Domains"
   - Add your domain (e.g., `johnsmith.com`)
   - Copy the DNS settings Vercel provides

3. In your domain registrar:
   - Find DNS settings
   - Add the records Vercel gave you
   - Wait 10 minutes - 24 hours for DNS to update

Your site will be live at your custom domain!

## 📝 Making Updates After Deployment

Every time you want to update your live site:

1. Make your changes locally
2. Test them: `npm run dev`
3. Deploy:
   ```bash
   vercel --prod
   ```

Or if using GitHub: just push your changes and Vercel auto-deploys!

## 🛠️ Common Tasks

### Build for production locally
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

### Check for errors
```bash
npm run dev
```
Then check the Terminal for any red error messages.

## 📚 Project Structure

```
portfolio-site/
├── public/              # Static files (images go here)
├── src/
│   ├── components/      # Reusable components
│   │   ├── AnimatedText.jsx
│   │   └── Navigation.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── CaseStudy.jsx
│   │   └── About.jsx
│   ├── data.js          # ← EDIT YOUR CASE STUDIES HERE
│   ├── index.css        # Styles
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── index.html
├── package.json
└── vite.config.js
```

## 🆘 Troubleshooting

### "npm: command not found"
- Node.js isn't installed. Download from https://nodejs.org/

### Port already in use
- Another app is using port 5173
- Close other development servers or use: `npm run dev -- --port 3000`

### Changes not showing up
- Make sure you saved the file
- Check the Terminal for errors
- Try refreshing your browser with `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)

### Site looks broken
- Make sure you ran `npm install`
- Check the browser console (F12) for errors
- Make sure you didn't accidentally delete any files

## 💡 Tips

1. **Test locally first**: Always run `npm run dev` and check your changes before deploying
2. **Use real data**: Replace ALL placeholder text with your actual information
3. **Add images**: Visual case studies are more compelling
4. **Keep it simple**: Don't overcomplicate - clean and simple wins
5. **Mobile matters**: Check how it looks on your phone

## 📞 Need Help?

- Vite docs: https://vitejs.dev/
- React Router docs: https://reactrouter.com/
- Vercel docs: https://vercel.com/docs

---

## 🎯 Next Steps After Setup

1. ✏️ Edit `src/data.js` with your 3 case studies
2. 🎨 Update colors in `src/index.css` if desired
3. 📝 Customize `src/pages/Home.jsx` and `src/pages/About.jsx`
4. 🖼️ Add images to `public/` folder
5. 🚀 Deploy to Vercel
6. 🌐 Connect your custom domain
7. 📱 Test on mobile
8. ✅ Apply to jobs!

Good luck! 🎉
