import express from "express";

import { UrlController } from "@/controllers/url.controller";
import { prisma } from "@/lib/prisma";
import { UrlRepository } from "@/repositories/url.repository";
import { UrlService } from "@/services/url.service";

export const urlRouter = express.Router();

/* Dependency Injection */
const urlRepository = new UrlRepository(prisma);
const urlService = new UrlService(urlRepository);
const urlController = new UrlController(urlService);

urlRouter.get("/", urlController.findUrls.bind(urlController));
urlRouter.post("/", urlController.createUrl.bind(urlController));
urlRouter.get("/:urlId", urlController.findUrl.bind(urlController));
urlRouter.post("/:urlId", urlController.updateUrl.bind(urlController));
urlRouter.delete("", urlController.deleteUrl.bind(urlController));
