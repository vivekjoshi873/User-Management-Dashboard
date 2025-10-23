# User Management Dashboard

A modern, responsive user management dashboard built with React, TypeScript, and shadcn/ui components.

## Features

- **User Management**: Add, view, and manage user profiles
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **TypeScript**: Full type safety and better development experience
- **Dark/Light Theme**: Toggle between themes for better user experience
- **Search Functionality**: Find users quickly with search capabilities

## Technologies Used

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful and accessible UI components
- **React Router** - Client-side routing
- **React Hook Form** - Form handling and validation
- **Lucide React** - Beautiful icons

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/vivekjoshi873/User-Management-Dashboard.git
```

2. Navigate to the project directory:
```bash
cd User-Management-Dashboard
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Layout.tsx      # Main layout component
│   ├── SearchBar.tsx   # Search functionality
│   ├── ThemeToggle.tsx # Theme switcher
│   └── UserCard.tsx    # User card component
├── contexts/           # React contexts
│   └── UserContext.tsx # User state management
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Page components
│   ├── Home.tsx        # Home page
│   ├── AddUser.tsx     # Add user page
│   ├── UserDetails.tsx # User details page
│   └── NotFound.tsx    # 404 page
└── main.tsx           # Application entry point
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

