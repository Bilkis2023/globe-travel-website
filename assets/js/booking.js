  
  document.getElementById('searchLocationBtn').addEventListener('click', async function () {
    const departureLocationInput = document.getElementById('departureLocation');
    const query = departureLocationInput.value;

    // Check if the input value is not null or empty
    if (!query) {
        alert('Please enter a departure location.');
        return;
      }

    const url = `https://booking-com15.p.rapidapi.com/api/v1/flights/searchDestination?query=${query}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'aFUh9Zel873PdskooERsxXAPDCjlbAqY',
        'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const resultData = result.data;

      const select = document.createElement('select');
      select.classList.add('form-select');
      resultData.forEach((location) => {
        if(location.type=="AIRPORT"){
            const option = document.createElement('option');
            option.value = location.code;
            option.text = location.name;
            select.add(option);
        }
        
      });

      // Replace the existing departure location input with the new select box
      const searchBtn = document.getElementById('searchLocationBtn');
      searchBtn.parentNode.removeChild(searchBtn);

      departureLocationInput.replaceWith(select);
    } catch (error) {
      console.error('Error searching for location:', error);
    }
  });

  document.getElementById('searchDLocationBtn').addEventListener('click', async function () {
    const departureLocationInput = document.getElementById('destination');
    const query = departureLocationInput.value;

    // Check if the input value is not null or empty
    if (!query) {
        alert('Please enter a Destination location.');
        return;
      }
    const url = `https://booking-com15.p.rapidapi.com/api/v1/flights/searchDestination?query=${query}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'aFUh9Zel873PdskooERsxXAPDCjlbAqY',
        'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
      }
    };

    try {
        
        const response = await fetch(url, options);
        const result = await response.json();
        const resultData = result.data;

      const select = document.createElement('select');
      select.classList.add('form-select');
      resultData.forEach((location) => {
        if(location.type=="AIRPORT"){
            const option = document.createElement('option');
            option.value = location.code;
            option.text = location.name;
            select.add(option);
        }
        
      });

      const searchBtn = document.getElementById('searchDLocationBtn');
      searchBtn.parentNode.removeChild(searchBtn);

      // Replace the existing departure location input with the new select box
      departureLocationInput.replaceWith(select);
    } catch (error) {
      console.error('Error searching for location:', error);
    }
  });

  
  document.getElementById('book_flight').addEventListener('click', async function () {
    alert("Successfully Booked")
  });



