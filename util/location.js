const axios = require("axios");

// const HttpError = require("../models/http-error");

const API_KEY = process.env.API_KEY;

// function getCoordsForAddress(address) {
//     return {
//       lat : 40.7484474,
//       lng: -73.9871516,
//     };
//   }

async function getCoordsForAddress(address) {
  ////////////////////////////////////////////////////
  const response = await axios.get(
    `https://geocode.maps.co/search?q=${encodeURIComponent(
      address
    )}&api_key=${API_KEY}`
  );

  const data = response.data;

  if (!data || data.length === 0) {
    throw new Error("Could not find location for the specified address");
  }

  const coordinates = {
    lat: parseFloat(data[0].lat),
    lng: parseFloat(data[0].lon),
  };
  
  return coordinates;
}

module.exports = getCoordsForAddress;
