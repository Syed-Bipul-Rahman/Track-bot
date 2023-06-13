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

// Print the device type and operating system
console.log('Device Type: ' + deviceType);
console.log('Operating System: ' + operatingSystem);
