const db = require("./config");
const { ErrorHandler } = require("../helpers");
const msg = "Internal server error";
const find = async () => {
  try {
    const schemes = await db("schemes");
    return schemes;
  } catch (error) {
    throw new ErrorHandler(500, msg);
  }
};

const findById = async id => {
  try {
    const scheme = await db("schemes").where({ id });
    return scheme;
  } catch (error) {
    throw new ErrorHandler(500, msg);
  }
};

const findSteps = async id => {
  try {
    const scheme = await db
      .select(["steps.id", 'steps.instructions', 'steps.step_number'])
      .from("steps")
      .select('schemes.scheme_name')
      .where({ scheme_id: id })
      .leftJoin("schemes", "schemes.id", "=", "steps.scheme_id")
      .orderBy("steps.step_number", "asc")
      .groupBy("steps.step_number");
    return scheme;
  } catch (error) {
    console.log(error);
    throw new ErrorHandler(500, msg);
  }
};

module.exports = {
  find,
  findById,
  findSteps
};
