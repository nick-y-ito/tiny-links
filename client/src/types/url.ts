import { Url } from "@prisma/client";

export type UrlClient = {
	origUrl: Url["origUrl"];
	hash: Url["hash"];
};