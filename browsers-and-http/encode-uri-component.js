/*
JavaScript provides the encodeURIComponent and decodeURIComponent
functions to encode and decode this format.
*/

console.log(encodeURIComponent("Hello & goodbye"));
// → Hello%20%26%20goodbye
console.log(decodeURIComponent("Hello%20%26%20goodbye"));
// → Hello & goodbye

