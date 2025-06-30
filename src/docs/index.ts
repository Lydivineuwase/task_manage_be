import os from "os";

import swaggerDoc from "./swagger.json";
import auth from "./auth";
import { users } from "./users";
import { task  } from "./task";


const defaults = swaggerDoc.paths;

const paths = {
  ...defaults,
  ...auth,
  ...users,
  ...task,
};

const config = {
  swagger: "2.0",
  info: {
    version: "1.0.0.",
    title: "Simple Task Tracker App APIs Documentation",
    description: "",
  },
  servers: [
    {
      url: `http://localhost:${process.env.PORT}`,
      name: `${os.hostname()}`,
    },
    {
      url: `https://${process.env.HOST}`,
      name: `${os.hostname()}`,
    },
  ],

  basePath: `/api/${process.env.API_VERSION || "v1"}`,
  schemes: ["http", "https"],
  securityDefinitions: {
    JWT: {
      type: "apiKey",
      name: "Authorization",
      in: "header",
    },
  },
  tags: [
    {
      name: "Simple Task Tracker App APIs Documentation",
    },
  ],
  consumes: ["application/json"],
  produces: ["application/json"],
  paths,
};
export default config;
