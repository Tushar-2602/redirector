import { Router } from "express";
import { test } from "../Controllers/Health.js";

const fixedRouter = Router();

fixedRouter.get("/test",test)

export {fixedRouter}