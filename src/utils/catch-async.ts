import type { Response, Request, RequestHandler } from "express";
import type { NextFunction } from "express-serve-static-core";

export const catchAsync = (fn:RequestHandler) => {
    return async (req:Request, res: Response, next: NextFunction) => {
        try {
            await fn (req, res, next );
        } catch (err) {
            next(err);
        }
    }
}