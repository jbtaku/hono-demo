import { Hono } from "hono";
import { googleSpreadsheet } from "./controllers/googleSpreadSheet";
import { messagingApi } from "./controllers/messagingApi";

const app = new Hono()
  .route("/googleSpreadSheet", googleSpreadsheet)
  .route("/messagingApi", messagingApi);

export type AppType = typeof app;
export default app;
