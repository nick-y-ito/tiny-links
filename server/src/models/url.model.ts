import { UrlString } from "@/types/url.types";

export interface IUrl {
	id: number;
	origUrl: UrlString;
	hash: string;
}

export class Url implements IUrl {
	constructor(
		public id: number,
		public origUrl: UrlString,
		public hash: string
	) {}
}
