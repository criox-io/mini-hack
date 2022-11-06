import service from "../user/user.service.js";
import jwt from "jsonwebtoken";
import ENV from "../../env/index.js";

const login = async (_req, _res) => {
  const { username, password } = _req.body;
  const data = await service.getUserByUsername(username);

  if (!data) {
    _res.send({ data: [], message: "User not found", status: 404 });
    return;
  }

  if (data.password !== password) {
    _res.send({ data: [], message: "Incorrect password", status: 401 });
    return;
  }

  const token = await jwt.sign({ data: {} }, ENV.JWT_KEY, { expiresIn: "1h" });

  _res.send({ data: [data], token });
};

export { login };
