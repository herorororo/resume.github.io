document.addEventListener('DOMContentLoaded', function () {
  const body = document.body;
  const button = document.getElementById('themeToggle');

  // Toggle dark mode
  function toggleDarkMode() {
    body.classList.toggle('dark-mode');
  }

  button.addEventListener('click', toggleDarkMode);

  // Function to update the clock in 12-hour format
  function updateClock() {
    const clockElement = document.getElementById('clock');
    if (clockElement) {
      const now = new Date();
      let hours = now.getHours();
      const ampm = hours >= 12 ? 'PM' : 'AM';

      // Convert hours to 12-hour format
      hours = hours % 12 || 12;

      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;

      clockElement.textContent = timeString;
    }
  }

  // Call the function initially
  updateClock();

  // Set up a timer to update the clock every second
  setInterval(updateClock, 1000);

  // Function to update the age
  function updateAge() {
    const birthdate = new Date("2005-01-27");
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthdate.getFullYear();

    if (
      currentDate.getMonth() < birthdate.getMonth() ||
      (currentDate.getMonth() === birthdate.getMonth() &&
        currentDate.getDate() < birthdate.getDate())
    ) {
      age--;
    }

    document.getElementById("currentAge").textContent = `Current age: ${age}`;
  }

  // Call the function initially
  updateAge();

  // Set up a timer to call the function every 24 hours
  setInterval(updateAge, 24 * 60 * 60 * 1000);

  // Function to show the selected section
  function showSection(sectionId) {
    // Hide all sections
    var sections = document.querySelectorAll('section.resume-section');
    sections.forEach(function (section) {
      section.style.display = 'none';
    });

    // Show the selected section
    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
      selectedSection.style.display = 'flex'; // Use flex display for the selected section
    }
  }

  // Add click event listeners to navigation links
  var navLinks = document.querySelectorAll('.navbar a');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent the default behavior of the link
      var sectionId = link.getAttribute('href').substring(1); // Extract section ID
      showSection(sectionId); // Show the selected section
    });
  });

  // Scroll to the home section on page load
  document.getElementById('home').scrollIntoView({ behavior: 'smooth' });

  // Show only the home section initially
  showSection('home');
});
