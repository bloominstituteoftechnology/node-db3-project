const db = require("../../data/db-config.js");

const find = () => {
  return db("schemes as sc")
    .join("steps as st", "sc.scheme_id", "st.scheme_id")
    .select("sc.*", "st.step_id as number_of_steps")
    .count("st.step_id as number_of_steps")
    .orderBy("sc.scheme_id")
    .groupBy("sc.scheme_id");
};
/*
      SELECT
          sc.*,
          count(st.step_id) as number_of_steps
      FROM schemes as sc
      LEFT JOIN steps as st
          ON sc.scheme_id = st.scheme_id
      GROUP BY sc.scheme_id
      ORDER BY sc.scheme_id ASC;\
  */

const findById = async (scheme_id) => {
  const initialArray = await db("schemes as sc")
    .leftJoin("steps as st", "sc.scheme_id", "st.scheme_id")
    .select(
      "sc.scheme_id",
      "sc.scheme_name",
      "st.step_id",
      "st.step_number",
      "st.instructions"
    )
    .where("sc.scheme_id", `${scheme_id}`)
    .orderBy("sc.scheme_id", "asc");
  // return initialArray;
  // returns array of objects
  const object = (array) => {
    array.forEach((item) => {
      console.log(array[0]);
      if (item.step_id !== null) {
        return item;
      } else {
        return [];
      }
    });
  };
  const schemeObject = object(initialArray);
  return schemeObject;
  // const arrayToObject = (array, keyField) =>
  //   array.reduce((obj, item) => {
  //     obj[item[keyField]] = item;
  //     return obj;
  //   }, {});
  // const schemeObject = arrayToObject(initialArray, "scheme_id");
  // return schemeObject;
};
/*
      SELECT
          sc.scheme_name,
          st.*
      FROM schemes as sc
      LEFT JOIN steps as st
          ON sc.scheme_id = st.scheme_id
      WHERE sc.scheme_id = 1
      ORDER BY st.step_number ASC;

    4B- Using the array obtained and vanilla JavaScript, create an object with
    the structure below, for the case _when steps exist_ for a given `scheme_id`:

      {
        "scheme_id": 1,
        "scheme_name": "World Domination",
        "steps": [
          {
            "step_id": 2,
            "step_number": 1,
            "instructions": "solve prime number theory"
          },
          {
            "step_id": 1,
            "step_number": 2,
            "instructions": "crack cyber security"
          },
          // etc
        ]
      }

    5B- This is what the result should look like _if there are no steps_ for a `scheme_id`:

      {
        "scheme_id": 7,
        "scheme_name": "Have Fun!",
        "steps": []
      }
  */

function findSteps(scheme_id) {
  return db("steps as st")
    .leftJoin("schemes as sc", "st.scheme_id", "sc.scheme_id")
    .select("st.step_id", "st.step_number", "st.instructions", "sc.scheme_name")
    .orderBy("sc.scheme_id")
    .distinct()
    .orderBy("st.step_number");
  // .groupBy("st.step_id")
}

/*  
  select
    st.step_id, st.step_number, st.instructions, 
    sc.scheme_name
    from steps as st
    left join schemes as sc
        on st.scheme_id = sc.scheme_id
    group by sc.scheme_name
    order by st.step_number
*/

function add(scheme) {
  // EXERCISE D
  /*
    1D- This function creates a new scheme and resolves to _the newly created scheme_.
  */
}

function addStep(scheme_id, step) {
  // EXERCISE E
  /*
    1E- This function adds a step to the scheme with the given `scheme_id`
    and resolves to _all the steps_ belonging to the given `scheme_id`,
    including the newly created one.
  */
}

module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
};
