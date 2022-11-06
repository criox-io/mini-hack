import service from "./user.service.js";

const getAll = async (_req, _res) => {
  const data = await service.getAll();
  _res.send({ data });
};

const getById = async (_req, _res) => {
  const { id } = _req.params;
  const data = await service.getById(id);
  _res.send({ data: [data] });
};

const add = async (_req, _res) => {
  const data = await service.add(_req.body);
  _res.send({ data: [data] });
};

const update = async (_req, _res) => {
  const { id } = _req.params;
  const data = await service.update(id, _req.body);
  _res.send({ data: [data] });
};

const deleteById = async (_req, _res) => {
  const { id } = _req.params;
  const data = await service.deleteById(id);
  _res.send({ data: [data] });
};

export { getAll, getById, add, update, deleteById };
