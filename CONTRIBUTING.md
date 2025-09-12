# Contributing to FluxMQ Documentation

Thank you for your interest in contributing to the FluxMQ documentation website! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Development Setup

1. **Fork the repository**
   ```bash
   # Fork the repo on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/fluxmq-doc.git
   cd fluxmq-doc
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the site.

## 📝 How to Contribute

### Types of Contributions

We welcome various types of contributions:

- **Documentation improvements**: Fix typos, improve clarity, add examples
- **New content**: Add new documentation sections, tutorials, or guides
- **UI/UX improvements**: Enhance the design, add new components, improve accessibility
- **Bug fixes**: Fix issues in the codebase
- **Feature additions**: Add new functionality to the website
- **Translation**: Help translate content to other languages

### Contribution Process

1. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Write clear, concise code
   - Follow the existing code style
   - Add comments for complex logic
   - Test your changes

3. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add new feature description"
   ```

4. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request**
   - Go to your fork on GitHub
   - Click "New Pull Request"
   - Fill out the PR template
   - Submit the PR

## 🎨 Code Style Guidelines

### TypeScript/React

- Use TypeScript for all new code
- Follow React best practices
- Use functional components with hooks
- Prefer `const` over `let`
- Use meaningful variable and function names

### Styling

- Use Tailwind CSS classes
- Follow the existing design system
- Use the predefined color palette
- Maintain consistent spacing and typography

### Components

- Create reusable components in `src/components/`
- Use shadcn/ui components when possible
- Follow the existing component structure
- Add proper TypeScript types

## 📚 Documentation Guidelines

### Writing Style

- Use clear, concise language
- Write for a technical audience
- Include code examples where helpful
- Use proper markdown formatting

### Content Structure

- Use descriptive headings
- Include a table of contents for long documents
- Add cross-references to related content
- Include screenshots or diagrams when helpful

### Code Examples

- Use syntax highlighting
- Include comments in code examples
- Test all code examples
- Provide both simple and advanced examples

## 🌐 Internationalization

The site supports multiple languages. When adding new content:

1. Add English content first
2. Add corresponding translations in `src/lib/i18n.ts`
3. Test both language versions
4. Ensure all text is properly internationalized

## 🐛 Bug Reports

When reporting bugs, please include:

- A clear description of the issue
- Steps to reproduce the problem
- Expected vs actual behavior
- Screenshots if applicable
- Browser and OS information

## 💡 Feature Requests

For feature requests, please:

- Describe the feature clearly
- Explain why it would be useful
- Provide examples of how it would work
- Consider implementation complexity

## 🔍 Review Process

All contributions go through a review process:

1. **Automated checks**: Code linting, type checking, build verification
2. **Code review**: Team members review the code for quality and style
3. **Testing**: Manual testing of functionality
4. **Approval**: Maintainer approval before merging

## 📋 Pull Request Template

When creating a PR, please include:

- **Description**: What changes were made and why
- **Type**: Bug fix, feature, documentation, etc.
- **Testing**: How the changes were tested
- **Screenshots**: If UI changes were made
- **Breaking changes**: Any breaking changes and migration steps

## 🏷️ Commit Message Format

Use conventional commit messages:

- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for formatting changes
- `refactor:` for code refactoring
- `test:` for adding tests
- `chore:` for maintenance tasks

Example:
```
feat: add performance comparison component
fix: resolve mobile navigation issue
docs: update installation guide
```

## 🤝 Community Guidelines

- Be respectful and inclusive
- Help others learn and grow
- Provide constructive feedback
- Follow the code of conduct

## 📞 Getting Help

If you need help:

- Check existing issues and discussions
- Join our community Discord
- Create a new issue for questions
- Contact maintainers directly

## 🎉 Recognition

Contributors will be recognized in:

- The project README
- Release notes
- Community highlights
- Contributor hall of fame

Thank you for contributing to FluxMQ documentation! 🚀
