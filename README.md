# Hotel Linen Casa Express

Professional hotel linen services in Morocco. Quality bedding, towels, and hospitality textiles for hotels and resorts.

## 🚀 Live Demo

Visit the live site: [https://ayman.github.io/hotel-linen-casa-express](https://ayman.github.io/hotel-linen-casa-express)

## 🛠️ Technologies Used

This project is built with:

- **Vite** - Fast build tool and dev server
- **TypeScript** - Type-safe JavaScript
- **React 18** - Modern React with hooks
- **shadcn/ui** - Beautiful, accessible UI components
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing

## 🏃‍♂️ Quick Start

### Prerequisites

- Node.js 18+ and npm

### Local Development

```bash
# Clone the repository
git clone https://github.com/ayman/hotel-linen-casa-express.git
cd hotel-linen-casa-express

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:8080`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🌐 GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages.

### Automatic Deployment (Recommended)

1. **Push to main branch**: The GitHub Actions workflow will automatically build and deploy your site
2. **Check Actions tab**: Go to your repo's Actions tab to monitor deployment progress
3. **Wait for deployment**: It may take a few minutes for changes to appear

### Manual Deployment

If you need to deploy manually:

```bash
npm run deploy
```

This will build the project and push it to the `gh-pages` branch.

### Configuration

The project is configured with:
- **Base path**: `/hotel-linen-casa-express/` (matches your repo name)
- **Build output**: `dist/` directory
- **GitHub Actions**: Automatic build and deploy on push to main

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # Site header
│   ├── Hero.tsx        # Hero section
│   ├── Services.tsx    # Services showcase
│   └── ...
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── assets/             # Images and static assets
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 🎨 Customization

### Styling
- Modify `tailwind.config.ts` for Tailwind CSS configuration
- Update `src/index.css` for global styles
- Component-specific styles are co-located with components

### Content
- Update component content in `src/components/`
- Modify page content in `src/pages/`
- Update meta information in `index.html`

## 🚨 Troubleshooting

### Site Not Loading on GitHub Pages
1. Check that the base path in `vite.config.ts` matches your repository name
2. Ensure GitHub Pages is enabled in your repository settings
3. Verify the deployment branch is set to `gh-pages`
4. Check the Actions tab for build errors

### Build Errors
1. Ensure all dependencies are installed: `npm install`
2. Check for TypeScript errors: `npm run lint`
3. Verify Node.js version compatibility

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
