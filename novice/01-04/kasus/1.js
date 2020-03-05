var re = ^[a-zA-z]{1,2}\s?\d{1,4}\s?[a-zA-Z]{1,3}$;
function testInfo(platInput) {
  var OK = re.exec(platInput.value);
  if (!OK) {
    console.error(platInput.value + ' isn\'t a phone number with area code!'); 
  } else {
    console.log('Thanks, your phone number is ' + OK[0]);}
} 