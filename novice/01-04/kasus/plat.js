var re = /([A-Z]){1,2}\s?\d{1,4}\s?[A-Z]{1,3}/;
function testInfo(platInput) {
  var OK = re.exec(platInput.value);
  if (!OK) {
    alert(platInput.value + ' isn\'t a plat number with area code!'); 
  } else {
    alert('Thanks, your plat number is ' +platInput.value);}
} 