import React, { useState, useEffect } from 'react';

const PriceCard = () => {
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [linkUrl, setLinkUrl] = useState(''); // Espacio libre para el link

  // Animar los círculos al cargar
  useEffect(() => {
    const timer1 = setTimeout(() => setProgress1(75), 300);
    const timer2 = setTimeout(() => setProgress2(60), 600);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // Radio y configuración de los círculos
  const radius1 = 60; // Círculo exterior más pequeño
  const radius2 = 45; // Círculo interior más pequeño
  const strokeWidth = 8; // Grosor más delgado
  const circumference1 = 2 * Math.PI * radius1;
  const circumference2 = 2 * Math.PI * radius2;
  const offset1 = circumference1 - (progress1 / 100) * circumference1;
  const offset2 = circumference2 - (progress2 / 100) * circumference2;

  const handleCircleClick = () => {
    if (linkUrl) {
      window.open(linkUrl, '_blank');
    } else {
      // Placeholder: aquí puedes agregar tu URL
      console.log('Agregar URL de destino');
    }
  };

  return (
    <div className="price-card progress-card">
      {/* Contenedor de la gráfica */}
      <div className="progress-container" onClick={handleCircleClick}>
        <svg
          className="progress-svg"
          width="130"
          height="130"
          viewBox="0 0 130 130"
        >
          {/* Círculo de fondo exterior */}
          <circle
            cx="65"
            cy="65"
            r={radius1}
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth={strokeWidth}
          />
          
          {/* Círculo de progreso exterior (Rosa/Magenta) */}
          <circle
            cx="65"
            cy="65"
            r={radius1}
            fill="none"
            stroke="url(#gradient1)"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference1}
            strokeDashoffset={offset1}
            transform="rotate(-90 65 65)"
            className="progress-circle outer"
          />

          {/* Círculo de fondo interior */}
          <circle
            cx="65"
            cy="65"
            r={radius2}
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth={strokeWidth}
          />
          
          {/* Círculo de progreso interior (Verde Lima/Cyan) */}
          <circle
            cx="65"
            cy="65"
            r={radius2}
            fill="none"
            stroke="url(#gradient2)"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference2}
            strokeDashoffset={offset2}
            transform="rotate(-90 65 65)"
            className="progress-circle inner"
          />

          {/* Gradientes */}
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff1493" />
              <stop offset="100%" stopColor="#ff69b4" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00ffff" />
              <stop offset="100%" stopColor="#adff2f" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Contenido central */}
        <div className="progress-content">
          <div className="progress-text">
            <span className="progress-main">{progress1}%</span>
            <span className="progress-sub">PROGRESO</span>
          </div>
        </div>
      </div>

    

      {/* Sección para agregar URL */}
      <div className="link-section">
        <input
          type="url"
          placeholder="Agregar URL de destino..."
          value={linkUrl}
          onChange={(e) => setLinkUrl(e.target.value)}
          className="link-input"
        />
      </div>
    </div>
  );
};

export default PriceCard;