import { Request, Response } from "express";

import { UrlService } from "@/services/url.service";

export class UrlController {
	constructor(private urlService: UrlService) {}

	async createUrl(req: Request, res: Response) {}

	async findUrls(req: Request, res: Response) {}

	async findUrl(req: Request, res: Response) {}

  async updateUrl(req: Request, res: Response) {}

	async deleteUrl(req: Request, res: Response) {}
}
