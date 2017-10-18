By convention, the GET method is used for requests that do not have
side effects, such as doing a search.

Requests that change something on the server, such as creating a
new account or posting a message, should be expressed with other
methods, such as POST.

Client-side software, such as a browser, knows that it shouldn’t
blindly make POST requests but will often implicitly make GET
requests—for example, to prefetch a resource it believes the user
will soon need.


