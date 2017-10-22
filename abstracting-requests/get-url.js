/*
   To handle failing requests, we have to allow an additional
   function to be passed to our helper function and call it when a request
   goes wrong. 
   
   We can use the convention that if the
   request fails, an additional argument describing the problem is
   passed to the callback 
*/
function getURL(url, callback) {
  var req = new XMLHttpRequest();

  req.open("GET", url, true);

  req.addEventListener("load", function() {
    if (req.status < 400)
      callback(req.responseText);
    else
      callback(null, new Error("Request failed: " +
                               req.statusText));
  });

  req.addEventListener("error", function() {
    callback(null, new Error("Network error"));
  });

  req.send(null);
}
