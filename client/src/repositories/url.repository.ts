import { urlApi } from "@/api/url.api";
import { Url } from "@prisma/client";

export interface IUrlApi {
	findUrls(): Promise<Url[]>;
}

export class UrlRepository {
	constructor(private urlApi: IUrlApi) {}

	async findUrls() {
		try {
			return await this.urlApi.findUrls();
		} catch (error) {
			throw new Error(`Error fetching urls: ${error}`);
		}
	}
}

export const urlRepository = new UrlRepository(urlApi);
