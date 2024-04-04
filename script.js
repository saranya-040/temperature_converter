function convertTemperature() {
    var temperatureInput = parseFloat(document.getElementById('temperatureInput').value);
    var unitSelect = document.getElementById('unitSelect').value;
    var resultDiv = document.getElementById('result');
  
    if (isNaN(temperatureInput)) {
      resultDiv.innerHTML = "Please enter a valid number for temperature.";
      return;
    }
  
    var convertedTemperature;
    var convertedUnit;
  
    if (unitSelect === 'celsius') {
      convertedTemperature = (temperatureInput - 32) * (5 / 9);
      convertedUnit = 'Celsius';
    } else if (unitSelect === 'fahrenheit') {
      convertedTemperature = (temperatureInput * (9 / 5)) + 32;
      convertedUnit = 'Fahrenheit';
    } else if (unitSelect === 'kelvin') {
      convertedTemperature = temperatureInput + 273.15;
      convertedUnit = 'Kelvin';
    }
  
    resultDiv.innerHTML = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${convertedUnit}`;
  }
  