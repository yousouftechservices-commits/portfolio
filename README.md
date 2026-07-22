# Yousouf Tech Services

Personal portfolio site for Yusuf Abubakar — Cloud Engineer, Front-End Web
Developer, and AWS Cloud Practitioner.

**Live sections:** Hero · About · Skills · Services · Why Choose Me ·
Featured Projects · Testimonials · Certifications · Contact

## Stack

Static site — plain HTML5, CSS3, and vanilla JavaScript. No build step
required.

- [AOS](https://michalsnik.github.io/aos/) for scroll animations
- [Font Awesome 6](https://fontawesome.com/) for icons
- [Google Fonts](https://fonts.google.com/): Space Grotesk, Inter, JetBrains Mono
- [Formspree](https://formspree.io/) for the contact form backend

## Project structure

```
.
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   ├── yusuf.jpg
│   ├── favicon.svg
│   └── projects/
│       ├── yousouf-tech.png
│       ├── school-bill.png
│       └── money-app.png
└── backend-scripts/
    └── app.py        # unrelated AWS/S3 helper script — not used by the site
```

## Running locally

No build tools needed. Either open `index.html` directly in a browser, or
serve it locally for a closer-to-production feel:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploying

Any static host works: GitHub Pages, Netlify, Vercel, or an S3 bucket with
static website hosting enabled.

## Notes

- The contact form posts to a Formspree endpoint — update the `action` URL
  in `index.html` if the Formspree form ID changes.
- `backend-scripts/app.py` is a standalone script for uploading a product
  catalog to S3. It isn't wired into this site and can be moved to its own
  repository if it's still needed.
