import React from 'react';

interface FluxMQLogoProps {
  className?: string;
  size?: number;
  variant?: 'light' | 'dark';
}

const FluxMQLogo: React.FC<FluxMQLogoProps> = ({ 
  className = "", 
  size = 32, 
  variant = 'light' 
}) => {
  const logoSrc = variant === 'dark' ? '/logo_dark.jpg' : '/logo_light.jpg';
  
  return (
    <img
      src={logoSrc}
      alt="FluxMQ"
      width={size}
      height={size * 0.9} // Maintain aspect ratio from docs config (36x32)
      className={className}
      style={{
        objectFit: 'contain',
        height: 'auto',
        backgroundColor: 'transparent'
      }}
    />
  );
};

export default FluxMQLogo;
