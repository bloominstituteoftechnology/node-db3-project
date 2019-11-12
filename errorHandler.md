# Error Handler

Express uses middleware for everything (almost everything). One type of middleware that comes *built in with express* is an error handler middleware.

## Basic errorHandler

In order to create an error handler middleware, you need to have **4 parameters:* `err`, `req`, `res`, and `next`.

Here's a simple example of an error handler middleware:

```
module.exports = errorHandler;

function errorHandler(err, req, res, next) {
    console.log(err)
    res.status(500).json(err)
}
```

Basic. Anytime we have an internal server error, we can go to this errorHandler and it will take care of the response for us.

How do we get to the errorHandler though? . . . by using `next()`!

## Calling the error Handler

Let's take a basic router method:
```
router.get('/', (req, res) => {
  Schemes.find()
  .then(schemes => {
    res.json(schemes);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get schemes' });
  });
});
```
This should find and respond with all of the schemes in the database. If we wanted to use our errorHandler, we could change the code to look like:
```
router.get('/', (req, res, next) => { // Include next in the paramters
  Schemes.find()
  .then(schemes => {
    res.json(schemes);
  })
  .catch(err => next(err));
});
```
If we call `next()` and pass something into the function as an argument (just like `next(err)` ), express will route directly to the middleware. And from there, we can respond with our 500 status!

## Using the error handler

We have an errorHandler, and we've set up our router method to call the errorHandler. Let's make sure that our server is actually using our error middleware:
```
// Inside server.js

const express = require('express');

const SchemeRouter = require('./schemes/scheme-router-new.js');
const errorHandler = require("./middleware/errorHandler");

const server = express();

server.use(express.json());
server.use('/api/schemes', SchemeRouter);
server.use(errorHandler); // Always use the errorHandler LAST!

module.exports = server;
```

The errorHandler must be used last so it can catch any and all errors. Once you have these three things set up, your error Handler middleware is good to go!

## Advanced Usage

Okay, so this errorHandler isn't that great. It only responds with a 500, and that's not really scaleable...

Let's take a look at a different route:
```
router.get('/:id', (req, res) => {
  const { id } = req.params;

  Schemes.findById(id)
  .then(scheme => {
    if (scheme) {
      res.json(scheme);
    } else {
      res.status(404).json({ message: 'Could not find scheme with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get schemes' });
  });
});
```

This route has two responses that aren't succesful: a status 404, and a status 500. Here's one way you can set up your router to go to the errorHandler:
```
router.get('/:id', (req, res, next) => {
  const { id } = req.params;

  Schemes.findById(id)
  .then(scheme => {
    if (scheme) {
      res.json(scheme);
    } else {
      next({ status:404, details: 'Could not find scheme with given id.' }) // Send an object with a status and message
    }
  })
  .catch(err => next(err)); // Send any error to the errorHandler
});
```

This router method now calls the error handler anytime that *isn't* a successful response. Let's make sure our errorHandler can send the correct response to the user:
```
module.exports = errorHandler;

function errorHandler(err, req, res, next) {
    console.log(err)

    const errorObject = {
        status: err.status || 500, // If we have a status, we take it. If we don't have a status, set it to 500 automatically
        deatils: err.details || "Internal Server Error" // Have details? Use em. Don't have any? Use the default phrase.
    }

    res.status(errorObject.status).json(errorObject)
}
```
Now, our errorHandler will respond to the client with the status message we've defined when we called `next()` in our router. If our error message doesn't have a status or details, we just use the standard `500 Internal Server Error` phrase.

### Above and Beyond

Want to add more info to your error Handler? Try something like this:
```
module.exports = errorHandler;

function errorHandler(err, req, res, next) {

    const errorObject = {
        method: req.method,
        endpoint: req.originalUrl,
        status: err.status || 500, // If we have a status, we take it. If we don't have a status, set it to 500 automatically
        deatils: err.details || "Internal Server Error" // Have details? Use em. Don't have any? Use the default phrase.
    }
    if (errorObject.status == 500) console.log(err) // Internal server error -> Let's see what the error is in the console
    res.status(errorObject.status).json(errorObject)
}
```

Check out the errorHandler file in this repo to see more!