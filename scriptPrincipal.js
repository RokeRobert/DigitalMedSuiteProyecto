function toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('collapsed');
  }

  // Función que cambia la sección activa
function showPage(pageId) {
    // Oculta todas las secciones
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));
  
    // Muestra la seleccionada
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
      selectedPage.classList.add('active');
    }
  }

  //Calendario
  document.addEventListener('DOMContentLoaded', function () {
    const calendarEl = document.getElementById('calendar');
  
    const calendar = new FullCalendar.Calendar(calendarEl, {
      locale: 'es',
      initialView: 'dayGridMonth',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      buttonText: {
        today: 'Hoy',
        month: 'Mes',
        week: 'Semana',
        day: 'Día',
        list: 'Lista'
      }
      // Sin array de eventos, lo dejarás vacío para conexión futura
    });
  
    calendar.render();
  });