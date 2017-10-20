In the examples we saw, the request has finished when the call to
send returns. 

This is convenient because it means properties such
as responseText are available immediately. 

But it also means that
our program is suspended as long as the browser and server are
communicating. 

When the connection is bad, the server is slow, or
the file is big, that might take quite a while. 

Worse, because no
event handlers can fire while our program is suspended, the whole
document will become unresponsive.

If we pass true as the third argument to open, the request is
asynchronous.

 This means that when we call send, the only thing
that happens right away is that the request is scheduled to be sent.

Our program can continue, and the browser will take care of the
sending and receiving of data in the background.

We need a mechanism that will notify us when the data is available.

For this, we must listen for the `load` event on the request object.

```javascript
var req = new XMLHttpRequest();
req.open("GET", "example/data.txt", true);
req.addEventListener("load", function() {
  console.log("Done:", req.status);
});
req.send(null);
```

