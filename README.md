#Ruhul Amin - Portfolio Website

A professional, modern, and interactive 3D portfolio website built with Gatsby and React.

## Features

- **3D Interactive Elements**: Animated 3D sphere with particles using React Three Fiber
- **Smooth Animations**: Framer Motion animations throughout the site
- **Responsive Design**: Fully responsive across all devices
- **Modern UI**: Clean and professional design with custom color scheme
- **SEO Optimized**: Built-in SEO optimization with Gatsby
- **Fast Performance**: Optimized for speed and performance

## Color Scheme

- **Primary Gold**: RGB(172, 149, 118) - #ac9576
- **Primary Dark**: RGB(34, 41, 51) - #222933

## Sections

1. **Hero** - Eye-catching introduction with 3D animation
2. **About** - Personal introduction and highlights
3. **Skills** - Visual representation of technical skills
4. **Experience** - Timeline of work experience
5. **Education** - Academic background
6. **Contact** - Contact form and information

## Technologies Used

- **Gatsby** - React-based static site generator
- **React** - UI library
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **Framer Motion** - Animation library
- **React Icons** - Icon library

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm start
# or
npm run develop
```

The site will be available at `http://localhost:8000`

### Build

Build for production:
```bash
npm run build
```

### Serve

Serve the production build:
```bash
npm run serve
```

## Customization

### Personal Information

Update your personal information in the following files:

- `src/components/Hero.js` - Name, title, and introduction
- `src/components/About.js` - About section content
- `src/components/Skills.js` - Your skills and proficiency levels
- `src/components/Experience.js` - Work experience details
- `src/components/Education.js` - Educational background
- `src/components/Contact.js` - Contact information and social links

### Colors

Update colors in `src/styles/global.css`:

```css
:root {
  --primary-gold: rgb(172, 149, 118);
  --primary-dark: rgb(34, 41, 51);
}
```

### Meta Tags & SEO

Update SEO information in:
- `gatsby-config.js` - Site metadata
- `src/pages/index.js` - Head component with meta tags

### Favicon

Replace `src/images/icon.png` with your own icon (512x512px recommended)

## Project Structure

```
port/
├── src/
│   ├── components/
│   │   ├── About.js
│   │   ├── Contact.js
│   │   ├── Education.js
│   │   ├── Experience.js
│   │   ├── Hero.js
│   │   ├── Layout.js
│   │   ├── Navbar.js
│   │   ├── Scene3D.js
│   │   └── Skills.js
│   ├── pages/
│   │   └── index.js
│   ├── styles/
│   │   ├── about.css
│   │   ├── contact.css
│   │   ├── education.css
│   │   ├── experience.css
│   │   ├── global.css
│   │   ├── hero.css
│   │   ├── layout.css
│   │   ├── navbar.css
│   │   └── skills.css
│   └── images/
├── gatsby-browser.js
├── gatsby-config.js
├── package.json
└── README.md
```

## Deployment

### Gatsby Cloud

1. Push your code to GitHub
2. Connect your repository to Gatsby Cloud
3. Deploy automatically

### Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build command: `gatsby build`
4. Publish directory: `public`

### Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy automatically

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own portfolio

## Contact

**Ruhul Amin**
- Email: ruhulamin3052@gmail.com
- Location: Dhaka, Bangladesh

---

Built with passion and cutting-edge technology
