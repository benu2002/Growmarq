import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'white' | 'dark';
  to?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  to, 
  onClick, 
  className = '', 
  type = "button",
  fullWidth = false
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-bold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    // Gradient Cyan button for primary actions
    primary: "border-transparent text-navy-900 bg-gradient-to-r from-accent-400 to-brand-400 hover:from-accent-500 hover:to-brand-500 shadow-lg hover:shadow-cyan-500/25",
    // Deep Navy button
    secondary: "border-transparent text-white bg-navy-800 hover:bg-navy-900 focus:ring-navy-500",
    // Outline style
    outline: "border-2 border-brand-200 text-brand-600 bg-transparent hover:border-brand-600 hover:bg-brand-50 focus:ring-brand-500",
    // White button
    white: "border-transparent text-navy-900 bg-white hover:bg-gray-50 focus:ring-white shadow-md",
    // Dark outline for light backgrounds
    dark: "border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white"
  };

  const widthClass = fullWidth ? "w-full" : "";

  const classes = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export const Section: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({ children, className = "", id }) => (
  <section id={id} className={`py-16 md:py-24 ${className}`}>
    {children}
  </section>
);

export const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

export const SectionHeader: React.FC<{ title: string; subtitle?: string; align?: 'left' | 'center'; lightText?: boolean }> = ({ title, subtitle, align = 'center', lightText = false }) => (
  <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <h2 className={`text-3xl md:text-4xl font-extrabold tracking-tight mb-4 ${lightText ? 'text-white' : 'text-navy-900'}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`mt-4 max-w-2xl mx-auto text-xl ${lightText ? 'text-brand-100' : 'text-gray-500'}`}>
        {subtitle}
      </p>
    )}
  </div>
);