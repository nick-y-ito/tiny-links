import { IUrlApi } from "@/repositories/url.repository";
import { Url } from "@prisma/client";

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!API_URL) {
	throw new Error("NEXT_PUBLIC_API_BASE_URL is not set.");
}

export class UrlApi implements IUrlApi {
	constructor() {}

	async findUrls(): Promise<Url[]> {
		const response = await fetch(`${API_URL}/urls`);
		return response.json() as Promise<Url[]>;
	}
}

export const urlApi = new UrlApi();
