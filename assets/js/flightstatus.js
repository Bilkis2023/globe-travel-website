
// Replace 'YOUR_RAPIDAPI_KEY' with your actual RapidAPI key
const rapidApiKey = 'aFUh9Zel873PdskooERsxXAPDCjlbAqY';

// Function to get flight status
function getFlightStatus(flightNumber, departureDate) {
    
  let iataCode = flightNumber.slice(0, 2);
  let flightNumberDigits = flightNumber.slice(2);
  const apiUrl = 'https://flight-info-api.p.rapidapi.com/schedules?version=v2'; // Replace with the actual API endpoint

  // Build the URL with the provided flight details
  const url = `${apiUrl}&CodeType=IATA&CarrierCode=${iataCode}&FlightNumber=${flightNumberDigits}&DepartureDateTime=${departureDate}`;

  // Make an AJAX request to the flight status API
  fetch(url, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': rapidApiKey,
      'X-RapidAPI-Host': 'flight-info-api.p.rapidapi.com'
    },
  })
    .then(response => response.json())
    .then(data => {
        console.log(data)
      displayFlightStatus(data.data);
    })
    .catch(error => {
      console.error('Error fetching flight status:', error);
    });
}

// Function to display flight status results
function displayFlightStatus(data) {
  // Update the HTML elements on the page with the flight status information
  const resultsSection = document.querySelector('.flight-status-results');
  resultsSection.innerHTML = '';
  data.forEach(flight => {
    const flightStatusHTML = `
      <div class="flight-status">
        <h2>Flight Status</h2>
        <p>Carrier: ${flight.carrier.iata}/${flight.carrier.icao}</p>
        <p>Flight Number: ${flight.flightNumber}</p>
        <p>Flight Type: ${flight.flightType}</p>
        <p>Departure Airport: ${flight.departure.airport.iata}/${flight.departure.airport.icao}</p>
        <p>Departure Terminal: ${flight.departure.terminal}</p>
        <p>Departure Date/Time (Local): ${flight.departure.date.local} ${flight.departure.time.local}</p>
        <p>Arrival Airport: ${flight.arrival.airport.iata}/${flight.arrival.airport.icao}</p>
        <p>Arrival Terminal: ${flight.arrival.terminal}</p>
        <p>Arrival Date/Time (Local): ${flight.arrival.date.local} ${flight.arrival.time.local}</p>
        <p>Elapsed Time: ${flight.elapsedTime} minutes</p>
        <p>Aircraft Type: ${flight.aircraftType.iata}</p>
        <p>Service Type: ${flight.serviceType.iata}</p>
      </div>
      <hr>
    `;

    resultsSection.innerHTML += flightStatusHTML;
  });
}

// Event listener for the flight status form submission
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    // Get flight details from the form
    const flightNumber = document.getElementById('flightNumber').value;
    const departureDate = document.getElementById('departureDate').value;
  
    // Validate flight number and departure date
    if (!flightNumber || !departureDate) {
      // Display an error message to the user
      alert('Please enter both flight number and departure date.');
      return; // Stop further execution
    }
  
    // Call the function to get flight status
    getFlightStatus(flightNumber, departureDate);
});