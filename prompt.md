# Pixel-Perfect Landing Page Cloning Prompt Generator

## Overview
This prompt generator provides a systematic approach to creating pixel-perfect clones of any landing page using Next.js, TypeScript, Tailwind CSS, shadcn/ui, and MCP tools for analysis and asset extraction.

## Prerequisites
- Next.js 15+ with App Router
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Playwright for browser automation
- MCP tools for enhanced functionality

## Step-by-Step Cloning Process

### Phase 1: Target Analysis & Setup

```markdown
Create a pixel-perfect clone of [TARGET_URL] using Next.js + TypeScript + Tailwind CSS + shadcn/ui.

**Initial Setup:**
1. Initialize Next.js project with TypeScript and Tailwind CSS
2. Install shadcn/ui and configure components.json
3. Set up project structure with components/, app/, lib/, and public/ directories
4. Configure next.config.ts for image optimization

**Target Analysis:**
1. Use Playwright to navigate to the target URL
2. Extract the complete page structure and layout hierarchy
3. Document all UI patterns (navigation, buttons, cards, carousels, grids)
4. Identify typography scale, spacing system, and color palette
5. Note responsive breakpoints and mobile behavior
6. List all interactive elements and animations
```

### Phase 2: Asset Extraction & Analysis

```markdown
**Image Asset Extraction:**
1. Use Playwright to extract all image URLs from the live site
2. Create download script to fetch images into public/images/
3. Get exact dimensions and positioning data for each image using getBoundingClientRect()
4. Document image aspect ratios and responsive behavior
5. Verify all images load correctly in the local build

**Visual Analysis:**
1. Take screenshots at different viewport sizes (desktop, tablet, mobile)
2. Extract CSS properties using window.getComputedStyle()
3. Document exact measurements for pixel-perfect positioning
4. Identify all hover states and interactive behaviors
```

### Phase 3: Component Architecture

```markdown
**Build Component Structure:**
1. **Header Component:**
   - Navigation style (pills, tabs, or traditional links)
   - Logo placement and branding
   - Mobile menu implementation
   - Language switcher if present

2. **Hero Section:**
   - Background treatment (image, gradient, or solid)
   - Text positioning and typography scale
   - CTA button placement and styling
   - Overlay effects and z-index management

3. **Feature Sections:**
   - Layout patterns (grid, flexbox, or custom)
   - Content blocks and image positioning
   - Carousel implementations for image galleries
   - Interactive elements and hover effects

4. **Gallery/Showcase:**
   - Grid system (bento, masonry, or uniform)
   - Hover effects and modal behavior
   - Image optimization and lazy loading

5. **Footer:**
   - Link organization and hierarchy
   - Social elements and branding
   - Copyright and legal information
```

### Phase 4: Pixel-Perfect Implementation

```markdown
**Visual Matching Requirements:**
1. **Typography:**
   - Exact font sizes, weights, line heights, and letter spacing
   - Use CSS custom properties for consistent scaling
   - Match font families and loading strategies

2. **Colors:**
   - Match hex values and opacity levels precisely
   - Implement CSS variables for theme consistency
   - Document color usage for maintainability

3. **Spacing:**
   - Use exact padding, margins, and gap values
   - Implement consistent spacing scale
   - Match responsive spacing adjustments

4. **Layout:**
   - Implement exact grid/flexbox structure
   - Match container widths and breakpoints
   - Ensure proper alignment and positioning

5. **Images:**
   - Set precise dimensions and object-fit properties
   - Implement proper aspect ratios
   - Use next/image for optimization
```

### Phase 5: Interactive Elements

```markdown
**Interactive Components:**
1. **Navigation:**
   - Dropdown behavior and mobile menu
   - Active states and hover effects
   - Keyboard navigation support

2. **Carousels:**
   - Snap scrolling and smooth transitions
   - Arrow navigation and touch support
   - Accessibility with ARIA labels

3. **Modals:**
   - Backdrop effects and animations
   - Focus management and escape handling
   - Responsive sizing and positioning

4. **Buttons:**
   - Hover states and loading indicators
   - Disabled states and accessibility
   - Consistent styling across components

5. **Forms:**
   - Validation and error states
   - Success feedback and loading states
   - Accessibility compliance
```

### Phase 6: Responsive Implementation

```markdown
**Responsive Testing:**
1. **Desktop (1920px+):**
   - Verify exact layout and spacing
   - Test all interactive elements
   - Ensure proper image scaling

2. **Tablet (768px-1024px):**
   - Check grid adjustments and navigation
   - Test touch interactions
   - Verify content readability

3. **Mobile (320px-767px):**
   - Verify touch targets and readability
   - Test mobile menu functionality
   - Ensure proper image scaling

4. **Cross-Browser Testing:**
   - Chrome, Firefox, Safari compatibility
   - Test on actual devices when possible
   - Verify consistent behavior
```

### Phase 7: Performance & Accessibility

```markdown
**Production Readiness:**
1. **Image Optimization:**
   - Use next/image with proper sizing
   - Implement lazy loading and placeholders
   - Optimize file formats and compression

2. **Accessibility:**
   - Semantic HTML structure
   - ARIA labels and keyboard navigation
   - Screen reader compatibility
   - Color contrast compliance

3. **SEO:**
   - Meta tags and Open Graph
   - Structured data markup
   - Performance optimization
   - Core Web Vitals compliance

4. **Code Quality:**
   - TypeScript types for all components
   - ESLint and Prettier configuration
   - Component documentation
   - Error handling and loading states
```

### Phase 8: Final Validation

```markdown
**Pixel-Perfect Verification:**
1. **Visual Comparison:**
   - Side-by-side screenshot comparison
   - Use Playwright for automated testing
   - Document any discrepancies

2. **Functional Testing:**
   - Test all interactive elements
   - Verify form submissions and API calls
   - Check error handling and edge cases

3. **Performance Testing:**
   - Lighthouse audits and Core Web Vitals
   - Bundle size analysis
   - Loading time optimization

4. **Accessibility Audit:**
   - Screen reader testing
   - Keyboard navigation verification
   - Color contrast validation

5. **User Acceptance Testing:**
   - Stakeholder review and feedback
   - User testing on target devices
   - Final approval and deployment
```

## Example Complete Prompt

```markdown
Create a pixel-perfect clone of https://example.com using Next.js + TypeScript + Tailwind CSS + shadcn/ui.

**Requirements:**
- Extract all images from the live site using Playwright
- Implement exact typography scale (font sizes, weights, spacing)
- Match color scheme precisely (hex values, gradients, opacity)
- Replicate layout structure (grid systems, flexbox, positioning)
- Add responsive behavior matching the original
- Include all interactive elements (carousels, modals, navigation)
- Ensure accessibility compliance
- Optimize for performance and SEO

**Technical Stack:**
- Next.js 15+ with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- shadcn/ui for component library
- Playwright for testing and asset extraction
- MCP tools for enhanced functionality

**Deliverables:**
- Working Next.js application
- All extracted images in public/images/
- Pixel-perfect visual matching
- Responsive design across all breakpoints
- Production-ready code with proper TypeScript types
- README with setup and deployment instructions
- Performance and accessibility documentation
```

## MCP Tools Integration

```markdown
**Recommended MCP Tools:**
1. **Playwright MCP:** For browser automation, screenshot comparison, and asset extraction
2. **Shadcn MCP:** For component discovery and implementation
3. **Web Search MCP:** For research and documentation
4. **File System MCP:** For project structure management

**Usage Examples:**
- Use Playwright to extract image URLs and dimensions
- Use Shadcn MCP to find appropriate UI components
- Use Web Search for design system documentation
- Use File System for organized project structure
```

## Quality Checklist

- [ ] Visual pixel-perfect match with original
- [ ] Responsive design across all breakpoints
- [ ] Accessibility compliance (WCAG 2.1 AA)
- [ ] Performance optimization (Core Web Vitals)
- [ ] Cross-browser compatibility
- [ ] Mobile device testing
- [ ] SEO optimization
- [ ] Code quality and documentation
- [ ] Error handling and edge cases
- [ ] User acceptance testing

## Common Pitfalls to Avoid

1. **Typography:** Don't guess font sizes - extract exact values
2. **Spacing:** Use precise measurements, not approximations
3. **Colors:** Match hex values exactly, including opacity
4. **Images:** Set proper dimensions and aspect ratios
5. **Responsive:** Test on actual devices, not just browser dev tools
6. **Accessibility:** Don't skip keyboard navigation and screen reader support
7. **Performance:** Optimize images and minimize bundle size
8. **Cross-browser:** Test in multiple browsers and devices

This systematic approach ensures pixel-perfect replication while maintaining code quality and performance standards.
