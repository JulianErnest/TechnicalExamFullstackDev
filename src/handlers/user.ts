import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

import { connect } from "../database/db";

async function createUserHandler(req: Request, res: Response) {
  try {
    console.log(req.body, "request body");
    const { os } = req.body;
    if (os == "ios" || os == "android") {
      await connect.execute("INSERT INTO user (uuid, os) VALUES (?, ?)", [
        uuidv4(),
        os,
      ]);
      return res.send({ message: "User created successfully" });
    } else {
      return res.status(400).send({
        message: "OS is invalid",
      });
    }
  } catch (error) {
    console.log(error);
    return error;
  }
}

export { createUserHandler };
