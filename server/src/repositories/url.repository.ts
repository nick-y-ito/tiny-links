import { PrismaClient } from "@prisma/client";

export class UrlRepository {
	constructor(private prisma: PrismaClient) {}
}
