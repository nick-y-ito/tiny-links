import { IUrlApi } from "@/repositories/url.repository";
import { Url } from "@prisma/client";

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!API_URL) {
	throw new Error("NEXT_PUBLIC_API_BASE_URL is not set.");
}

export class UrlApi implements IUrlApi {
	constructor() {}

	async createUrl(origUrl: Url["origUrl"]): Promise<Url> {
		const response = await fetch(`${API_URL}/urls`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ origUrl }),
		});
		if (!response.ok) {
			throw new Error(`Failed to create URL: ${response.statusText}`);
		}
		return response.json() as Promise<Url>;
	}

	async findUrls(): Promise<Url[]> {
		const response = await fetch(`${API_URL}/urls`);
		if (!response.ok) {
			throw new Error(`Failed to fetch URLs: ${response.statusText}`);
		}
		return response.json() as Promise<Url[]>;
	}

	async deleteUrl(hash: Url["hash"]): Promise<Url> {
		const response = await fetch(`${API_URL}/urls/${hash}`, {
			method: "DELETE",
		});
		if (!response.ok) {
			throw new Error(`Failed to delete URL: ${response.statusText}`);
		}
		return response.json() as Promise<Url>;
	}
}

export const urlApi = new UrlApi();
