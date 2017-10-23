/*
  To create a promise object, we call the Promise constructor, giving
  it a function that initializes the asynchronous action. The constructor
  calls that function, passing it two arguments, which are themselves
  functions. The first should be called when the action finishes
  successfully, and the second should be called when it fails.
*/

function get(url) {
  return new Promise(function(succeed, fail) {
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.addEventListener("load", function() {
      if (req.status < 400)
        succeed(req.responseText);
      else
        fail(new Error("Request failed: " + req.statusText));
    });
    req.addEventListener("error", function() {
      fail(new Error("Network error while accessing "+url));
    });
    req.send(null);
  });
}
