import { useEffect, useState } from "react";

//function to fetch the currency conversion data
function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchDate = async () => {
      try {
        //fetch data asynchronously(wait till response is fetched)
        const response = await fetch(
          `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        );
        //parse the data in json format (from string format)
        const result = await response.json();
        //set the data(pair of {key: currency, value: conversion rate})
        setData(result[currency]);
        console.log(result[currency]);
      } catch (err) {
        console.log("Error fetching currency data: ", err);
      }
    };

    fetchDate();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
