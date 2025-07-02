import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hover = true }) => {
  const { theme } = useTheme();

  return (
    <div className={`
      backdrop-blur-md rounded-2xl border transition-all duration-300
      ${theme === 'dark' 
        ? 'bg-white/5 border-white/10 shadow-xl shadow-blue-500/10' 
        : 'bg-white/30 border-white/20 shadow-xl shadow-blue-500/20'
      }
      ${hover ? 'hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
};

export default GlassCard;