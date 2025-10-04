# 🎨 Bento Grid Dashboard

Un moderno dashboard con diseño Bento Grid utilizando React, Vite y efectos glassmorphism.

![Bento Grid Dashboard](https://img.shields.io/badge/React-18.0-blue) ![Vite](https://img.shields.io/badge/Vite-Latest-green) ![Glassmorphism](https://img.shields.io/badge/Design-Glassmorphism-purple)

## ✨ Características

### 🎯 **Componentes Principales**
- **📋 Brand Card** - Logo personal con animación float
- **📅 Calendar Card** - Calendario tradicional sincronizado con Google Calendar
- **👥 Profiles Card** - Aplicaciones de comunicación (Slack, WhatsApp, Discord)
- **💰 Price Card** - Indicadores de progreso con anillos SVG
- **🔧 Services Card** - Grid de servicios con iconos interactivos
- **✅ Task Card** - Botón de acción principal
- **📝 Brand Message Card** - Lista de tareas (To-Do) completa con CRUD

### 🎨 **Diseño Moderno**
- **Glassmorphism Effects** - Efecto cristal líquido con backdrop-filter
- **Responsive Design** - Adaptable a móviles, tablets y desktop
- **Smooth Animations** - Transiciones fluidas y efectos hover
- **Gradient Background** - Fondo degradado verde-azul elegante

### 🔗 **Integraciones**
- **Google Calendar API** - Sincronización de eventos reales
- **Communication Apps** - Enlaces directos a aplicaciones
- **Interactive Components** - Funcionalidad completa en cada card

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/jersonjjcr/bento-grid-jjcr.git

# Navegar al directorio
cd bento-grid-jjcr

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build
```

## 📱 Responsive Design

- **Desktop (1024px+)**: Layout completo 4x3 grid
- **Tablet (768px-1023px)**: Layout adaptado 2x4 grid  
- **Mobile (< 768px)**: Layout vertical single column

## 🔧 Configuración de Google Calendar

Para habilitar la sincronización con Google Calendar:

1. Ve a [Google Cloud Console](https://console.developers.google.com/)
2. Crea un nuevo proyecto
3. Habilita Google Calendar API
4. Crea credenciales (API Key y OAuth 2.0 Client ID)
5. Actualiza `src/config/googleCalendar.js` con tus credenciales

```javascript
export const GOOGLE_CALENDAR_CONFIG = {
  API_KEY: 'tu-api-key-aqui',
  CLIENT_ID: 'tu-client-id-aqui'
};
```

## 🎨 Personalización

### Cambiar Colores
Edita las variables en `src/App.css`:
```css
/* Fondo principal */
background: linear-gradient(135deg, #ffffff 0%, #3bffce 50%, #119965 100%);

/* Efectos glassmorphism */
background: rgba(255, 255, 255, 0.15);
backdrop-filter: blur(20px);
```

### Agregar Nuevos Componentes
1. Crea el componente en `src/components/`
2. Agrega los estilos en `src/App.css`
3. Incluye en el grid en `src/App.jsx`

## 📂 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── BrandCard.jsx
│   ├── CalendarCard.jsx
│   ├── ProfilesCard.jsx
│   └── ...
├── config/             # Configuraciones
│   └── googleCalendar.js
├── utils/              # Utilidades
│   └── googleCalendar.js
├── App.jsx             # Componente principal
├── App.css             # Estilos principales
└── main.jsx            # Punto de entrada
```

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 18, JavaScript ES6+
- **Build Tool**: Vite
- **Styling**: CSS3, Glassmorphism, CSS Grid
- **APIs**: Google Calendar API
- **Icons**: Emojis nativos, SVG
- **Development**: ESLint, HMR

## 🌟 Características Técnicas

### Glassmorphism Implementation
```css
.grid-item {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
```

### Responsive Grid
```css
.bento-grid {
  display: grid;
  grid-template-areas:
    "brand calendar profiles profiles"
    "price services message message"
    "task services message message";
}
```

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 👨‍💻 Autor

**Jerson JJ** - [@jersonjjcr](https://github.com/jersonjjcr)

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
