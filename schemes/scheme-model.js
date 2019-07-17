const db = require("./config");
const { ErrorHandler } = require("../helpers");

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
    throw new ErrorHandler(500, error.message);
  }
};

const findSteps = async id => {
  try {
    const scheme = await db
      .select(["steps.id", "steps.instructions", "steps.step_number"])
      .from("steps")
      .select("schemes.scheme_name")
      .where({ scheme_id: id })
      .leftJoin("schemes", "schemes.id", "=", "steps.scheme_id")
      .orderBy("steps.step_number", "asc")
      .groupBy("steps.step_number");
    return scheme;
  } catch (error) {
    throw new ErrorHandler(500, error.message);
  }
};

const add = async scheme => {
  try {
    const newScheme = await db("schemes").insert(scheme);
    if (newScheme.length) {
      return findById(newScheme[0]);
    }
    return null;
  } catch (error) {
    throw new ErrorHandler(500, error.message);
  }
};

const update = async (scheme, id) => {
  try {
    const newScheme = await db("schemes")
      .update(scheme)
      .where({ id });
    if (newScheme) {
      return findById(id);
    }
    return null;
  } catch (error) {
    throw new ErrorHandler(500, error.message);
  }
};

const remove = async id => {
  try {
    const deleted = await db("schemes")
      .where({ id })
      .del();
      return deleted
  } catch (error) {
    throw new ErrorHandler(404, error.message)
  }
};

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};
