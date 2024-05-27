import { urlApi } from "@/api/url.api";
import { IUrlRepository } from "@/services/url.service";
import { Url } from "@prisma/client";

export interface IUrlApi {
	createUrl(origUrl: Url["origUrl"]): Promise<Url>;
	findUrls(): Promise<Url[]>;
	deleteUrl(hash: Url["hash"]): Promise<Url>;
}

export class UrlRepository implements IUrlRepository {
	constructor(private urlApi: IUrlApi) {}

	async createUrl(origUrl: Url["origUrl"]) {
		try {
			return await this.urlApi.createUrl(origUrl);
		} catch (error) {
			throw new Error(`Error creating url: ${error}`);
		}
	}

	async findUrls() {
		try {
			return await this.urlApi.findUrls();
		} catch (error) {
			throw new Error(`Error fetching urls: ${error}`);
		}
	}

	async deleteUrl(hash: Url["hash"]) {
		try {
			return await this.urlApi.deleteUrl(hash);
		} catch (error) {
			throw new Error(`Error deleting url: ${error}`);
		}
	}
}

export const urlRepository = new UrlRepository(urlApi);
