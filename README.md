# TerraSight Consultancy Website

A modern, professional website for a Geology, Geospatial & Hydrogeology Consultancy.

## Features

- **Clean, Professional Design**: Earth-tone color palette with geology-inspired visuals
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Single-Page Layout**: Smooth scrolling navigation between sections
- **SEO Optimized**: Proper meta tags, semantic HTML, and heading structure
- **Performance Focused**: Lightweight vanilla HTML/CSS/JavaScript with no dependencies

## Sections

1. **Hero**: Introduction with clear value proposition
2. **About**: Consultancy philosophy and approach
3. **How We Work**: Transparent methodology and principles
4. **Services**: Three main service categories
5. **Clients & Collaborators**: Target audience
6. **Contact**: Contact form and direct contact information
7. **Footer**: Quick links and contact details

## Technology Stack

- HTML5
- CSS3 (Vanilla CSS with custom properties)
- JavaScript (ES6+)
- Google Fonts (Inter & IBM Plex Mono)

## Local Development

Simply open `index.html` in your browser:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve

# Or just open the file directly
open index.html
```

## Deployment to GitHub Pages

### Option 1: Deploy from main branch

1. Push all files to your GitHub repository:
```bash
git add .
git commit -m "Initial commit: TerraSight Consultancy website"
git push origin main
```

2. Go to your repository settings on GitHub
3. Navigate to **Settings** > **Pages**
4. Under "Source", select **main** branch
5. Click **Save**
6. Your site will be live at: `https://[username].github.io/[repository-name]/`

### Option 2: Deploy to gh-pages branch

1. Install gh-pages (if using npm):
```bash
npm install -g gh-pages
```

2. Deploy:
```bash
gh-pages -d .
```

3. Go to repository settings and set GitHub Pages source to `gh-pages` branch

## Customization

### Colors
Edit CSS custom properties in `styles.css`:
```css
:root {
    --color-primary: #4a5f4e;
    --color-secondary: #6b8e8e;
    /* ... */
}
```

### Content
Edit text directly in `index.html`

### Contact Information
Update email and phone in:
- Contact section
- Footer section

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contact

For questions or support:
- Email: geokavin08@gmail.com
- Phone: +91 63741 42609

## License

© 2024 TerraSight Consultancy. All rights reserved.
