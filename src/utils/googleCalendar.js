// Google Calendar API integration
// Para usar esta integración, necesitas:
// 1. Crear un proyecto en Google Cloud Console
// 2. Habilitar Google Calendar API
// 3. Crear credenciales (API Key y OAuth 2.0)
// 4. Instalar: npm install googleapis

const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';
const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';

let gapi, google;

// Inicializar Google API
export const initializeGoogleAPI = async (apiKey, clientId) => {
  try {
    await new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://apis.google.com/js/api.js';
      script.onload = resolve;
      document.head.appendChild(script);
    });

    await new Promise((resolve) => {
      window.gapi.load('client:auth2', resolve);
    });

    await window.gapi.client.init({
      apiKey: apiKey,
      clientId: clientId,
      discoveryDocs: [DISCOVERY_DOC],
      scope: SCOPES
    });

    return true;
  } catch (error) {
    console.error('Error initializing Google API:', error);
    return false;
  }
};

// Autenticar usuario
export const signInToGoogle = async () => {
  try {
    const authInstance = window.gapi.auth2.getAuthInstance();
    await authInstance.signIn();
    return true;
  } catch (error) {
    console.error('Error signing in:', error);
    return false;
  }
};

// Obtener eventos del calendario
export const getCalendarEvents = async (maxResults = 10) => {
  try {
    const request = {
      'calendarId': 'primary',
      'timeMin': (new Date()).toISOString(),
      'showDeleted': false,
      'singleEvents': true,
      'maxResults': maxResults,
      'orderBy': 'startTime'
    };

    const response = await window.gapi.client.calendar.events.list(request);
    return response.result.items || [];
  } catch (error) {
    console.error('Error fetching calendar events:', error);
    return [];
  }
};

// Formatear eventos para mostrar
export const formatCalendarEvents = (events) => {
  return events.map(event => {
    const start = event.start.dateTime || event.start.date;
    const startDate = new Date(start);
    
    return {
      id: event.id,
      title: event.summary || 'Sin título',
      time: startDate.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
      }),
      date: startDate.toLocaleDateString(),
      location: event.location || '',
      description: event.description || ''
    };
  });
};

// Verificar si el usuario está autenticado
export const isSignedIn = () => {
  if (typeof window !== 'undefined' && window.gapi) {
    const authInstance = window.gapi.auth2.getAuthInstance();
    return authInstance && authInstance.isSignedIn.get();
  }
  return false;
};

// Cerrar sesión
export const signOut = async () => {
  try {
    const authInstance = window.gapi.auth2.getAuthInstance();
    await authInstance.signOut();
    return true;
  } catch (error) {
    console.error('Error signing out:', error);
    return false;
  }
};