const utils = require("../utils");
const ObjectId = require("mongodb").ObjectId;

const collectionName = "locations";

const parseValues = (values) => {
  return {
    ...(values.type ? { type: values.type } : {}),
    ...(values.bookNow ? { bookNow: values.bookNow } : {}),
    ...(values.title ? { title: values.title } : {}),
    ...(values.stars ? { stars: values.stars } : {}),
    ...(values.distance ? { distance: values.distance } : {}),
    ...(values.pricePerNight ? { pricePerNight: values.pricePerNight } : {}),
    ...(values.summary ? { summary: values.summary } : {}),
    ...(values.convenience ? { convenience: values.convenience } : {}),
    ...(values.assessments ? { assessments: values.assessments } : {}),
    ...(values.photo ? { photo: values.photo } : {}),
    ...(values.photos ? { photos: values.photos } : {}),
  };
};

const queryMount = (params) => ({
  ...(params.id ? { _id: new ObjectId(params?.id) } : {}),
  ...(params.type ? { type: params.type } : {}),
  ...(params.bookNow ? { bookNow: params.bookNow } : {}),
  ...(params.title ? { title: params.title } : {}),
  ...(params.stars ? { stars: params.stars } : {}),
  ...(params.distance ? { distance: params.distance } : {}),
  ...(params.pricePerNight ? { pricePerNight: params.pricePerNight } : {}),
  ...(params.summary ? { summary: params.summary } : {}),
  ...(params.convenience ? { convenience: params.convenience } : {}),
  ...(params.assessments ? { assessments: params.assessments } : {}),
  ...(params.photo ? { photo: params.photo } : {}),
  ...(params.photos ? { photos: params.photos } : {}),
});

const find = async (filter, limit) => {
  try {
    const params = filter || {};
    const response = await utils.db.callBack(
      collectionName,
      async (collection) => {
        return await utils.db.find(
          collection,
          queryMount(params),
          { id: 1 },
          limit
        );
      }
    );

    return utils.returnDb.success(response);
  } catch (error) {
    return utils.returnDb.error(error.message || error.stack);
  }
};

const findCount = async (filter) => {
  try {
    const params = filter || {};
    const response = await utils.db.callBack(
      collectionName,
      async (collection) => {
        return await utils.db.count(collection, queryMount(params), { id: 1 });
      }
    );

    return utils.returnDb.success(response, parseInt(response));
  } catch (error) {
    return utils.returnDb.error(error.message || error.stack);
  }
};

const findOne = async (filter) => {
  try {
    const params = filter || {};
    const response = await utils.db.callBack(
      collectionName,
      async (collection) => {
        return utils.db.findOne(collection, queryMount(params), { id: 1 });
      }
    );

    return utils.returnDb.success(response);
  } catch (error) {
    return utils.returnDb.error(error.message || error.stack);
  }
};

module.exports = {
  find,
  findOne,
  findCount,
};
