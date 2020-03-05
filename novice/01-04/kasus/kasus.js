var re = /[\w-]+@([\w-]+\.)+[\w-]+$/i;
var rgname = /([^@]*)/;
var rgtId = /[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/;

function testInfo(answer) {
  var OK = re.exec(answer.value);
  var uname = rgname.exec(answer.value);
  var nametId = rgtId.exec(answer.value);
  if (!OK) {
    alert(answer.value + ' ini bukan input email!'); 
  } else {
    alert('Benar ini adalah input email' + uname[0] + 'adalah domain anda' + nametId[0]);
}
} 