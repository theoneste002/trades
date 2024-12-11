// Mock exchange rates for East African currencies (rates are hypothetical)
const exchangeRates = {
    EAC: { BURUNDI: 1.2, RWANDA: 1.3, UGANDA: 0.9, TANZANIA: 0.8, KENYA: 1.1, "SOUTH SUDAN": 1.5, DRC: 1.4, SMALIA: 1.6, EAC: 1 },
    BURUNDI: { EAC: 0.83, RWANDA: 1.1, UGANDA: 0.7, TANZANIA: 0.6, KENYA: 0.9, "SOUTH SUDAN": 1.2, DRC: 1.1, SMALIA: 1.3, BURUNDI: 1 },
    RWANDA: { EAC: 0.77, BURUNDI: 0.9, UGANDA: 0.8, TANZANIA: 0.7, KENYA: 1.0, "SOUTH SUDAN": 1.4, DRC: 1.3, SMALIA: 1.5, RWANDA: 1 },
    UGANDA: { EAC: 1.11, BURUNDI: 1.3, RWANDA: 1.2, TANZANIA: 1.0, KENYA: 1.2, "SOUTH SUDAN": 1.6, DRC: 1.5, SMALIA: 1.8, UGANDA: 1 },
    TANZANIA: { EAC: 1.25, BURUNDI: 1.5, RWANDA: 1.4, UGANDA: 1.2, KENYA: 1.3, "SOUTH SUDAN": 1.7, DRC: 1.6, SMALIA: 1.9, TANZANIA: 1 },
    KENYA: { EAC: 0.91, BURUNDI: 1.2, RWANDA: 1.1, UGANDA: 0.8, TANZANIA: 0.9, "SOUTH SUDAN": 1.3, DRC: 1.2, SMALIA: 1.4, KENYA: 1 },
    "SOUTH SUDAN": { EAC: 0.67, BURUNDI: 0.8, RWANDA: 0.7, UGANDA: 0.6, TANZANIA: 0.5, KENYA: 0.9, DRC: 1.1, SMALIA: 1.2, "SOUTH SUDAN": 1 },
    DRC: { EAC: 0.71, BURUNDI: 0.9, RWANDA: 0.8, UGANDA: 0.7, TANZANIA: 0.6, KENYA: 1.0, "SOUTH SUDAN": 1.3, SMALIA: 1.5, DRC: 1 },
    SMALIA: { EAC: 0.62, BURUNDI: 0.8, RWANDA: 0.7, UGANDA: 0.6, TANZANIA: 0.5, KENYA: 0.9, "SOUTH SUDAN": 1.2, DRC: 1.1, SMALIA: 1 },
  };
  
  // Function to convert currency
  const convertCurrency = () => {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("from-currency").value;
    const toCurrency = document.getElementById("to-currency").value;
  
    // Validate the amount
    if (isNaN(amount) || amount <= 0) {
      document.getElementById("result").textContent = "Please enter a valid amount.";
      return;
    }
  
    // Get the exchange rate
    const rate = exchangeRates[fromCurrency][toCurrency];
  
    // Calculate the converted amount
    const convertedAmount = (amount * rate).toFixed(2);
  
    // Display the result
    document.getElementById("result").textContent = 
      `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
  };
  
  // Attach event listener to the Convert button
  document.getElementById("convert-btn").addEventListener("click", convertCurrency);
  
  