var re = /[\w-]+@([\w-]+\.)+[\w-]+$/;
var name = /([^@]*)/;

function testInfo(platInput) {
  var OK = re.exec(platInput.value);
  if (!OK) {
    alert(platInput.value + ' ini bukan input email!'); 
  } else {
    alert('Benar ini adalah input email' +platInput.value);}
} 