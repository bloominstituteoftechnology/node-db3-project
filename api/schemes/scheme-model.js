

const db = require("../../data/db-config.js")

 // EXERCISE A
  /*
    1A- Study the SQL query below running it in SQLite Studio against `data/schemes.db3`.
    What happens if we change from a LEFT join to an INNER join?
            (---ANSWER:We lose the 7th id if we change to a right join. If we change to an inner join: same; this is because inner joins only display 
              the data that the joined tables have in shared, whereas the left join, with the schemes being the first table we selected
              will display ALL of the selected data no matter what, even if the other table does not share that data.)
      SELECT
          sc.*, --This is selecting ALL Scheme_name and Scheme_id.... sc === schemes
          count(st.step_id) as number_of_steps
      FROM schemes as sc
      LEFT JOIN steps as st
          ON sc.scheme_id = st.scheme_id
      GROUP BY sc.scheme_id
      ORDER BY sc.scheme_id ASC; ---ASC is the default, so you don't need to include this

    2A- When you have a grasp on the query go ahead and build it in Knex.
    Return from this function the resulting dataset.
  */
      async function find(){
        const schemes = await db("schemes as sc")
              .from("schemes")
              .select("sc.*")
              .leftJoin("steps as st","sc.scheme_id as schemeID","st.scheme_id as stepsID")
              .groupBy("schemeID")
              .orderBy("schemeID")
              .count("st.step_id as number_of_steps")
            return schemes
      }



async function findById(scheme_id) { // EXERCISE B
  const currentScheme = await db("schemes as sc")
      .leftJoin("steps as st", "sc.scheme_id as SchemeID", "st.scheme_id as StepID")
      .where("sc.scheme_id", scheme_id)
      .orderBy("st.step_number as StepNum")
    let returnedObject = {
      scheme_id: currentScheme[0].scheme_id,
      scheme_name: currentScheme[0].scheme_name,
      steps: []
    } 
    if(currentScheme[0].step_id){
      returnedObject.steps = thisScheme.map(scheme => {
        return{
          steps_id: scheme.steps_id,
          step_number: scheme.step_number,
          instructions: scheme.instructions
        }
      })
      
    }

    return returnedObject; 
    
    
    
    
    
      
      
      


  /*
    1B- Study the SQL query below running it in SQLite Studio against `data/schemes.db3`:

      SELECT
          sc.scheme_name,
          st.*
      FROM schemes as sc
      LEFT JOIN steps as st
          ON sc.scheme_id = st.scheme_id
      WHERE sc.scheme_id = 1
      ORDER BY st.step_number ASC;

    2B- When you have a grasp on the query go ahead and build it in Knex
    making it parametric: instead of a literal `1` you should use `scheme_id`.

    

    3B- Test in Postman and see that the resulting data does not look like a scheme,
    but more like an array of steps each including scheme information:

      [
        {
          "scheme_id": 1,
          "scheme_name": "World Domination",
          "step_id": 2,
          "step_number": 1,
          "instructions": "solve prime number theory"
        },
        {
          "scheme_id": 1,
          "scheme_name": "World Domination",
          "step_id": 1,
          "step_number": 2,
          "instructions": "crack cyber security"
        },
        // etc
      ]

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
}

async function findSteps(scheme_id) { // EXERCISE C
  const schemeSteps = await db("steps as st")
      .innerJoin("schemes as sc", "sc.scheme_id", "st.scheme_id")
      .where("st.scheme_id", "st.step_number", "st.instructions", "sc.scheme_name")
      .select("st.scheme_id", "st.step_number", "st.instructions", "sc.scheme_name")
      .orderBy("st.step_number")
      return schemeSteps
}

 /*
    1D- This function creates a new scheme and resolves to _the newly created scheme_.
  */
async function add(scheme) { // EXERCISE D
  const newScheme = await db
    .insert({
      scheme_name: scheme.scheme_name
    })
    .into("schemes")
    return newScheme
}


/*
    1E- This function adds a step to the scheme with the given `scheme_id`
    and resolves to _all the steps_ belonging to the given `scheme_id`,
    including the newly created one.
  */
async function addStep(scheme_id, step) { // EXERCISE E
    const newStep = await db("steps")
      .insert({
        scheme_id: scheme_id,
        step_number: step.step_number,
        instructions: step.instructions
      })
      return findById
}


module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
}


////////QUESTION? : Why do all of these functions need to have async await? Because we're altering our database? 