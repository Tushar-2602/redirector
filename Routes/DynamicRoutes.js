import { Router } from "express";
import { redirect } from "../Controllers/Redirect.js";

const dynamicRouter = Router();

dynamicRouter.get("/{*splat}",redirect)
dynamicRouter.post("/{*splat}",redirect)
export {dynamicRouter}