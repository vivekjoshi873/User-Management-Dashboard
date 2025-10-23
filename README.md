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

## Setup Instructions

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
npm start
# or
npm run dev
```

5. Open your browser and visit `http://localhost:5173`

## My Approach

### Architecture & Design Decisions

**Component-Based Architecture**: Built the application using a modular component structure with reusable UI components from shadcn/ui. This approach ensures consistency and maintainability.

**State Management**: Implemented React Context API for global state management of user data, providing a clean way to share state across components without prop drilling.

**Type Safety**: Used TypeScript throughout the application to catch errors at compile time and improve code quality and developer experience.

**Modern UI/UX**: 
- Implemented a responsive design using Tailwind CSS
- Added dark/light theme toggle for better user experience
- Used shadcn/ui components for consistent, accessible UI elements
- Implemented search functionality for better user interaction

**Form Handling**: Utilized React Hook Form for efficient form management with validation, reducing unnecessary re-renders and improving performance.

**Routing**: Implemented client-side routing with React Router for seamless navigation between different views (Home, Add User, User Details).

### Key Features Implementation

1. **User Management System**: Created a comprehensive user management system with add, view, and search capabilities
2. **Responsive Layout**: Built a responsive layout that works across all device sizes
3. **Theme System**: Implemented a theme toggle system with persistent theme preferences
4. **Search Functionality**: Added real-time search with filtering capabilities
5. **Form Validation**: Implemented proper form validation using React Hook Form

### Performance Optimizations

- Used React.memo for component optimization
- Implemented efficient state updates to minimize re-renders
- Used Vite for fast development and optimized builds
- Implemented proper code splitting and lazy loading

## Available Scripts

- `npm run dev` - Start development server
- `npm start` - Start development server (alias for dev)
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

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**Vivek Joshi**
- GitHub: [@vivekjoshi873](https://github.com/vivekjoshi873)
- Email: vivekjoshi873@gmail.com

