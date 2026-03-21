# QUICK SETUP GUIDE - START HERE! 👋

## What You Got
A complete portfolio website that's ready to customize with your SEO case studies.

## 5-Minute Setup

### 1. Install Node.js (One-time setup)
- Go to: https://nodejs.org/
- Download the LTS version (left button)
- Install it (just click next through everything)
- To check it worked: Open Terminal/Command Prompt and type `node --version`

### 2. Get the Site Running
Open Terminal/Command Prompt and:

```bash
# Navigate to this folder (change path to where you saved it)
cd path/to/portfolio-site

# Install everything needed (takes 1-2 minutes)
npm install

# Start the site!
npm run dev
```

Open http://localhost:5173/ in your browser - you should see the site!

### 3. Customize Your Content

**MAIN FILE TO EDIT: `src/data.js`**

This is where your case studies live. Open it and you'll see 3 example case studies.

**Replace each one with your real projects:**
- Change the title, company, description
- Update the metrics with your actual results
- Fill in the overview, challenge, approach, and results sections

**OTHER FILES TO UPDATE:**
- `src/pages/Home.jsx` (lines 8-13): Your animated intro text
- `src/pages/Home.jsx` (lines 20-36): Your bio and social links  
- `src/pages/About.jsx`: Your full about section
- `index.html` (line 7): Browser tab title

### 4. Deploy to Vercel (Make it live!)

```bash
# Install Vercel (one-time)
npm install -g vercel

# Deploy!
vercel
```

Follow the prompts (just hit Enter for most questions).

You'll get a live URL like: `your-name.vercel.app`

### 5. Add Your Domain (Optional)

1. Buy domain ($10-15/year) from:
   - Namecheap.com (easiest)
   - domains.google.com
   - cloudflare.com/products/registrar

2. In Vercel dashboard (vercel.com):
   - Click your project
   - Settings → Domains
   - Add your domain
   - Copy the DNS settings

3. In your domain registrar:
   - Find "DNS Settings"
   - Paste in what Vercel gave you
   - Wait 10 mins - 24 hours

Done! Your site is at your custom domain.

## Need the Full Guide?
Check out `README.md` for detailed explanations of everything.

## Files You'll Actually Edit:
- ✏️ `src/data.js` - ALL your case study content
- 🏠 `src/pages/Home.jsx` - Homepage intro
- 👤 `src/pages/About.jsx` - About page
- 🎨 `src/index.css` - Colors (optional)
- 📸 `public/` folder - Put images here

## Updating After Launch

Make changes → Save → Run:
```bash
vercel --prod
```

Your live site updates in ~30 seconds!

---

That's it! You're ready to go. 🚀

**Timeline:**
- Day 1: Setup + customize with your info (2-3 hours)
- Day 2-3: Write your 3 case studies
- Day 4: Deploy + test
- Day 5: Buy domain, connect it, done!
