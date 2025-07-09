async function getWeather() {
    const city = document.getElementById('city').value;
    if (!city) {
      alert("Please enter a city name.");
      return;
    }
  
    const apiKey = '65bcd765519ba98fab93150add8ed671';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("City not found");
  
      const data = await response.json();
      const resultDiv = document.getElementById('weather-result');
      resultDiv.innerHTML = `
        <h2>${data.name}</h2>
        <p>${data.weather[0].description}</p>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
        <p>Temperature: ${data.main.temp} °C</p>
      `;
      resultDiv.classList.remove("hidden");
    } catch (err) {
      alert(err.message);
    }
  }
  