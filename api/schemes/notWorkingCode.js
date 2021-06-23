// NOT WORKING #1
/*
const number_of_steps = initialArray.count("st.step_id");
console.log(number_of_steps);

// const stepsArray

const secondary = initialArray.forEach((object) => {
  return {
    scheme_id: `${scheme_id}`,
    scheme_name: "sc.scheme_name",
    steps: [
      {
        step_id: "st.step_id",
        step_number: "st.step_number",
        instructions: "st.instructions",
      },
    ],
  };
});
return secondary;
*/

// NOT WORKING #2
/*
const arrayToObject = (array) => {
  array.forEach((item, index) => {
    if (item.step_id !== null) {
      return item;
    } else {
      return [];
    }
  });
};
  {
    scheme_id: `${scheme_id}`,
    scheme_name: "sc.scheme_name",
    steps: [{
        step_id: "st.step_id",
        step_number: "st.step_number",
        instructions: "st.instructions",
    }],
  }
*/

// NOT WORKING #3
/*
const arrayToObject = (array, keyField) =>
    array.forEach((thing) => {
      Object.entries(thing).reduce((obj, item) => {
        obj[item[keyField]] = item;
        return obj;
      }, {});
    });
  const peopleObject = arrayToObject(initialArray, "scheme_id");
  return peopleObject;
*/

// const object = Object.assign({}, ...initialArray);
// return object;
