document.addEventListener('DOMContentLoaded', function () { 
  const monthYear = document.getElementById('month-year');

  const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
  ];

  let currentDate = new Date();

  function renderCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    // Show current month and year
    monthYear.textContent = `${day} ${months[month]} ${year}`;
  }

  renderCalendar(currentDate);
});
