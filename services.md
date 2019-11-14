# Change this title

When we start diving into more complex database queries, we want our code to be smooth. That means that one function does only one thing as much as possible

## Convoluted Code

Look at the `scheme-model.js` and `scheme-router.js` files. Lets look at one router method, and one database function each:
```js
// scheme-router.js
// to add a new step to the database
router.post('/:id/steps', (req, res) => {
  const stepData = req.body;
  const { id } = req.params; 

  schemeModel.findById(id) // We call one database function to see if the scheme exists
  .then(scheme => {
    if (scheme) { // Does exist? Then we call a second database function to add it in
      schemeModel.addStep(stepData, id)
      .then(step => {
        res.status(201).json(step);
      })
    } else { // Doesn't exist? Return a 404
      res.status(404).json({ message: 'Could not find scheme with given id.' })
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new step' });
  });
});
```

```js
// scheme-model.js
// adding a step
const addStep = async (step, scheme_id) => {
    const newStep = { // We first create a valid step object
        scheme_id,
        step_number: step.step_number,
        instructions: step.instructions
    }
    const [id] = await db("steps").insert(newStep, "id") // We insert into the database
    return findStepById; // We then call a different function to do another database query
}
```
Both our router method, and our database function have multiple things going on:

- The router method calls the Scheme model twice.
- The model function creates an object, and queries the database twice within one function

Imagine if these files were more isolated! This would mean:
- They're easier to test
- They have cleaner code
- They are easier to edit if we need to go back and change any code.

## Solution: A Service File

A service file is a file meant to handle the "Business logic" in the code. What does that mean?

Let's use the above code for example. Where are we supposed to 