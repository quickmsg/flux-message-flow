# FluxMQ Documentation Website

[![Version](https://img.shields.io/badge/version-2.1.0-blue.svg)](https://github.com/quickmsg/fluxmq-doc)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue.svg)](https://www.typescriptlang.org/)

FluxMQ Documentation Website - A modern, responsive documentation site for FluxMQ, the high-performance, scalable MQTT broker designed for modern applications.

## 🚀 Features

- **Modern Design**: Built with React 18, TypeScript, and Tailwind CSS
- **Responsive**: Mobile-first design that works on all devices
- **Internationalization**: Support for English and Chinese languages
- **Interactive Documentation**: Comprehensive guides, API references, and tutorials
- **Performance Optimized**: Fast loading with Vite build system
- **Accessible**: Built with accessibility best practices

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui with Radix UI primitives
- **Internationalization**: react-i18next
- **Icons**: Lucide React
- **Routing**: React Router DOM

## 📦 Installation

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/quickmsg/fluxmq-doc.git

# Navigate to the project directory
cd fluxmq-doc

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 🚀 Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run type checking
npm run type-check

# Run linting
npm run lint
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # Site header
│   ├── Hero.tsx        # Hero section
│   ├── Features.tsx    # Features showcase
│   └── ...
├── pages/              # Page components
├── lib/                # Utilities and configurations
├── hooks/              # Custom React hooks
├── assets/             # Static assets
└── main.tsx           # Application entry point
```

## 🌐 Internationalization

The site supports multiple languages:

- English (en)
- Chinese (zh)

Language files are located in `src/lib/i18n.ts`. To add a new language:

1. Add the language code to the resources object
2. Provide translations for all keys
3. Update the language selector in the header

## 🎨 Design System

The project uses a custom design system with:

- **Colors**: Electric blue primary with dark theme
- **Typography**: Modern, readable fonts
- **Components**: Consistent UI components
- **Animations**: Smooth transitions and effects

## 📚 Documentation Sections

- **Introduction**: Product overview and architecture
- **Installation**: Platform-specific installation guides
- **Configuration**: Complete configuration reference
- **Features**: Advanced features and capabilities
- **API Reference**: REST and WebSocket APIs
- **Clustering**: High availability and scaling

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Website**: [https://doc.fluxmq.com](https://doc.fluxmq.com)
- **FluxMQ GitHub**: [https://github.com/quickmsg/fluxmq](https://github.com/quickmsg/fluxmq)
- **Documentation**: [https://doc.fluxmq.com](https://doc.fluxmq.com)

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/quickmsg/fluxmq-doc/issues)
- **Discussions**: [GitHub Discussions](https://github.com/quickmsg/fluxmq-doc/discussions)
- **Email**: support@fluxmq.com

---

Made with ❤️ by the FluxMQ Team
