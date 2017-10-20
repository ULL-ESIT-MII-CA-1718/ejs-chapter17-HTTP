Making HTTP requests in web page scripts once again raises concerns
about security. 

The person who controls the script might not have
the same interests as the person on whose computer it is running.

More specifically, if I visit `themafia.org`, I do not want its scripts
to be able to make a request to `mybank.com`, using identifying
information from my browser, with instructions to transfer all my
money to some random mafia account.

It is possible for websites to protect themselves against such
attacks, but that requires effort, and many websites fail to do it.
For this reason, browsers protect us by disallowing scripts to make
HTTP requests to other domains (names such as `themafia.org` and
`mybank.com`).

This can be an annoying problem when building systems that want to
access several domains for legitimate reasons. Fortunately, servers
can include a header like this in their response to explicitly
indicate to browsers that it is okay for the request to come from
other domains:

            Access-Control-Allow-Origin: *


#### Instructions

  gulp s5000
  gulp s3000
  visit localhost:5000 and click
  kill s3000 server
  gulp s3000-allow
  visit localhost:5000 and click
