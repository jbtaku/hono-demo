import { formSchema } from "../types/formSchema";
import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";

const app = new Hono();
export const googleSpreadsheet = app.post(
  "/",
  zValidator("json", formSchema),
  async (c) => {
    const data = c.req.valid("json");
    return c.json(data, 200);
  }
);
