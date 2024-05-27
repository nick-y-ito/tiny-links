import { urlService } from "@/services/url.service";
import { UrlClient } from "@/types/url";
import { useEffect, useState } from "react";

export const useUrlsPage = () => {
	const [urls, setUrls] = useState<UrlClient[]>([]);

	useEffect(() => {
		async function fetchUrls() {
			const urls = await urlService.fetchUrls();
			setUrls(urls);
		}
		fetchUrls();
	}, []);

	const deleteUrl = async (url: UrlClient) => {
		setUrls((urls) => urls.filter((u) => u.hash !== url.hash));
	};

	return { urls, setUrls, deleteUrl };
};
