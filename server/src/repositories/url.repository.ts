import { PrismaClient, Url } from "@prisma/client";

const DEFAULT_USER_ID = process.env.DEFAULT_USER_ID || "";

if (!DEFAULT_USER_ID) {
	throw new Error("DEFAULT_USER_ID is not set");
}

export class UrlRepository {
	constructor(private prisma: PrismaClient) {}

	async createUrl(origUrl: Url["origUrl"], hash: Url["hash"]) {
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

	async findUrl(hash: Url["hash"]) {
		return this.prisma.url.findUnique({
			where: {
				hash,
			},
		});
	}

	async updateUrl(hash: Url["hash"], origUrl: Url["origUrl"]) {
		return this.prisma.url.update({
			where: {
				hash,
			},
			data: {
				origUrl,
			},
		});
	}

	async deleteUrl(hash: Url["hash"]) {
		return this.prisma.url.delete({
			where: {
				hash,
			},
		});
	}
}
