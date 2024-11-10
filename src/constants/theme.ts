// src/constants/theme.ts
import { 
    LayoutDashboard,
    Users,
    Calendar,
    BarChart,
    Settings,
    LucideIcon,
    UserPlus,
    Utensils,
    Brain
  } from 'lucide-react';
  
  // Brand Colors
  export const COLORS = {
    cherryRed: '#ed4c4c',
    peach: '#faa09a',
    lightPeach: '#ffd0cd',
    white: '#ffffff',
    black: '#2D3748',
    gray: {
      50: '#F7FAFC',
      100: '#EDF2F7',
      200: '#E2E8F0',
      300: '#CBD5E0',
      400: '#A0AEC0',
      500: '#718096',
      600: '#4A5568',
      700: '#2D3748',
      800: '#1A202C',
      900: '#171923',
    }
  } as const;
  
  // Feature items for landing page
  export interface FeatureItem {
    title: string;
    description: string;
    icon: LucideIcon;
  }
  
  export const FEATURES: FeatureItem[] = [
    {
      title: 'Smart Client Management',
      description: 'Efficiently manage your clients with our AI-powered platform',
      icon: UserPlus
    },
    {
      title: 'Personalized Nutrition',
      description: 'Create customized meal plans with intelligent recommendations',
      icon: Utensils
    },
    {
      title: 'Data-Driven Insights',
      description: 'Make informed decisions with comprehensive analytics',
      icon: Brain
    }
  ];
  
  // Navigation items
  interface NavigationItem {
    name: string;
    icon: LucideIcon;
    href: string;
  }
  
  export const navigationItems: NavigationItem[] = [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
    { name: 'Clients', icon: Users, href: '/clients' },
    { name: 'Schedule', icon: Calendar, href: '/schedule' },
    { name: 'Analytics', icon: BarChart, href: '/analytics' },
    { name: 'Settings', icon: Settings, href: '/settings' }
  ];
  
  // Component Styles
  export const UI_CLASSES = {
    container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
    section: "py-12 sm:py-16 lg:py-20",
    button: {
      base: "inline-flex items-center justify-center rounded-md transition-all duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2",
      primary: "bg-cherry-red text-white hover:bg-opacity-90 shadow-sm focus:ring-cherry-red",
      secondary: "bg-light-peach text-cherry-red hover:bg-peach focus:ring-peach",
      outline: "border-2 border-cherry-red text-cherry-red hover:bg-light-peach",
      sizes: {
        sm: "px-3 py-2 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg"
      }
    },
    card: {
      base: "bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200",
      interactive: "cursor-pointer transform transition-transform duration-200 hover:-translate-y-1",
      padding: {
        sm: "p-4",
        md: "p-6",
        lg: "p-8"
      }
    },
    input: {
      base: "block w-full rounded-md border-gray-300 shadow-sm focus:border-cherry-red focus:ring-cherry-red transition-colors duration-200",
      label: "block text-sm font-medium text-gray-700 mb-1",
      error: "text-sm text-red-600 mt-1",
      sizes: {
        sm: "px-3 py-2 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-4 py-3 text-lg"
      }
    },
    heading: {
      h1: "text-4xl sm:text-5xl lg:text-6xl font-bold font-grandstander",
      h2: "text-3xl sm:text-4xl lg:text-5xl font-bold font-grandstander",
      h3: "text-2xl sm:text-3xl lg:text-4xl font-bold font-grandstander",
      h4: "text-xl sm:text-2xl lg:text-3xl font-bold font-grandstander"
    },
    text: {
      body: "text-base text-gray-600 font-figtree",
      large: "text-lg text-gray-700 font-figtree",
      small: "text-sm text-gray-500 font-figtree"
    },
    badge: {
      base: "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium",
      primary: "bg-light-peach text-cherry-red",
      secondary: "bg-gray-100 text-gray-800",
      success: "bg-green-100 text-green-800",
      warning: "bg-yellow-100 text-yellow-800",
      error: "bg-red-100 text-red-800"
    },
    navLink: {
      base: "flex items-center px-4 py-3 rounded-lg transition-all duration-200 font-medium",
      active: "bg-light-peach text-cherry-red",
      inactive: "text-gray-600 hover:bg-gray-100 hover:text-cherry-red"
    }
  } as const;
  
  // Layout constants
  export const LAYOUT = {
    sidebar: {
      width: '16rem',
      mobileHeight: '3.5rem',
    },
    header: {
      height: '4rem'
    },
    container: {
      maxWidth: '7xl',
      padding: {
        desktop: '1.5rem',
        mobile: '1rem',
      }
    },
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    }
  } as const;
  
  // Animation constants
  export const ANIMATIONS = {
    transition: {
      fast: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
      medium: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
      slow: 'all 500ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
    hover: {
      scale: 'hover:scale-105 active:scale-95 transition-transform duration-200',
      lift: 'hover:-translate-y-1 active:translate-y-0 transition-transform duration-200',
      glow: 'hover:shadow-lg hover:shadow-cherry-red/20 transition-shadow duration-200'
    },
    spring: {
      bounce: 'animate-bounce',
      pulse: 'animate-pulse',
      spin: 'animate-spin'
    }
  } as const;