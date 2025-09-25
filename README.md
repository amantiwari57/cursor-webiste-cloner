# Seedream 4.0 Clone

A pixel-faithful, responsive clone of the Seedream 4.0 website built with modern web technologies.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Image Optimization**: next/image
- **Theme**: Dark/Light mode with system preference

## ✨ Features

- **Responsive Design**: Mobile-first approach with breakpoints for all screen sizes
- **Modern UI**: Clean, professional design with glassmorphism effects
- **Smooth Animations**: Framer Motion powered micro-interactions and page transitions
- **Theme Toggle**: System-aware dark/light mode with persistent preferences
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **SEO Optimized**: Comprehensive meta tags, Open Graph, and structured data
- **Performance**: Optimized images, lazy loading, and efficient bundle size

## 🏗️ Project Structure

```
├── app/
│   ├── api/           # API routes
│   ├── globals.css    # Global styles and CSS variables
│   ├── layout.tsx     # Root layout with providers
│   └── page.tsx       # Main page
├── components/
│   ├── ui/           # shadcn/ui components
│   ├── Header.tsx    # Navigation header
│   ├── Hero.tsx      # Hero section
│   ├── Features.tsx  # Features showcase
│   ├── Performance.tsx # Performance metrics
│   ├── Gallery.tsx   # Image gallery
│   └── Footer.tsx    # Footer with links
├── data/
│   ├── models.json   # Mock model data
│   └── pricing.json  # Pricing information
├── lib/
│   ├── api.ts        # API utilities
│   └── utils.ts      # Utility functions
└── providers/
    └── theme-provider.tsx # Theme context provider
```

## 🚦 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd seedream-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Key Components

### Header
- Sticky navigation with backdrop blur
- Mobile hamburger menu with slide-out drawer
- Theme toggle with system preference detection
- Smooth scroll to sections

### Hero
- Gradient background with animated floating elements
- Rotating preview image carousel
- Call-to-action buttons with hover effects
- Responsive typography and spacing

### Features
- Four main feature showcases:
  - Batch Input & Output
  - Prompt-based Editing
  - Versatile Styles
  - Knowledge-driven Generation
- Interactive demonstrations
- Alternating layouts for visual interest

### Performance
- Benchmark comparison charts
- Key metrics display
- Third-party validation results
- Progress bar animations

### Gallery
- Filterable image grid
- Search functionality
- Modal dialogs for detailed view
- Category-based organization

### Footer
- Newsletter signup
- Comprehensive link organization
- Social media integration
- Legal and company information

## 🎯 Performance Optimizations

- **Image Optimization**: next/image with proper sizing and lazy loading
- **Code Splitting**: Automatic route-based code splitting
- **Font Optimization**: next/font with display swap
- **CSS Optimization**: Tailwind CSS with purging unused styles
- **Bundle Analysis**: Optimized imports and tree shaking

## ♿ Accessibility Features

- **Semantic HTML**: Proper heading hierarchy and landmark elements
- **Keyboard Navigation**: Full keyboard accessibility for all interactive elements
- **Screen Reader Support**: Comprehensive ARIA labels and descriptions
- **Focus Management**: Visible focus indicators and logical tab order
- **Color Contrast**: WCAG AA compliant color combinations
- **Motion Preferences**: Respects user's reduced motion preferences

## 🌐 SEO & Meta Tags

- **Title & Description**: Optimized for search engines
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Enhanced Twitter sharing
- **Structured Data**: JSON-LD for rich snippets
- **Sitemap**: Automated sitemap generation
- **Robots.txt**: Search engine crawling instructions

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for environment-specific settings:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api
```

### Theme Customization
Modify `app/globals.css` to customize:
- Color schemes
- Typography scales
- Spacing systems
- Animation timings

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: 1024px - 1280px
- **Large Desktop**: > 1280px

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Configure environment variables
3. Deploy automatically on push

### Manual Deployment
1. Build the project: `npm run build`
2. Start production server: `npm start`
3. Or export static files: `npm run build && npm run export`

## 🔄 API Integration

To replace mock data with real APIs:

1. Update `lib/api.ts` with actual endpoints
2. Modify data interfaces in `lib/api.ts`
3. Replace placeholder images with real assets
4. Update API routes in `app/api/`

## 🧪 Testing

```bash
# Run tests (when implemented)
npm test

# Run linting
npm run lint

# Type checking
npm run type-check
```

## 📦 Build Output

```bash
# Production build
npm run build

# Analyze bundle size
npm run analyze
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is for educational and demonstration purposes. Please respect the original design and content ownership.

## 🙏 Acknowledgments

- Original design by ByteDance Seed team
- UI components from shadcn/ui
- Icons from Lucide React
- Animations powered by Framer Motion