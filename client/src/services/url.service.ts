import { urlRepository } from "@/repositories/url.repository";
import { Url } from "@prisma/client";

export interface IUrlRepository {
	findUrls(): Promise<Url[]>;
}

export interface IUrlService {
	fetchUrls(): Promise<{ hash: Url["hash"]; origUrl: Url["origUrl"] }[]>;
}

class UrlService implements IUrlService {
	constructor(private urlRepository: IUrlRepository) {}

	async fetchUrls() {
		try {
			const rawUrls = await this.urlRepository.findUrls();
			return rawUrls.map((url) => {
				return { hash: url.hash, origUrl: url.origUrl };
			});
		} catch (error) {
			throw new Error(`Failed to get urls: ${error}`);
		}
	}
}

export const urlService = new UrlService(urlRepository);
