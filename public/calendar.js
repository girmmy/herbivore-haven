document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'timeGridWeek',
      selectable: true,
      businessHours: [
          { daysOfWeek: [1, 2, 3, 4, 5], startTime: '10:00', endTime: '21:00' },
          { daysOfWeek: [6, 0], startTime: '10:00', endTime: '20:00' }
      ],
      headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      select: function(info) {
          showReservationForm(info.startStr, info.endStr);
      },
      events: [] 
  });

  calendar.render();

  function showReservationForm(start, end) {
      const formContainer = document.createElement('div');
      formContainer.innerHTML = `
          <div class="form-popup">
              <h3>Reserve a Table</h3>
              <form id="reservation-form">
                  <label for="name">Name:</label>
                  <input type="text" id="name" name="name" required>
                  <label for="guests">Number of Guests:</label>
                  <input type="number" id="guests" name="guests" min="1" required>
                  <label for="contact">Contact Info:</label>
                  <input type="text" id="contact" name="contact" required>
                  <input type="hidden" id="start" name="start" value="${start}">
                  <input type="hidden" id="end" name="end" value="${end}">
                  <button type="submit">Confirm</button>
                  <button type="button" id="cancel-button">Cancel</button>
              </form>
          </div>
      `;
      document.body.appendChild(formContainer);

      const form = document.getElementById('reservation-form');
      form.addEventListener('submit', function(e) {
          e.preventDefault();
          const reservation = {
              name: form.name.value,
              guests: form.guests.value,
              contact: form.contact.value,
              start: form.start.value,
              end: form.end.value
          };
          calendar.addEvent(reservation);
          alert('Reservation confirmed!');
          closeForm();
      });

      document.getElementById('cancel-button').addEventListener('click', closeForm);
  }

  function closeForm() {
      document.querySelector('.form-popup').remove();
  }
});
