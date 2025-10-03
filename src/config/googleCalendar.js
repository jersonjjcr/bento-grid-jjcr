// Google Calendar Configuration
// Para obtener estas credenciales:
// 1. Ve a https://console.developers.google.com/
// 2. Crea un nuevo proyecto o selecciona uno existente
// 3. Habilita la Google Calendar API
// 4. Crea credenciales (API Key y OAuth 2.0 Client ID)
// 5. Agrega tu dominio a los orígenes autorizados

export const GOOGLE_CALENDAR_CONFIG = {
  // Reemplaza con tu API Key real
  API_KEY: 'AIzaSyBv2_W8hK1X3xT9qZnGjOi8mN7lP4rQ6sE',
  
  // Reemplaza con tu Client ID real  
  CLIENT_ID: '123456789-abc123def456.apps.googleusercontent.com',
  
  // Configuración adicional
  SCOPES: 'https://www.googleapis.com/auth/calendar.readonly',
  DISCOVERY_DOC: 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'
};

// Instrucciones para configurar:
/*
1. API Key:
   - Ve a Google Cloud Console
   - APIs & Services > Credentials
   - Create Credentials > API Key
   - Restringe la key solo a Calendar API

2. OAuth 2.0 Client ID:
   - Create Credentials > OAuth 2.0 Client ID
   - Application type: Web application
   - Authorized JavaScript origins: http://localhost:5173
   - Authorized redirect URIs: http://localhost:5173

3. Habilitar Calendar API:
   - APIs & Services > Library
   - Busca "Google Calendar API"
   - Click Enable

4. Configurar pantalla de consentimiento OAuth:
   - APIs & Services > OAuth consent screen
   - Configura la información básica de tu app
*/