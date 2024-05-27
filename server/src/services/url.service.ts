import { IUrl } from "@/models/url.model";
import { UrlRepository } from "@/repositories/url.repository";
import { generateRandomHash } from "@/utils/hash";

export class UrlService {
	constructor(private urlRepository: UrlRepository) {}

	async createUrl(origUrl: IUrl["origUrl"]) {
		const hash = generateRandomHash();
		return this.urlRepository.createUrl(origUrl, hash);
	}

	async findUrls() {
		return this.urlRepository.findUrls();
	}

	async findUrl(hash: IUrl["hash"]) {
		return this.urlRepository.findUrl(hash);
	}

	async updateUrl(hash: IUrl["hash"], origUrl: IUrl["origUrl"]) {
		return this.urlRepository.updateUrl(hash, origUrl);
	}

	async deleteUrl(hash: IUrl["hash"]) {
		return this.urlRepository.deleteUrl(hash);
	}
}
