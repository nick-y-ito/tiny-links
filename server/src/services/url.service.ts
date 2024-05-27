import { UrlRepository } from "@/repositories/url.repository";
import { generateRandomHash } from "@/utils/hash";
import { Url } from "@prisma/client";

export class UrlService {
	constructor(private urlRepository: UrlRepository) {}

	async createUrl(origUrl: Url["origUrl"]) {
		const hash = generateRandomHash();
		return this.urlRepository.createUrl(origUrl, hash);
	}

	async findUrls() {
		return this.urlRepository.findUrls();
	}

	async findUrl(hash: Url["hash"]) {
		return this.urlRepository.findUrl(hash);
	}

	async updateUrl(hash: Url["hash"], origUrl: Url["origUrl"]) {
		return this.urlRepository.updateUrl(hash, origUrl);
	}

	async deleteUrl(hash: Url["hash"]) {
		return this.urlRepository.deleteUrl(hash);
	}
}
