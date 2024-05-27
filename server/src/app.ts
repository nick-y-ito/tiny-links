import cors from "cors";
import express from "express";
import morgan from "morgan";

import { urlRouter } from "@/routes/url.routes";

export const app = express();

app.use(
	cors({
		origin: "http://localhost:3000",
	})
);
app.use(express.json());
app.use(morgan("combined"));

app.get("/", (_, res) => {
	res.send("Hello World!");
});

app.use("/urls", urlRouter);
