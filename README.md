# Browser Supply Clone - Front End Challenge

This repository contains a high-fidelity clone of the [Browser Supply](https://browser.supply/) homepage. Built to satisfy the requirements of the Front End Test Batch (July 26).

## Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS (Vanilla CSS approach where necessary)
- **Animations:** GSAP & Lenis (Smooth Scrolling)
- **Language:** TypeScript

## Setup Instructions
1. Clone the repository
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`
4. Build for production: `npm run build`

---

## Evaluation Questions & Answers

### 1. If you use JSON data, how would you structure it to support future scalability and maintainability?
To support future scalability, I would structure JSON data relationally rather than deeply nesting it. For example, separating `templates`, `categories`, and `authors` into separate JSON arrays/files. This mimics a normalized database structure, making it easier to migrate to a real database (like PostgreSQL) in the future without completely rewriting the frontend data consumption logic. Additionally, I would strongly type the JSON structures using TypeScript interfaces to ensure maintainability and catch errors during compile time.

### 2. If you decide to create your own API, which technology or framework would you use and why?
*(Note: I have actually implemented a simple API in this project under `src/app/api/data/route.ts` as per the "strong plus" requirement).* 
I chose **Next.js Route Handlers** (App Router) because it seamlessly integrates frontend and backend within a single repository (Full-stack architecture). It runs on edge/serverless functions, which means zero server maintenance, incredibly fast cold starts, and out-of-the-box compatibility with Vercel deployment. If the backend needs to scale massively and independently of the frontend in the future, I would migrate to **NestJS** or **Go (Golang)** for better performance, strict typing, and robust microservices capabilities.

### 3. How would you configure a custom domain (for example, www.clientwebsite.com) to point to your deployed project on Vercel?
1. Go to the Vercel Project Dashboard and navigate to **Settings > Domains**.
2. Enter the custom domain (`www.clientwebsite.com`) and click **Add**.
3. Vercel will provide DNS records (typically a `CNAME` record pointing to `cname.vercel-dns.com` or an `A` record).
4. Log into the domain registrar (e.g., GoDaddy, Namecheap) and update the DNS settings with the records provided by Vercel.
5. Wait for DNS propagation. Vercel will automatically provision a free SSL certificate via Let's Encrypt once verified.

### 4. If your project requires an admin panel to manage the website content, what technologies and approaches would you choose?
Given my extensive background with WordPress, I would strongly consider using **Headless WordPress** (via WP REST API or WPGraphQL) if the client is already familiar with the classic WP dashboard. Alternatively, for a more modern JS-native stack, I would use a **Headless CMS** like **Sanity.io** or **Payload CMS**. 
- **Why:** Building a custom admin panel from scratch is time-consuming and often reinventing the wheel. Headless CMS solutions provide a highly customizable, secure, and user-friendly admin UI out-of-the-box.
- **Integration:** I would fetch the content from the CMS directly into Next.js React Server Components (RSC) to ensure the data is pre-rendered at build time (SSG) or incrementally regenerated (ISR) for optimal performance.

### 5. What techniques would you use to ensure the website loads quickly even on slow internet connections?
- **Server-Side Rendering (SSR) & Static Site Generation (SSG):** Pre-rendering HTML on the server so the browser receives a fully formed document immediately, without waiting for JavaScript to download and execute.
- **Code Splitting & Lazy Loading:** Next.js automatically code-splits routes. I would also dynamically import heavy components or libraries that are not needed above the fold.
- **Preloading & Prefetching:** Utilizing `<link rel="preload">` for critical fonts/assets and leveraging Next.js's native `<Link>` prefetching for instant page transitions.
- **Asset Minification & Compression:** Ensuring all CSS, JS, and HTML are minified, and serving assets via a global CDN with Brotli/Gzip compression.

### 6. If you implement a form, how would you securely send the data to the backend server?
1. **HTTPS (TLS/SSL):** Ensure all data transmitted between the client and server is encrypted in transit.
2. **CSRF Protection:** Implement Cross-Site Request Forgery tokens if relying on cookie-based sessions.
3. **Data Validation & Sanitization:** Use a library like `Zod` on the frontend for immediate user feedback, and **always** re-validate and sanitize the exact same schema on the backend to prevent SQL injection or XSS payloads.
4. **Rate Limiting:** Implement rate limiting on the API endpoint to prevent spam or DDoS attacks.

### 7. What strategies do you use to optimize images for performance without sacrificing quality?
- **Next.js `<Image>` Component:** It automatically serves images in modern formats like WebP or AVIF, resizes them based on the device screen size, and lazy-loads them natively. *(Note: For this specific clone, some standard `<img>` tags were intentionally used to match the exact DOM structure and GSAP animation requirements of the reference site, but `<Image>` is the production standard).*
- **Proper Sizing:** Generating multiple sizes (srcsets) so mobile devices don't download 4K desktop images.
- **Compression:** Compressing raw assets using tools like TinyPNG or squoosh.app before adding them to the repository.
- **Blur-up Placeholders:** Displaying a tiny base64 blurred placeholder while the high-resolution image loads to improve perceived performance and Core Web Vitals (preventing layout shifts).
