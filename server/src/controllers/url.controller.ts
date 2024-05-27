import { Request, Response } from "express";

import { UrlService } from "@/services/url.service";

export class UrlController {
	constructor(private urlService: UrlService) {}

	async createUrl(req: Request, res: Response) {
		const { origUrl } = req.body;
		const newUrl = await this.urlService.createUrl(origUrl);
		return res.status(201).json(newUrl);
	}

	async findUrls(_: Request, res: Response) {
		const urls = await this.urlService.findUrls();
		return res.json(urls);
	}

	async findUrl(req: Request, res: Response) {
		const { hash } = req.params;
		if (!hash) {
			return res.status(400).json({ message: "hash is required" });
		}
		const url = await this.urlService.findUrl(hash);
		return res.status(url ? 200 : 404).json(url);
	}

	async updateUrl(req: Request, res: Response) {
		const { hash } = req.params;
		const { newOrigUrl } = req.body;
		if (!hash) {
			return res.status(400).json({ message: "hash is required" });
		}
		if (!newOrigUrl) {
			return res.status(400).json({ message: "newOrigUrl is required" });
		}
		const updatedUrl = await this.urlService.updateUrl(hash, newOrigUrl);
		return res.status(updatedUrl ? 200 : 404).json(updatedUrl);
	}

	async deleteUrl(req: Request, res: Response) {
		const { hash } = req.params;
		if (!hash) {
			return res.status(400).json({ message: "hash is required" });
		}
		console.log("controller", { hash });
		const deletedUrl = await this.urlService.deleteUrl(hash);
		return res.status(deletedUrl ? 200 : 404).json(deletedUrl);
	}
}
