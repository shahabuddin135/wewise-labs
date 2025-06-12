# Wewise Labs Website

A minimalistic, modern website for Wewise Labs, showcasing their SaaS application building and web development services.

## Project Structure

\`\`\`
wewise-labs/
├── app/
│   ├── layout.tsx       # Root layout with font configuration
│   ├── page.tsx         # Main landing page
│   └── globals.css      # Global styles
├── components/
│   ├── navbar.tsx       # Navigation bar
│   ├── hero.tsx         # Hero section
│   ├── services.tsx     # Services section
│   ├── process.tsx      # Process section
│   ├── contact.tsx      # Contact section
│   └── footer.tsx       # Footer
├── lib/
│   ├── utils.ts         # Utility functions
│   └── animations.ts    # Animation configurations
└── public/
    └── ...              # Static assets
\`\`\`

## Development Guidelines

### General Rules

1. **DRY (Don't Repeat Yourself)**: Avoid code duplication. Create reusable components and utilities.
2. **Component Structure**: Each component should have a single responsibility.
3. **Naming Conventions**: Use descriptive names for components, functions, and variables.
4. **Code Formatting**: Follow consistent formatting using Prettier.
5. **TypeScript**: Use TypeScript for type safety.

### Styling Guidelines

1. **Tailwind CSS**: Use Tailwind for styling. Avoid inline styles.
2. **Consistency**: Maintain consistent spacing, colors, and typography.
3. **Responsive Design**: Ensure all components work well on all screen sizes.
4. **Animations**: Use Framer Motion for animations. Keep animations subtle and purposeful.

### Performance Considerations

1. **Image Optimization**: Use Next.js Image component for optimized images.
2. **Code Splitting**: Leverage Next.js automatic code splitting.
3. **Lazy Loading**: Use dynamic imports for components not needed on initial load.
4. **Font Optimization**: Use next/font for optimized font loading.

### Adding New Features

1. **Create Components**: Add new components in the components directory.
2. **Update Page**: Import and use new components in page.tsx.
3. **Add Styles**: Use Tailwind classes for styling.
4. **Test Responsiveness**: Ensure new features work well on all screen sizes.

### Best Practices

1. **Server Components**: Use React Server Components where possible.
2. **Client Components**: Mark components with "use client" directive only when necessary.
3. **Accessibility**: Ensure all components are accessible.
4. **SEO**: Use metadata appropriately for better SEO.

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Technologies Used

- Next.js 15
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- shadcn/ui components

## Deployment

The site is configured for deployment on Vercel.
