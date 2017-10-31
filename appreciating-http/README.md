#### RPC

When building a system that requires communication between a
JavaScript program running in the browser (client-side) and a program
on a server (server-side), there are several different ways to model
this communication.

A commonly used model is that of remote procedure calls. In this
model, communication follows the patterns of normal function calls,
except that the function is actually running on another machine.
Calling it involves making a request to the server that includes
the function’s name and arguments. The response to that request
contains the returned value.

When thinking in terms of remote procedure calls, HTTP is just a
vehicle for communication, and you will most likely write an
abstraction layer that hides it entirely.

See the [`./jayson/`](https://github.com/ULL-ESIT-MII-CA-1718/ejs-chapter17-HTTP/tree/master/appreciating-http/jayson) dir for an example.

* [Jayson is a simple but featureful JSON-RPC 2.0/1.0 client and server for node.js](https://github.com/tedeh/jayson)


#### REST

Another approach is to build your communication around the concept
of resources and HTTP methods. 

* Instead of a remote procedure called
`addUser`, you use a `PUT` request to `/users/larry`. 
* Instead of encoding
that user’s properties in function arguments, you define a document
format or use an existing format that represents a user (JSON/XML etc.). 
* The body of the `PUT` request to create a new resource is then simply such a
document. 
* A resource is fetched by making a `GET` request to the
resource’s URL (for example, `/user/larry`), which returns the document
representing the resource.

This second approach makes it easier to use some of the features
that HTTP provides, such as support for caching resources (keeping
a copy on the client side). It can also help the coherence of your
interface since resources are easier to reason about than a jumble
of functions.

See [Introducción a los servicios web RESTful](https://dosideas.com/noticias/java/314-introduccion-a-los-servicios-web-restful).

There is a submodule repo in directory `node-api` corresponding to
the repo [https://github.com/ULL-ESIT-MII-CA-1718/node-api](https://github.com/ULL-ESIT-MII-CA-1718/node-api). This repo contains
the code corresponding to the aforementioned tutorial.
