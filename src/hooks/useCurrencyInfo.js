// hooks/useCurrencyInfo.js
import { useState, useEffect } from "react";

const useCurrencyInfo = (baseCurrency) => {
  const [currencyInfo, setCurrencyInfo] = useState({});

  useEffect(() => {
    // Fetch currency data from an API or some other source
    const fetchCurrencyInfo = async () => {
      try {
        // Replace with your actual API URL
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
        const data = await response.json();
        setCurrencyInfo(data.rates); // Assuming `data.rates` contains the rates object
      } catch (error) {
        console.error("Failed to fetch currency info:", error);
        setCurrencyInfo({}); // Set an empty object on error
      }
    };

    fetchCurrencyInfo();
  }, [baseCurrency]);

  return currencyInfo;
};

export default useCurrencyInfo;
