import { IUrl } from "@/models/url.model";
import { PrismaClient } from "@prisma/client";

const DEFAULT_USER_ID = process.env.DEFAULT_USER_ID || "";

if (!DEFAULT_USER_ID) {
	throw new Error("DEFAULT_USER_ID is not set");
}

export class UrlRepository {
	constructor(private prisma: PrismaClient) {}

	async createUrl(origUrl: IUrl["origUrl"], hash: IUrl["hash"]) {
		return this.prisma.url.create({
			data: {
				userId: DEFAULT_USER_ID,
				origUrl,
				hash,
			},
		});
	}

	async findUrls() {
		return this.prisma.url.findMany();
	}

	async findUrl(hash: IUrl["hash"]) {
		return this.prisma.url.findUnique({
			where: {
				hash,
			},
		});
	}

	async updateUrl(hash: IUrl["hash"], origUrl: IUrl["origUrl"]) {
		return this.prisma.url.update({
			where: {
				hash,
			},
			data: {
				origUrl,
			},
		});
	}

	async deleteUrl(hash: IUrl["hash"]) {
		return this.prisma.url.delete({
			where: {
				hash,
			},
		});
	}
}
