import bodyParser from "body-parser";
import express from "express";
import { v4 as uuidv4 } from "uuid";

import databaseConnection from "./database/db";
import { addEntryHandler, deleteHistoryHandler } from "./handlers/entry";
import { createUserHandler } from "./handlers/user";

const app = express();
const PORT = 3000;

const main = async () => {
  await databaseConnection();

  console.log(uuidv4());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.post("/app/user", createUserHandler);
  app.post("/app/user/:uid/transaction", addEntryHandler);
  app.delete("/app/user/:uid/transaction", deleteHistoryHandler);

  app.listen(PORT, () => {
    console.log("Server listening on port 3000");
  });
};

main();
