const httpHelper = require("../utils/httpHelper");
const db = require("../database");

const find = async ({ queryStringParameters }) => {
  try {
    const params = queryStringParameters || {};
    const query = {
      ...(params.id ? { id: params?.id } : {}),
      ...(params.type ? { type: Number(params?.type) } : {}),
    };
    const limit = params.limit || 500;
    const response = await db.locations.find(query, Number(limit));
    return httpHelper.ok(response);
  } catch (error) {
    console.log(error);
    return httpHelper.badRequest(error);
  }
};

module.exports = {
  find,
};
