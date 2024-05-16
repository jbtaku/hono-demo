import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";

const app = new Hono();

export const messagingApi = app.post(
  "/",
  zValidator(
    "json",
    z.object({
      userId: z.string(),
      text: z.string(),
      channelAccessToken: z.string(),
    })
  ),
  async (c) => {
    const { userId, text, channelAccessToken } = c.req.valid("json");
    await fetch("https://api.line.me/v2/bot/message/push", {
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${channelAccessToken}`,
      },
      method: "POST",
      body: JSON.stringify({
        to: userId,
        messages: [
          {
            type: "text",
            text,
          },
        ],
      }),
    });

    return c.json({ userId, text }, 200);
  }
);
