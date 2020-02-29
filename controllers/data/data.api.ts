import { Request, Response, NextFunction } from "express";
import * as data from "./world.json";

/**
 * Update user's information
 * @api {get} /world
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 *
 * @returns {Promise<void>}
 */

export function getWorldData(req: Request, res: Response, next: NextFunction) {
  res.json(data);
}

/**
 * Update user's information
 * @api {get} /world/more
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 *
 * @returns {Promise<void>}
 */

export function getMoreData(req: Request, res: Response, next: NextFunction) {
  res.json(data.data + "differentRoute");
}
