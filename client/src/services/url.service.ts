import { urlRepository } from "@/repositories/url.repository";
import { Url } from "@prisma/client";

export interface IUrlRepository {
	createUrl(origUrl: Url["origUrl"]): Promise<Url>;
	findUrls(): Promise<Url[]>;
	deleteUrl(hash: Url["hash"]): Promise<Url>;
}

export interface IUrlService {
	createUrl(origUrl: Url["origUrl"]): Promise<Url>;
	fetchUrls(): Promise<{ hash: Url["hash"]; origUrl: Url["origUrl"] }[]>;
	deleteUrl(hash: Url["hash"]): Promise<void>;
}

class UrlService implements IUrlService {
	constructor(private urlRepository: IUrlRepository) {}

	async createUrl(origUrl: Url["origUrl"]) {
		try {
			return await this.urlRepository.createUrl(origUrl);
		} catch (error) {
			throw new Error(`Failed to create url: ${error}`);
		}
	}

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

	async deleteUrl(hash: Url["hash"]) {
		try {
			await this.urlRepository.deleteUrl(hash);
		} catch (error) {
			throw new Error(`Failed to delete url: ${error}`);
		}
	}
}

export const urlService = new UrlService(urlRepository);
