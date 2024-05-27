import { urlRepository } from "@/repositories/url.repository";
import { UrlClient } from "@/types/url";
import { Url } from "@prisma/client";

export interface IUrlRepository {
	createUrl(origUrl: Url["origUrl"]): Promise<Url>;
	findUrls(): Promise<Url[]>;
	findUrl(hash: Url["hash"]): Promise<Url>;
	updateUrl(hash: Url["hash"], newOrigUrl: Url["origUrl"]): Promise<Url>;
	deleteUrl(hash: Url["hash"]): Promise<Url>;
}

export interface IUrlService {
	createUrl(origUrl: Url["origUrl"]): Promise<UrlClient>;
	fetchUrls(): Promise<UrlClient[]>;
	fetchUrl(hash: Url["hash"]): Promise<UrlClient>;
	updateUrl(hash: Url["hash"], newOrigUrl: Url["origUrl"]): Promise<UrlClient>;
	deleteUrl(hash: Url["hash"]): Promise<UrlClient>;
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
			return this.transformUrls(rawUrls);
		} catch (error) {
			throw new Error(`Failed to get urls: ${error}`);
		}
	}

	async fetchUrl(hash: Url["hash"]) {
		try {
			const url = await this.urlRepository.findUrl(hash);
			return this.transformUrl(url);
		} catch (error) {
			throw new Error(`Failed to get url: ${error}`);
		}
	}

	async updateUrl(hash: Url["hash"], newOrigUrl: Url["origUrl"]) {
		try {
			const updatedUrl = await this.urlRepository.updateUrl(hash, newOrigUrl);
			return this.transformUrl(updatedUrl);
		} catch (error) {
			throw new Error(`Failed to update url: ${error}`);
		}
	}

	async deleteUrl(hash: Url["hash"]) {
		try {
			const deletedUrl = await this.urlRepository.deleteUrl(hash);
			return this.transformUrl(deletedUrl);
		} catch (error) {
			throw new Error(`Failed to delete url: ${error}`);
		}
	}

	transformUrl(url: Url): UrlClient {
		return {
			origUrl: url.origUrl,
			hash: url.hash,
		};
	}

	transformUrls(urls: Url[]): UrlClient[] {
		return urls.map((url) => this.transformUrl(url));
	}
}

export const urlService = new UrlService(urlRepository);
