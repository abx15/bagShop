# Arun Bag Handbags

A modern, responsive e-commerce website for luxury handbags built with React, TypeScript, and Tailwind CSS.

## Features

- 👜 **Product Showcase**: Beautiful display of luxury handbags with high-quality images
- 📱 **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- 🎨 **Modern UI**: Clean and professional design using Tailwind CSS and shadcn/ui components
- ⚡ **Fast Performance**: Built with Vite for optimal development and production builds
- 🔍 **Product Details**: Individual product pages with detailed information
- 📄 **Multi-page Layout**: Home, Products, About, Contact, and 404 pages
- 🎯 **Component-based Architecture**: Reusable React components with TypeScript

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **State Management**: React Query for server state
- **Forms**: React Hook Form with Zod validation

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd handbag-ecommerce
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:8080](http://localhost:8080) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Project Structure

```
src/
├── assets/          # Static assets (images)
├── components/      # Reusable React components
│   ├── ui/         # shadcn/ui components
│   └── ...         # Custom components
├── hooks/          # Custom React hooks
├── lib/            # Utility functions and configurations
├── pages/          # Page components
└── ...
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
