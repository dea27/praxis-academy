const msPerDay = 24 * 60 * 60 * 1000;
 

const july172014 = new Date(msPerDay * (44 * 365 + 11 + 197));

const options = { year: '2-digit', month: '2-digit', day: '2-digit',
                hour: '2-digit', minute: '2-digit', timeZoneName: 'short' };
const americanDateTime = new Intl.DateTimeFormat('en-US', options).format;
 
console.log(americanDateTime(july172014)); 