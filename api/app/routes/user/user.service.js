import model from "./user.model.js";

const getAll = async () => {
  return await model.find();
};

const getUserByUsername = async (_username) => {
  return await model.findOne({ username: _username });
};

const getById = async (_id) => {
  return await model.findById({ _id });
};

const add = async (_body) => {
  return await model.create(_body);
};

const update = async (_id, _body) => {
  return await model.findByIdAndUpdate({ _id }, _body, { new: true });
};

const deleteById = async (_id) => {
  return await model.findByIdAndDelete({ _id }, { new: true });
};

export default { getAll, getById, add, update, deleteById, getUserByUsername };
