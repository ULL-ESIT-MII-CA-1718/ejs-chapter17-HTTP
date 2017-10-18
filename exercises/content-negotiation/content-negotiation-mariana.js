var URL = 'http://eloquentjavascript.net/author';

function get(filetype) {
  var req = new XMLHttpRequest();
  req.open('GET', URL, false);
  req.setRequestHeader('Accept', filetype);
  req.send(null);
  return req.responseText;
}

console.log('Plain text:')
console.log(get('text/plain'));

console.log('\nHTML:')
console.log(get('text/html'));

console.log('\nJSON:')
console.log(get('application/json'));
