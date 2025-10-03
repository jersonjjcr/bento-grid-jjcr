import React, { useState, useEffect } from 'react';
import { 
  initializeGoogleAPI, 
  signInToGoogle, 
  getCalendarEvents, 
  formatCalendarEvents, 
  isSignedIn 
} from '../utils/googleCalendar';
import { GOOGLE_CALENDAR_CONFIG } from '../config/googleCalendar';

const CalendarCard = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    initializeGoogleCalendar();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      loadCalendarEvents();
    }
  }, [isAuthenticated, currentDate]);

  const initializeGoogleCalendar = async () => {
    setIsLoading(true);
    try {
      const initialized = await initializeGoogleAPI(
        GOOGLE_CALENDAR_CONFIG.API_KEY, 
        GOOGLE_CALENDAR_CONFIG.CLIENT_ID
      );
      if (initialized) {
        setIsAuthenticated(isSignedIn());
        if (isSignedIn()) {
          await loadCalendarEvents();
        }
      }
    } catch (error) {
      console.error('Error initializing Google Calendar:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadCalendarEvents = async () => {
    try {
      setIsLoading(true);
      const calendarEvents = await getCalendarEvents(30); // Obtener 30 eventos
      const formattedEvents = formatCalendarEvents(calendarEvents);
      setEvents(formattedEvents);
    } catch (error) {
      console.error('Error loading calendar events:', error);
      setEvents([]); // Fallback a array vacío
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignIn = async () => {
    try {
      setIsLoading(true);
      const signedIn = await signInToGoogle();
      if (signedIn) {
        setIsAuthenticated(true);
        await loadCalendarEvents();
      }
    } catch (error) {
      console.error('Error signing in:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Verificar si hay eventos en una fecha específica
  const hasEventsOnDate = (date) => {
    return events.some(event => {
      const eventDate = new Date(event.date);
      return eventDate.toDateString() === date.toDateString();
    });
  };

  // Obtener eventos de una fecha específica
  const getEventsForDate = (date) => {
    return events.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate.toDateString() === date.toDateString();
    });
  };

  // Obtener información del mes actual
  const getCurrentMonthInfo = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    // Primer día del mes
    const firstDay = new Date(year, month, 1);
    // Último día del mes
    const lastDay = new Date(year, month + 1, 0);
    // Día de la semana del primer día (0 = domingo)
    const startDayOfWeek = firstDay.getDay();
    // Número de días en el mes
    const daysInMonth = lastDay.getDate();
    
    return {
      year,
      month,
      firstDay,
      lastDay,
      startDayOfWeek,
      daysInMonth
    };
  };

  // Generar el array de días para mostrar en el calendario
  const generateCalendarDays = () => {
    const { startDayOfWeek, daysInMonth, month, year } = getCurrentMonthInfo();
    const days = [];
    
    // Días del mes anterior para completar la primera semana
    const prevMonth = month === 0 ? 11 : month - 1;
    const prevYear = month === 0 ? year - 1 : year;
    const daysInPrevMonth = new Date(prevYear, prevMonth + 1, 0).getDate();
    
    for (let i = startDayOfWeek - 1; i >= 0; i--) {
      days.push({
        day: daysInPrevMonth - i,
        isCurrentMonth: false,
        isToday: false,
        date: new Date(prevYear, prevMonth, daysInPrevMonth - i)
      });
    }
    
    // Días del mes actual
    const today = new Date();
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isToday = date.toDateString() === today.toDateString();
      
      days.push({
        day,
        isCurrentMonth: true,
        isToday,
        date
      });
    }
    
    // Días del próximo mes para completar la última semana
    const totalCells = 42; // 6 semanas × 7 días
    const remainingCells = totalCells - days.length;
    const nextMonth = month === 11 ? 0 : month + 1;
    const nextYear = month === 11 ? year + 1 : year;
    
    for (let day = 1; day <= remainingCells; day++) {
      days.push({
        day,
        isCurrentMonth: false,
        isToday: false,
        date: new Date(nextYear, nextMonth, day)
      });
    }
    
    return days;
  };

  // Nombres de los días de la semana
  const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  
  // Nombres de los meses
  const monthNames = [
    'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
    'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
  ];

  const handleDateClick = (dayInfo) => {
    setSelectedDate(dayInfo.date);
    const dateEvents = getEventsForDate(dayInfo.date);
    if (dateEvents.length > 0) {
      // Mostrar eventos del día seleccionado
      console.log('Eventos del día:', dateEvents);
    }
  };

  const handleCalendarClick = () => {
    if (!isAuthenticated) {
      handleSignIn();
    } else {
      window.open('https://calendar.google.com/', '_blank');
    }
  };

  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate);
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };

  const calendarDays = generateCalendarDays();
  const { month, year } = getCurrentMonthInfo();

  return (
    <div className="calendar-card">
      <div className="calendar-container">
        {/* Header del calendario */}
        <div className="calendar-header">
          <div className="calendar-title">CALENDAR</div>
          <div className="calendar-nav">
            <button onClick={() => navigateMonth('prev')} className="nav-btn">‹</button>
            <span className="month-year">{monthNames[month]} {year}</span>
            <button onClick={() => navigateMonth('next')} className="nav-btn">›</button>
          </div>
        </div>

        {/* Días de la semana */}
        <div className="calendar-weekdays">
          {dayNames.map((day, index) => (
            <div 
              key={day} 
              className={`weekday ${index === 0 ? 'sunday' : ''} ${index === 6 ? 'saturday' : ''}`}
            >
              {day}
            </div>
          ))}
        </div>

        {/* Grid de días */}
        <div className="calendar-grid">
          {calendarDays.map((dayInfo, index) => {
            const hasEvents = hasEventsOnDate(dayInfo.date);
            return (
              <div
                key={index}
                className={`calendar-day ${
                  !dayInfo.isCurrentMonth ? 'other-month' : ''
                } ${
                  dayInfo.isToday ? 'today' : ''
                } ${
                  index % 7 === 0 ? 'sunday' : ''
                } ${
                  index % 7 === 6 ? 'saturday' : ''
                } ${
                  selectedDate.toDateString() === dayInfo.date.toDateString() ? 'selected' : ''
                } ${
                  hasEvents ? 'has-events' : ''
                }`}
                onClick={() => handleDateClick(dayInfo)}
                title={hasEvents ? `${getEventsForDate(dayInfo.date).length} evento(s)` : ''}
              >
                {dayInfo.day}
                {hasEvents && <div className="event-indicator"></div>}
              </div>
            );
          })}
        </div>

        {/* Footer con enlace a Google Calendar */}
        <div className="calendar-footer" onClick={handleCalendarClick}>
          {isLoading ? (
            <span className="calendar-link">Loading...</span>
          ) : !isAuthenticated ? (
            <span className="calendar-link">🔗 Connect Google Calendar</span>
          ) : (
            <span className="calendar-link">📅 Open Google Calendar</span>
          )}
        </div>

        {/* Mostrar eventos del día seleccionado */}
        {selectedDate && getEventsForDate(selectedDate).length > 0 && (
          <div className="selected-day-events">
            <h4>Events for {selectedDate.toLocaleDateString()}</h4>
            {getEventsForDate(selectedDate).slice(0, 3).map((event, index) => (
              <div key={index} className="event-preview">
                <span className="event-time">{event.time}</span>
                <span className="event-title">{event.title}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarCard;