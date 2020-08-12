# Additional Notes

- today's [training kit](https://learn.lambdaschool.com/web4node/module/recw2ezN22yjehidj/)
- Recorded Lecture on YouTube

---

## database methods

- `npm i`
- check out [index.js](./index.js) & [app.js](./app.js)

- open up `schemes.db3` in `SQLiteStudio`

---

### set up [db-config.js](./data/db-config.js)

```javascript
const knex = require("knex");
const config = require("../knexfile");
module.exports = knex(config.development);
```

---

### work on [user-model.js](./schemes/scheme-model.js)

- bring database configuration into the model

  `const db = require('../data/db-config')`

- don't forget exports!! --- this is why we put them at the top & use named functions

- very easy :arrow_down:
  - find()
  - findById(id)
  - findSteps(id)
  - remove(id)
