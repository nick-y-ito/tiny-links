import cors from "cors";
import express from "express";
import morgan from "morgan";

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

