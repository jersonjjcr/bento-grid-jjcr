# 📅 Integración con Google Calendar

## 🚀 Configuración

Para conectar el CalendarCard con Google Calendar real, sigue estos pasos:

### 1. 📋 Crear Proyecto en Google Cloud Console

1. Ve a [Google Cloud Console](https://console.cloud.google.com/)
2. Crea un nuevo proyecto o selecciona uno existente
3. Habilita la **Google Calendar API**

### 2. 🔑 Obtener Credenciales

#### API Key:
1. Ve a "Credenciales" → "Crear credenciales" → "Clave de API"
2. Copia la API Key generada

#### OAuth 2.0 Client ID:
1. Ve a "Credenciales" → "Crear credenciales" → "ID de cliente de OAuth 2.0"
2. Selecciona "Aplicación web"
3. Agrega tu dominio a "Orígenes de JavaScript autorizados":
   - `http://localhost:5174` (para desarrollo)
   - Tu dominio de producción
4. Copia el Client ID generado

### 3. ⚙️ Configurar el Proyecto

1. Abre `src/components/CalendarCard.jsx`
2. Reemplaza las credenciales:
```javascript
const GOOGLE_API_KEY = 'tu_api_key_aqui';
const GOOGLE_CLIENT_ID = 'tu_client_id_aqui';
```

3. Descomenta las líneas de código marcadas para activar la integración real:
```javascript
// Descomenta estas líneas:
const initialized = await initializeGoogleAPI(GOOGLE_API_KEY, GOOGLE_CLIENT_ID);
// ... resto del código
```

### 4. 📦 Instalar Dependencias (Opcional)

Si quieres usar la biblioteca oficial de Google:
```bash
npm install googleapis
```

### 5. 🔒 Configurar Permisos

El usuario necesitará autorizar los siguientes permisos:
- `https://www.googleapis.com/auth/calendar.readonly` (Solo lectura del calendario)

## 🎯 Funcionalidades

### ✅ Implementadas:
- ✅ Mostrar fecha actual
- ✅ Eventos mock para demostración
- ✅ Click para abrir Google Calendar
- ✅ Diseño responsive y animaciones
- ✅ Preparado para integración real

### 🔧 Por implementar (con credenciales):
- 🔄 Autenticación OAuth 2.0
- 📊 Carga de eventos reales
- 🔄 Actualización automática
- 🔔 Notificaciones de próximos eventos

## 🎨 Personalización

Puedes personalizar:
- **Colores**: Modifica los gradientes en `App.css`
- **Cantidad de eventos**: Cambia `maxResults` en `getCalendarEvents()`
- **Formato de fecha**: Modifica `formatDate()` y `formatCalendarEvents()`

## 🛠️ Desarrollo

### Modo Mock (Actual):
- Muestra eventos de ejemplo
- No requiere autenticación
- Perfecto para desarrollo y demostración

### Modo Real (Con credenciales):
- Conecta con Google Calendar real
- Requiere autenticación del usuario
- Muestra eventos reales del calendario primario

## 🔍 Debugging

Si hay problemas:
1. Verifica que las credenciales sean correctas
2. Asegúrate de que los orígenes estén configurados
3. Revisa la consola del navegador para errores
4. Verifica que Google Calendar API esté habilitada

## 📱 Responsive Design

El calendario se adapta a:
- 📱 **Mobile**: Elementos más pequeños y compactos
- 💻 **Desktop**: Elementos más grandes y espaciados
- 🖥️ **Large screens**: Optimizado para pantallas grandes

---

**Nota**: Por seguridad, nunca hardcodees las credenciales en el código. Usa variables de entorno en producción.