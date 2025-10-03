import React from 'react';

const ProfilesCard = () => {
  const communicationApps = [
    {
      name: 'Slack',
      description: 'Team Communication',
      url: 'https://slack.com/signin',
      color: '#4A154B',
      logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg',
      bgGradient: 'linear-gradient(135deg, #4A154B 0%, #350D36 100%)',
      status: 'Online'
    },
    {
      name: 'WhatsApp',
      description: 'Instant Messaging',
      url: 'https://web.whatsapp.com/',
      color: '#25D366',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg',
      bgGradient: 'linear-gradient(135deg, #25D366 0%, #1FAE4B 100%)',
      status: 'Active'
    },
    {
      name: 'Discord',
      description: 'Voice & Chat',
      url: 'https://discord.com/app',
      color: '#5865F2',
      logoUrl: 'https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png',
      bgGradient: 'linear-gradient(135deg, #5865F2 0%, #4752C4 100%)',
      status: 'Away'
    }
  ];

  const handleAppClick = (app) => {
    window.open(app.url, '_blank');
  };

  return (
    <div className="profiles-card communication-apps-card">
      <div className="profiles-grid apps-grid">
        {communicationApps.map((app, index) => (
          <div 
            key={index} 
            className="profile-item app-item"
            onClick={() => handleAppClick(app)}
            style={{ background: app.bgGradient }}
          >
            <div className="app-icon">
              <img 
                src={app.logoUrl} 
                alt={`${app.name} logo`} 
                className="app-logo"
                onError={(e) => {
                  // Fallback si la imagen no carga
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span 
                className="app-emoji-fallback" 
                style={{ display: 'none' }}
              >
                {app.name === 'Slack' ? '💬' : app.name === 'WhatsApp' ? '📱' : '🎮'}
              </span>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilesCard;