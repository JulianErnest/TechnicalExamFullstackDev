import { Request, Response } from "express";

async function addEntryHandler(req: Request, res: Response) {
  try {
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function deleteHistoryHandler(req: Request, res: Response) {
  try {
  } catch (error) {
    console.log(error);
    return error;
  }
}

export { addEntryHandler, deleteHistoryHandler };
