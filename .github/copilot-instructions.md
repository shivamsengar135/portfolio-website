<!-- Portfolio Website Development Instructions -->

# Portfolio Website - Development Guide

This file contains workspace-specific instructions for developing and maintaining the portfolio website.

## Quick Start

1. **Install dependencies**: `npm install`
2. **Start dev server**: `npm run dev`
3. **Open browser**: Navigate to `http://localhost:5173`

## Available Commands

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview production build locally

## Project Structure

- `src/pages/` - Page components (Hero, About, Skills, Projects, Experience, Blog, Contact)
- `src/components/` - Reusable components (Navigation, Footer)
- `src/App.tsx` - Main app with routing
- `tailwind.config.js` - Tailwind CSS configuration
- `vite.config.ts` - Vite build configuration

## Customization Guide

### Update Personal Information

1. **Replace placeholder text** in all page components with your actual information
2. **Update social media links** in Footer, Hero, and Contact pages
3. **Add your projects** to the Projects page
4. **Update experience timeline** in the Experience page
5. **Replace blog posts** in the Blog page

### Update Contact Details

Edit `src/pages/Contact.tsx`:
- Email address
- Phone number
- Location
- Form submission handler

### Update Social Links

Update URLs in:
- `src/components/Footer.tsx`
- `src/pages/Hero.tsx`
- `src/pages/Contact.tsx`

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Automatic deployment on push

### Netlify
1. Build: `npm run build`
2. Connect GitHub repo
3. Build command: `npm run build`
4. Publish directory: `dist`

## Development Tips

- Hot reload enabled - changes reflect instantly
- TypeScript for type safety
- Tailwind CSS for styling
- React Router for navigation
- React Icons for SVG icons

## Troubleshooting

**Port 5173 already in use?**
```bash
npm run dev -- --port 5174
```

**Need to clear node_modules?**
```bash
rm -r node_modules && npm install
```

**Build errors?**
```bash
npm run lint  # Check for code issues
```

## Performance Considerations

- Lazy loading for routes with React.lazy()
- Image optimization with modern formats
- CSS minification in production build
- Tree shaking for unused code removal

## Security Notes

- Keep dependencies updated: `npm update`
- Check for vulnerabilities: `npm audit`
- Use environment variables for sensitive data
- Validate form inputs on backend

## Next Steps

1. Customize all personal information
2. Add real projects and descriptions
3. Set up contact form backend
4. Deploy to production
5. Set up analytics (optional)
6. Add favicon and social meta tags
